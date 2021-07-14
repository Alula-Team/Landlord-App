import * as React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_PLACES_API_KEY } from "@env";
import GOOGLE_PLACES_API_KEY from "../../googlePlaces";
import Feather from "react-native-vector-icons/Feather";
import styles, { googlePlacesStyles } from "./styles";

const GooglePlacesSearch = () => {
  console.log(GOOGLE_PLACES_API_KEY);
  return (
    <GooglePlacesAutocomplete
      placeholder="Search by Address ..."
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: "en",
      }}
      fetchDetails
      onPress={(data, details) => fillForm(details.formatted_address)}
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
    />
  );
};

export default GooglePlacesSearch;
