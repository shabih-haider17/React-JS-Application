import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  OnClick: () => void;
}

const Button = ({ children, OnClick }: Props) => {
  return (
    <>
      <button className="btn btn-primary" onClick={OnClick}>
        {children}
      </button>
      <br />
      <br />
      <button className="btn btn-warning" onClick={OnClick}>
        {children}
      </button>
      <br />
      <br />
      <button className="btn btn-success" onClick={OnClick}>
        {children}
      </button>
      <br />
      <br />
      <button className="btn btn-danger" onClick={OnClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
