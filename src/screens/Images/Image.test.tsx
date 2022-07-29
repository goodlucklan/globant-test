import ImageScreen from "./Images.screen";

describe("HomeScreen test", () => {
  test("render a Screen Component", () => {
    expect(<ImageScreen />).toMatchSnapshot();
  });
});
