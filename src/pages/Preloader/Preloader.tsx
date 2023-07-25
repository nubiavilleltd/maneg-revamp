import { DotLoader } from "react-spinners";
import ReactDOM from "react-dom";
import { CSSProperties } from "react";

const Preloader = () => {
  const color: string = "#ffffff";
  const loading: boolean = true;

  const portalElement: Element | DocumentFragment = document.getElementById(
    "loader"
  ) as HTMLElement;

  const override: CSSProperties = {
    display: "block",
  };

  return (
    <>
      {ReactDOM.createPortal(
        <DotLoader
          color={color}
          loading={loading}
          size={150}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />,
        portalElement
      )}
    </>
  );
};

export default Preloader;
