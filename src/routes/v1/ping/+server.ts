import { type RequestHandler, json } from "@sveltejs/kit";
import { HTTPCodes } from "@constants";

export const GET = (async () => {
    return json({ hello: "world" }, { status: HTTPCodes.NotImplemented });
}) satisfies RequestHandler;