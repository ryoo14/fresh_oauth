import { signOut } from 'kv_oauth';

export function handler(req: Request): Promise<Response> {
  return signOut(req);
}
