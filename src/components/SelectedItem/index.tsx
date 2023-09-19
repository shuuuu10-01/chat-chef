import { Flex } from '@chakra-ui/react';
import { FC, useContext } from 'react';

import Row from 'src/components/SelectedItem/Row';

import { SelectContext } from 'src/pages/Top/SelectProvider';

import { CATEGORY } from 'src/types/category';

const SelectedItem: FC = () => {
  const selected = useContext(SelectContext);

  const pig = selected.filter((s) => s.categoryId === CATEGORY.PIG);

  const chicken = selected.filter((s) => s.categoryId === CATEGORY.CHICKEN);

  const beef = selected.filter((s) => s.categoryId === CATEGORY.BEEF);

  const fish = selected.filter((s) => s.categoryId === CATEGORY.FISH);

  return (
    <Flex flexDirection='column' gap='2'>
      <Row categoryId={CATEGORY.PIG} items={pig} />
      <Row categoryId={CATEGORY.CHICKEN} items={chicken} />
      <Row categoryId={CATEGORY.BEEF} items={beef} />
      <Row categoryId={CATEGORY.FISH} items={fish} />
    </Flex>
  );
};

export default SelectedItem;
