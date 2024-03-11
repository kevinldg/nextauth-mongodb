import { useSession, signIn, signOut } from "next-auth/react";
export default function Component() {
  const { data: session } = useSession();

  return (
    <div className=" h-screen flex justify-center items-center">
      {session ? (
        <div className=" bg-neutral-100 border-solid border-2 border-neutral-300 p-4 rounded w-fit flex gap-2 flex-col justify-center">
          <p>Signed in as {session.user.email}</p>
          <button
            onClick={() => signOut()}
            className=" bg-red-400 text-white px-2 py-1 rounded"
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className=" bg-neutral-100 border-solid border-2 border-neutral-300 p-4 rounded w-fit flex gap-2 flex-col justify-center">
          <p>Not signed in</p>
          <button
            onClick={() => signIn()}
            className=" bg-blue-400 text-white px-2 py-1 rounded"
          >
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}
