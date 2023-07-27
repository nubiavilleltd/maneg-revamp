import { DotLoader } from "react-spinners";
import { CSSProperties } from "react";

const Preloader = () => {
  const color: string = "#0c6748";
  const loading: boolean = true;

  const override: CSSProperties = {
    display: "block",
    marginTop: "22%",
    marginLeft: "48%",
  };

  return (
    <DotLoader
      color={color}
      loading={loading}
      size={50}
      cssOverride={override}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Preloader;
