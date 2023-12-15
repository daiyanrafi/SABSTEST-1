import * as React from "react";


interface GridHeaderProps {
  title: string;
}

const GridHeader: React.FC<GridHeaderProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default GridHeader;
