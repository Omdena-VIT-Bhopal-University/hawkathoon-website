import Head from 'next/head';
import Image from 'next/image';
import { FormCard } from './card';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 p-4">
      <Head>
        <title>Hawk-a-thoon&apos;25</title>
      </Head>
      <div className="mb-5">
        <Image
          src='/poster.png'
          alt="poster"
          className="rounded-md border-2 border-[#fff]-500/20 max-w-full sm:w-80"
          width={600}
          height={600}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0">
        <FormCard
          title="VIT Students"
          link="https://forms.gle/SbnGYzpEFyGXrVVC7"
          desc="Google Form"
        />
        <FormCard
          title="External Participants"
          link="https://forms.gle/jvTTsyrwFgxRahHm9"
          desc="Google Form"
        />
      </div>
    </div>
  );
}