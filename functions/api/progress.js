/**
 * Cloudflare Pages Function | /api/progress
 *
 * When you push `founder-hub` to GitHub and connect it to Cloudflare Pages:
 * - If you bind a free KV namespace named `ABE_PROGRESS` in Cloudflare Pages settings,
 *   this endpoint automatically stores and syncs checkbox ticks and notes in real time
 *   across both your phone/laptop in JHB and Aqeelah's phone/laptop in CPT.
 * - Even before you bind KV, the front-end automatically saves everything to localStorage.
 */

const KV_KEY = 'founder_progress_overrides_v1';

export async function onRequestGet(context) {
  const kv = context.env && context.env.ABE_PROGRESS;
  if (!kv) {
    return new Response(
      JSON.stringify({ overrides: null, mode: 'Browser Storage Active' }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  const saved = await kv.get(KV_KEY, { type: 'json' });
  return new Response(
    JSON.stringify({
      overrides: saved || {},
      mode: 'Cloudflare Live Sync Active'
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}

export async function onRequestPost(context) {
  const kv = context.env && context.env.ABE_PROGRESS;
  const body = await context.request.json();

  if (kv && body && body.overrides) {
    await kv.put(KV_KEY, JSON.stringify(body.overrides));
    return new Response(
      JSON.stringify({ ok: true, mode: 'Saved to Cloudflare KV' }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ ok: true, mode: 'Saved Locally' }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
