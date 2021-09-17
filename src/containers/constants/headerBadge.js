<Header
  placement={"left"}
  centerComponent={{
    text: title,
    style: mainStyles.centerText
  }}
  rightComponent={
    <>
      <View style={{ flexDirection: "row" }}>
        {/* SERVICE REQUESTS */}
        <View>
          <Icon
            name={actionIcon}
            type="feather"
            color="#34383D80"
            size={25}
            iconStyle={mainStyles.actionIcon}
            onPress={onAction}
          />
          <Badge
            status="error"
            containerStyle={mainStyles.badgeContainer}
            badgeStyle={mainStyles.badge}
          />
        </View>
        {/* ADD Something */}
        <Icon
          name="plus"
          type="feather"
          color="#34383D80"
          size={25}
          iconStyle={mainStyles.addIcon}
          onPress={onAdd}
        />
      </View>
    </>
  }
  containerStyle={mainStyles.containerRedux}
/>