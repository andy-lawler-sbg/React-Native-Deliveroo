import { ScrollView } from "react-native";
import HomeScreenTopContainer from "../Components/HomeScreenTopContainer/HomeScreenTopContainer";
import NavigationView from "../Components/NavigationView/NavigationView";
import TrackOrdersCard from "../Components/TrackOrdersCard/TrackOrdersCard";

const HomeScreen = () => (
  <>
    <NavigationView />
    <ScrollView showsVerticalScrollIndicator={false}>
      <HomeScreenTopContainer />
      <TrackOrdersCard />
    </ScrollView>
  </>
);

export default HomeScreen;
