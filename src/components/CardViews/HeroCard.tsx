import { Dispatch, memo } from 'react';
import { Hero } from '../../hooks/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { useAppStore } from '../../store/useStore';

type HeroCardProp = {
  hero: Hero;
  isSelected: boolean};

const HeroCard = ({ hero, isSelected }: HeroCardProp) => {
  const setSelectedId = useAppStore(state => state.setSelectedId)
  let heroClassName = 'hero__card';
  if (isSelected) {
    heroClassName += ' active';
  }
  const handleSelectedId = (_id: string) => {
    if (isSelected) {
      setSelectedId('');
      return;
    }
    setSelectedId(_id);
  };

  const src = {
    role: encodeURI(`/assets/roles/${hero.role}.png`),
    attribute: encodeURI(`/assets/attributes/${hero.attribute}.png`),
    rarity: encodeURI(`/assets/rarity/${hero.rarity}.png`),
  };

  return (
    <div className={heroClassName} onClick={() => handleSelectedId(hero._id)}>
      <div className="relative">
        <div
          className="overlay_icons_hero"
          style={{
            backgroundImage: `url(${src.role}), url(${src.attribute}), url(${src.rarity})`,
          }}
        ></div>
        <LazyLoadImage
          effect="opacity"
          width={84}
          height={84}
          src={`https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/face/${hero.id}_s.png`}
        />
      </div>
      {/* <small>{hero.name}</small> */}
    </div>
  );
};

export default memo(HeroCard);
