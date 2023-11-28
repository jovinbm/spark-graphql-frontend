import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14 px-8">
        <div className="mx-auto max-w-2xl py-56">
          <Image
            width={255}
            height={255}
            className="h-40 w-auto m-auto mb-6"
            src="/logo.png"
            alt="BU Spark logo"
          />

          <div className="text-center">
            <h1 className="font-bold tracking-tight text-gray-900 text-6xl">
              GraphQL Mastery: Building APIs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing GraphQL, a powerful API query language.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This session includes a hands-on API creation exercise and a Q&A
              segment, offering insights into implementing GraphQL in real-world
              scenarios. This talk is ideal for developers and tech enthusiasts
              eager to explore the latest in API technology!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
