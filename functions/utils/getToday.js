/**
 * 現在の日付を返却する
 * @example "2023/8/28"
 */
export const getToday = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};
