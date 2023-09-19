import { Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';

import Header from 'src/components/Header';
import SelectAccordion from 'src/components/SelectAccordion';
import SelectedItem from 'src/components/SelectedItem';

import SelectProvider from 'src/pages/Top/SelectProvider';

const Top: FC = () => {
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
        </Box>
      </SelectProvider>
    </Box>
  );
};

export default Top;
