import { Box, Button, Flex } from '@chakra-ui/react';
import { FC, useEffect, useMemo } from 'react';
import Markdown from 'react-markdown';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'src/store';
import './github-markdown.css';

import Header from 'src/components/Header';

const Suggest: FC = () => {
  const { contents } = useAppSelector((state) => state.suggestion);
  const [searchParams, setSearchParams] = useSearchParams();

  const index = Number(searchParams.get('index') || 0);

  const toPrevious = () => {
    setSearchParams({ index: String(index - 1) });
  };
  const toNext = () => {
    setSearchParams({ index: String(index + 1) });
  };

  const disabledPrevious = useMemo(() => {
    return index < 1;
  }, [index]);
  const disabledNext = useMemo(() => {
    return contents.length - 1 <= index;
  }, [contents.length, index]);

  useEffect(() => {
    if (contents.length === 0 || index < 0 || !!contents[index]) return;
    // クエリに不適切な値が設定された場合、クエリをリセット
    setSearchParams();
  }, [contents, index, setSearchParams]);

  return (
    <Box>
      <Header />
      {contents.length > 1 && (
        <Flex justifyContent='space-between' pt='4' px='2'>
          <Button onClick={toPrevious} variant='outline' isDisabled={disabledPrevious}>
            ← 前へ
          </Button>
          <Button onClick={toNext} variant='outline' isDisabled={disabledNext}>
            次へ →
          </Button>
        </Flex>
      )}
      <Box width='95%' mt='2' mx='auto'>
        <Box padding='8' height={'90%'}>
          <Markdown className='markdown-body'>{contents[index]?.chatGPT}</Markdown>
        </Box>
      </Box>
      {contents.length > 1 && (
        <Flex justifyContent='space-between' px='2' py='4'>
          <Button onClick={toPrevious} variant='outline' isDisabled={disabledPrevious}>
            ← 前へ
          </Button>
          <Button onClick={toNext} variant='outline' isDisabled={disabledNext}>
            次へ →
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default Suggest;
