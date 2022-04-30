import NextLink from 'next/link';
import { Box, Heading, List, ListItem } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { ICategory } from '@/types';

type CategoriesProps = {
  categories: ICategory[];
};

export const Categories: React.FC<CategoriesProps> = (props) => {
  return (
    <Box pt="40px" pb={{ base: 0, lg: '40px', xl: '40px' }} px="0">
      <Heading
        as="h1"
        fontSize="20px"
        fontWeight="bold"
        backgroundColor="#eee"
        py="6px"
        px="10px"
        mb="10px"
        borderRadius="5px"
      >
        カテゴリー
      </Heading>
      <List>
        {props.categories.map((category) => {
          return (
            <ListItem key={category.id} borderBottom="1px solid #eee">
              <NextLink
                href="/category/[categoryId]/page/[id]"
                as={`/category/${category.id}/page/1`}
                passHref
                prefetch={false}
              >
                <chakra.a p="10px" borderBottom="none">
                  {category.name}
                </chakra.a>
              </NextLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
