import { useState, createContext } from "react";
import * as DocumentPicker from "expo-document-picker";
import { Alert } from "react-native";
export const UploadContext = createContext<any>(null);

export interface UploadProviderProps {
  children: React.ReactNode;
}

export const UploadContextProvider: React.FC<UploadProviderProps> = (props) => {
  const [imageStore, setImageStore] = useState<String[]>([]);
  const [csvStorage, setCsvStorage] = useState<String[]>([]);

  const pickCSv = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    const { type } = result;
    if (type === "success") {
      const { uri, name } = result;
      const extension = uri.split(".").pop();
      if (extension === "csv") {
        setCsvStorage((prevData) => [...prevData, name]);
      } else if (extension === "png") {
        setImageStore((prevData) => [...prevData, uri]);
      } else {
        Alert.alert("Warning", "File Wrong");
      }
    }
  };

  return (
    <UploadContext.Provider
      value={{ imageStore, setImageStore, pickCSv, csvStorage, setCsvStorage }}
    >
      {props.children}
    </UploadContext.Provider>
  );
};
