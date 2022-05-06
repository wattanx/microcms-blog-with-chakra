import { chakra } from '@chakra-ui/system';
import { useRouter } from 'next/dist/client/router';

export const Search: React.FC = () => {
  const router = useRouter();

  const onEnterKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value.trim()) {
      return;
    }
    if (e.key === 'Enter') {
      router.push(`/search?q=${e.currentTarget.value}`);
    }
  };

  return (
    <chakra.label display="block" fontSize="14px" fontWeight="bold" color="textSub">
      サイト内検索
      <chakra.input
        border="1px solid border"
        width="100%"
        height="40px"
        boxSize="border-box"
        mt="5px"
        pl="40px"
        boxShadow="none"
        sx={{ WebkitAppearance: 'none' }}
        transition="box-shadow 0.2s ease"
        borderRadius="5px"
        fontSize="4"
        bg="url('/images/icon_search.svg') no-repeat 10px center, colorBgPurpleLight"
        _hover={{ boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1) inset' }}
        _focus={{ outline: 'none', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1) inset' }}
        type="text"
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => onEnterKeyEvent(e)}
      />
    </chakra.label>
  );
};
