import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="min-h-[95vh] flex flex-col justify-center items-center">
      <MutatingDots
        height="100"
        width="100"
        color="#2563eb"
        secondaryColor="#895ef6"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
