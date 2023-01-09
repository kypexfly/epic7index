import { Dispatch, memo } from "react";
import { Hero } from "../../hooks/types";

type HeroCardProp = {
  hero: Hero;
  isSelected: boolean;
  setSelectedId: Dispatch<React.SetStateAction<string>>;
};

const HeroCard = ({ hero, isSelected, setSelectedId }: HeroCardProp) => {
  let heroClassName = "hero__card";
  if (isSelected) {
    heroClassName += " active";
  }
  const handleSelectedId = (id:string) => {
    if (isSelected) {
      setSelectedId("")
      return
    }
    setSelectedId(id)
  }

  const src = {
    role: encodeURI(`/assets/roles/${hero.role}.png`),
    attribute: encodeURI(`/assets/attributes/${hero.attribute}.png`),
    rarity: encodeURI(`/assets/rarity/${hero.rarity}.png`)
  }
  
  return (
    <div className={heroClassName} onClick={() => handleSelectedId(hero.id)}>
      <div className="relative">
      <div className="overlay_icons" style={{
          backgroundImage: `url(${src.role}), url(${src.attribute}), url(${src.rarity})`
        }}></div>
      <img
        width={96}
        height={96}
        src={`https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/face/${hero.id}_s.png`}
      />
      </div>
      <small>{hero.name}</small>
    </div>
  );
};

export default memo(HeroCard);
