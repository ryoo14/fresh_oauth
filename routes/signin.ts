import { signIn } from 'kv_oauth';
import { oauth2Client } from "../components/OAuthClient.ts";
import { Handler, Handlers } from "$fresh/server.ts";

//export function handler(req: Request): Promise<Response> {
//  return signIn(req, oauth2Client);
//}

export const handler: Handlers = {
  async GET(req, _) {
    return await signIn(req, oauth2Client);
  }
}
