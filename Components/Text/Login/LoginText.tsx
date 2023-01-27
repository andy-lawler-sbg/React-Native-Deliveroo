import { Text, Button } from "react-native";
import styles from "./LoginText.styles";

const LoginText = () => (
  <Text style={styles.text}>
    <Text style={styles.color}>Log in </Text>
    for your recent addresses.
  </Text>
);

export default LoginText;
