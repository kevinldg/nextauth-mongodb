import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className=" bg-neutral-100 p-8 border-solid border-2 border-neutral-200 flex flex-col gap-2 text-center">
        <h1 className=" font-bold text-xl">NextAuth.js with MongoDB</h1>
        <Link href="/" className=" bg-blue-500 text-white rounded py-1">
          Login
        </Link>
        <Link href="/" className=" bg-neutral-400 text-white rounded py-1">
          Register
        </Link>
      </div>
    </div>
  );
}
