import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[90dvh] flex flex-col gap-4 items-center justify-center">
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <button className="px-4 py-2 bg-blue-500 rounded-lg">
          Return Home
        </button>
      </Link>
    </div>
  );
}
