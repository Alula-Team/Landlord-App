import * as React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_PLACES_API_KEY } from "@env";
import GOOGLE_PLACES_API_KEY from "../../googlePlaces";
import Feather from "react-native-vector-icons/Feather";
import styles, { googlePlacesStyles } from "./styles";

const GooglePlacesSearch = ({ onPress }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search by Address ..."
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: "en",
      }}
      fetchDetails
      onPress={(data, details) => onPress(details.formatted_address)}
      onFail={(error) => console.error(error)}
      renderLeftButton={() => (
        <Feather
          name="search"
          color="#34383D80"
          size={20}
          style={styles.searchIcon}
        />
      )}
      styles={googlePlacesStyles}
      textInputProps={{ placeholderTextColor: '#34383D80' }}
    />
  );
};

export default GooglePlacesSearch;
