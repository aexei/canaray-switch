import { fireEvent, render } from "@testing-library/react";

import CanarySwitch from "./CanarySwitch";
import { CanarySwitchProps } from "./CanarySwitch.types";
import React from "react";

describe("Test Component", () => {
  let props: CanarySwitchProps;

  beforeEach(() => {
    props = {
      cookieName: "canary",
    };
  });

  const renderComponent = () =>
    render(
      <CanarySwitch data-testid="canary-switch" {...props}>
        <input data-testid="canary-checkbox" type="checkbox"></input>
      </CanarySwitch>
    );

  it("should render default off", () => {
    const { getByTestId } = renderComponent();
    const input = getByTestId("canary-checkbox");
    expect(input).not.toBeChecked();
    expect(input).
  });

  it("should activate canary", () => {
    const { getByTestId } = renderComponent();
    const cswitch = getByTestId("canary-switch");
    const input = getByTestId("canary-checkbox");
    expect(input).not.toBeChecked();
    expect(cswitch).toHaveAttribute("data-canray", "false");
    fireEvent(
      input,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(input).toBeChecked();
    expect(cswitch).toHaveAttribute("data-canray", "true");
  });
  
});
