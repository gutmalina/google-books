import { FC } from "react";
import { TPropsIcon } from "../utils/types";

const IconClose: FC<TPropsIcon> = ({onClick}) => {
  return (
    <section onClick={onClick} style={{ cursor: "pointer" }}>
      <svg
        id="Close"
        width="20px"
        height="20px"
        enableBackground="new 0 0 128 128"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m71.1 64 42.9 42.9-7.1 7.1-42.9-42.9-42.9 42.9-7.1-7.1 42.9-42.9-42.9-42.9 7.1-7.1 42.9 42.9 42.9-42.9 7.1 7.1z" />
      </svg>
    </section>
  );
};

export default IconClose;
