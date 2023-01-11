import { useFetchArtifact } from "../hooks/useFetch";
import { useAppStore } from "../store/useStore";
import skillDescription from "../utils/skillDescription";
import Loader2 from "./Loader2";

const ArtifactDetail = ({id = ""}) => {
  const selectedId = useAppStore((state) => state.selectedId) || id;

  const { data: artifact, isLoading, isError } = useFetchArtifact(selectedId);
  // console.log(artifact)

  if (isError)
    return (
      <div className="bg-red-100 text-red-800 mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
        <p><strong>ERROR!</strong> Artifact not found. Try it on <a className="underline" href="https://epic7x.com/">Epic7x!</a></p>
      </div>
    );

  if (isLoading) return <Loader2 />

  return (
    <>
      {/* Header */}
      <header className="flex gap-5 w-full min-h-[7rem] items-center">
        <img src={artifact.assets.icon} width={100} height={110} alt="" />
        <div>
          <h1 className="my-3 text-4xl">
            {artifact.name}
          </h1>

          <p className="my-1 text-sm ">{artifact.description}</p>
        </div>
      </header>

      {/* Artifact properties */}
      <div className="flex flex-wrap gap-5 mt-3 mb-5 justify-evenly items-center max-w-[640px]">
        <span>
          <img
            src={`/assets/roles/${artifact.role}.png`}
            className="inline-block align-middle mr-1"
            width={20}
            height={20}
            alt=""
          />
          <small> {artifact.role}</small>
        </span>
        <span>
          <img
            src={`/assets/rarity/${artifact.rarity}.png`}
            className="h-[20px] inline-block align-middle mr-1"
            alt=""
          />
          <small> {artifact.rarity} stars</small>
        </span>
      </div>

      <hr />

      {/* Info */}
      <h2 className="text-m uppercase font-bold">Skill description</h2>
      <p>{skillDescription(artifact.skill.description, artifact.skill.enhancements[0])}</p>

      <hr />
      <h2 className="text-m uppercase font-bold">Stats</h2>
      <ul className="list-inside text-sm mt-4 flex flex-wrap justify-evenly gap-4">
        <li className="flex gap-2 items-center p-2 bg-slate-200 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <img src="https://assets.epicsevendb.com/_source/img/cm_icon_stat_att.png"
                className="w-5 h-5" />
            <span className="font-bold">Attack</span> {artifact.stats.attack}
        </li>
        <li className="flex gap-2 items-center p-2 bg-slate-200 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <img src="https://assets.epicsevendb.com/_source/img/cm_icon_stat_max_hp.png" className="w-5 h-5" />
            <span className="font-bold">Health</span> {artifact.stats.health}
        </li>
      </ul>

      <hr />

      <h2 className="text-m uppercase font-bold">Illustration</h2>
      <div className="my-3 flex justify-center">
        <img width={378} height={598} src={artifact.assets.image} alt="" />
      </div>

    </>
  );
};

export default ArtifactDetail;
