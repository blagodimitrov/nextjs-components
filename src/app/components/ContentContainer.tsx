import React from "react";

interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div
      style={{
        padding: "1.2rem",
        paddingTop: "2rem",
        width: "100%",
        maxWidth: "74rem",
        height: "5vh",
        alignSelf: "center",
      }}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
