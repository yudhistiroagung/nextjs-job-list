import { JobRepository } from '../job-repository';

export const GetJobsUseCase = (jobRepository: JobRepository) => async () => {
  return jobRepository.get();
};
