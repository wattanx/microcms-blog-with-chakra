import { Box } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { IBanner } from '@/types';

type BannerProps = {
  banner: IBanner;
};

export const Banner: React.FC<BannerProps> = ({ banner }) => {
  return (
    <Box textAlign={{ xl: 'center' }}>
      <chakra.a
        href={
          banner?.url
            ? `${banner.url}?utm_source=google&utm_medium=content-text&utm_campain=remarketing`
            : ''
        }
      >
        <chakra.picture>
          <chakra.source
            type="image/webp"
            srcSet={`${banner.image.url}?w=300&fm=webp,${banner.image.url}?w=600&fm=webp 2x`}
          />
          <chakra.img
            width="300px"
            borderRadius="5px"
            src={banner?.image?.url}
            className={`lazyload`}
            alt={banner?.alt}
          />
        </chakra.picture>
      </chakra.a>
    </Box>
  );
};
