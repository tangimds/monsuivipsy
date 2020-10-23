import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Text} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
    flexBasis: 75,
  },
  buttonText: {
    marginTop: 4,
    fontSize: 15,
    color: '#4030a5',
    flexWrap: 'nowrap',
  },
});

const NavigationButton = ({setView, view, selfView, icon, label}) => {
  const selected = view === selfView;
  return (
    <TouchableWithoutFeedback
      onPress={async () => {
        setView(selfView);
      }}>
      <View style={styles.buttonContainer}>
        {icon}
        <View
          style={styles.buttonText}
          allowFontScaling={false}
          selected={selected}>
          {label && <Text>{label}</Text>}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NavigationButton;