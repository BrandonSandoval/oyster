import { db } from '@oyster/db';

export async function getResumeBook(id: string) {
  const resumeBook = await db
    .selectFrom('resumeBooks')
    .select(['id', 'name'])
    .where('id', '=', id)
    .executeTakeFirst();

  return resumeBook;
}
