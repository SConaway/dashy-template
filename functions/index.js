import html from '../dist/index.html';

export async function onRequest(context) {
    // console.log(html);
    return new Response(html, {
        headers: {
            'Content-Type': 'text/html',
        },
    });
}
