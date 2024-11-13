import { z } from 'zod';

const agentDetails = z.object({
  name: z.string(),
  colors: z.object({
    one: z.string(),
    two: z.string(),
    three: z.string(),
  }),
  image: z.string().url(),
  description: z.string(),
  background: z.string(),
  habilities: z.object({
    one: z.string(),
    two: z.string(),
    three: z.string(),
    ult: z.string(),
  }),
  nameHabilities: z.object({
    one: z.string(),
    two: z.string(),
    three: z.string(),
    ult: z.string(),
  }),
  iconHabilities: z.object({
    one: z.string(),
    two: z.string(),
    three: z.string(),
    ult: z.string(),
  }),
  role: z.object({
    role: z.string(),
    description: z.string(),
  }),
});

export type TypeAgent = z.infer<typeof agentDetails>;
