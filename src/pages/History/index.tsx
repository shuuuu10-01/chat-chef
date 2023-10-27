import { Box, Flex, Select, Text } from '@chakra-ui/react';
import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Chat from 'src/components/Chat';
import Header from 'src/components/Header';
import Pagination from 'src/components/Pagination';

import { Content } from 'src/types/suggestion';

import { getContents, getHistoryDate } from 'src/utils/firestore';

const History: FC = () => {
  const [dateList, setDateList] = useState<string[]>([]);
  const [contents, setContents] = useState<Content[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const date = searchParams.get('date') || '';

  const toPrevious = () => {
    setSearchParams((prev) => {
      prev.set('page', String(page - 1));
      return prev;
    });
  };

  const toNext = () => {
    setSearchParams((prev) => {
      prev.set('page', String(page + 1));
      return prev;
    });
  };

  const currentContent = useMemo(() => contents[page - 1], [contents, page]);

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ date: event.target.value });
  };

  // セレクトボックスの日付の選択肢を取得
  useEffect(() => {
    getHistoryDate().then((result) => setDateList(result));
  }, []);

  // クエリの日付をもとにコンテンツ一覧を取得する
  useEffect(() => {
    if (!date) return;
    getContents(date).then((result) => {
      // 0件の場合はクエリを削除
      if (!result.length) {
        setSearchParams();
        return;
      }
      setContents(result);
    });
  }, [date, setSearchParams]);

  useEffect(() => {
    // pageの値が不適切な場合は、クエリのpageを削除
    if ((contents && !currentContent) || page < 1) {
      setSearchParams((prev) => {
        prev.delete('page');
        return prev;
      });
    }
  }, [currentContent, contents, setSearchParams, page]);

  return (
    <Box pb='4'>
      <Header />
      <Select w='80%' mx='auto' mt='4' onChange={handleSelect} value={date}>
        {!date && <option>日付を選択</option>}
        {dateList.map((d) => {
          return (
            <option key={d} value={d}>
              {d.replace(/-/g, '/')}
            </option>
          );
        })}
      </Select>
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
      {!date && (
        <Flex flexDirection='column' alignItems='center' justifyContent='center' mt='20' gap='2'>
          <Text>日付が選択されていません</Text>
        </Flex>
      )}
    </Box>
  );
};

export default History;
