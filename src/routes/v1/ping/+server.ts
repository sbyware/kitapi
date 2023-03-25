import { type RequestHandler, json } from "@sveltejs/kit";

export const GET = (async () => {
    return json({ hello: "world" }, { status: 200 });
}) satisfies RequestHandler;