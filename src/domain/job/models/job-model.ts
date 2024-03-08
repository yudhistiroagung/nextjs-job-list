import { z } from 'zod';

const JobSchema = z.object({
  id: z.string(),
  name: z.string(),
  company: z.string(),
  description: z.string(),
});

export type Job = z.infer<typeof JobSchema>;
