import { List, ListItem } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';

const FooterListItem: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => (
  <ListItem
    fontSize={{ base: '12px', md: '14px' }}
    whiteSpace="nowrap"
    _after={{ content: '"|"', m: '0 10px' }}
    _last={{ _after: { content: '""', m: '0' } }}
  >
    <chakra.a color="#2b2c30" href={href}>
      {children}
    </chakra.a>
  </ListItem>
);

export const Footer: React.FC = () => {
  return (
    <chakra.footer
      pt="30px"
      px={{ base: '20px', md: '40px' }}
      pb={{ base: '30px', md: '20px' }}
      position="relative"
      zIndex={10}
      color="#2b2c30"
      backgroundColor="#fff"
      mt={{ base: '20px', md: '120px' }}
    >
      <List
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent={{ base: 'normal', md: 'center' }}
        mt={{ base: '0', md: '10px' }}
      >
        <FooterListItem href="">運営会社</FooterListItem>
        <FooterListItem href="">特定商取引法に基づく表記</FooterListItem>
        <FooterListItem href="">利用規約</FooterListItem>
        <FooterListItem href="">プライバシーポリシー</FooterListItem>
        <FooterListItem href="">お問い合わせ</FooterListItem>
      </List>
      <chakra.p
        mt={{ base: '10px', md: '20px' }}
        fontSize={{ base: '12px', md: '14px' }}
        color="#616269"
        textAlign={{ md: 'center' }}
      >
        © 〇〇 Inc.
      </chakra.p>
    </chakra.footer>
  );
};
