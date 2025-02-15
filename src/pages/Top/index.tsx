import { Box, Heading, Text, Link as ChakraLink, Container } from '@chakra-ui/react';
import { FC, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { actions, useAppDispatch, useAppSelector } from 'src/store';

import Header from 'src/components/Header';
import SelectAccordion from 'src/components/SelectAccordion';
import SelectedItem from 'src/components/SelectedItem';
import SelectSubmit from 'src/components/SelectSubmit';

import SelectProvider from 'src/pages/Top/SelectProvider';

import { runChatGPT } from 'src/repositories/functions';

import { CATEGORY, SelectType } from 'src/types/category';

const Top: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAdmin } = useAppSelector((state) => state.user);
  const { contents } = useAppSelector((state) => state.suggestion);

  const handleSubmit = useCallback(
    async (data: SelectType[]) => {
      if (!isAdmin) {
        alert('権限がないため実行できません');
        return;
      }

      setIsLoading(true);
      const ingredients = formatIngredients(data);
      runChatGPT(ingredients)
        .then(() => {
          dispatch(actions.suggestion.activateRefreshFlag());
          navigate('/suggest');
        })
        .catch((e) => {
          console.log(e);
          alert('エラーが発生しました。もう一度お試しください。');
        })
        .finally(() => setIsLoading(false));
    },
    [isAdmin, dispatch, navigate],
  );

  return (
    <Box>
      <Header />
      <SelectProvider>
        <Container mx='auto' display='flex' flexDirection='column' justifyContent='center'>
          <Heading pt='4' pb='2' pl='2' fontWeight='bold' size='sm' color='gray'>
            メインの食材を選択
          </Heading>
          <SelectAccordion />
          <SelectedItem />
          <SelectSubmit isLoading={isLoading} onSubmit={handleSubmit} />
        </Container>
      </SelectProvider>
      {!!contents.length && (
        <ChakraLink as={Link} to='/suggest' color='orange.500'>
          <Text my='4' display='block' textAlign='center' fontWeight=''>
            本日の提案結果へ→
          </Text>
        </ChakraLink>
      )}
    </Box>
  );
};

export default Top;

const formatIngredients = (data: SelectType[]) => {
  return data.map((d) => {
    if (d.categoryId === CATEGORY.FISH) {
      return d.label;
    }
    return `${d.categoryName}の${d.label}`;
  });
};
