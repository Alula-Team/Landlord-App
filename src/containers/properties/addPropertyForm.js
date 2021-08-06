import * as React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import styles from "./styles";

const AddPropertyForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "unit",
  });

  // const breakIntoUnits = (data) => {
  //   let addresses = [];
  //   data.unit.forEach((item, index) => {
  //     addresses.push({
  //       address: data.address,
  //       author: auth.currentUser.uid,
  //       city: data.city,
  //       state: data.state,
  //       tenants: [],
  //       unit: data.unit[index].number,
  //       zip: data.zip,
  //     });
  //   });
  //   return addresses;
  // };

  // const fillForm = (property) => {
  //   const [address, city, stateZip, country] = property.split(", ");
  //   const [state, zip] = stateZip.split(" ");
  //   setValue("address", address);
  //   setValue("city", city);
  //   setValue("state", state);
  //   setValue("zip", zip);
  // };

  // const onSubmit = (data) => {
  //   if (data.unit.length) {
  //     let batch = db.batch();
  //     const docs = breakIntoUnits(data);
  //     docs.forEach((doc) => {
  //       var docRef = db.collection("properties").doc();
  //       batch.set(docRef, doc);
  //     });
  //     batch.commit();
  //   } else {
  //     // delete data.units;
  //     // data.unit = "";
  //     db.collection("properties")
  //       .add(data)
  //       .then((doc) => console.log(doc.id))
  //       .catch((error) => console.error(error));
  //   }
  //   navigation.goBack();
  // };

  return (
    <KeyboardAwareScrollView>
      <View>
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.searchContainer}>
              <TextInput
                type="text"
                placeholder="Address ..."
                placeholderTextColor="#34383D70"
                autoCorrect={false}
                  clearButtonMode={'while-editing'}
                  keyboardAppearance='light'
                style={styles.propertyInput}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="address"
          rules={{ required: "true" }}
          defaultValue=""
        />
        {errors.address && (
          <Text style={styles.fieldError}>This field is required</Text>
        )}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.searchContainer}>
              <TextInput
                type="text"
                placeholder="City ..."
                placeholderTextColor="#34383D70"
                autoCorrect={false}
                clearButtonMode={'while-editing'}
                keyboardAppearance='light'
                style={styles.propertyInput}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="city"
          rules={{ required: "true" }}
          defaultValue=""
        />
        {errors.city && (
          <Text style={styles.fieldError}>This field is required</Text>
        )}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.searchContainer}>
              <TextInput
                type="text"
                placeholder="State ..."
                placeholderTextColor="#34383D70"
                style={styles.propertyInput}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="state"
          rules={{ required: "true" }}
          defaultValue=""
        />
        {errors.state && (
          <Text style={styles.fieldError}>This field is required</Text>
        )}
        <Controller
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={styles.searchContainer}>
              <TextInput
                type="text"
                placeholder="Zip ..."
                placeholderTextColor="#34383D70"
                style={styles.propertyInput}
                onChangeText={onChange}
                value={value}
              />
            </View>
          )}
          name="zip"
          rules={{ required: "true" }}
          defaultValue=""
        />
        {errors.zip && (
          <Text style={styles.fieldError}>This field is required</Text>
        )}
      </View>

      {/* Units */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => append({ number: "Something" })}
      >
        <Text style={styles.addButtonText}>+ Add Unit(s) to this Property</Text>
      </TouchableOpacity>
      {fields.map((item, index) => (
        <Controller
          key={item.id}
          control={control}
          render={({ field: { value, onChange } }) => (
            <View style={{ flexDirection: "row" }}>
              <View style={styles.addUnitInput}>
                <TextInput
                  type="text"
                  placeholder="i.e Apt, Unit, Suite, etc..."
                  placeholderTextColor="#34383D80"
                  style={styles.propertyInput}
                  onChangeText={onChange}
                  value={value}
                />
              </View>
              <TouchableOpacity
                style={{ alignSelf: "center", marginBottom: 12.5 }}
                onPress={() => remove(index)}
              >
                <Feather name="trash" color="#34383D80" size={20} />
              </TouchableOpacity>
            </View>
          )}
          name={`units[${index}].number`}
          rules={{ required: true }}
          defaultValue=""
        />
      ))}
    </KeyboardAwareScrollView>
  );
};

export default AddPropertyForm;
