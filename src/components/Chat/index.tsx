import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import Markdown from 'react-markdown';
import './github-markdown.css';

import LogoIcon from 'src/components/LogoIcon';

import { Content } from 'src/types/suggestion';

import styles from './styles.module.scss';

type Props = {
  content: Content;
};

const Chat: FC<Props> = ({ content }) => {
  return (
    <Box width='90%' my='2' mx='auto'>
      <Flex alignItems='start' justifyContent='flex-end' pl='62px' mb='4'>
        <p className={styles['user-message']}>{convertUserMessage(content.ingredients)}</p>
      </Flex>
      <div className={styles.chef}>
        <LogoIcon className={styles.icon} size='40px' />
        <Markdown className={`markdown-body ${styles.suggest}`}>{content.chatGPT}</Markdown>
      </div>
    </Box>
  );
};

export default Chat;

const convertUserMessage = (ingredients: string[]) => {
  return `${ingredients.join(' と ')} を使った料理を教えて`;
};
