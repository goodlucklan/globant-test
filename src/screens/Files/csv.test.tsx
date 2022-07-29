import CSVScreen from "./Csv.screen";

describe("CSVScreen test", () => {
  test("render a Screen Component", () => {
    expect(<CSVScreen />).toMatchSnapshot();
  });
});
