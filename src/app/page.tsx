import { Suspense } from 'react';

import { getJobs } from '@/actions/job';
import { get } from '@/utils/get-util';
import { PageLoading } from '@/components/page-loading';

import JobList from './joblist';
import { JobContent } from './job-content';

interface Props {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: Props) {
  const { data } = await getJobs();
  const selectedJobId = get(searchParams, 'id') || data?.[0].id || '';

  return (
    <main className="flex flex-1 flex-col items-center justify-between p-8 gap-4">
      {/* HEADER AND SEARCH */}
      <div className="flex flex-row gap-2 items-center">
        <p className="text-2xl font-bold ">JobLinked</p>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="flex w-full flex-row rounded border-2 border-gray-300 h-[768px]">
        {/* JOB LIST */}
        <JobList jobs={data || []} />

        {/* JOB CONTENT */}
        <Suspense key={selectedJobId} fallback={<PageLoading />}>
          <JobContent id={selectedJobId} />
        </Suspense>
      </div>
    </main>
  );
}
