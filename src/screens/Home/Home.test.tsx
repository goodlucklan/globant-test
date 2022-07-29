import HomeScreen from "./Home.screen";

describe("HomeScreen test", () => {
  test("render a Screen Component", () => {
    expect(<HomeScreen />).toMatchSnapshot();
  });
});
