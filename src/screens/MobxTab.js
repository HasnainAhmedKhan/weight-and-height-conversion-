// src/screens/MobxTab.js
import React, { useEffect } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConversionInput from '../components/ConversionInput';
import UnitToggle from '../components/UnitToggle';
import store from '../mobx/ConversionStore'
const MobxTab = observer(() => {
 
  const handleWeightChange = (value) => {
    store.setWeight(value);
  };

  const handleHeightChange = (value) => {
    store.setHeight(value);
  };

 
  const handleToggle = (system) => {
    store.toggleUnit(system);
    saveData(); // Save data when unit type is toggled
  };


  const saveData = async () => {
    try {
      const data = JSON.stringify({
        weight: store.weight,
        height: store.height,
        unit: store.unit,
      });
      await AsyncStorage.setItem('conversionData', data);
    } catch (error) {
      console.error('Failed to save data', error);
    }
  };
  
  // ...

  return (
    <View style={styles.container}>
       <Text style={{textAlign: 'center', color: '#fff'}}> unit converter (with Mobx)</Text>
    
      {/* Inputs and toggles */}
      <ConversionInput
        label="Weight"
        value={store.weight}
        unit={store.unit === 'imperial' ? 'lbs' : 'kg'}
        onUnitChange={store.setWeight}
        onValueChange={handleWeightChange} 
        keyboardType="numeric"
      />
      <ConversionInput
        label="Height"
        value={store.height}
        unit={store.unit === 'imperial' ? 'ft' : 'm'}
        onUnitChange={store.setHeight}
        onValueChange={handleHeightChange}
        keyboardType="numeric"
      />
      <UnitToggle isMetric={store.unit === 'metric'} onToggle={handleToggle} />

      
      <TouchableOpacity  onPress={saveData} style={styles.button}><Text style={styles.btnText}>Save to disk</Text></TouchableOpacity>
    </View>
  );
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  button: {
    width: '50%',
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 12,
    margin: 5,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
})
export default MobxTab;
