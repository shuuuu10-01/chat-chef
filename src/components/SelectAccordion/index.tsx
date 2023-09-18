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

import { ACCORDION_DATA } from 'src/components/SelectAccordion/data';

const SelectAccordion: ComponentWithAs<'div', AccordionProps> = (props) => {
  return (
    <Accordion defaultIndex={[0]} mx='auto' {...props}>
      {ACCORDION_DATA.map((data) => {
        return (
          <AccordionItem key={data.categoryId}>
            <h2>
              <AccordionButton>
                <Flex as='span' flex='1' textAlign='left' alignItems='center' gap='5px'>
                  <Icon color={data.iconColor} as={data.icon} />
                  {data.title}
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={3}>
              <Flex gap='5px'>
                {data.items.map((item) => {
                  return (
                    <Button
                      key={`${data.categoryId}-${item.value}`}
                      variant='outline'
                      colorScheme={data.color}
                      px='4'
                      height='30px'>
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
