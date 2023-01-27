import { View } from "react-native";
import styles from "./HomeScreenTopContainer.styles";
import TitleText from "../Text/Title/TitleText";
import PostcodeText from "../Text/Postcode/PostcodeText";
import SearchBar from "../SearchBar/SearchBar";
import LoginText from "../Text/Login/LoginText";

const HomeScreenTopContainer = () => (
  <View style={styles.container}>
    <TitleText />
    <PostcodeText />
    <SearchBar />
    <LoginText />
  </View>
);

export default HomeScreenTopContainer;
