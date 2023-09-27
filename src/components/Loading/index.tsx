import { Flex, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

const Loading: FC = () => {
  return (
    <Flex width='100%' height='100dvh' alignItems='center' justifyContent='center'>
      <Spinner thickness='4px' speed='0.5s' emptyColor='gray.200' color='blue.500' size='xl' />
    </Flex>
  );
};

export default Loading;
