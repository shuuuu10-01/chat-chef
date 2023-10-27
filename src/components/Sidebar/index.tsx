import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FC } from 'react';
import { FiHome, FiMenu } from 'react-icons/fi';
import { GrHistory } from 'react-icons/gr';
import { PiCookingPotBold } from 'react-icons/pi';
import { useAppSelector } from 'src/store';

import LogoIcon from 'src/components/LogoIcon';
import NavItem from 'src/components/NavItem';

const Sidebar: FC = () => {
  const { contents } = useAppSelector((state) => state.suggestion);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <IconButton
        ref={btnRef}
        variant='outline'
        onClick={onOpen}
        aria-label='open menu'
        icon={<FiMenu />}
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display='flex' alignItems='center' gap='10px'>
            <LogoIcon />
            Chat Chef
          </DrawerHeader>
          <NavItem icon={FiHome} to='/' onClick={onClose}>
            Top
          </NavItem>
          {!!contents.length && (
            <NavItem icon={PiCookingPotBold} to='/suggest' onClick={onClose}>
              Today's Recipe
            </NavItem>
          )}
          <NavItem icon={GrHistory} to='/history' onClick={onClose}>
            History
          </NavItem>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
