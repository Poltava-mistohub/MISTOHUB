import { nanoid } from 'nanoid';

import { BackgroundContainer } from './Background.styled';
import { images } from '../../../constants/JoinUsBackground';

const Background = () => {
  return (
    <BackgroundContainer>
      {images.map((image) => (
        <picture key={nanoid()}>
          <source
            srcSet={image.webpRetina}
            type="image/webp"
            media="(min-resolution: 192dpi)"
          />
          <source srcSet={image.webp} type="image/webp" />
          <source
            srcSet={image.jpgRetina}
            type="image/jpg"
            media="(min-resolution: 192dpi)"
          />
          <source srcSet={image.jpg} type="image/jpg" />
          <image.className
            src={image.jpg}
            loading="lazy"
            alt={image.description}
          />
        </picture>
      ))}
    </BackgroundContainer>
  );
};

export default Background;
