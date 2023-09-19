import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Icon,
  Button,
} from '@chakra-ui/react';
import { FC, useCallback, useState } from 'react';

import { ACCORDION_DATA } from 'src/components/SelectAccordion/data';

import { Category } from 'src/types/category';

export type SelectType = {
  categoryName: string;
  categoryId: Category;
  id: number;
  label: string;
};

type Props = {
  onSelected: (value: SelectType[]) => void;
};

const SelectAccordion: FC<Props> = ({ onSelected }) => {
  const [selected, setSelected] = useState<SelectType[]>([]);

  const handleSelect = useCallback(
    (data: SelectType) => {
      if (selected.some((s) => s.categoryId === data.categoryId && s.id === data.id)) {
        const filtered = selected.filter(
          (s) => !(s.categoryId === data.categoryId && s.id === data.id),
        );
        setSelected(filtered);
        onSelected(filtered);
      } else {
        const added = [...selected, data];
        setSelected(added);
        onSelected(added);
      }
    },
    [selected, onSelected],
  );
  return (
    <Accordion defaultIndex={[0]} mx='auto'>
      {ACCORDION_DATA.map((data) => {
        return (
          <AccordionItem key={data.categoryId}>
            <h2>
              <AccordionButton>
                <Flex as='span' flex='1' textAlign='left' alignItems='center' gap='5px'>
                  <Icon color={data.iconColor} as={data.icon} />
                  {data.categoryName}
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={3}>
              <Flex gap='5px'>
                {data.items.map((item) => {
                  const aa = selected.some(
                    (s) => s.categoryId === data.categoryId && s.id === item.id,
                  );
                  return (
                    <Button
                      key={`${data.categoryId}-${item.id}`}
                      variant={aa ? 'solid' : 'outline'}
                      colorScheme={data.color}
                      px='4'
                      height='30px'
                      borderRadius='15px'
                      onClick={() =>
                        handleSelect({
                          ...item,
                          categoryName: data.categoryName,
                          categoryId: data.categoryId,
                        })
                      }>
                      {item.label}
                    </Button>
                  );
                })}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default SelectAccordion;
