"use client"
import { signInAction } from "@/actions/auth-action";
import Tasks from "@/components/todovex/tasks";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";


export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todovex</h1>
      <Tasks />
      <form action={signInAction}>
        <Button>Sign-in</Button> 
      </form>
    </main>
  );
}
