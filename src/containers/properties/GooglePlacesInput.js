import * as React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_PLACES_API_KEY } from "../../googlePlaces";

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      // ref={ref}
      placeholder="Enter Address..."
      fetchDetails
      onPress={(data, details) => {
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_PLACES_API_KEY,
        language: "en",
      }}
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          marginHorizontal: 20,
        },
      }}
    />
  );
};

export default GooglePlacesInput;
