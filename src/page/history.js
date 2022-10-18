import React from "react";
import { ScrollView, Text, View } from "react-native";
import theme from "../assets/themes/theme";
import HistoryCard from "../components/cards/historyCard";

const History = ({navigation}) => {
    return (
        <View style={{
            marginBottom: 120,
            marginTop: 60,
            marginHorizontal: 20,
            borderRadius: 15,
            overflow: "hidden"
          }}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <HistoryCard navigation={navigation}/>
            <HistoryCard navigation={navigation}/>
            <HistoryCard navigation={navigation}/>
            <HistoryCard navigation={navigation}/>
            <HistoryCard navigation={navigation}/>
            <HistoryCard navigation={navigation}/>
            <HistoryCard navigation={navigation}/>
            <HistoryCard navigation={navigation}/>
        </ScrollView>
        </View>
    )
}

export default History;