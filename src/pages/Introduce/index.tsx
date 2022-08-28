import React from "react";
import MainLayout from "../../components/MainLayout";
import useSetIsSwitchingPageFalse from "../../hooks/useSetIsSwitchingPageFalse";
import useSetScrollTopAndDirection from "../../hooks/useSetScrollTopAndDirection";
import Header from "./Header";
import ScrollIndicator from "./ScrollIndicator";
import TemtationButton from "./TemtationButton";
import WhoAmISection from "./WhoAmISection";

const Introduce = () => {
  useSetScrollTopAndDirection();
  useSetIsSwitchingPageFalse();

  return (
    <MainLayout title='Introduce'>
      <ScrollIndicator />
      <Header />
      <WhoAmISection />
      <TemtationButton />
    </MainLayout>
  );
};

export default Introduce;
