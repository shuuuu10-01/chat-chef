import { Button, Center } from '@chakra-ui/react';
import { FC, useContext } from 'react';
import { PrimaryColor } from 'src/constants/color';

import { SelectContext } from 'src/pages/Top/SelectProvider';

import { SelectType } from 'src/types/category';

type Props = {
  isLoading: boolean;
  onSubmit: (data: SelectType[]) => void;
};

const SelectSubmit: FC<Props> = ({ isLoading, onSubmit }) => {
  const selected = useContext(SelectContext);
  return (
    <Center mt='8'>
      <Button
        type='button'
        colorScheme='orange'
        bgColor={PrimaryColor}
        isDisabled={selected.length === 0}
        isLoading={isLoading}
        onClick={() => onSubmit(selected)}>
        シェフにレシピを聞く
      </Button>
    </Center>
  );
};

export default SelectSubmit;
