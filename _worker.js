const KV_KEY = 'founder_progress_overrides_v1';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle /api/progress
    if (url.pathname === '/api/progress') {
      const kv = env && env.ABE_PROGRESS;

      if (request.method === 'GET') {
        if (!kv) {
          return new Response(
            JSON.stringify({ overrides: null, mode: 'Saved in Browser' }),
            { headers: { 'Content-Type': 'application/json' } }
          );
        }
        const saved = await kv.get(KV_KEY, { type: 'json' });
        return new Response(
          JSON.stringify({
            overrides: saved || {},
            mode: 'Live Sync Active'
          }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      }

      if (request.method === 'POST') {
        const body = await request.json().catch(() => null);
        if (kv && body && body.overrides) {
          await kv.put(KV_KEY, JSON.stringify(body.overrides));
          return new Response(
            JSON.stringify({ ok: true, mode: 'Saved' }),
            { headers: { 'Content-Type': 'application/json' } }
          );
        }
        return new Response(
          JSON.stringify({ ok: true, mode: 'Saved in Browser' }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Serve static files (index.html, concept.html, css/*, js/*, data/*)
    if (env && env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not Found', { status: 404 });
  }
};
