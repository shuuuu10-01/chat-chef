import { Box, Heading } from '@chakra-ui/react';
import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { actions, useAppDispatch, useAppSelector } from 'src/store';

import Header from 'src/components/Header';
import SelectAccordion from 'src/components/SelectAccordion';
import SelectedItem from 'src/components/SelectedItem';
import SelectSubmit from 'src/components/SelectSubmit';

import SelectProvider from 'src/pages/Top/SelectProvider';

import { runChatGPT } from 'src/repositories/functions';

import { CATEGORY, SelectType } from 'src/types/category';

import { fetchFireStore } from 'src/utils/firestore';

const Top: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAdmin } = useAppSelector((state) => state.user);

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
          dispatch(actions.suggestion.toggleRefreshFlag());
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

  useEffect(() => {
    fetchFireStore();
  });

  return (
    <Box>
      <Header />
      <Heading pt='4' pb='2' pl='2' fontWeight='bold' size='sm' color='gray'>
        メインの食材を選択
      </Heading>
      <SelectProvider>
        <Box>
          <SelectAccordion />
          <SelectedItem />
          <SelectSubmit isLoading={isLoading} onSubmit={handleSubmit} />
        </Box>
      </SelectProvider>
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
