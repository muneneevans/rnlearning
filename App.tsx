/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef} from 'react';
import {
  View,
  Animated,
  Text,
  TouchableOpacity,
  PanResponder,
} from 'react-native';

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (event, gesture) => {
        // console.log('ARGS', {...args[1]});
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      // onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  console.log(pan.getLayout());

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'red',

            //
            //
            //  THESE 4 implementations yeild the same output
            //

            // 1
            transform: [{translateX: pan.x}, {translateY: pan.y}],

            // 2
            // transform: pan.getTranslateTransform(),

            // 3
            // top: pan.y,
            // left: pan.x,
          },
          // 4
          // pan.getLayout(),
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default App;
