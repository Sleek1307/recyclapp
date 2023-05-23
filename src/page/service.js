import { Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import theme from "../assets/themes/theme";
import { getServiceById } from "../Services/service.services"

const Service = ({ route, navigation, response_login }) => {

  const { token } = response_login;
  const [data, setData] = useState({});

  console.log(route);

  const fetchService = async (id, token) => {
    try {
      const response = await getServiceById(id, token)
      setData(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    fetchService(route.params.id, token)
  }, [])

  return (
    Object.entries(data).length > 0 &&
    <View style={{ flex: 1, padding: 30 }}>
      <Text category={"h3"} style={{
        textDecorationLine: 'underline'
      }} >
        Servicio N° {data.id}
      </Text>
      <Text category={"h4"}
        status="primary"
        style={{
          ...style.subheading
        }}
      >
        Origen:
      </Text>
      <Text category={"h6"} style={{
        marginStart: 10
      }}>
        {data.origin.name + ' ' + data.origin.lastName + ' ' + data.origin.id}
      </Text>
      <Text category={"h4"}
        status="primary"
        style={{
          ...style.subheading
        }}
      >
        Recolector
      </Text>
      <Text category={"h6"} style={{
        marginStart: 10
      }}>
        {data.recolector === null ? 'Sin recolector asignado' : data.recolector.name + ' ' + data.recolector.lastName + ' ' + data.recolector.id}
      </Text>
      <View style={{
        flex: 1,
        backgroundColor: theme.colors.graySmoke,
        borderRadius: 15,
        marginTop: 20,
        elevation: 4,
        alignItems: "center",
        backgroundColor: 'white'
      }}>
        <Text category={'h4'}>
          Items
        </Text>
        <ScrollView
          style={{
            flex: 1,
            width: '100%'
          }}
        >
          {data.Products.map(product => {
            console.log(product);
            return <View style={{ paddingHorizontal: 40 }}>

              <Text category={'h6'} style={{ textAlign: "left", textDecorationLine: "underline" }}>
                #1 {product.name}
              </Text>
              <Text category={"p1"} style={{ marginStart: 15 }}>
                Cantidad: {product.ServiceProducts.amount === null ? 'Producto sin pesar' : product.ServiceProducts.amount}
              </Text>
              <View style={{ flexDirection: "row", alignItems: 'center', height: 35 }}>
                <Text category={"p1"} style={{ marginStart: 15, textAlignVertical: "center" }}>
                  Categoria:  {product.categoria.name}
                </Text>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    marginStart: 10,
                    borderRadius: 5,
                    backgroundColor: 'blue'
                  }}
                ></View>
              </View>
            </View>
          })}

          <View style={{ paddingHorizontal: 40 }}>

            <Text category={'h6'} style={{ textAlign: "left", textDecorationLine: "underline" }}>
              #1 Botellas plasticas
            </Text>
            <Text category={"p1"} style={{ marginStart: 15 }}>
              Cantidad: 150Gr
            </Text>
            <View style={{ flexDirection: "row", alignItems: 'center', height: 35 }}>
              <Text category={"p1"} style={{ marginStart: 15, textAlignVertical: "center" }}>
                Categoria:
              </Text>
              <View
                style={{
                  height: 30,
                  width: 30,
                  marginStart: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue'
                }}
              ></View>
            </View>

          </View>
          <View style={{ paddingHorizontal: 40 }}>

            <Text category={'h6'} style={{ textAlign: "left", textDecorationLine: "underline" }}>
              #1 Botellas plasticas
            </Text>
            <Text category={"p1"} style={{ marginStart: 15 }}>
              Cantidad: 150Gr
            </Text>
            <View style={{ flexDirection: "row", alignItems: 'center', height: 35 }}>
              <Text category={"p1"} style={{ marginStart: 15, textAlignVertical: "center" }}>
                Categoria:
              </Text>
              <View
                style={{
                  height: 30,
                  width: 30,
                  marginStart: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue'
                }}
              ></View>
            </View>

          </View>
          <View style={{ paddingHorizontal: 40 }}>

            <Text category={'h6'} style={{ textAlign: "left", textDecorationLine: "underline" }}>
              #1 Botellas plasticas
            </Text>
            <Text category={"p1"} style={{ marginStart: 15 }}>
              Cantidad: 150Gr
            </Text>
            <View style={{ flexDirection: "row", alignItems: 'center', height: 35 }}>
              <Text category={"p1"} style={{ marginStart: 15, textAlignVertical: "center" }}>
                Categoria:
              </Text>
              <View
                style={{
                  height: 30,
                  width: 30,
                  marginStart: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue'
                }}
              ></View>
            </View>

          </View>
          <View style={{ paddingHorizontal: 40 }}>

            <Text category={'h6'} style={{ textAlign: "left", textDecorationLine: "underline" }}>
              #1 Botellas plasticas
            </Text>
            <Text category={"p1"} style={{ marginStart: 15 }}>
              Cantidad: 150Gr
            </Text>
            <View style={{ flexDirection: "row", alignItems: 'center', height: 35 }}>
              <Text category={"p1"} style={{ marginStart: 15, textAlignVertical: "center" }}>
                Categoria:
              </Text>
              <View
                style={{
                  height: 30,
                  width: 30,
                  marginStart: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue'
                }}
              ></View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 40 }}>

            <Text category={'h6'} style={{ textAlign: "left", textDecorationLine: "underline" }}>
              #1 Botellas plasticas
            </Text>
            <Text category={"p1"} style={{ marginStart: 15 }}>
              Cantidad: 150Gr
            </Text>
            <View style={{ flexDirection: "row", alignItems: 'center', height: 35 }}>
              <Text category={"p1"} style={{ marginStart: 15, textAlignVertical: "center" }}>
                Categoria:
              </Text>
              <View
                style={{
                  height: 30,
                  width: 30,
                  marginStart: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue'
                }}
              ></View>
            </View>

          </View>
          <View style={{ paddingHorizontal: 40 }}>

            <Text category={'h6'} style={{ textAlign: "left", textDecorationLine: "underline" }}>
              #1 Botellas plasticas
            </Text>
            <Text category={"p1"} style={{ marginStart: 15 }}>
              Cantidad: 150Gr
            </Text>
            <View style={{ flexDirection: "row", alignItems: 'center', height: 35 }}>
              <Text category={"p1"} style={{ marginStart: 15, textAlignVertical: "center" }}>
                Categoria:
              </Text>
              <View
                style={{
                  height: 30,
                  width: 30,
                  marginStart: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue'
                }}
              ></View>
            </View>

          </View>
          <View style={{ paddingHorizontal: 40 }}>

            <Text category={'h6'} style={{ textAlign: "left", textDecorationLine: "underline" }}>
              #1 Botellas plasticas
            </Text>
            <Text category={"p1"} style={{ marginStart: 15 }}>
              Cantidad: 150Gr
            </Text>
            <View style={{ flexDirection: "row", alignItems: 'center', height: 35 }}>
              <Text category={"p1"} style={{ marginStart: 15, textAlignVertical: "center" }}>
                Categoria:
              </Text>
              <View
                style={{
                  height: 30,
                  width: 30,
                  marginStart: 10,
                  borderRadius: 5,
                  backgroundColor: 'blue'
                }}
              ></View>
            </View>
          </View>

        </ScrollView>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  subHeading: {
    color: theme.colors.primary,
  }
})

const mapStateToProps = (state) => {
  return { ...state.authReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);