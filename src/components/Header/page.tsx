import Image from 'next/image';
import Link from 'next/link';

const navigation: { name: string; href: string }[] = [
  { name: 'Authors', href: '/authors' },
  { name: 'Books', href: '/books' },
  { name: 'Publishers', href: '/publishers' },
];

export const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <Link
            href="https://www.bu.edu/spark/"
            target="_blank"
            className="-m-1.5 p-1.5"
          >
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
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          <Link
            href="https://www.bu.edu/spark/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            BU Spark <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
