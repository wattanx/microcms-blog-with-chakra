import NextLink from 'next/link';
import { Box, List, ListItem } from '@chakra-ui/layout';
import { chakra, CSSObject } from '@chakra-ui/system';
import { ICategory, ITag } from '@/types';

type PagerProps = {
  currentPage: number;
  selectedCategory?: ICategory;
  selectedTag?: ITag;
  pager: [];
};

const PageItem: React.FC<{ children: React.ReactNode; color: string; _hover: CSSObject }> = ({
  children,
  ...props
}) => {
  return (
    <chakra.a
      cursor="pointer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100%"
      {...props}
    >
      {children}
    </chakra.a>
  );
};

export const Pager: React.FC<PagerProps> = (props) => {
  const getPath = (pageNumber: number) => {
    if (props.selectedCategory) {
      return `/category/${props.selectedCategory.id}/page/${pageNumber}`;
    } else if (props.selectedTag) {
      return `/tag/${props.selectedTag.id}/page/${pageNumber}`;
    } else {
      return `/page/${pageNumber}`;
    }
  };
  return (
    <Box p="16px 0">
      <List display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" p="40px 0 0">
        {props.currentPage > 1 && (
          <ListItem w="40px" h="40px" borderRadius="5px" m="4px 12px">
            <NextLink href={getPath(props.currentPage - 1)}>
              <PageItem color="textSub" _hover={{ color: 'blue.500' }}>
                <chakra.img
                  width="24"
                  height="24"
                  src="/images/icon_arrow_left.svg"
                  alt="前のページへ"
                />
              </PageItem>
            </NextLink>
          </ListItem>
        )}
        {props.currentPage > 3 && (
          <ListItem w="40px" h="40px" borderRadius="5px" m="4px">
            <NextLink href={getPath(1)}>
              <PageItem color="textSub" _hover={{ color: 'blue.500' }}>
                1
              </PageItem>
            </NextLink>
          </ListItem>
        )}
        {props.currentPage > 4 && (
          <ListItem color="textOff" m="4px 12px">
            ...
          </ListItem>
        )}
        {props.pager.map((page, index) => {
          if (props.currentPage - 3 <= page && page <= props.currentPage + 1) {
            const isActive = props.currentPage === page + 1;
            return (
              <ListItem
                key={index}
                w="40px"
                h="40px"
                borderRadius="5px"
                m="4px"
                bgColor={isActive ? 'blue.500' : ''}
              >
                <NextLink href={getPath(page + 1)}>
                  <PageItem
                    color={isActive ? '#fff' : 'textSub'}
                    _hover={{ color: isActive ? '#fff' : '' }}
                  >
                    {page + 1}
                  </PageItem>
                </NextLink>
              </ListItem>
            );
          }
        })}
        {props.currentPage + 3 < props.pager.length && (
          <ListItem color="textOff" m="4px 12px">
            ...
          </ListItem>
        )}
        {props.currentPage + 2 < props.pager.length && (
          <ListItem w="40px" h="40px" borderRadius="5px" m="4px">
            <NextLink href={getPath(props.pager.length)}>
              <PageItem color="textSub" _hover={{ color: 'blue.500' }}>
                {props.pager.length}
              </PageItem>
            </NextLink>
          </ListItem>
        )}
        {props.currentPage < props.pager.length && (
          <ListItem w="40px" h="40px" borderRadius="5px" m="4px 12px">
            <NextLink href={getPath(props.currentPage + 1)}>
              <PageItem color="textSub" _hover={{ color: 'blue.500' }}>
                <chakra.img
                  width="24"
                  height="24"
                  src="/images/icon_arrow_right.svg"
                  alt="次のページへ"
                />
              </PageItem>
            </NextLink>
          </ListItem>
        )}
      </List>
    </Box>
  );
};
