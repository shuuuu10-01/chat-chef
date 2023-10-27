import { Flex, Button } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  toPrevious: () => void;
  toNext: () => void;
  page: number;
  lastPage: number;
};

const Pagination: FC<Props> = ({ toPrevious, toNext, page, lastPage }) => {
  return (
    <Flex justifyContent='space-between' pt='4' px='2'>
      <Button onClick={toPrevious} variant='outline' isDisabled={page === 1}>
        ← 前へ
      </Button>
      <Button onClick={toNext} variant='outline' isDisabled={page === lastPage}>
        次へ →
      </Button>
    </Flex>
  );
};

export default Pagination;
