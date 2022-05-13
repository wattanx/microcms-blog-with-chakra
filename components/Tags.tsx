import NextLink from 'next/link';
import { Box, Heading, List, ListItem } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { ITag } from 'types';

type TagsProps = {
  tags: ITag[];
};

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <Box pt="40px" pb={{ base: '40px', lg: '0' }} px="0">
      <Heading
        as="h1"
        fontSize="20px"
        fontWeight="bold"
        bgColor="#eee"
        p="6px 10px"
        mb="10px"
        borderRadius="5px"
      >
        タグ
      </Heading>
      <List p="0 10px">
        {tags.map((tag) => (
          <ListItem key={tag.id} display="inline-block" mr="16px" p="4px 0">
            <NextLink href="/tag/[tagId]/page/[id]" as={`/tag/${tag.id}/page/1`}>
              <chakra.a
                fontSize="16px"
                display="inline-block"
                pl="18px"
                position="relative"
                _before={{
                  content: "''",
                  display: 'inline-block',
                  background: "url('/images/icon_tag.svg') center no-repeat",
                  backgroundSize: 'contain',
                  width: '12px',
                  height: '12px',
                  position: 'absolute',
                  top: '50%',
                  left: '0',
                  transform: 'translateY(-50%)',
                }}
              >
                {tag.name}
              </chakra.a>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
