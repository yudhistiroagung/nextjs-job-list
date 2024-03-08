import { JobRepository } from '../job-repository';

export const GetJobDetailUseCase =
  (jobRepository: JobRepository) => async (id: string) => {
    return jobRepository.getById(id);
  };
