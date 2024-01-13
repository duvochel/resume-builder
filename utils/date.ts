import { Locale, formatDistance } from 'date-fns';

export function dateRangeInWords(
  startDateString: string,
  endDateString: string,
  locale?: Locale
) {
  const startDate = new Date(startDateString);
  const endDate = endDateString ? new Date(endDateString) : new Date();
  return formatDistance(startDate, endDate, { locale });
}
