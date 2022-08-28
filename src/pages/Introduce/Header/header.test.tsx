import React from "react";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { INTRODUCE_TEXT, TIL_ENTER_TEXT } from "../../../texture/constants";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import "jest-styled-components";
import useGetCountingNumber, {
  UseGetCountingNumberProps,
} from "../../../hooks/useGetCountingNumber";
import { act } from "react-dom/test-utils";
import EnterButtons from "./EnterButton";

test("헤더에 배경이 투명인 버튼은 2개다. 가 페이드인 된다", () => {
  render(
    <ThemeProvider theme={theme}>
      <EnterButtons />
    </ThemeProvider>
  );

  const tilButton = screen.getByRole("button", { name: TIL_ENTER_TEXT });
  const introduceButton = screen.getByRole("button", { name: INTRODUCE_TEXT });

  expect(tilButton).toHaveStyleRule("background-color", "transparent");
  expect(introduceButton).toHaveStyleRule("background-color", "transparent");
});

test("개발 일수는 타이머 종료 후 endNumber 가 출력되어야 한다", async () => {
  jest.useFakeTimers();
  jest.spyOn(global, "setInterval");
  jest.spyOn(global, "setTimeout");

  const endNumber = 2000;
  const duration = 2000;
  const isAniStart = true;

  const { result } = renderHook(
    (initProps: UseGetCountingNumberProps) => useGetCountingNumber(initProps),
    { initialProps: { endNumber, duration, isAniStart } }
  );

  expect(result.current).toBe(0);

  act(() => {
    jest.runAllTimers();
  });

  await waitFor(() => {
    expect(result.current).toBe(2000);
  });

  jest.clearAllMocks();
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
