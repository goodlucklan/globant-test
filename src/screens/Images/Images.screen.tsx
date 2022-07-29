import { ScrollView, Image } from "react-native";
import React, { useContext } from "react";
import { styles } from "./Images.styles";
import { UploadContext } from "../../config/uploadFiles.context";

const FilesScreen = () => {
  const { imageStore } = useContext<UploadContextProps>(UploadContext);
  return (
    <ScrollView
      style={styles.scrollStyle}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {imageStore.map((image, index) => (
        <Image
          key={index}
          source={{
            uri: image.toString(),
          }}
          style={styles.imageStyle}
          resizeMode="stretch"
        />
      ))}
    </ScrollView>
  );
};

export default FilesScreen;
