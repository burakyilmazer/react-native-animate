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

class Parallel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.animatedValue1 = new Animated.Value(-150);
    this.animatedValue2 = new Animated.Value(-150);
    this.animatedValue3 = new Animated.Value(0);
  }

  startAnimated = () => {
    Animated.parallel([
      Animated.spring(this.animatedValue1, {
        toValue: 0,
        friction: 1,
        useNativeDriver: false,
        tension: 40,
      }),
      Animated.timing(this.animatedValue2, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(this.animatedValue3, {
        toValue: Dimensions.get('screen').width,
        duration: 5000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <Text>Parallel Örneği</Text>
              <Animated.View
                style={[
                  styles.animatedView,
                  {position: 'relative', left: this.animatedValue1},
                ]}
              />
              <Animated.View
                style={[
                  styles.animatedView,
                  {
                    backgroundColor: 'red',
                    position: 'relative',
                    right: this.animatedValue2,
                  },
                ]}
              />
              <Animated.View
                style={[
                  styles.animatedView,
                  {
                    backgroundColor: 'gray',
                    position: 'relative',
                    left: -150,
                    width: this.animatedValue3,
                  },
                ]}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => this.startAnimated()}>
                  <Text style={styles.text}>Animasyonu Başlat</Text>
                </TouchableOpacity>
              </View>
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

export default Parallel;
