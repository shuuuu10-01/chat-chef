import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import Markdown from 'react-markdown';
import { useAppSelector } from 'src/store';
import './github-markdown.css';

import Header from 'src/components/Header';

const Suggest: FC = () => {
  const { contents } = useAppSelector((state) => state.suggestion);

  return (
    <Box>
      <Header />
      {contents.map((c, index) => {
        return (
          <Box key={index} className='markdown-body'>
            <Markdown>{c.chatGPT}</Markdown>
          </Box>
        );
      })}
    </Box>
  );
};

export default Suggest;
