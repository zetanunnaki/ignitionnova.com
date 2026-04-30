import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-9xl font-heading font-bold gradient-text mb-6">404</p>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/60 text-lg mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-accent text-white font-semibold hover:scale-105 transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
