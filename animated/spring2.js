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
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friction: 1,
      springValue: new Animated.Value(0),
    };
    // this.springValue = new Animated.Value(-150);
  }

  startAnimation = () => {
    Animated.spring(this.state.springValue, {
      toValue: 100,
      useNativeDriver: false,
      tension: 50,
      friction: this.state.friction,
    }).start(() => {
      this.setState({
        springValue: new Animated.Value(0),
      });
    });
  };

  setFriction = value => {
    // this.springValue = new Animated.Value(-150);
    this.setState({
      friction: this.state.friction + value,
      springValue: new Animated.Value(0),
    });
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <Text>Spring Örneği 2</Text>
              <Animated.View
                style={[
                  styles.animatedView,
                  {
                    width: this.state.springValue,
                    height: this.state.springValue,
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
                  onPress={() => this.startAnimation()}>
                  <Text style={styles.text}>Animasyonu Başlat</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '30%',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: 20,
                    height: 50,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                    onPress={() => this.setFriction(-1)}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}>
                    <Text>{this.state.friction}</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                    onPress={() => this.setFriction(1)}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
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

export default App;
