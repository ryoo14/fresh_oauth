import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getSessionId } from "kv_oauth";

export const handler: Handlers = {
  async GET(req, ctx) {
    const sessionId = await getSessionId(req);
    const resp = ctx.render({sessionId});
    return resp;
  }
}

export default function Home(props: PageProps<any>) {
  const signInOrOut = props.data.sessionId ? "signin" : "signout";
  return (
    <>
      <Head>
        <title>Deno OAuth</title>
      </Head>
      <div class="h-screen flex">
        <div class="w-6/12 h-full flex justify-center items-center text-7xl"> 
          a
        </div>
        <div class="w-6/12 h-full flex justify-center items-center text-7xl"> 
          {signInOrOut}
        </div>
      </div>
    </>
  );
}
