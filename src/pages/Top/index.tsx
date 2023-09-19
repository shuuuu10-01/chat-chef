import { Box, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';

import Header from 'src/components/Header';
import SelectAccordion, { SelectType } from 'src/components/SelectAccordion';

const Top: FC = () => {
  const [selected, setSelected] = useState<SelectType[]>([]);
  return (
    <Box>
      <Header />
      <Text pt='4' pb='2' pl='2' fontWeight='bold' fontSize='lg' color='gray'>
        メインの食材を選択
      </Text>
      <Box>
        <SelectAccordion onSelected={setSelected} />
      </Box>
    </Box>
  );
};

export default Top;
