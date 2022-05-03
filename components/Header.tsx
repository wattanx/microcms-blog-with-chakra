import { Box, Flex, Heading, List, ListItem } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { useState } from 'react';
import NextLink from 'next/link';
import { useMediaQuery } from '../hooks/useMediaQuery';

const MenuListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ListItem mr={{ lg: '30px' }} whiteSpace="nowrap" p={{ base: '0 16px', lg: 'none' }}>
    <chakra.a
      display="block"
      color="textMain"
      p={{ base: '8px 0', lg: '0' }}
      borderBottom={{ base: '1px solid border', lg: 'none' }}
    >
      {children}
    </chakra.a>
  </ListItem>
);

const MenuWrapper: React.FC<{ children: React.ReactNode; isOpen: boolean }> = ({
  children,
  isOpen,
}) => {
  const [isLagerThen800] = useMediaQuery('(min-width: 800px)');
  return isLagerThen800 ? (
    <Flex p="12px 0">{children}</Flex>
  ) : (
    <Box
      position="absolute"
      left="0"
      top="61px"
      display={isOpen ? 'flex' : 'none'}
      flexDirection="column-reverse"
      w="100%"
      borderBottom="1px solid border"
      zIndex={2001}
      pt="8px"
      bg="#fff"
    >
      {children}
    </Box>
  );
};

export const Header: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Box>
      <Flex
        as="header"
        flexWrap={{ lg: 'wrap' }}
        position="fixed"
        top="0"
        left="0"
        right="0"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="#fff"
        zIndex={10}
        padding={{ base: '16px', lg: '12px 40px' }}
        borderBottomWidth="1px"
        borderBottomStyle="solid"
        borderBottomColor="border"
      >
        <Heading as="h1" p={{ lg: '8px 0' }} mr={{ lg: '30px' }}>
          <NextLink href="/" passHref prefetch={false}>
            <chakra.a h="28px">
              <chakra.img h="28px" src="/images/vercel.svg" alt="microCMS" />
            </chakra.a>
          </NextLink>
        </Heading>
        <chakra.button
          border="none"
          bg="none"
          m="0"
          p="0"
          cursor="pointer"
          display={{ lg: 'none' }}
          onClick={() => setOpen(!isOpen)}
        >
          <chakra.img src="/images/icon_menu.svg" alt="menu" />
        </chakra.button>
        {isOpen && (
          <Box
            position="fixed"
            top="61px"
            left="0"
            bottom="0"
            right="0"
            backgroundColor="rgba(0, 0, 0, 0.5)"
            zIndex={2000}
            onClick={() => setOpen(false)}
          ></Box>
        )}

        <MenuWrapper isOpen={isOpen}>
          <List
            display={{ lg: 'flex' }}
            alignItems={{ lg: 'center' }}
            p={{ base: '8px 0' }}
            _first={{ base: { pt: '0' } }}
          >
            <MenuListItem>menu1</MenuListItem>
            <MenuListItem>menu2</MenuListItem>
            <MenuListItem>menu3</MenuListItem>
          </List>
        </MenuWrapper>
      </Flex>
      <Box h="80px" mb="40px"></Box>
    </Box>
  );
};
