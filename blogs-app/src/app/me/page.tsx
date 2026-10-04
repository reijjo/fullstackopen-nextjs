"use client";
import { useSession } from "next-auth/react";
import { generateToken } from "../actions/me";

export default function Me() {
  const { data: session, update } = useSession();

  const handleGenerateToken = async () => {
    await generateToken();
    await update({});
  };

  return (
    <section className="max-w-3xl mx-auto my-8 border border-gray-400 px-6 py-3 rounded-lg bg-white">
      <form action={handleGenerateToken}>
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
        <div className="flex flex-col gap-1 py-3 pt-6">
          <h2 className="text-3xl font-bold">API Token</h2>
          <div className="bg-olive-200 px-6 py-3 rounded-md flex flex-col gap-1">
            {session?.user?.token ? (
              <>
                <p className="text-lg">Current token:</p>
                <p className="bg-olive-100 px-4 py-2 rounded-sm">
                  {session?.user?.token}
                </p>
              </>
            ) : (
              <p className="text-lg">Generate a token for yourself</p>
            )}
          </div>
        </div>
        <button className="border rounded-sm px-2 py-1 bg-olive-200 cursor-pointer hover:bg-olive-100">
          Generate New Token
        </button>
      </form>
    </section>
  );
}
