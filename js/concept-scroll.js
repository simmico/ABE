/**
 * Aqeelah's Beauty Empire (ABE) | Scroll-Driven Nail Studio SVG Engine
 *
 * Scrubs multi-layered SVG elements directly in response to window.scrollY:
 * 1. Nail polish bottle & brush lifting out with a glossy dusty-rose polish drop dripping down.
 * 2. Brush sweeping down the nail bed as the dusty-rose base coat fills the nail via SVG clipPath.
 * 3. Almond tip extension & champagne-gold French tip + micro-chrome art drawing onto the nail.
 * 4. Top-coat gloss reflection sweeping across the finished manicure + 4-digit PIN & camera flash.
 * 5. Certified Pro Rose-Gold Wax Seal & opening luxury Beauty Box ribbon at the finale.
 */

(function () {
  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function mapRange(val, inMin, inMax, outMin, outMax) {
    const t = clamp((val - inMin) / (inMax - inMin), 0, 1);
    return outMin + t * (outMax - outMin);
  }

  function initConceptScroll() {
    const brushGroup = document.getElementById('svg-brush-group');
    const polishDrop = document.getElementById('svg-polish-drop');
    const baseCoatRect = document.getElementById('clip-base-coat-rect');
    const frenchTipPath = document.getElementById('svg-french-tip');
    const chromeGemGroup = document.getElementById('svg-chrome-gems');
    const glossStreak = document.getElementById('svg-gloss-streak');
    const pinBadgeGroup = document.getElementById('svg-pin-badge');
    const proSealGroup = document.getElementById('svg-pro-seal');
    const beautyBoxLid = document.getElementById('svg-box-lid');
    const stagePill = document.getElementById('studio-stage-pill');
    const stageCaption = document.getElementById('studio-stage-caption');
    const progressMiniFill = document.getElementById('scroll-progress-mini-fill');

    const chapters = Array.from(document.querySelectorAll('.story-chapter'));
    const dripWaves = Array.from(document.querySelectorAll('.drip-wave-path'));

    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const p = clamp(scrollTop / maxScroll, 0, 1);

      if (progressMiniFill) {
        progressMiniFill.style.width = `${Math.round(p * 100)}%`;
      }

      // 1. Brush movement & Polish Drop Dripping (0.00 -> 0.28)
      if (brushGroup && polishDrop) {
        // Brush dips down toward the nail and sweeps from y=-25 to y=55, then lifts away after 0.45
        let brushY = 0;
        let brushX = 0;
        let brushRot = -12;

        if (p < 0.18) {
          brushY = mapRange(p, 0, 0.18, -28, 8);
          brushX = mapRange(p, 0, 0.18, -14, 0);
          brushRot = mapRange(p, 0, 0.18, -18, -6);
        } else if (p < 0.45) {
          brushY = mapRange(p, 0.18, 0.45, 8, 72);
          brushX = Math.sin(p * 35) * 6;
          brushRot = mapRange(p, 0.18, 0.45, -6, 8);
        } else {
          brushY = mapRange(p, 0.45, 0.65, 72, -65);
          brushX = mapRange(p, 0.45, 0.65, 0, 48);
          brushRot = 15;
        }
        brushGroup.setAttribute(
          'transform',
          `translate(${brushX.toFixed(1)}, ${brushY.toFixed(1)}) rotate(${brushRot.toFixed(1)}, 160, 95)`
        );

        // Polish drop stretches and drips from brush tip onto nail between p=0.02 and p=0.22
        const dropProgress = clamp((p - 0.02) / 0.18, 0, 1);
        const dropY = mapRange(dropProgress, 0, 1, 0, 38);
        const dropScale = dropProgress < 0.85 ? mapRange(dropProgress, 0, 0.85, 0.4, 1.25) : mapRange(dropProgress, 0.85, 1, 1.25, 0);
        polishDrop.setAttribute(
          'transform',
          `translate(0, ${dropY.toFixed(1)}) scale(1, ${dropScale.toFixed(2)})`
        );
        polishDrop.style.opacity = dropProgress > 0.96 ? '0' : '1';
      }

      // 2. Dusty-Rose Base Coat Painting Down the Nail (0.12 -> 0.44)
      if (baseCoatRect) {
        const coatHeight = mapRange(p, 0.12, 0.44, 0, 165);
        baseCoatRect.setAttribute('height', coatHeight.toFixed(1));
      }

      // 3. Champagne-Gold French Tip & Chrome Gems (0.38 -> 0.62)
      if (frenchTipPath) {
        const tipDash = mapRange(p, 0.38, 0.58, 220, 0);
        frenchTipPath.style.strokeDashoffset = tipDash.toFixed(1);
        frenchTipPath.style.fillOpacity = mapRange(p, 0.46, 0.6, 0, 1).toFixed(2);
      }

      if (chromeGemGroup) {
        const gemScale = mapRange(p, 0.50, 0.65, 0, 1);
        chromeGemGroup.style.opacity = gemScale.toFixed(2);
        chromeGemGroup.setAttribute(
          'transform',
          `translate(160, 136) scale(${gemScale.toFixed(2)}) translate(-160, -136)`
        );
      }

      // 4. Gloss Top-Coat Shine Sweep & 4-Digit PIN Lock (0.58 -> 0.80)
      if (glossStreak) {
        const glossX = mapRange(p, 0.58, 0.78, -90, 90);
        const glossOpacity = p > 0.56 && p < 0.82 ? 0.75 : 0;
        glossStreak.setAttribute('transform', `translate(${glossX.toFixed(1)}, 0)`);
        glossStreak.style.opacity = String(glossOpacity);
      }

      if (pinBadgeGroup) {
        const pinOpacity =
          p >= 0.52 && p <= 0.82
            ? mapRange(p, 0.52, 0.60, 0, 1)
            : p > 0.82
            ? mapRange(p, 0.82, 0.88, 1, 0)
            : 0;
        pinBadgeGroup.style.opacity = pinOpacity.toFixed(2);
      }

      // 5. Certified Pro Seal & Beauty Box Lid (0.76 -> 1.00)
      if (proSealGroup) {
        const sealScale = mapRange(p, 0.76, 0.90, 0.5, 1);
        const sealOpacity = mapRange(p, 0.76, 0.88, 0, 1);
        proSealGroup.style.opacity = sealOpacity.toFixed(2);
        proSealGroup.setAttribute(
          'transform',
          `translate(238, 275) scale(${sealScale.toFixed(2)}) translate(-238, -275)`
        );
      }

      if (beautyBoxLid) {
        const lidLift = mapRange(p, 0.84, 0.98, 0, -18);
        const lidTilt = mapRange(p, 0.84, 0.98, 0, -8);
        beautyBoxLid.setAttribute(
          'transform',
          `translate(0, ${lidLift.toFixed(1)}) rotate(${lidTilt.toFixed(1)}, 90, 310)`
        );
      }

      // Update Studio Stage Caption based on scroll progress
      if (stagePill && stageCaption) {
        if (p < 0.18) {
          stagePill.textContent = 'Stage 1 • The Polish Drop';
          stageCaption.textContent =
            'The Visual Contract: turning every nail photo into a guaranteed booking.';
        } else if (p < 0.42) {
          stagePill.textContent = 'Stage 2 • Dusty-Rose Base Coat';
          stageCaption.textContent =
            'Every portfolio photo has its exact price and duration locked in before booking.';
        } else if (p < 0.64) {
          stagePill.textContent = 'Stage 3 • French Tip & Modifiers';
          stageCaption.textContent =
            'Adding Almond Length and Champagne French art inside a Verified Salon.';
        } else if (p < 0.82) {
          stagePill.textContent = 'Stage 4 • 4-Digit PIN & Top-Coat Lock';
          stageCaption.textContent =
            'Client PIN starts the timer; a live camera photo locks in the finished shine.';
        } else {
          stagePill.textContent = 'Stage 5 • Certified Pro & Empire';
          stageCaption.textContent =
            'Aqeelah’s Certified Pro seal, the Closed-Loop Wallet, and the Beauty Box.';
        }
      }

      // Highlight active story chapter & stretch polish drip waves on each card
      chapters.forEach((ch, idx) => {
        const rect = ch.getBoundingClientRect();
        const isActive = rect.top < window.innerHeight * 0.55 && rect.bottom > 160;
        ch.classList.toggle('active-chapter', isActive);

        const wave = dripWaves[idx];
        if (wave) {
          const localP = clamp(
            (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
            0,
            1
          );
          const stretch = 1 + localP * 0.65;
          wave.setAttribute('transform', `scale(1, ${stretch.toFixed(2)})`);
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', initConceptScroll);
})();
