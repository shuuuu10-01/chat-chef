import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import Header from 'src/components/Header';
import SelectAccordion from 'src/components/SelectAccordion';

const Top: FC = () => {
  return (
    <Box>
      <Header />
      <Box>
        <p>top page</p>
        <Link to='/login'>loginページへ</Link>
        <SelectAccordion />
      </Box>
    </Box>
  );
};

export default Top;
