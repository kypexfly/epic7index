import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { Artifact } from "../../hooks/types";
import { useAppStore } from "../../store/useStore";

type ArtifactCardProp = {
  artifact: Artifact;
  isSelected: boolean;
};

const ArtifactCard = ({ artifact, isSelected }: ArtifactCardProp) => {
  const setSelectedId = useAppStore((state) => state.setSelectedId);
  let artifactClassName = "hero__card";
  if (isSelected) {
    artifactClassName += " active";
  }
  const handleSelectedId = (id: string) => {
    if (isSelected) {
      setSelectedId("");
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
      onClick={() => handleSelectedId(artifact.id)}
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
          width={96}
          height={96}
          src={`https://res.cloudinary.com/ceciliabot/image/upload/epic-seven/item_arti/icon_${artifact.id}.png`}
        />
      </div>
      <small>{artifact.name}</small>
    </div>
  );
};

export default memo(ArtifactCard);
