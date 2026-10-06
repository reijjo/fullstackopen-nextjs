"use client";
import { useSession } from "next-auth/react";

export default function MyProfile() {
  const { data: session } = useSession();

  return (
    <div className="border-b flex flex-col gap-1 py-3 pb-6">
      <h2 className="text-3xl font-bold">My Profile</h2>
      <div className="flex gap-2">
        <h3 className="font-semibold">Name:</h3>
        <p>{session?.user?.name}</p>
      </div>
      <div className="flex gap-2">
        <h3 className="font-semibold">Username:</h3>
        <p>{session?.user?.email}</p>
      </div>
    </div>
  );
}
