'use server';

import di from '@/di';
import { Either } from '@/core/types/either';
import { Job } from '@/domain/job/models';

const delay = () => new Promise((r) => setTimeout(r, 1000));

const {
  usecases: { getJobDetailUseCase },
} = di;

export async function getJobDetail(id: string): Promise<Either<Job>> {
  try {
    const data = await getJobDetailUseCase(id);
    await delay();
    return { data };
  } catch (e) {
    console.log({ e });
    return { error: e as Error };
  }
}
