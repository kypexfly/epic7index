import { useParams } from "react-router-dom";
import HeroDetail from "../components/HeroDetail";
const HeroPage = () => {
  const { id } = useParams()
  return (
    <div className="container mx-auto">
      <HeroDetail id={id} />
    </div>
  );
};

export default HeroPage;
