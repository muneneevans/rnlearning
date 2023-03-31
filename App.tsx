/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {View, Animated, Text, TouchableOpacity} from 'react-native';

const App = () => {
  // (0,0) -> (1,1) -> (2,2) -> (3,3)
  // 1 Second
  // 60 frames per second
  const opacity = useState(new Animated.Value(0))[0];

  function fadeInBall() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  function fadeOutBall() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              // transform: [{translateX: opacity}],
              opacity: opacity,
              backgroundColor: 'red',
            },
          ]}
        />
      </View>
      <TouchableOpacity onPress={fadeInBall}>
        <Text>Fade in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeOutBall}>
        <Text>Fade out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
