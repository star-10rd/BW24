import { en } from './en';
import { et } from './et';
import type { Locale, Messages } from './types';

export type { Locale, Messages } from './types';

const messages: Record<Locale, Messages> = { en, et };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
