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

class Timing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.value = new Animated.Value(0);
  }

  goster = () => {
    Animated.timing(this.value, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  gizle = () => {
    Animated.timing(this.value, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <Text>Timing Örneği</Text>
              <Animated.View
                style={[styles.animatedView, {opacity: this.value}]}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => this.goster()}>
                  <Text style={styles.text}>Göster</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => this.gizle()}>
                  <Text style={styles.text}>Gizle</Text>
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

export default Timing;
