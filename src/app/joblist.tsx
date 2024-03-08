import Link from 'next/link';
import { Job } from '@/domain/job/models';

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="flex flex-col w-80 border-r-2 border-gray-300 overflow-scroll">
      {jobs.map((job) => (
        <Link key={job.id} href={`?id=${job.id}`}>
          <div className="flex flex-col cursor-pointer">
            <div className="p-4">
              <h2 className="font-semibold text-white">{job.name}</h2>
              <p className="text-sm text-gray-400">{job.company}</p>
            </div>
            <div className="w-full h-[1px] bg-gray-200" />
          </div>
        </Link>
      ))}
    </div>
  );
}
