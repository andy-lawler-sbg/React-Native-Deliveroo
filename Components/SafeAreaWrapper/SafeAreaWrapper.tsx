import { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./SafeAreaWrapper.styles";

const SafeAreaWrapper = ({ children }: PropsWithChildren) => (
  <SafeAreaView style={styles.safeArea}>
    <StatusBar style="light" />
    {children}
  </SafeAreaView>
);

export default SafeAreaWrapper;
