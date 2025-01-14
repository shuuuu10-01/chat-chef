import { ChakraProvider } from '@chakra-ui/react';
import { render, screen, fireEvent } from '@testing-library/react';

import Pagination from '.';

describe('Pagination Component', () => {
  const renderWithChakra = (ui: React.ReactElement) => {
    return render(<ChakraProvider resetCSS>{ui}</ChakraProvider>);
  };

  it('ボタンのテキストを確認', () => {
    renderWithChakra(<Pagination toPrevious={vi.fn()} toNext={vi.fn()} page={1} lastPage={5} />);

    // ボタンのテキストを確認
    expect(screen.getByText('← 前へ')).toBeInTheDocument();
    expect(screen.getByText('次へ →')).toBeInTheDocument();
  });

  it('「前へ」ボタンが無効であることを確認', () => {
    renderWithChakra(<Pagination toPrevious={vi.fn()} toNext={vi.fn()} page={1} lastPage={5} />);

    expect(screen.getByText('← 前へ')).toBeDisabled();
    expect(screen.getByText('次へ →')).not.toBeDisabled();
  });

  it('「次へ」ボタンが無効であることを確認', () => {
    renderWithChakra(<Pagination toPrevious={vi.fn()} toNext={vi.fn()} page={5} lastPage={5} />);

    expect(screen.getByText('次へ →')).toBeDisabled();
    expect(screen.getByText('← 前へ')).not.toBeDisabled();
  });

  it('ボタンをクリックして関数が呼び出されることを確認', () => {
    const mockToPrevious = vi.fn();
    const mockToNext = vi.fn();

    renderWithChakra(
      <Pagination toPrevious={mockToPrevious} toNext={mockToNext} page={2} lastPage={5} />,
    );

    fireEvent.click(screen.getByText('← 前へ'));
    expect(mockToPrevious).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('次へ →'));
    expect(mockToNext).toHaveBeenCalledTimes(1);
  });
});
