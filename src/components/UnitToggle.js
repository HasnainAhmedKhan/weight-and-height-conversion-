import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const UnitToggle = ({ isMetric, onToggle }) => {
  const [selectedUnit, setSelectedUnit] = useState(isMetric ? 'metric' : 'imperial');

  const handleToggle = (unit) => {
    setSelectedUnit(unit);
    onToggle(unit);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, selectedUnit === 'imperial' ? styles.selectedButton : null]}
        onPress={() => handleToggle('imperial')}
        disabled={!isMetric}
      >
        <Text style={[styles.buttonText, selectedUnit === 'imperial' ? styles.selectedText : null]}>Imperial</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, selectedUnit === 'metric' ? styles.selectedButton : null]}
        onPress={() => handleToggle('metric')}
        disabled={isMetric}
      >
        <Text style={[styles.buttonText, selectedUnit === 'metric' ? styles.selectedText : null]}>Metric</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  selectedText: {
    color: 'white',
  },
});

export default UnitToggle;
