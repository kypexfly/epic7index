import { useState } from "react";
import SearchBar from "../components/SearchBar";

const ArtifactsPage = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <SearchBar setSearch={setSearch} />
    </>
  );
};

export default ArtifactsPage;
