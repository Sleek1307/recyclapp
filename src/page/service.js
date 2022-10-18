import { Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import theme from "../assets/themes/theme";

const Service = () => {
  return (
    <View style={{ flex: 1, padding: 30 }}>
      <Text category={"h3"} style={{
        textDecorationLine: 'underline'
      }} >
        Servicio N° 0000001
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
        Julian Alveiro Mira - 1000305347
      </Text>
      <Text category={"h4"}
        status="primary"
        style={{
          ...style.subheading
        }}
      >
        Operario
      </Text>
      <Text category={"h6"} style={{
        marginStart: 10
      }}>
        Julian Alveiro Mira -1000305347
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

export default Service;