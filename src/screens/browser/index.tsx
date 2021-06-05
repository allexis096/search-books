import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

type BrowserProps = {
  route: {
    params: {
      url: string;
    };
  };
};

function Browser({ route }: BrowserProps) {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: route.params.url }} />
    </View>
  );
}

export { Browser };
