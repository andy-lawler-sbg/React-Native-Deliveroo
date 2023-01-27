import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { AppColour } from "../../utils/Colour";
import styles from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="e.g. EC4R 3TE"
        style={styles.inputContainer}
        selectionColor={AppColour}
      />
      <TouchableOpacity style={styles.searchButtonContainer}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
