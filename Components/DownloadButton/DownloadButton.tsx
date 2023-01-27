import { DownloadButtonProps } from "./DownloadButton.types";
import { useCallback } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./DownloadButton.styles";

const DownloadButton = ({
  titleText,
  subtitleText,
  logoPath,
  shouldTint = true,
}: DownloadButtonProps) => {
  const didPres = useCallback(() => console.log(`did tap ${titleText}`), []);
  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={didPres}>
      <View style={styles.container}>
        <Image
          style={[styles.logo, { tintColor: shouldTint ? "white" : null }]}
          source={logoPath}
        />
        <View style={styles.textContainer}>
          <Text style={styles.subtitleText}>{subtitleText}</Text>
          <Text style={styles.titleText}>{titleText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DownloadButton;
