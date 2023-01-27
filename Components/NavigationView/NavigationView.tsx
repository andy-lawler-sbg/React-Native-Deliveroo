import { View, Image, Text } from "react-native";
import styles from "./NavigationView.styles";
import NavigationBarButton from "../NavigationBarButton/NavigationBarButton";

const NavigationView = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/Deliveroo-Logo.png")}
      />
      <NavigationBarButton
        text="Sign up or log in"
        logoPath={require("../../assets/Home.png")}
      />
      <NavigationBarButton
        text="Menu"
        logoPath={require("../../assets/Hamburger.png")}
      />
    </View>
  );
};

export default NavigationView;
