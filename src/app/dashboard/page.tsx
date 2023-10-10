import Link from "next/link";


export default function Dashboard(){
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/" className="rounded-xl bg-white text-black p-1 max-w-sm mx-auto">Back to Home</Link>
    </>
  );
}