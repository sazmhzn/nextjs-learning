import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[90dvh] flex flex-col gap-2 items-center justify-center">
      404 - Pokemon Not Found
      <Link href={"/"} className="px-4 py-2 bg-blue-600 rounded-md">
        Go back
      </Link>
    </div>
  );
}
