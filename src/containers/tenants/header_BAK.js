<>
  <View style={styles.container}>
    {/* Header */}
    <Header
      placement={"left"}
      centerComponent={{
        text: "Tenants",
        style: {
          color: "#34383D",
          fontWeight: "bold",
          fontSize: 25,
          paddingTop: 20,
        },
      }}
      rightComponent={
        <>
          <View>
            {/* ADD Tenant */}
            <Icon
              name="plus"
              type="feather"
              color="#34383D80"
              size={25}
              iconStyle={{
                paddingTop: 20,
                paddingRight: 20,
                paddingBottom: 10,
              }}
              // onPress={() => setModalVisible(true)}
              onPress={() => {
                // setQuery("");
                navigation.navigate("AddTenant");
              }}
            />
          </View>
        </>
      }
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "space-around",
        borderBottomWidth: 0,
      }}
    />