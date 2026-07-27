"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const supabase = createClient();
  const router = useRouter();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }

    router.replace("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
}