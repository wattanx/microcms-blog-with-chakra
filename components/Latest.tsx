import { Box, Heading, List, ListItem, Link } from '@chakra-ui/layout';
import { IBlog } from '@/types';

type LatestProps = {
  blogs: IBlog[];
};

export const Latest: React.FC<LatestProps> = (props) => {
  return (
    <Box p={{ base: '40px 0', xl: '0' }}>
      <Heading
        as="h1"
        fontSize="20px"
        fontWeight="bold"
        backgroundColor="#eee"
        p="6px 10px"
        mb="10px"
        borderRadius="5px"
      >
        最新の記事
      </Heading>
      <List>
        {props.blogs.map((blog) => {
          return (
            <ListItem borderBottom="1px solid #eee" _last={{ borderBottom: 'none' }} key={blog.id}>
              <Link href={`/${blog.id}`} display="block" p="10px">
                {blog.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
