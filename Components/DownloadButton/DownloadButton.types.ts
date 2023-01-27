import { ImageSourcePropType } from "react-native";

export type DownloadButtonProps = {
  titleText: string;
  subtitleText: string;
  logoPath: ImageSourcePropType;
  shouldTint?: boolean;
};
