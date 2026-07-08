export async function onRequest() {
  try {
    const res = await fetch('http://samura.thomisacheeseball.org/samurai/ws/jp/news');

    if (!res.ok) {
      return new Response("Upstream fetch failed", { status: 500 });
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });

  } catch (err) {
    return new Response("Worker error: " + err.message, {
      status: 500
    });
  }
}
