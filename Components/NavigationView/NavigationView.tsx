import { View, Image } from "react-native";
import styles from "./NavigationView.styles";
import NavigationBarButton from "../NavigationBarButton/NavigationBarButton";

const NavigationView = () => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require("../../assets/Deliveroo-Logo.png")}
    />
    <View style={styles.navBar}>
      <NavigationBarButton
        text="Sign up or log in"
        logoPath={require("../../assets/Home.png")}
      />
      <NavigationBarButton
        text="Menu"
        logoPath={require("../../assets/Hamburger.png")}
      />
    </View>
  </View>
);

export default NavigationView;
