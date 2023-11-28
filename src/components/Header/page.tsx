'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navigation: { name: string; href: string }[] = [
  { name: 'Authors', href: '/authors' },
  { name: 'Books', href: '/books' },
  { name: 'Publishers', href: '/publishers' },
  { name: 'Unified', href: '/unified' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">BU Spark</span>
            <Image
              width={255}
              height={255}
              className="h-8 w-auto"
              src="/logo.png"
              alt="BU Spark logo"
            />
          </Link>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx('text-sm font-semibold leading-6 text-gray-900', {
                'text-indigo-600': pathname === item.href,
              })}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          <Link
            href="https://www.bu.edu/spark/"
            target="_blank"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            BU Spark <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
