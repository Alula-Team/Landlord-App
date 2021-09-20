import React, { useState, useEffect, useContext } from "react";

import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  RefreshControl,
  Header
} from "react-native";

import { useForm, Controller } from "react-hook-form";


function Properties() {
  return (
    <div>
      <MainNav>
        <GitHubLogo />
        <SiteSearch />
        <NavLinks />
        <NotificationBell />
        <CreateDropdown />
        <ProfileDropdown />
      </MainNav>
      <Homepage
        leftNav={
          <LeftNav>
            <DashboardDropdown />
            <Repositories />
            <Teams />
          </LeftNav>
        }
        centerContent={
          <CenterContent>
            <RecentActivity />
            <AllActivity />
          </CenterContent>
        }
        rightContent={
          <RightContent>
            <Notices />
            <ExploreRepos />
          </RightContent>
        }
      />
    </div>
  )
}
function MainNav({ children }) {
  return (
    <View style={mainStyles.container}>
      {children}
    </View>
  )
}
function MainNavBar({ LeftComponent, CenterComponent, RightComponent }) {
  return (
    <Header>
      <LeftComponent />
      <CenterComponent />
      <RightComponent />
    </Header>
  )
}
function LeftComponent({ icon, action }) {
  return
}


function Homepage({ leftNav, centerContent, rightContent }) {
  return (
    <div>
      {leftNav}
      {centerContent}
      {rightContent}
    </div>
  )
}
function LeftNav({ children }) {
  return <div>{children}</div>
}
function CenterContent({ children }) {
  return <div>{children}</div>
}
function RightContent({ children }) {
  return <div>{children}</div>
}

export default Properties;