export async function onRequest() {
    try {
        const upstream = await fetch("http://samura.thomisacheeseball.org/samurai/ws/jp/news");

        if (!upstream.ok) {
            return new Response("Upstream fetch failed", { status: 502 });
        }

        const data = await upstream.json();

        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "public, max-age=300"
            }
        });
    } catch (error) {
        return new Response("Worker error: " + error.message, { status: 500 });
    }
}
