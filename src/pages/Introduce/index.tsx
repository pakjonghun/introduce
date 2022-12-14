import React from "react";
import MainLayout from "../../components/MainLayout";
import Header from "./Header";
import ScrollIndicator from "./ScrollIndicator";
import TemtationButton from "./TemtationButton";
import WhoAmISection from "./WhoAmISection";
import useSetIsSwitchingPageFalse from "./hooks/useSetIsSwitchingPageFalse";
import useSetScrollTopAndDirection from "./hooks/useSetScrollTopAndDirection";
import ProjectsSection from "./ProjectsSection";
import Footer from "./Footer";

const Introduce = () => {
  useSetScrollTopAndDirection();
  useSetIsSwitchingPageFalse();

  return (
    <MainLayout title='Introduce'>
      <ScrollIndicator />
      <Header />
      <WhoAmISection />
      <ProjectsSection />
      <TemtationButton />
      <Footer />
    </MainLayout>
  );
};

export default Introduce;
