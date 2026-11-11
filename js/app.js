/**
 * Aqeelah's Beauty Empire (ABE) | Interactive Workspace Controller (Aqeelah & Rio)
 */

(function () {
  const state = {
    roleView: 'aqeelah', // 'aqeelah' or 'tech' (Rio)
    activeTab: 'focus',  // 'focus', 'checklist', 'growth', 'scripts'
    browsingIndex: null  // null means automatically show the Current Focus item; number means browsing Previous/Upcoming items
  };

  // Check URL query param (?view=tech or ?view=rio or ?view=aqeelah)
  const params = new URLSearchParams(window.location.search);
  if (params.get('view') === 'tech' || params.get('view') === 'rio') {
    state.roleView = 'tech';
  }

  async function init() {
    await window.ABESync.loadAllData();
    bindTopControls();
    renderAll();
  }

  function bindTopControls() {
    document.querySelectorAll('[data-role-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.roleView = btn.getAttribute('data-role-btn');
        state.browsingIndex = null;
        renderAll();
      });
    });

    document.querySelectorAll('[data-tab-btn]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeTab = btn.getAttribute('data-tab-btn');
        renderAll();
      });
    });
  }

  function getActiveFocusIndex(role) {
    const items = window.ABESync.roadmap.items;
    const firstIncomplete = items.findIndex((item) => !item[role].completed);
    return firstIncomplete === -1 ? items.length - 1 : firstIncomplete;
  }

  function getLastCompletedItem(role) {
    const items = window.ABESync.roadmap.items;
    const completedItems = items.filter((item) => item[role].completed);
    if (completedItems.length === 0) return null;
    return completedItems[completedItems.length - 1];
  }

  function getStageById(stageId) {
    return window.ABESync.roadmap.stages.find((s) => s.id === stageId) || { title: '' };
  }

  function renderAll() {
    renderRoleButtons();
    renderTabButtons();
    renderHeroAndProgress();
    renderCurrentFocusView();
    renderFullChecklistView();
    renderGrowthView();
    renderScriptsView();
  }

  function renderRoleButtons() {
    document.querySelectorAll('[data-role-btn]').forEach((btn) => {
      const isMatch = btn.getAttribute('data-role-btn') === state.roleView;
      btn.classList.toggle('active', isMatch);
    });
  }

  function renderTabButtons() {
    document.querySelectorAll('[data-tab-btn]').forEach((btn) => {
      const tab = btn.getAttribute('data-tab-btn');
      btn.classList.toggle('active', tab === state.activeTab);
    });

    document.querySelectorAll('[data-tab-panel]').forEach((panel) => {
      const panelName = panel.getAttribute('data-tab-panel');
      panel.classList.toggle('hidden', panelName !== state.activeTab);
    });
  }

  function renderHeroAndProgress() {
    const prog = window.ABESync.calculateProgress();
    const greetingTitle = document.getElementById('hero-title');
    const greetingDesc = document.getElementById('hero-desc');
    const syncText = document.getElementById('sync-status-text');

    if (state.roleView === 'aqeelah') {
      greetingTitle.textContent = "Aqeelah's Workspace";
      greetingDesc.textContent =
        'No deadlines and no rush. Focus only on your Current Focus item below, tick it off when you finish, and watch your progress grow alongside Rio.';
    } else {
      greetingTitle.textContent = "Rio's Workspace";
      greetingDesc.textContent =
        'Your current engineering and JHB focus is highlighted first, with Aqeelah’s CPT progress tracked right underneath.';
    }

    syncText.textContent = window.ABESync.syncMode;

    // Combined Progress
    document.getElementById('prog-combined-stats').textContent =
      `${prog.combined.percent}% (${prog.combined.done}/${prog.combined.total})`;
    document.getElementById('prog-combined-fill').style.width = `${prog.combined.percent}%`;

    // Aqeelah Progress
    document.getElementById('prog-aqeelah-stats').textContent =
      `${prog.aqeelah.percent}% (${prog.aqeelah.done}/${prog.aqeelah.total} items)`;
    document.getElementById('prog-aqeelah-fill').style.width = `${prog.aqeelah.percent}%`;

    // Rio Progress
    document.getElementById('prog-tech-stats').textContent =
      `${prog.tech.percent}% (${prog.tech.done}/${prog.tech.total} items)`;
    document.getElementById('prog-tech-fill').style.width = `${prog.tech.percent}%`;
  }

  function renderCurrentFocusView() {
    const items = window.ABESync.roadmap.items;
    const primaryRole = state.roleView;
    const secondaryRole = primaryRole === 'aqeelah' ? 'tech' : 'aqeelah';

    const autoPrimaryIdx = getActiveFocusIndex(primaryRole);
    const displayIdx = state.browsingIndex !== null ? state.browsingIndex : autoPrimaryIdx;
    const currentItem = items[displayIdx];
    const stage = getStageById(currentItem.stageId);

    // 1. Recently Completed Banner
    const recentContainer = document.getElementById('recent-completed-banner');
    const lastDone = getLastCompletedItem(primaryRole);
    if (lastDone) {
      recentContainer.classList.remove('hidden');
      recentContainer.innerHTML = `
        <div class="recent-banner-left">
          <span class="recent-pill">Recently Completed</span>
          <span><strong>Item ${lastDone.order}:</strong> ${escapeHtml(lastDone[primaryRole].title)}</span>
        </div>
        <span style="color: var(--success-sage); font-weight: 700;">Well done! ✓</span>
      `;
    } else {
      recentContainer.classList.add('hidden');
    }

    // 2. Render Primary & Partner Cards
    const primaryItem = state.browsingIndex !== null ? currentItem : items[autoPrimaryIdx];
    const secondaryAutoIdx = getActiveFocusIndex(secondaryRole);
    const partnerItem = state.browsingIndex !== null ? currentItem : items[secondaryAutoIdx];

    const focusGrid = document.getElementById('focus-cards-container');
    focusGrid.innerHTML =
      buildFocusCardHTML(primaryItem, primaryRole, true, state.browsingIndex !== null) +
      buildFocusCardHTML(partnerItem, secondaryRole, false, state.browsingIndex !== null);

    // Bind checkboxes & notes inputs inside Focus Cards
    focusGrid.querySelectorAll('[data-toggle-item]').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const itemId = btn.getAttribute('data-toggle-item');
        const role = btn.getAttribute('data-role');
        const itemObj = items.find((i) => i.id === itemId);
        const newCompleted = !itemObj[role].completed;

        await window.ABESync.updateItemState(itemId, role, { completed: newCompleted });
        if (newCompleted && state.browsingIndex === null) {
          state.browsingIndex = null;
        }
        renderAll();
      });
    });

    focusGrid.querySelectorAll('[data-note-input]').forEach((input) => {
      input.addEventListener('change', async () => {
        const itemId = input.getAttribute('data-note-input');
        const role = input.getAttribute('data-role');
        await window.ABESync.updateItemState(itemId, role, { notes: input.value });
        renderHeroAndProgress();
      });
    });

    // 3. Slider Controls (Previous Items / Upcoming Items)
    const sliderLabel = document.getElementById('slider-position-label');
    const sliderSub = document.getElementById('slider-position-sub');
    const prevBtn = document.getElementById('slider-prev-btn');
    const nextBtn = document.getElementById('slider-next-btn');
    const resetBtn = document.getElementById('slider-reset-btn');

    if (state.browsingIndex === null) {
      sliderLabel.textContent = `Showing Current Focus (Item ${primaryItem.order} of ${items.length})`;
      sliderSub.textContent = `${stage.title} • Use the buttons to peek at previous or upcoming items.`;
      resetBtn.classList.add('hidden');
    } else {
      const relation =
        displayIdx < autoPrimaryIdx
          ? 'Peeking at a Previous Item'
          : displayIdx > autoPrimaryIdx
          ? 'Peeking at an Upcoming Item'
          : 'Viewing Current Focus Item';
      sliderLabel.textContent = `${relation} (Item ${currentItem.order} of ${items.length})`;
      sliderSub.textContent = `${stage.title}: ${currentItem.title}`;
      resetBtn.classList.remove('hidden');
    }

    prevBtn.disabled = displayIdx <= 0;
    nextBtn.disabled = displayIdx >= items.length - 1;

    prevBtn.onclick = () => {
      const base = state.browsingIndex !== null ? state.browsingIndex : autoPrimaryIdx;
      if (base > 0) {
        state.browsingIndex = base - 1;
        renderCurrentFocusView();
      }
    };

    nextBtn.onclick = () => {
      const base = state.browsingIndex !== null ? state.browsingIndex : autoPrimaryIdx;
      if (base < items.length - 1) {
        state.browsingIndex = base + 1;
        renderCurrentFocusView();
      }
    };

    resetBtn.onclick = () => {
      state.browsingIndex = null;
      renderCurrentFocusView();
    };
  }

  function buildFocusCardHTML(item, role, isPrimary, isBrowsing) {
    const roleData = item[role];
    const stage = getStageById(item.stageId);
    const isAqeelah = role === 'aqeelah';

    const badgeLabel = isAqeelah
      ? "Aqeelah's Current Focus (CPT)"
      : "Rio's Current Focus (JHB)";

    const browsingPrefix = isBrowsing ? `Item ${item.order} Preview • ` : '';

    const growthBlock =
      isAqeelah && roleData.growthSkill
        ? `
      <div class="growth-callout">
        <div class="growth-callout-header">
          <span>✨ Personal Growth Connection: ${escapeHtml(roleData.growthSkill)}</span>
        </div>
        <p>${escapeHtml(roleData.growthWhy)}</p>
      </div>
    `
        : '';

    const btnText = roleData.completed
      ? '✓ Completed (Click to Undo)'
      : 'Mark as Completed';

    return `
      <div class="focus-card ${isPrimary ? 'primary-highlight' : ''}">
        <div class="focus-card-header">
          <span class="owner-badge ${isAqeelah ? 'aqeelah' : 'tech'}">
            ${browsingPrefix}${badgeLabel}
          </span>
          <span class="stage-pill">Item ${item.order} of ${window.ABESync.roadmap.items.length} • ${escapeHtml(stage.title)}</span>
        </div>

        <h2 class="focus-title">${escapeHtml(roleData.title)}</h2>
        <p class="focus-desc">${escapeHtml(roleData.description)}</p>

        <div class="deliverable-box">
          <strong>What Done Looks Like:</strong> ${escapeHtml(roleData.deliverable)}
        </div>

        ${growthBlock}

        <div class="focus-actions">
          <button
            type="button"
            class="check-btn ${roleData.completed ? 'completed' : ''}"
            data-toggle-item="${item.id}"
            data-role="${role}"
          >
            ${btnText}
          </button>

          <div class="notes-input-wrap">
            <input
              type="text"
              class="notes-input"
              placeholder="Add a link or quick note for this item (saves automatically)..."
              value="${escapeAttr(roleData.notes || '')}"
              data-note-input="${item.id}"
              data-role="${role}"
            />
          </div>
        </div>
      </div>
    `;
  }

  function renderFullChecklistView() {
    const container = document.getElementById('full-checklist-container');
    const { stages, items } = window.ABESync.roadmap;
    const isAqeelahFirst = state.roleView === 'aqeelah';

    let html = '';
    stages.forEach((stage) => {
      const stageItems = items.filter((i) => i.stageId === stage.id);
      html += `
        <div class="stage-block">
          <div class="stage-header">
            <h2>${escapeHtml(stage.title)}</h2>
            <p>${escapeHtml(stage.subtitle)}</p>
          </div>
          ${stageItems
            .map((item) => {
              const firstRole = isAqeelahFirst ? 'aqeelah' : 'tech';
              const secondRole = isAqeelahFirst ? 'tech' : 'aqeelah';
              return `
                <div class="checklist-item">
                  ${buildMiniChecklistCol(item, firstRole, true)}
                  ${buildMiniChecklistCol(item, secondRole, false)}
                </div>
              `;
            })
            .join('')}
        </div>
      `;
    });

    container.innerHTML = html;

    container.querySelectorAll('[data-mini-check]').forEach((checkbox) => {
      checkbox.addEventListener('change', async () => {
        const itemId = checkbox.getAttribute('data-mini-check');
        const role = checkbox.getAttribute('data-role');
        await window.ABESync.updateItemState(itemId, role, {
          completed: checkbox.checked
        });
        renderAll();
      });
    });
  }

  function buildMiniChecklistCol(item, role, isHighlighted) {
    const data = item[role];
    const roleLabel = role === 'aqeelah' ? 'Aqeelah (CPT)' : 'Rio (JHB)';
    return `
      <div class="checklist-col ${isHighlighted ? 'highlight' : ''} ${data.completed ? 'done' : ''}">
        <div class="mini-check-row">
          <input
            type="checkbox"
            ${data.completed ? 'checked' : ''}
            data-mini-check="${item.id}"
            data-role="${role}"
          />
          <div>
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: var(--rose-dark); margin-bottom: 0.15rem;">
              Item ${item.order} • ${roleLabel}
            </div>
            <div style="font-weight: 700; font-size: 0.96rem; margin-bottom: 0.25rem; ${data.completed ? 'text-decoration: line-through; opacity: 0.75;' : ''}">
              ${escapeHtml(data.title)}
            </div>
            <p style="font-size: 0.84rem; color: var(--text-muted);">${escapeHtml(data.description)}</p>
          </div>
        </div>
      </div>
    `;
  }

  function renderGrowthView() {
    const container = document.getElementById('growth-cards-container');
    const growth = window.ABESync.growth;

    document.getElementById('growth-intro-text').textContent = growth.intro;

    container.innerHTML = growth.levels
      .map(
        (lvl) => `
      <div class="info-card">
        <div>
          <span class="info-card-badge">${escapeHtml(lvl.level)} • ${escapeHtml(lvl.badge)}</span>
          <h3>${escapeHtml(lvl.skillBuilt)}</h3>
          <p style="font-size: 0.84rem; font-weight: 700; color: var(--rose-dark); margin-bottom: 0.65rem;">
            When you do: ${escapeHtml(lvl.activity)} (Items ${lvl.linkedItems.join(', ')})
          </p>
          <p style="font-size: 0.9rem; color: var(--text-muted);">
            ${escapeHtml(lvl.explanation)}
          </p>
        </div>
      </div>
    `
      )
      .join('');
  }

  function renderScriptsView() {
    const guidesContainer = document.getElementById('research-guides-container');
    const scriptsContainer = document.getElementById('copy-scripts-container');
    const { researchGuides, scripts } = window.ABESync.scripts;

    guidesContainer.innerHTML = researchGuides
      .map(
        (g) => `
      <div class="info-card">
        <div>
          <span class="info-card-badge">Step-by-Step Research Tutorial</span>
          <h3>${escapeHtml(g.title)}</h3>
          <p style="font-size: 0.86rem; color: var(--text-muted); margin-bottom: 0.85rem;">
            ${escapeHtml(g.subtitle)}
          </p>
          <ol style="padding-left: 1.2rem; font-size: 0.88rem; color: var(--text-main); display: grid; gap: 0.5rem;">
            ${g.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}
          </ol>
        </div>
      </div>
    `
      )
      .join('');

    scriptsContainer.innerHTML = scripts
      .map(
        (sc) => `
      <div class="info-card">
        <div>
          <span class="info-card-badge">${escapeHtml(sc.stage)}</span>
          <h3>${escapeHtml(sc.title)}</h3>
          <p style="font-size: 0.84rem; color: var(--text-muted);">
            <strong>Why this works:</strong> ${escapeHtml(sc.whyItWorks)}
          </p>
          <div class="script-box" id="script-text-${sc.id}">${escapeHtml(sc.text)}</div>
        </div>
        <button type="button" class="copy-btn" data-copy-script="${sc.id}">
          Copy Script to Clipboard
        </button>
      </div>
    `
      )
      .join('');

    scriptsContainer.querySelectorAll('[data-copy-script]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-copy-script');
        const scriptObj = scripts.find((s) => s.id === id);
        if (!scriptObj) return;

        navigator.clipboard.writeText(scriptObj.text).then(() => {
          const original = btn.textContent;
          btn.textContent = 'Copied! Ready to Paste ✓';
          setTimeout(() => {
            btn.textContent = original;
          }, 2000);
        });
      });
    });
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, '&#39;');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
