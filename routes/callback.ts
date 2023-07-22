import { handleCallback } from "kv_oauth";
import { oauth2Client } from "../components/OAuthClient.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, _) {
    const { response: res }= await handleCallback(req, oauth2Client);
    return res;
  }
}
