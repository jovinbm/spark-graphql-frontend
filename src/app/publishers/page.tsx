'use client';
import { HomeModernIcon } from '@heroicons/react/20/solid';
import { faker } from '@faker-js/faker';
import React from 'react';
import Link from 'next/link';

const usePublishers = () => {
  const [data, setData] = React.useState<
    {
      id: number;
      name: string;
      url: string;
    }[]
  >([]);

  React.useEffect(() => {
    setData(
      new Array(5).fill(0).map(() => {
        return {
          id: faker.number.int(),
          name: faker.company.name(),
          url: faker.internet.url(),
        };
      })
    );
  }, []);

  return {
    data,
  };
};

export default function Page() {
  const { data } = usePublishers();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Publishers
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              These publishing houses have gained prominence for consistently
              producing high-quality literature and for their impact on the
              literary world.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {data.map((publisher) => (
              <div key={publisher.id} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <HomeModernIcon
                    className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  <Link
                    href={publisher.url}
                    target="_blank"
                    className="text-indigo-600 hover:underline"
                  >
                    {publisher.name}
                  </Link>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
