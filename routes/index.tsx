import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getSessionId } from "kv_oauth";

export const handler: Handlers = {
  async GET(req, ctx) {
    const sessionId = await getSessionId(req);
    const res = ctx.render({sessionId});
    return res;
  }
}

export default function Home(props: PageProps<any>) {
  const sessionId = props.data.sessionId;
  const signInOrOut = sessionId ? "signout" : "signin";
  return (
    <>
      <Head>
        <title>Deno OAuth</title>
      </Head>
      <div class="h-screen flex">
        <div class="w-6/12 h-full flex justify-center items-center text-7xl"> 
          {sessionId || "please sign in ->"}
        </div>
        <div class="w-6/12 h-full flex justify-center items-center text-7xl"> 
          <a href={"/" + signInOrOut}>
            {signInOrOut}
          </a>
        </div>
      </div>
    </>
  );
}
