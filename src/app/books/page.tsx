'use client';
import { BookOpenIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Link from 'next/link';

const useBooks = () => {
  const [data, setData] = React.useState<
    {
      id: number;
      name: string;
      description: string;
      url: string;
    }[]
  >([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/api/data/books')
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return {
    data,
  };
};

export default function Page() {
  const { data } = useBooks();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Books
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              These books have had a profound impact on literature and have
              garnered widespread acclaim. They are some of the most influential
              and celebrated books across different genres and time periods.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {data.map((book) => (
              <div key={book.id} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <BookOpenIcon
                    className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  <Link
                    href={book.url}
                    target="_blank"
                    className="text-indigo-600 hover:underline"
                  >
                    {book.name}
                  </Link>
                </dt>
                <dd className="mt-2">{book.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
