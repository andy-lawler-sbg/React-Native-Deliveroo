import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./TrackOrdersCard.styles";
import DownloadButton from "../DownloadButton/DownloadButton";
import Spacer from "../Spacer/Spacer";

const TrackOrdersCard = () => {
  const headingText = "Track orders to your door";
  const descriptionText =
    "Get your favourite food delivered in a flash. You’ll see when your rider’s picked up your order, and be able to follow them along the way. You’ll get a notification when they’re nearby, too.";
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headingText}>{headingText}</Text>
        <Text style={styles.descriptionText}>{descriptionText}</Text>
        <View style={styles.downloadButtonContainer}>
          <DownloadButton
            titleText="App Store"
            subtitleText="Download on the"
            logoPath={require("../../assets/Apple.png")}
          />
          <Spacer marginAmount={3} />
          <DownloadButton
            titleText="Google Play"
            subtitleText="GET IT ON"
            shouldTint={false}
            logoPath={require("../../assets/GooglePlay.png")}
          />
        </View>
        <ImageBackground
          style={styles.mapImage}
          source={require("../../assets/Map.webp")}
        >
          <Image
            style={styles.riderImage}
            source={require("../../assets/Rider.webp")}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default TrackOrdersCard;
