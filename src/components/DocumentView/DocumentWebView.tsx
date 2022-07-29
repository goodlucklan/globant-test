import { ActivityIndicator, View } from "react-native";
import { WebView } from "react-native-webview";
import { DocumentWebViewProps as Props } from "./DocumentWebView.interface";
import { pallete } from "../../styles/variables";
import { styles } from "./DocumentWebView.styles";

const WebViewDocument: React.FC<Props> = (props) => {
  const { url } = props;

  const activityIndicator = (
    <ActivityIndicator color={pallete.red} size="large" />
  );

  const renderLoading = () => (
    <View style={styles.content}>{activityIndicator}</View>
  );

  return (
    <View style={styles.container}>
      <WebView
        startInLoadingState={true}
        renderLoading={renderLoading}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

export default WebViewDocument;
