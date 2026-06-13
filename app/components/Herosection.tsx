import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-24">
        {/* Left content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Send Money Home
            <br />
            <span className="text-blue-600">Without Stress</span>
          </h1>

          <p className="max-w-md text-base text-gray-600 sm:text-lg">
            Fast, transparent and secure transfer Saudi Arabia to Africa with
            competitive exchange rate and real-time tracking.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Download iOS
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-blue-600 hover:text-blue-600"
            >
              Download Android
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/hero.svg"
            alt="SaharaPay mobile app showing money transfer interface"
            width={600}
            height={500}
            priority
            className="h-auto w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}