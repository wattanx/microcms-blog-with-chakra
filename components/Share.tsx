import { Box, List, ListItem } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { config } from '../site.config';

type ShareProps = {
  id: string;
  title?: string;
};

const ShareList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ListItem textAlign="center" mb={{ base: '0', md: '20px' }} mx={{ base: '20px', md: '0' }}>
    {children}
  </ListItem>
);

export const Share: React.FC<ShareProps> = (props) => {
  const twitterLink = `https://twitter.com/intent/tweet?text=${props.title}&url=${config.baseUrl}/${props.id}/&hashtags=microcms`;
  const facebookLink = `https://www.facebook.com/sharer.php?u=${config.baseUrl}/${props.id}/`;
  const hatenaLink = `https://b.hatena.ne.jp/entry/${config.baseUrl}/${props.id}/`;
  const feedLink = `${config.baseUrl}/feed`;
  return (
    <Box mt={{ base: '40px', md: '0' }} pt={{ md: '16px' }}>
      <List
        display={{ base: 'flex', md: 'block' }}
        justifyContent={{ base: 'center', md: 'normal' }}
        position={{ md: 'sticky' }}
        top={{ md: '100px', lg: '120px' }}
      >
        <ShareList>
          <chakra.a href={twitterLink} target="_blank" rel="noopener noreferrer">
            <chakra.img
              maxH={{ base: '20px', md: '24px' }}
              maxW={{ md: '24px' }}
              src="/images/icon_twitter.svg"
              alt="twitter"
            />
          </chakra.a>
        </ShareList>
        <ShareList>
          <chakra.a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <chakra.img src="/images/icon_facebook.svg" alt="Facebook" />
          </chakra.a>
        </ShareList>
        <ShareList>
          <chakra.a href={hatenaLink} target="_blank" rel="noopener noreferrer">
            <chakra.img src="/images/icon_hatena.svg" alt="はてなブックマーク" />
          </chakra.a>
        </ShareList>
        <ShareList>
          <chakra.a href={feedLink} target="_blank" rel="noopener noreferrer">
            <chakra.img src="/images/icon_feed.svg" alt="フィード" />
          </chakra.a>
        </ShareList>
      </List>
    </Box>
  );
};
