import { JobRepository } from '@/domain/job/job-repository';
import { Job } from '@/domain/job/models';

import { JobDB } from './datasource/job-db';

export class JobRepositoryImpl implements JobRepository {
  constructor(private readonly db: JobDB) {}

  async get(): Promise<Job[]> {
    return this.db.get();
  }

  async getById(id: string): Promise<Job> {
    return this.db.getById(id);
  }
}
