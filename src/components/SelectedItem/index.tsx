import { Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
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
    <Card mx='auto' mt='8'>
      <CardHeader pb='0'>
        <Heading fontWeight='bold' size='sm' color='gray'>
          選択中の材料
        </Heading>
      </CardHeader>
      <CardBody>
        {selected.length ? (
          <Flex flexDirection='column' gap='2'>
            <Row categoryId={CATEGORY.PIG} items={pig} />
            <Row categoryId={CATEGORY.CHICKEN} items={chicken} />
            <Row categoryId={CATEGORY.BEEF} items={beef} />
            <Row categoryId={CATEGORY.FISH} items={fish} />
          </Flex>
        ) : (
          <Text>選択中の材料はありません</Text>
        )}
      </CardBody>
    </Card>
  );
};

export default SelectedItem;
