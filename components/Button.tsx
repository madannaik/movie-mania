import React, { ReactChild, ReactChildren } from "react";

export const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <button className={`pure-material-button-contained ${className}`}>
      {children}
    </button>
  );
};
