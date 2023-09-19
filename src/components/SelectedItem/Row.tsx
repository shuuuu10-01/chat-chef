import { Flex, Icon, Tag, TagLabel, TagCloseButton } from '@chakra-ui/react';
import { FC, useContext } from 'react';

import { SelectDispatchContext } from 'src/pages/Top/SelectProvider';

import {
  CategoryIconColor,
  CategoryIcon,
  CategoryColor,
  Category,
  SelectType,
} from 'src/types/category';

type Props = {
  items: SelectType[];
  categoryId: Category;
};

const Row: FC<Props> = ({ items, categoryId }) => {
  const handleSelect = useContext(SelectDispatchContext);
  return (
    <>
      {items.length > 0 ? (
        <Flex alignItems='center' gap='5px'>
          <Icon color={CategoryIconColor[categoryId]} as={CategoryIcon[categoryId]} />
          {items.map((i) => (
            <Tag
              size='md'
              key={`selected-${categoryId}-${i.id}`}
              borderRadius='full'
              variant='solid'
              colorScheme={CategoryColor[categoryId]}>
              <TagLabel>{i.label}</TagLabel>
              <TagCloseButton onClick={() => handleSelect(i)} />
            </Tag>
          ))}
        </Flex>
      ) : null}
    </>
  );
};

export default Row;
