import React from "react";
import { render, waitFor } from "@testing-library/react";
import PageTitle from "./index";
import { HelmetProvider } from "react-helmet-async";
import { MAIN_TITLE } from "../texture/constants";

test("제목이는 받은 프롭스의 제목이어야 한다.", async () => {
  const fakeTitle = "fakeTitle";

  render(
    <HelmetProvider>
      <PageTitle title={fakeTitle} />
    </HelmetProvider>
  );

  await waitFor(() => {
    expect(document.title).toBe(`${MAIN_TITLE} | ${fakeTitle.toUpperCase()}`);
  });
});
