import { JobDB } from '@/data/job/datasource/job-db';
import { JobRepositoryImpl } from '@/data/job/job-repository-impl';
import { GetJobDetailUseCase, GetJobsUseCase } from '@/domain/job/usecase';

const jobDB = new JobDB();
const jobRepository = new JobRepositoryImpl(jobDB);

const getJobDetailUseCase = GetJobDetailUseCase(jobRepository);
const getJobsUseCase = GetJobsUseCase(jobRepository);

const di = {
  usecases: { getJobsUseCase, getJobDetailUseCase },
};

export default di;
