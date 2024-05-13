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
import { FC, useContext } from 'react';

import { ACCORDION_DATA } from 'src/components/SelectAccordion/data';

import { SelectContext, SelectDispatchContext } from 'src/pages/Top/SelectProvider';

const SelectAccordion: FC = () => {
  const selected = useContext(SelectContext);
  const handleSelect = useContext(SelectDispatchContext);

  return (
    <Accordion defaultIndex={[0]}>
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
                  const isSelected = selected.some(
                    (s) => s.categoryId === data.categoryId && s.id === item.id,
                  );
                  return (
                    <Button
                      key={`${data.categoryId}-${item.id}`}
                      variant={isSelected ? 'solid' : 'outline'}
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
