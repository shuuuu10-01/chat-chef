import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionProps,
  Flex,
  Icon,
  Button,
  ComponentWithAs,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';

import { ACCORDION_DATA } from 'src/components/SelectAccordion/data';

type SelectType = {
  categoryName: string;
  categoryId: number;
  id: number;
  label: string;
};

const SelectAccordion: ComponentWithAs<'div', AccordionProps> = (props) => {
  const [selected, setSelected] = useState<SelectType[]>([]);

  const handleSelect = useCallback(
    (data: SelectType) => {
      if (selected.some((s) => s.categoryId === data.categoryId && s.id === data.id)) {
        setSelected(() =>
          selected.filter((s) => !(s.categoryId === data.categoryId && s.id === data.id)),
        );
      } else {
        setSelected([...selected, data]);
      }
    },
    [selected],
  );
  return (
    <Accordion defaultIndex={[0]} mx='auto' {...props}>
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
