import React from "react";
import { Helmet } from "react-helmet-async";
import { MAIN_TITLE } from "../texture/constants";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{`${MAIN_TITLE} | ${title.toUpperCase()}`}</title>
    </Helmet>
  );
};

export default PageTitle;
