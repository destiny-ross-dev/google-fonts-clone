import React, { useState, useEffect } from "react";
import FontListStyles from "./font-list.styles";
import FontCard from "../font-card/font-card.component";
import Helmet from "react-helmet";
import list from "./data";

const FontList = ({ displayText, fontSize }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await list;
      setData(res);
    };
    loadData();
  }, []);
  return (
    <FontListStyles.Container>
      {data &&
        data.map((e, i) => {
          return (
            <FontCard
              key={e.family}
              displayText={displayText}
              fontSize={fontSize}
              fontFamily={e.family}
            />
          );
        })}
      <FontCard
        displayText={displayText}
        fontFamily="Tangerine"
        fontSize={fontSize}
      />
    </FontListStyles.Container>
  );
};

export default FontList;
