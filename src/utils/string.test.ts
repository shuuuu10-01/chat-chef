import { getJapaneseCurrentDate } from 'src/utils/string';

describe('getJapaneseCurrentDate', () => {
  it('現在の日本の日付を "yyyy-MM-dd" 形式で返却する', () => {
    // モックの日付を設定
    const mockDate = new Date('2023-10-01T00:00:00+09:00');
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);

    // 関数の結果を検証
    const result = getJapaneseCurrentDate();
    expect(result).toBe('2023-10-01');

    // モックをリセット
    vi.useRealTimers();
  });
});
