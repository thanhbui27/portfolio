import { cookies } from "next/headers";
import { FOCUS_COOKIE, resolveFocus, type FocusProfile } from "@/lib/project-focus";

/**
 * Read the persisted focus (set when a visitor lands on a focus route such as
 * `/unity`) so any page can highlight related content while they browse.
 */
export async function getActiveFocus(): Promise<FocusProfile | null> {
  const store = await cookies();
  return resolveFocus(store.get(FOCUS_COOKIE)?.value);
}
