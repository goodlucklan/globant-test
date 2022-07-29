import { View, Text, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { styles } from "./Home.styles";
import Button from "../../components/Button/Button";
import { UploadContext } from "../../config/uploadFiles.context";

const HomeScreen = () => {
  const { pickCSv } = useContext<UploadContextProps>(UploadContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.textStyle}>Upload a file png or csv</Text>
        <Button onPress={pickCSv}>Upload</Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
