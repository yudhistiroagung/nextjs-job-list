import { InMemoryDb } from '@/core/db/in-memory-db';
import { Job } from '@/domain/job/models';

export class JobDB extends InMemoryDb<Job> {
  constructor(initial: Job[] = []) {
    super(
      (item) => item.id,
      [
        ...initial,
        {
          id: 'asd-1',
          name: 'Software Engineer',
          company: 'Meta Corporation',
          description: '',
        },
        {
          id: 'asd-2',
          name: 'QA Automation Engineer',
          company: 'Meta Corporation',
          description: '',
        },
        {
          id: 'asd-3',
          name: 'Backend Developer',
          company: 'Meta Corporation',
          description: '',
        },
        {
          id: 'asd-4',
          name: 'QA Automation Engineer',
          company: 'Meta Corporation',
          description: '',
        },
        {
          id: 'asd-5',
          name: 'Backend Developer',
          company: 'Meta Corporation',
          description: '',
        },
      ]
    );
  }
}
