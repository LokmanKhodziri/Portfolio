export default async function handler(
  request: { method?: string; headers: { cookie?: string } },
  response: {
    setHeader: (name: string, value: string) => void;
    status: (code: number) => { json: (body: unknown) => void };
  }
) {
  if (request.method && request.method !== "GET" && request.method !== "HEAD") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const cookie = request.headers.cookie ?? "";
  const alreadyCounted = /(?:^|;\s*)lk_visit=1(?:;|$)/.test(cookie);
  const action = alreadyCounted ? "get" : "hit";
  const namespace = "lokmankhodziri.com";
  const key = "visits";

  try {
    const remote = await fetch(
      `https://abacus.jasoncameron.dev/${action}/${namespace}/${key}`
    );
    const payload = (await remote.json()) as { value?: number };
    const count = Number(payload.value);

    if (!Number.isFinite(count)) {
      response.status(502).json({ error: "Invalid visit count" });
      return;
    }

    if (!alreadyCounted) {
      response.setHeader(
        "Set-Cookie",
        "lk_visit=1; Path=/; Max-Age=86400; SameSite=Lax; HttpOnly"
      );
    }

    response.setHeader("Cache-Control", "no-store");
    response.status(200).json({ count });
  } catch {
    response.status(503).json({ error: "Visit count unavailable" });
  }
}
