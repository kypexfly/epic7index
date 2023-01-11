import { useParams } from "react-router-dom";
import ArtifactDetail from "../components/ArtifactDetail";
const ArtifactPage = () => {
  const { id } = useParams()
  return (
    <div className="container mx-auto">
      <ArtifactDetail id={id} />
    </div>
  );
};

export default ArtifactPage;
