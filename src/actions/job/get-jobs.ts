'use server';

import di from '@/di';
import { Either } from '@/core/types/either';
import { Job } from '@/domain/job/models';

const {
  usecases: { getJobsUseCase },
} = di;

export async function getJobs(): Promise<Either<Job[]>> {
  try {
    const res = await getJobsUseCase();

    return { data: res };
  } catch (e) {
    return { error: e as Error };
  }
}
