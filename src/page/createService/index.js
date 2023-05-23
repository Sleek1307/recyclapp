import {View, StyleSheet, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {connect} from 'react-redux';
import {Formik} from 'formik';

import {getProducts} from '../../Services/product.service';
import {createService} from '../../Services/service.services';

const CreateService = props => {
  const [items, setItems] = useState([]);

  const fetchProducts = async token => {
    try {
      const response = await getProducts(token);
      setItems(response.data.data);
    } catch (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  };

  // const sendService = async values => {
  //   const data = {
  //     service: {
  //       description: values.description,
  //       originId: props.response_login.user.id,
  //     },
  //     products: [],
  //   };

  //   values.products.map(product => {
  //     data.products.push({id: product.id});
  //   });

  //   //console.log(data);

  //   // try {
  //   //   const service = await createService(data, props.response_login.token);
  //   //   console.log(service);
  //   // } catch (error) {
  //   //   console.log(error.response.data);
  //   //   ToastAndroid.show(error.response.data.msg, ToastAndroid.SHORT);
  //   // }
  // };

  // useEffect(() => {
  //   fetchProducts(props.response_login.token);
  // }, []);

  const headerHeight = useHeaderHeight();
  return (
    <Formik
      initialValues={{
        product: '',
        products: [],
        description: '',
      }}>
      {/* {({values, handleChange, handleSubmit, setFieldValue}) => {
        return (
          <View
            style={{
              marginTop: headerHeight,
              ...styles.mainContainer,
            }}>
            <View
              style={{
                flex: 1.8,
                borderRadius: 15,
                overflow: 'hidden',
              }}>
              <Card style={styles.card}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                  {values.products.map(product => {
                    return (
                      <View key={product.id}>
                        <View>
                          <Text category="h5">Nombre: </Text>
                          <Text style={{fontSize: 18, marginLeft: 12}}>
                            {product.id} - {product.name}
                          </Text>
                        </View>
                        <View>
                          <Text category="h6">Categoria: </Text>
                          <Text style={{fontSize: 18, marginLeft: 12}}>
                            {product.categoria.name}
                          </Text>
                        </View>
                        <View>
                          <Text category="h6">Descripción: </Text>
                          <Text style={{fontSize: 18, marginLeft: 12}}>
                            {product.description}
                          </Text>
                        </View>
                        <Divider />
                      </View>
                    );
                  })}
                </ScrollView>
              </Card>
            </View>
            <View style={styles.form}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: '60%'}}>
                  <StyledSelect
                    placeholder={'Selecciona un producto'}
                    data={items}
                    value={values.product}
                    setValue={setFieldValue}
                    field={'product'}>
                    {items.map(item => {
                      return <SelectItem title={item.name} key={item.id} />;
                    })}
                  </StyledSelect>
                </View>

                <View style={{width: '40%'}}>
                  <StyledButton
                    placeholder={'Agregar'}
                    style={{width: '100%', marginLeft: 5}}
                    action={() => {
                      let flag = true;
                      values.products.map(item => {
                        if (item.id === values.product.id) {
                          ToastAndroid.show(
                            'Este producto ya ha sido añadido',
                            ToastAndroid.SHORT,
                          );
                          flag = false;
                        }
                      });
                      if (flag) {
                        setFieldValue('products', [
                          ...values.products,
                          values.product,
                        ]);
                      }
                    }}
                  />
                </View>
              </View>
              <TextArea
                title={'Anotacion'}
                lines={5}
                onChangeText={handleChange('description')}
                value={values.description}
              />
              <StyledButton
                placeholder={'Crear servicio'}
                style={{width: '100%', marginLeft: 5}}
                action={handleSubmit}
              />
            </View>
          </View>
        ); 
      }}*/}
    </Formik>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    height: '100%',
  },
  avatar: {
    marginHorizontal: 4,
    flex: 1,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
  },
  scrollContainer: {
    marginBottom: 10,
  },
  card: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {...state.authReducer};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateService);
