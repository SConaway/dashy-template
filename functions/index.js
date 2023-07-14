export async function onRequest(context) {
    // return new Response(
    //     (await fetch(context.request.url + '/index.html')).body,
    // );
    try {
        const f = await fetch(context.request.url + '/index.html');

        if (f.status === 200) {
            const body = await f.text();

            return new Response(body, {
                headers: {
                    'Content-Type': 'text/html',
                },
            });
        }
    } catch (e) {
        console.error(e);
        return new Response(e.message);
    }
}
