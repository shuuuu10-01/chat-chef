import { Box, Text, Link as ChakraLink, Flex } from '@chakra-ui/react';
import { FC, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'src/store';

import Chat from 'src/components/Chat';
import Header from 'src/components/Header';
import Pagination from 'src/components/Pagination';

const Suggest: FC = () => {
  const { contents, refreshFlag } = useAppSelector((state) => state.suggestion);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const currentContent = useMemo(() => contents[page - 1], [contents, page]);

  const toPrevious = () => {
    setSearchParams({ page: String(page - 1) });
  };
  const toNext = () => {
    setSearchParams({ page: String(page + 1) });
  };

  useEffect(() => {
    if (contents.length === 0 || page < 1 || !!currentContent) return;
    // クエリに不適切な値が設定された場合、クエリをリセット
    setSearchParams();
  }, [currentContent, contents, page, setSearchParams]);

  return (
    <Box>
      <Header />
      {contents.length > 1 && (
        <Pagination
          toPrevious={toPrevious}
          toNext={toNext}
          page={page}
          lastPage={contents.length}
        />
      )}
      {!!currentContent && <Chat content={currentContent} />}
      {contents.length > 1 && (
        <Pagination
          toPrevious={toPrevious}
          toNext={toNext}
          page={page}
          lastPage={contents.length}
        />
      )}
      {contents.length === 0 && !refreshFlag && (
        <Flex flexDirection='column' alignItems='center' justifyContent='center' mt='20' gap='2'>
          <Text>本日の提案結果がありません。</Text>
          <Text>具材を選択して、シェフにレシピを聞いてください</Text>
          <ChakraLink as={Link} to='/' color='orange.500'>
            トップページへ
          </ChakraLink>
        </Flex>
      )}
    </Box>
  );
};

export default Suggest;
