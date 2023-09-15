import { Box, Heading } from '@chakra-ui/react';
import { FC } from 'react';

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
      backgroundColor='white'>
      <Heading as='h3' size='xl' display='flex' alignItems='center' gap='5px'>
        <LogoIcon />
        Chat Chef
      </Heading>
    </Box>
  );
};

export default Header;
