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
  const leftValue = useState(new Animated.Value(0))[0];

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 500,
      duration: 5000,
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
              transform: [{translateX: leftValue}],
              backgroundColor: 'red',
            },
          ]}
        />
      </View>
      <TouchableOpacity onPress={moveBall}>
        <Text>Move me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
