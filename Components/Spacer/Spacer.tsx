import { SpacerProps } from "./Spacer.types";
import { View } from "react-native";

const Spacer = ({ marginAmount }: SpacerProps) => (
  <View style={{ margin: marginAmount }} />
);

export default Spacer;
