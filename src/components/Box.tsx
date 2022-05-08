import React, { PropsWithChildren } from "react";

const Box = ({children} : PropsWithChildren<React.ReactNode>)=> {
  return <div>{children}</div>;
};

export default Box;
