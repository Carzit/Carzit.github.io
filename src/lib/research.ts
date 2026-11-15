import { getCollection } from 'astro:content';

import type { Locale } from '@i18n/utils';

const ME = 'Zitong Cheng';

export async function getPapers(locale: Locale) {
  const entries = await getCollection('research');
  return entries
    .filter((entry) => entry.id.startsWith(`${locale}/`) && !entry.data.draft)
    .sort((a, b) => a.data.order - b.data.order);
}

export function formatCoauthors(authors: string[], locale: Locale): string {
  const others = authors.filter((name) => name !== ME);
  if (locale === 'zh') return others.join('、');
  if (others.length <= 2) return others.join(' and ');
  return `${others.slice(0, -1).join(', ')}, and ${others.at(-1)}`;
}
