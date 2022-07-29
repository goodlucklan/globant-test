import { ScrollView, View, Text } from "react-native";
import React, { useContext } from "react";
import { UploadContext } from "../../config/uploadFiles.context";
import { styles } from "./Csv.styles";

const CSVScreen = () => {
  const { csvStorage } = useContext<UploadContextProps>(UploadContext);
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
      style={styles.scrollStyle}
    >
      {csvStorage.map((file, index) => (
        <View key={index} style={styles.imageStyle}>
          <Text style={styles.textStyle}>{file.toString()}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CSVScreen;
