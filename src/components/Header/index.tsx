import { Box, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Z_INDEX_HEADER } from 'src/constants/z-index';

import LogoIcon from 'src/components/LogoIcon';
import Sidebar from 'src/components/Sidebar';

const Header: FC = () => {
  return (
    <Box
      position='sticky'
      top={0}
      p='2'
      borderBottom='1px'
      borderColor='gray.300'
      backgroundColor='white'
      zIndex={Z_INDEX_HEADER}>
      <Heading as='h3' size='xl' display='flex' justifyContent='space-between'>
        <ChakraLink
          as={Link}
          to='/'
          display='flex'
          alignItems='center'
          gap='5px'
          _hover={{ textDecoration: 'none' }}
          width='fit-content'>
          <LogoIcon />
          Chat Chef
        </ChakraLink>
        <Sidebar />
      </Heading>
    </Box>
  );
};

export default Header;
