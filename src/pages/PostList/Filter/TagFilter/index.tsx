import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { getCategoryQuery } from "../../../../recoil/postlist/selector";
import TagFilterBody from "./TagFilterBody";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const TagFilter = () => {
  const loadableCate = useRecoilValueLoadable(getCategoryQuery);

  switch (loadableCate.state) {
    case "loading":
      return <LoadingSpinner />;
    case "hasValue":
      return <TagFilterBody tagNameList={loadableCate.contents} />;
    case "hasError":
      return <div>error</div>;
  }
};

export default TagFilter;
