import { RotatingLines } from "react-loader-spinner";
import { useFetchHero } from "../hooks/useFetch";
import { useAppStore } from "../store/useStore";
import skillDescription from "../utils/skillDescription";

const HeroDetail = () => {
  const selectedId = useAppStore((state) => state.selectedId);

  const { data: hero, isLoading, isError } = useFetchHero(selectedId);
  console.log(hero)

  if (isError)
    return (
      <p>
        Error: Hero not found. Try on <a href="epic7x.com/">Epic7x!</a>
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
        <img src={hero.assets.icon} width={100} alt="" />
        <div>
          <h1 className="my-3 text-4xl">
            {hero.name} <span className="badge-gray">{hero.id}</span>
          </h1>

          <p className="my-1 text-sm ">{hero.description}</p>
        </div>
      </header>

      {/* Hero properties */}
      <div className="flex flex-wrap gap-5 mt-3 mb-5 justify-evenly items-center">
        <span>
          <img
            src={`/assets/attributes/${hero.attribute}.png`}
            className="inline-block align-middle mr-1"
            width={20}
            height={20}
            alt=""
          />
          <small> {hero.attribute}</small>
        </span>
        <span>
          <img
            src={`/assets/roles/${hero.role}.png`}
            className="inline-block align-middle mr-1"
            width={20}
            height={20}
            alt=""
          />
          <small> {hero.role}</small>
        </span>
        <span>
          <img
            src={`/assets/zodiacs/${hero.zodiac}.png`}
            className="inline-block align-middle mr-1"
            width={20}
            height={20}
            alt=""
          />
          <small>{hero.zodiac}</small>
        </span>
        <span>
          <img
            src={`/assets/rarity/${hero.rarity}.png`}
            className="h-[20px] inline-block align-middle mr-1"
            alt=""
          />
          <small> {hero.rarity} stars</small>
        </span>
      </div>

      {/* Info */}
      <h2 className="text-m uppercase font-bold">{hero.name}'s story</h2>
      <p>{hero.story}</p>

      <hr />

      {/* Skills */}
      <div className="flex flex-col gap-3">
        <h2 className="text-m uppercase font-bold">Skills</h2>
        {hero.skills.map((skill) => (
          <div
            className="skill__card"
            key={skill._id}>
            <img src={skill.assets.icon} width={82} height={84} alt="" />
            <div>
              <h3 className="text-xl">{skill.name} </h3>
              {skill.passive && <span className="badge-gray">Passive</span>}
              {skill.soul_gain !==0 ? <span className="badge-gray">+{skill.soul_gain} souls</span> : null}
              {skill.cooldown !== 0 ? <span className="badge-gray">{skill.cooldown} turn cooldown</span> : null}
              <p className="mt-3 text-sm ">{skillDescription(skill.description, skill.values, 0)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <hr />

      <h2 className="text-m uppercase font-bold">Specialty Skill</h2>
      <div className="flex gap-5 w-full py-4 items-center">
          <img src={hero.specialty.assets.icon} width={74} height={74} alt=""/>
          <div>
              <h3 className="text-xl">{ hero.specialty.name }</h3>

              <p className="my-1 text-sm ">{ hero.specialty.description }</p>
              {hero.specialty.type && <span className="badge-gray">{ hero.specialty.type.name } </span>}
              {hero.specialty.effect_type && <span className="badge-gray">
                  { hero.specialty.effect_type === 'reward_bonus' ? 'Reward Bonus' : 'Time Reduce'}
                  {" "}
                  { hero.specialty.effect_value * 100 }%
              </span>}
          </div>
      </div> */}

    </>
  );
};

export default HeroDetail;
