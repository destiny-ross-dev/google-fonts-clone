import React, { Suspense, useEffect } from "react";
import FontListStyles from "./font-list.styles";
import Loader from "../loader/loader.component";
import { LOAD_ON_SCROLL, LOAD_ON_INIT } from "../../config";

const FontCard = React.lazy(() => import("../font-card/font-card.component"));
const FontList = ({
  data,
  displayText,
  fontSize,
  searchQuery,
  setOffset,
  offset
}) => {
  useEffect(() => {
    const loadMore = () => {
      if (searchQuery.length > 0) {
        // setOffset(LOAD_ON_INIT);
        return;
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setOffset(offset + LOAD_ON_SCROLL);
      }
    };

    window.addEventListener("scroll", loadMore);
    return () => {
      setOffset(LOAD_ON_INIT);
      window.removeEventListener("scroll", loadMore);
    };
  }, [searchQuery, offset, setOffset]);

  return (
    <FontListStyles.Container>
      <h2>
        Viewing <span>{data.length}</span> of 960 Total Fonts
      </h2>

      <Suspense fallback={<Loader />}>
        {data.map((e, i) => {
          return (
            <FontCard
              key={i}
              displayText={displayText}
              fontSize={fontSize}
              fontFamily={e.family}
              category={e.category}
            />
          );
        })}
      </Suspense>
    </FontListStyles.Container>
  );
};

export default FontList;
