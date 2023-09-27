/**
 * 現在の日本の日付を返却する
 * @example "2023/8/28"
 */
export function getJapaneseCurrentDate(): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Tokyo', // 日本のタイムゾーン
  };

  const dateFormatter = new Intl.DateTimeFormat('ja-JP', options);
  const now = new Date();

  return dateFormatter.format(now);
}
