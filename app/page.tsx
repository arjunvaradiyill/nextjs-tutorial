import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Header with logo */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>

      <div className="flex flex-1 flex-col justify-center md:flex-row md:items-center md:gap-8">
        {/* Left: Welcome text and button */}
        <div className={`${lusitana.className} flex flex-col items-start justify-center flex-1 p-8`}>
          <h1 className="mb-4 text-2xl font-bold">
            <span className="font-bold">Welcome to Acme.</span> This is the example for the{' '}
            <a
              href="https://nextjs.org/learn"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </h1>
          <Link
            href="/login"
            className="mt-4 inline-flex items-center rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Log in <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
        {/* Right: Hero image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            priority
          />
        </div>
      </div>
    </main>
  );
}