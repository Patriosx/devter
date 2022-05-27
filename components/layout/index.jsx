import React from "react";
import styles, { globalStyles } from "../../styles/styles";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>

      {/****** STYLES ******/}
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default Layout;
