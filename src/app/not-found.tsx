import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-neutral-200 mb-2">404</p>
        <h1 className="text-2xl font-bold text-neutral-900 mb-3">
          Page not found
        </h1>
        <p className="text-neutral-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-7 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all active:scale-[0.97]"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3 border border-neutral-200 text-neutral-600 text-sm font-medium rounded-full hover:border-neutral-300 hover:bg-neutral-50 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
