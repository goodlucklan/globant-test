import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigator/TabNavigator";
import { UploadContextProvider } from "./src/config/uploadFiles.context";
interface Props {
  className?: string;
}

const App: React.FC<Props> = (props) => {
  return (
    <UploadContextProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </UploadContextProvider>
  );
};

export default App;
