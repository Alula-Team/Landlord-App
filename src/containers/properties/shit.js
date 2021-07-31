<Controller
  control={control}
  render={({ field: { value, onChange } }) => (
    <View style={styles.searchContainer}>
      <TextInput
        type="text"
        placeholder="City..."
        placeholderTextColor="#34383D70"
        style={styles.searchInput}
        onChangeText={onChange}
        value={value}
      />
    </View>
  )}
  name="city"
  rules={{ required: true }}
  defaultValue=""
/>;
{
  errors.city && (
    <Text
      style={{
        color: "red",
        paddingLeft: 35,
        marginTop: -15,
        marginBottom: -2,
      }}
    >
      This field is required
    </Text>
  );
}
<Controller
  control={control}
  render={({ field: { value, onChange } }) => (
    <View style={styles.searchContainer}>
      <TextInput
        type="text"
        placeholder="State..."
        placeholderTextColor="#34383D70"
        style={styles.searchInput}
        onChangeText={onChange}
        value={value}
      />
    </View>
  )}
  name="state"
  rules={{ required: true }}
  defaultValue=""
/>;
{
  errors.state && (
    <Text
      style={{
        color: "red",
        paddingLeft: 35,
        marginTop: -15,
        marginBottom: -2,
      }}
    >
      This field is required
    </Text>
  );
}
<Controller
  control={control}
  render={({ field: { value, onChange } }) => (
    <View style={styles.searchContainer}>
      <TextInput
        type="text"
        placeholder="Zip..."
        placeholderTextColor="#34383D70"
        style={styles.searchInput}
        onChangeText={onChange}
        value={value}
      />
    </View>
  )}
  name="zip"
  rules={{ required: true }}
  defaultValue=""
/>;
{
  errors.zip && (
    <Text
      style={{
        color: "red",
        paddingLeft: 35,
        marginTop: -15,
        marginBottom: -2,
      }}
    >
      This field is required
    </Text>
  );
}
{
  /* Units */
}
<TouchableOpacity
  style={styles.addButton}
  onPress={() => append({ number: "" })}
>
  <Text style={styles.addButtonText}>+ Add Unit(s) to this property</Text>
</TouchableOpacity>;
{
  fields.map((item, index) => (
    <Controller
      key={item.id}
      control={control}
      render={({ field: { value, onChange } }) => (
        <View style={{ flexDirection: "row" }}>
          <View style={styles.addUnitInput}>
            <TextInput
              type="text"
              placeholder="Apt, Unit, Suite, etc..."
              placeholderTextColor="#34383D70"
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
      name={`unit[${index}].number`}
      rules={{ required: true }}
      defaultValue=""
    />
  ));
}
