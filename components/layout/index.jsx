import React from "react";

const index = ({ children }) => {
  return (
    <main>
      {children}
      <style jsx global>
        {`
          h1 {
            color: #0070f3;
          }
        `}
      </style>
    </main>
  );
};

export default index;
