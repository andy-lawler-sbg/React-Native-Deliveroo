import { TouchableOpacity, Text, Image } from "react-native";
import { useCallback } from "react";
import { NavigationBarButtonProps } from "./NavigationBarButton.types";
import styles from "./NavigationBarButton.styles";
import Spacer from "../Spacer/Spacer";

const NavigationBarButton = ({ text, logoPath }: NavigationBarButtonProps) => {
  const didPress = useCallback(() => console.log(`Pressed ${text}`), []);
  return (
    <TouchableOpacity style={styles.navBarButtonContainer} onPress={didPress}>
      <Image source={logoPath} style={styles.icon} />
      <Spacer marginAmount={3} />
      <Text style={{ fontSize: 10, fontWeight: "500" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NavigationBarButton;
