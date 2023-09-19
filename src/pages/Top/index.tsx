import { Box, Heading } from '@chakra-ui/react';
import { FC, useCallback, useState } from 'react';

import Header from 'src/components/Header';
import SelectAccordion from 'src/components/SelectAccordion';
import SelectedItem from 'src/components/SelectedItem';
import SelectSubmit from 'src/components/SelectSubmit';

import SelectProvider from 'src/pages/Top/SelectProvider';

import { SelectType } from 'src/types/category';

const Top: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = useCallback((data: SelectType[]) => {
    console.log(data);
  }, []);
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
          <SelectSubmit onSubmit={handleSubmit} isLoading={isLoading} />
        </Box>
      </SelectProvider>
    </Box>
  );
};

export default Top;
