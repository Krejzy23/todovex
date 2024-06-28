import Tasks from "@/components/todovex/tasks";
import UserProfile from "@/components/todovex/user-profile";
import { useSession } from "next-auth/react";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todovex</h1>
      <UserProfile />
      <Tasks />
    </main>
  );
}
