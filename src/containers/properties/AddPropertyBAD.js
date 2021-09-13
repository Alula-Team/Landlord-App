import React, { useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Form
import {
  useForm,
  useFormState,
  useFieldArray,
  Controller,
} from "react-hook-form";

import faker from "faker";
faker.locale = "en_US";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles, { googlePlacesStyles } from "./styles";


// Firebase
import { auth, db } from "../../firebase/firebase";


const AddProperty = ({ navigation, route }) => {
  const INITIAL_STATE = {
    address: itemAddress,
    city: itemCity,
    state: itemState,
    unit: itemUnit,
    zip: itemZip,
  };

  // function dirtyValues(dirtyFields, allValues) {
  //   if (dirtyFields === true || Array.isArray(dirtyFields)) return allValues;
  //   return Object.fromEntries(
  //     Object.keys(dirtyFields).map((key) => [
  //       key,
  //       dirtyValues(dirtyFields[key], allValues[key]),
  //     ])
  //   );
  // }

  const checkEqual = (prop1, prop2) => {
    return prop1 === prop2;
  };

  const returnFinalObject = (obj1, obj2) => {
    let finished = {};
    Object.keys(obj1).forEach((key) => {
      (obj2.hasOwnProperty(key) && checkEqual(obj1[key], obj2[key])) {
        return;
      else {
  finished[key] = obj2[key];
}
  });
console.log(finished);
return finished;
  };

const [property, setProperty] = React.useState(INITIAL_STATE);
// const [editedProperty, setEditedProperty] = React.useState(EDITED_STATE);
// const { address } = property;

// const handleChange = (event) => {
//   const { name, value } = event.target;
//   setEditedProperty({ ...property, [name]: value });
//   console.log(editedProperty);
// };

eEffect(() => {
    nction fillForm() {
    setValue("address", itemAddress);
    setValue("city", itemCity);
    setValue("state", itemState);
    setValue("zip", itemZip);
    setValue("unit", itemUnit);
  }
  fillForm();
}, []);

const {
  control,
  handleSubmit,
  setValue,
  formState: { errors },
} = useForm();

// const { dirtyFields } = useFormState({
//   control,
// });

const { fields, append, remove } = useFieldArray({
  control,
  name: "unit",
});

const breakIntoUnits = (data) => {
  let addresses = [];
  ta.unit.forEach((item, index) => {
    dresses.push({
      address: data.address,
      author: auth.currentUser.uid,
      city: data.city,
      state: data.state,
      tenants: [],
      unit: data.unit[index].number,
      zip: data.zip,
    });
  });
  return addresses;
};

const onSubmit = (data) => {
  let updates = returnFinalObject(INITIAL_STATE, data);
  console.log(updates);
  data.id = itemID;
  console.log(data);

  // data.unit = "";
  // db.collection("properties")
  //   .doc(data.id)
  //   .update(updates)
  //   .then((doc) => console.log(doc.id))
  //   .catch((error) => console.error(error));
  // navigation.goBack();
};

// Placeholder
const StatePlaceholder = {
  label: "Select State...",
  value: null,
  color: "#34383D",
};

turn(
  iew style = { styles.container } >
  eader
        nterComponent = {{
  text: "Edit property",
  yle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    paddingTop: 20,
  },
}}
  ftComponent = {
    con
          name="arrow-left"
          type="feather"
          color="#fff"
          size={ 25}
            onStyle={{
  paddingTop: 20,
  paddingLeft: 10,
  paddingBottom: 10,
}}
  onPress = {() => navigation.goBack()}
  />
      }
  ghtComponent = {
    ouchableOpacity
          style={{ paddingTop: 22.5, paddingRight: 10 }}
  onPress = { handleSubmit(onSubmit) }
          
            ext style = {{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
Save
          </Text >
        </TouchableOpacity >
      }
  ntainerStyle = {{
  backgroundColor: "#232256",
  justifyContent: "space-around",
  borderBottomWidth: 0,
}}
  />
    
      eyboardAwareScrollView >
  ontroller
        control = { control }
          nder = {({ field: { value, onChange } }) =>(
  iew style = { styles.inputContainer } >
  extInput
              type = "text"
              placeholder = "Address..."
              placeholderTextColor = "#34383D70"
              autoCorrect = { false}
              clearButtonMode = { 'while-editing'}
              keyboardAppearance = 'light'
              style = { styles.searchInput }
              onChangeText = { onChange }
              value = { value }
  />
          </View >
        )}
name = "address"
rules = {{ required: true }}
defaultValue = ""
  />
  rrors.address && (
    ext
            yle = {{
  color: "red",
    paddingLeft: 35,
      marginTop: -15,
        marginBottom: -2,
          }}
          
          This field is required
        </Text >
      )}
ontroller
control = { control }
nder = {({ field: { value, onChange } }) => (
  iew style = { styles.searchContainer } >
    extInput
type = "text"
placeholder = "City..."
placeholderTextColor = "#34383D70"
autoCorrect = { false}
clearButtonMode = { 'while-editing'}
keyboardAppearance = 'light'
style = { styles.searchInput }
onChangeText = { onChange }
value = { value }
  />
          </View >
        )}
name = "city"
rules = {{ required: true }}
defaultValue = ""
  />
  rrors.city && (
    ext
            yle = {{
  color: "red",
    paddingLeft: 35,
      marginTop: -15,
        marginBottom: -2,
          }}
          
          This field is required
        </Text >
      )}
ontroller
control = { control }
nder = {({ field: { value, onChange } }) => (
  iew style = { styles.searchContainer } >
    extInput
type = "text"
placeholder = "State..."
placeholderTextColor = "#34383D70"
autoCorrect = { false}
clearButtonMode = { 'while-editing'}
keyboardAppearance = 'light'
style = { styles.searchInput }
onChangeText = { onChange }
value = { value }
  />
          </View >
        )}
name = "state"
rules = {{ required: true }}
defaultValue = ""
  />
  rrors.state && (
    ext
            yle = {{
  color: "red",
    paddingLeft: 35,
      marginTop: -15,
        marginBottom: -2,
          }}
          
          This field is required
        </Text >
      )}
ontroller
control = { control }
nder = {({ field: { value, onChange } }) => (
  iew style = { styles.searchContainer } >
    extInput
type = "text"
placeholder = "Zip..."
placeholderTextColor = "#34383D70"
autoCorrect = { false}
clearButtonMode = { 'while-editing'}
keyboardAppearance = 'light'
style = { styles.searchInput }
onChangeText = { onChange }
value = { value }
  />
          </View >
        )}
name = "zip"
rules = {{ required: true }}
defaultValue = ""
  />
  rrors.zip && (
    ext
            yle = {{
  color: "red",
    paddingLeft: 35,
      marginTop: -15,
        marginBottom: -2,
          }}
          
          This field is required
        </Text >
      )}
    </KeyboardAwareScrollView >
  </View >
  );
};

export default AddProperty;
