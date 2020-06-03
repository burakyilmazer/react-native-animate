import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Timing from './animated/timing';
import Spring from './animated/spring';
import Parallel from './animated/parallel';
import Lottie from './animated/lottie';
import Stagger from './animated/stagger';

const initialLayout = {width: Dimensions.get('window').width};

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'timing', title: 'Timing'},
    {key: 'spring', title: 'Spring'},
    {key: 'parallel', title: 'Parallel'},
    {key: 'stagger', title: 'Stagger'},
    {key: 'lottie', title: 'Lottie'},
  ]);

  const renderScene = SceneMap({
    timing: Timing,
    spring: Spring,
    parallel: Parallel,
    stagger: Stagger,
    lottie: Lottie,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
