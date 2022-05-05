import { Box } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';

export const Loader: React.FC = () => {
  return (
    <Box
      color="#ccc"
      textAlign="center"
      fontSize={{ base: '16px', xl: '20px' }}
      p={{ base: '20px', xl: '150px' }}
    >
      <chakra.img width="38px" height="38px" src="/images/icon_loading.svg" alt="検索中" />
    </Box>
  );
};
