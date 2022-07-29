import Button from "./Button";

describe("Button Component", () => {
  test("render a global Component", () => {
    expect(<Button />).toMatchSnapshot();
  });
});
