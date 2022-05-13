import { Link } from 'react-scroll';
import { Box, Heading, List, ListItem } from '@chakra-ui/layout';

import { TocTypes } from 'types';

type TocProps = {
  toc: TocTypes[];
};

const getMarginLeft = (name: string) => {
  if (name === 'h2') {
    return '10px';
  }
  if (name === 'h3') {
    return '20px';
  }
  return '';
};

export const Toc: React.FC<TocProps> = (props) => {
  return (
    <Box bgColor="#f7f7fc" borderRadius="5px" p="20px" mb="40px">
      <Heading as="h4" fontSize="16px" fontWeight="bold" m="0 0 10px" borderRadius="5px">
        <List>
          {props.toc.map((x) => {
            const ml = getMarginLeft(x.name);
            return (
              <ListItem
                key={x.id}
                className={`${x.name}`}
                p="5px 0"
                fontSize="14px"
                ml={ml}
                borderBottom="1px solid #e7e7f3"
              >
                <Box
                  _hover={{ color: 'link' }}
                  _before={{ content: '""', mr: '5px', color: '#cacae7' }}
                  as={Link}
                  to={`${x.id}`}
                >
                  {x.text}
                </Box>
              </ListItem>
            );
          })}
        </List>
      </Heading>
    </Box>
  );
};
