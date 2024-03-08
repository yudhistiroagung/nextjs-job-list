import { Job } from './models/job-model';

export interface JobRepository {
  get: () => Promise<Job[]>;
  getById: (id: string) => Promise<Job>;
}
