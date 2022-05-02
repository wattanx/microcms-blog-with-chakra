import { useMediaQuery as useChakraMediaQuery } from '@chakra-ui/media-query';
import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const [isLargerMinValue] = useChakraMediaQuery(query);

  useEffect(() => {
    if (isLargerMinValue !== isMinWidthMedium) {
      setIsMinWidthMedium(isLargerMinValue);
    }
  }, [isLargerMinValue]);

  return [isMinWidthMedium];
};
