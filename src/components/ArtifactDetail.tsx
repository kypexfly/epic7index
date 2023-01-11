import { RotatingLines } from "react-loader-spinner";
import { useFetchArtifact } from "../hooks/useFetch";
import { useAppStore } from "../store/useStore";
import skillDescription from "../utils/skillDescription";

const HeroDetail = () => {
  const selectedId = useAppStore((state) => state.selectedId);

  const { data: artifact, isLoading, isError } = useFetchArtifact(selectedId);
  // console.log(artifact)

  if (isError)
    return (
      <p>
        Error: Artifact not found. Try on <a className="underline" href="epic7x.com/">Epic7x!</a>
      </p>
    );

  if (isLoading)
    return (
      <div className="flex h-40 justify-center">
        <RotatingLines
          strokeColor="#2563eb"
          strokeWidth="5"
          animationDuration="0.75"
          width="32"
          visible={true}
        />
      </div>
    );

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
      <div className="flex flex-wrap gap-5 mt-3 mb-5 justify-evenly items-center">
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

export default HeroDetail;
