import React from "react";

const Box = ({children}: {children: React.ReactNode}) => {
  return ( <div style={{padding: "1rem", fontWeight: "bold"}}>{children}</div> );
}

export default Box;