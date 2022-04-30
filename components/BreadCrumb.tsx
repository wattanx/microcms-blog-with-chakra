import NextLink from 'next/link';
import { List, ListItem } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { ICategory, ITag } from '@/types';

type BreadCrumbProps = {
  category?: ICategory;
  tag?: ITag;
};

const BreadCrumbList: React.FC<{ children: React.ReactNode; href: string }> = ({
  children,
  href,
}) => (
  <ListItem
    color="#616269"
    _after={{ content: '">"', my: 0, mx: '10px' }}
    _last={{ _after: { content: '""', margin: 0 } }}
  >
    <NextLink href={href} passHref prefetch={false}>
      <chakra.a color="#331cbf">{children}</chakra.a>
    </NextLink>
  </ListItem>
);

export const BreadCrumb: React.FC<BreadCrumbProps> = (props) => {
  const hasCategory = (category?: ICategory) => {
    if (!category) {
      return false;
    }
    return Object.keys(category).length > 0;
  };

  const hasTag = (tag?: ITag) => {
    if (!tag) {
      return false;
    }
    return Object.keys(tag).length > 0;
  };

  return (
    <List display="flex" flexWrap="wrap" pt="20px">
      <BreadCrumbList href="/">記事一覧</BreadCrumbList>
      {hasCategory(props.category) && (
        <BreadCrumbList href={`/category/${props.category?.id}/page/1`}>
          {props.category?.name}
        </BreadCrumbList>
      )}
      {hasTag(props.tag) && (
        <BreadCrumbList href={`/tag/${props.tag?.id}/page/1`}>{props.tag?.name}</BreadCrumbList>
      )}
    </List>
  );
};
