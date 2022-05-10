import { Box, Heading, List, ListItem } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { IBlog } from '@/types';

type PopularArticleProps = {
  blogs: IBlog[];
};

export const PopularArticle: React.FC<PopularArticleProps> = (props) => {
  return (
    <Box pt={{ base: '40px', xl: '0' }} pb={{ xl: '40px' }}>
      <Heading
        as="h1"
        fontSize="20px"
        fontWeight="bold"
        bgColor="#eee"
        p="6px 10px"
        mb="10px"
        borderRadius="5px"
      >
        人気の記事
      </Heading>
      <List>
        {props.blogs.map((blog) => {
          return (
            <ListItem key={blog.id} mb="10px" _last={{ mb: '0' }}>
              <chakra.a
                href={`/${blog.id}`}
                display={{ base: 'block', sm: 'flex', xl: 'block' }}
                p="10px"
              >
                <chakra.picture>
                  <chakra.source
                    type="image/webp"
                    data-srcset={`${blog.ogimage.url}?w=560&fm=webp`}
                  />
                  <chakra.img
                    width={{ base: '100%', sm: '140px', xl: '280px' }}
                    borderRadius="5px"
                    data-src={`${blog.ogimage?.url}?w=560&q=100`}
                    className={`lazyload`}
                  />
                </chakra.picture>
                <chakra.p pt={{ base: '10px', sm: '0', xl: '10px' }} pl={{ sm: '20px' }}>
                  {blog.title}
                </chakra.p>
              </chakra.a>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
