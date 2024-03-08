import Image from 'next/image';

import { getJobDetail } from '@/actions/job';

interface Props {
  id: string;
}

export async function JobContent({ id }: Props) {
  const { data, error } = await getJobDetail(id);

  if (error) {
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Something went wrong</span>
      </div>
    );
  }

  return (
    <div className="flex flex-grow flex-col p-4">
      {/* HEADING CONTENT */}
      <div className="flex relative flex-col m-16">
        <div className="h-[180px]">
          <Image
            className="rounded-lg bg-slate-100 border-2 border-gray-300"
            fill
            src="/images/desk-2.jpg"
            alt="desk-bakdrop"
            sizes="100vw"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-row absolute bottom-0 mb-[-30px] left-12 gap-2">
          <div className=" flex items-center justify-center rounded-lg bg-white border-2 border-gray-200 h-[100px] w-[100px]">
            <p className="text-2xl font-bold text-black">SE</p>
          </div>
          <div>
            <p className="text-2xl text-black font-semibold">{data?.name}</p>
            <p className="italic text-gray-400">{data?.company}</p>
          </div>
        </div>
      </div>
      {/* HEADING CONTENT */}

      <div className="flex flex-col mx-16 gap-4">
        <h1>About the job</h1>
      </div>
    </div>
  );
}
