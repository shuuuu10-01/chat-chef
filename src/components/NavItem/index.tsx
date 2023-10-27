import { Flex, Icon, Link as ChakraLink } from '@chakra-ui/react';
import { ComponentPropsWithoutRef, FC } from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type Props = ComponentPropsWithoutRef<typeof Link> & {
  icon: IconType;
};

const NavItem: FC<Props> = ({ icon, to, children, ...rest }) => {
  return (
    <ChakraLink as={Link} to={to} style={{ textDecoration: 'none' }} {...rest}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        cursor='pointer'
        _hover={{
          bg: 'gray.100',
        }}
        _active={{
          bg: 'gray.100',
        }}>
        {icon && <Icon mr='4' fontSize='16' as={icon} />}
        {children}
      </Flex>
    </ChakraLink>
  );
};

export default NavItem;
