'use client';
import { UserIcon } from '@heroicons/react/20/solid';
import React from 'react';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';

const useAuthors = () => {
  const [data, setData] = React.useState<
    {
      id: number;
      name: string;
      bio: string;
      url: string;
    }[]
  >([]);

  useQuery(
    gql`
      query GetAuthors {
        authors {
          id
          name
          bio
          url
        }
      }
    `,
    {
      onCompleted: (result) => {
        setData(result.authors);
      },
    }
  );

  return {
    data,
  };
};

export default function Page() {
  const { data } = useAuthors();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Authors
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              These authors represent a diverse range of time periods, cultures,
              and literary styles. Exploring their works can provide a rich and
              rewarding journey through the world of literature.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {data.map((author) => (
              <div key={author.id} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <UserIcon
                    className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  <Link
                    href={author.url}
                    target="_blank"
                    className="text-indigo-600 hover:underline"
                  >
                    {author.name}
                  </Link>
                </dt>
                <dd className="mt-2">{author.bio}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
