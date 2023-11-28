'use client';
import { BookOpenIcon } from '@heroicons/react/20/solid';
import { faker } from '@faker-js/faker';
import React from 'react';
import Link from 'next/link';

const useData = () => {
  const [data, setData] = React.useState<
    {
      id: number;
      name: string;
      description: string;
      url: string;
      authors: {
        id: number;
        name: string;
        bio: string;
        url: string;
      }[];
      publishers: {
        id: number;
        name: string;
        url: string;
      }[];
      genres: {
        id: number;
        name: string;
      }[];
    }[]
  >([]);

  React.useEffect(() => {
    setData(
      new Array(5).fill(0).map(() => {
        return {
          id: faker.number.int(),
          name: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          url: faker.internet.url(),
          authors: new Array(faker.number.int({ min: 1, max: 2 }))
            .fill(0)
            .map(() => {
              return {
                id: faker.number.int(),
                name: faker.person.fullName(),
                bio: faker.lorem.paragraph(),
                url: faker.internet.url(),
              };
            }),
          publishers: new Array(faker.number.int({ min: 1, max: 2 }))
            .fill(0)
            .map(() => {
              return {
                id: faker.number.int(),
                name: faker.company.name(),
                url: faker.internet.url(),
              };
            }),
          genres: faker.helpers
            .arrayElements(
              [
                'Action',
                'Thriller',
                'Mystery',
                'Horror',
                'Romance',
                'Legal',
                'Documentary',
                'Science Fiction',
              ],
              { min: 2, max: 4 }
            )
            .map((genre) => {
              return {
                id: faker.number.int(),
                name: genre,
              };
            }),
        };
      })
    );
  }, []);

  return {
    data,
  };
};

export default function Page() {
  const { data } = useData();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unified
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              A unified view of some of the top books, authors, and publishers
              across different genres, providing a diverse and comprehensive
              overview.
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
                <dd className="mt-2 space-y-2">
                  <p>{book.description}</p>

                  <p>
                    <span className="font-semibold">Authors</span>:{' '}
                    {book.authors.map((author, i) => {
                      return (
                        <Link
                          key={author.id}
                          href={author.url}
                          target="_blank"
                          className="text-indigo-600 hover:underline"
                        >
                          {i > 0 && ', '}
                          {author.name}
                        </Link>
                      );
                    })}
                  </p>

                  <p>
                    <span className="font-semibold">Publishers</span>:{' '}
                    {book.publishers.map((publisher, i) => {
                      return (
                        <Link
                          key={publisher.id}
                          href={publisher.url}
                          target="_blank"
                          className="text-indigo-600 hover:underline"
                        >
                          {i > 0 && ', '}
                          {publisher.name}
                        </Link>
                      );
                    })}
                  </p>

                  <p>
                    <span className="font-semibold">Genres</span>:{' '}
                    {book.genres.map((genre, i) => {
                      return (
                        <span key={genre.id} className="italic">
                          {i > 0 && ', '}
                          {genre.name}
                        </span>
                      );
                    })}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
