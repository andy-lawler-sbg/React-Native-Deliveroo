import { Text } from "react-native";
import styles from "./TitleText.styles";

const TitleText = () => {
  return (
    <Text style={styles.text}>
      Restaurant food, takeaway and groceries.{" "}
      <Text style={styles.color}>Delivered.</Text>
    </Text>
  );
};

export default TitleText;
