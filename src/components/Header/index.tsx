import { Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Z_INDEX_HEADER } from 'src/constants/z-index';

import LogoIcon from 'src/components/LogoIcon';

const Header: FC = () => {
  return (
    <Box
      position='sticky'
      top={0}
      pl='2'
      py='2'
      borderBottom='1px'
      borderColor='gray.300'
      backgroundColor='white'
      zIndex={Z_INDEX_HEADER}>
      <Link to='/'>
        <Heading as='h3' size='xl' display='flex' alignItems='center' gap='5px'>
          <LogoIcon />
          Chat Chef
        </Heading>
      </Link>
    </Box>
  );
};

export default Header;
