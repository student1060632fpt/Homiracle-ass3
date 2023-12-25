import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "../../Services";
import { LinearGradient } from "expo-linear-gradient";
import { Text, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import AnalyzeItem from "../../Components/Home/AnalyzeItem";

export interface IHomeProps {
  data: User | undefined;
  isLoading: boolean;
}

export const Home = (props: IHomeProps) => {
  const { data, isLoading } = props;
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#ECFDF5", "#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 25,
          position: "relative",
        }}
      >
        <View style={styles.topBar}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#006C49" }}>
            Phan Hai Ha
          </Text>
          <Icon name="notifications-outline" size={24} />
        </View>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              height: 1000,
              paddingHorizontal: 10,
              flexDirection: "column",
            }}
          >
            <View style={{ height: 30 }}></View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <AnalyzeItem
                bgColor="#006C49"
                header="23 tháng 5"
                mid="12"
                footer="Ít mây"
                icon="partly-sunny-outline"
                bgIcon="#30896b"
                midRight={
                  <View
                    style={{
                      marginTop: 5,
                      borderColor: "#ECFDF5",
                      height: 15,
                      width: 15,
                      borderRadius: 30,
                      borderWidth: 3,
                    }}
                  ></View>
                }
              />
              <AnalyzeItem
                bgColor="#ff7006"
                header="Điện"
                mid="325"
                footer="Hôm nay"
                icon="flash-outline"
                bgIcon="#fb8c37"
                midRight={
                  <Text style={{marginTop: 15, fontSize: 15, color:"#ECFDF5"}}>
                    Kwh
                  </Text>
                }
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  topBar: {
    width: "100%",
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
});
