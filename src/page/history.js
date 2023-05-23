import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import HistoryCard from "../components/cards/historyCard";

import { getService } from "../Services/service.services";

const History = (props) => {

  const fetchServices = async () => {
    try {
      const services = await getService({ originId: props.response_login.user.id }, props.response_login.token);

      setServices(services.data.data)
    } catch (err) {
      const error = err;
    }
  };
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (services.length === 0) {
      fetchServices()
    }

    console.log(services);
  }, [services]);

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {services.map((service) => {
          return (
            <HistoryCard data={service} action={() => props.navigation.navigate('Service', {id: service.id})}/>
          )
        })}
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 120,
    marginTop: 60,
    marginHorizontal: 20,
    borderRadius: 15,
    overflow: "hidden"
  }
})

const mapStateToProps = (state) => {
  return { ...state.authReducer };
}

const mapDispatchToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(History);