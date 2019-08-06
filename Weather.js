import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "비",
        subtitle: "날씨 테스트1",
        icon: 'weather-pouring'
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "해",
        subtitle: "날씨 테스트2",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "천둥번개...",
        subtitle: "날씨 테스트3",
        icon: 'weather-thunderstorm'
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "구름",
        subtitle: "날씨 테스트4",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "눈",
        subtitle: "날씨 테스트5",
        icon: 'weather-snow'
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "이슬비",
        subtitle: "날씨 테스트6",
        icon: 'weather-rainy'
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "안좋은 안개...",
        subtitle: "날씨 테스트7",
        icon: "weather-hail"
      },
    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "옅은 안개...",
        subtitle: "날씨 테스트8",
        icon: "weather-fog"
      }
}

function Weather({ weatherName, temp }) {
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
         <View style={styles.upper}>
           <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
           <Text style={styles.temp}>{temp}℃</Text>
         </View>
         <View style={styles.lower}>
           <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
           <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
         </View>
       </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    upper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent"
    },
    temp: {
      fontSize: 45,
      backgroundColor : "transparent",
      color: "white",
      marginTop: 10
    },
    lower: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-end",
      paddingLeft: 60
    },
    title: {
      fontSize: 35,
      backgroundColor : "transparent",
      color: "white",
      marginBottom: 20,
      fontWeight: "300"
    },
    subtitle: {
      fontSize: 25,
      backgroundColor : "transparent",
      color: "white",
      marginBottom: 50
    }
  });