import { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Artifact } from '../../hooks/types';
import { useAppStore } from '../../store/useStore';

type ArtifactCardProp = {
  artifact: Artifact;
  isSelected: boolean;
};

const ArtifactCard = ({ artifact, isSelected }: ArtifactCardProp) => {
  const setSelectedId = useAppStore((state) => state.setSelectedId);
  let artifactClassName = 'hero__card';
  if (isSelected) {
    artifactClassName += ' active';
  }
  const handleSelectedId = (id: string) => {
    if (isSelected) {
      setSelectedId('');
      return;
    }
    setSelectedId(id);
  };

  const src = {
    role: encodeURI(`/assets/roles/${artifact.role}.png`),
    rarity: encodeURI(`/assets/rarity/${artifact.rarity}.png`),
  };

  return (
    <div
      className={artifactClassName}
      onClick={() => handleSelectedId(artifact._id)}
    >
      <div className="relative">
        <div
          className="overlay_icons_art"
          style={{
            backgroundImage: `url(${src.role}), url(${src.rarity})`,
          }}
        ></div>
        <LazyLoadImage
          effect="opacity"
          width={84}
          height={84}
          src={`https://raw.githubusercontent.com/CeciliaBot/E7Assets-Temp/main/assets/item_arti/icon_${artifact.id}.png`}
        />
      </div>
    </div>
  );
};

export default memo(ArtifactCard);
