import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import axios from "axios";
import FontListStyles from "./font-list.styles";
import FontCard from "../font-card/font-card.component";
import list from "./data";

const FontList = ({ displayText, fontSize, searchQuery }) => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(12);
  //
  useEffect(() => {
    const getPage = async () => {
      const res = await axios.get(`/fonts?offset=${offset}`);
      setData([...data, ...res.data.arr]);
    };
    getPage();
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", function() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("you're at the bottom of the page");
        setOffset(offset + 12);

        //show loading spinner and make fetch request to api
      }
    });
  });

  return (
    <FontListStyles.Container>
      <h2>
        Viewing <span>{data.length}</span> of 960 Total Fonts
      </h2>
      {data.map((e, i) => {
        return (
          <FontCard
            key={i}
            displayText={displayText}
            fontSize={fontSize}
            fontFamily={e.family || ""}
            category={e.category}
          />
        );
      })}
    </FontListStyles.Container>
  );
};

export default FontList;
