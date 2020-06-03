/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

import LottieView from 'lottie-react-native';

class Lottie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(10);
    this.animatedValue3 = new Animated.Value(0);
  }

  startAnimated = () => {
    Animated.stagger(20000, [
      Animated.timing(this.animatedValue1, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(this.animatedValue2, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }),
      // Animated.timing(this.animatedValue3, {
      //   toValue: 500,
      //   duration: 3000,
      //   useNativeDriver: false,
      // }).start(),
    ]).start();
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <Text>Lottie Örneği</Text>
              <LottieView
                style={{height: 200}}
                source={require('../animate_1.json')}
                autoPlay
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  animatedView: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    marginTop: 10,
    position: 'relative',
  },
  touchable: {
    width: '40%',
    marginTop: 20,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default Lottie;
