import { PropsWithChildren } from "react";
import { StatusBar } from "expo-status-bar";
import styles from "./SafeAreaWrapper.styles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SafeAreaWrapper = ({ children }: PropsWithChildren) => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      {children}
    </SafeAreaView>
  </SafeAreaProvider>
);

export default SafeAreaWrapper;
