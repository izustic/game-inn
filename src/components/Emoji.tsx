import React from 'react';
import star from '../assets/pngegg.png';
import { Image, ImageProps, HStack } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    1: { src: star, alt: 'poor' },
    2: { src: star, alt: 'meh' },
    3: { src: star, alt: 'average' },
    4: { src: star, alt: 'recommended' },
    5: { src: star, alt: 'exceptional' },
  };

  const renderStars = (count: number): React.ReactNodeArray => {
    return Array.from({ length: count }, (_, index) => (
      <Image key={index} {...emojiMap[rating]} boxSize='15px' marginTop={2} />
    ));
  };

  return <HStack spacing={1}>{renderStars(rating)}</HStack>;
};

export default Emoji;
