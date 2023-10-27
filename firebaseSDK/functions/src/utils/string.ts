/**
 * 現在の日本の日付を返却する
 * @example "2023‐10‐01"
 */
export function getJapaneseCurrentDate(): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Tokyo', // 日本のタイムゾーン
  };

  const dateFormatter = new Intl.DateTimeFormat('ja-JP', options);
  const date = new Date();

  const now = dateFormatter.format(date);
  return now.replace(/\//g, '-');
}

/**
 * Bearerトークンの"Bearer "以降のトークンの内容を返却する
 * @param bearerToken
 */
export const extractTokenFromBearer = (bearerToken = '') => {
  // 正規表現を使用してBearerトークンからトークン部分を抽出
  const tokenPattern = /Bearer\s+([^\s]+)/;
  const match = bearerToken.match(tokenPattern);

  if (match && match[1]) {
    // マッチした部分(トークン)を返す
    return match[1];
  } else {
    // マッチしない場合はnullを返す
    return null;
  }
};
