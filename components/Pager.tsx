import NextLink from 'next/link';
import { Box, List, ListItem } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { ICategory, ITag } from '@/types';

type PagerProps = {
  currentPage: number;
  selectedCategory?: ICategory;
  selectedTag?: ITag;
  pager: [];
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
              <chakra.a
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="100%"
                color="textSub"
                _hover={{ color: 'blue.500' }}
              >
                <chakra.img
                  width="24"
                  height="24"
                  src="/images/icon_arrow_left.svg"
                  alt="前のページへ"
                />
              </chakra.a>
            </NextLink>
          </ListItem>
        )}
        {props.currentPage > 3 && (
          <ListItem w="40px" h="40px" borderRadius="5px" m="4px">
            <NextLink href={getPath(1)}>
              <a>1</a>
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
                _hover={{ color: isActive ? '#fff' : '' }}
              >
                <NextLink href={getPath(page + 1)}>
                  <a>{page + 1}</a>
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
              <chakra.a>{props.pager.length}</chakra.a>
            </NextLink>
          </ListItem>
        )}
        {props.currentPage < props.pager.length && (
          <ListItem w="40px" h="40px" borderRadius="5px" m="4px 12px">
            <NextLink href={getPath(props.currentPage + 1)}>
              <chakra.a>
                <chakra.img
                  width="24"
                  height="24"
                  src="/images/icon_arrow_right.svg"
                  alt="次のページへ"
                />
              </chakra.a>
            </NextLink>
          </ListItem>
        )}
      </List>
    </Box>
  );
};
