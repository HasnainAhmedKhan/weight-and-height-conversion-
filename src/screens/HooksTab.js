import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ConversionContext } from '../contexts/ConversionContext';
import ConversionInput from '../components/ConversionInput';
import UnitToggle from '../components/UnitToggle';


const HooksTab = () => {
  const { conversionData, setConversionData, saveData } = useContext(ConversionContext);
  const [isMetric, setIsMetric] = useState(false);

  const handleReset = () => {
    // Clear all the fields by setting their values to empty strings or initial values
    setConversionData({
      weightLbs: '',  
      weightKg: '',
      heightFt: '',
      heightIn: '',
      heightM: '',
    });
    setIsMetric(false);  // Set to the default unit (imperial in this case)
  };
  
  const convertToMetric = () => {
    const weightKg = (conversionData.weightLbs * 0.453592).toFixed(2);
    const totalInches = parseInt(conversionData.heightFt, 10) * 12 + parseInt(conversionData.heightIn, 10);
    const heightM = (totalInches * 0.0254).toFixed(2);
    setConversionData({ ...conversionData, weightKg, heightM });
    setIsMetric(true);
  };

  const convertToImperial = () => {
    const weightLbs = (conversionData.weightKg / 0.453592).toFixed(2);
    const heightInches = (conversionData.heightM / 0.0254).toFixed(2);
    const heightFt = Math.floor(heightInches / 12);
    const heightIn = (heightInches % 12).toFixed(2);
    setConversionData({ ...conversionData, weightLbs, heightFt, heightIn });
    setIsMetric(false);
  };

  const handleToggle = (system) => {
    if (system === 'metric') {
      convertToMetric();
    } else {
      convertToImperial();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center', color: '#fff'}}> unit converter (Hooks)</Text>
      <ConversionInput
        label={isMetric ? "Kilograms (kg)" : "Pounds (lbs)"}
        value={isMetric ? conversionData.weightKg : conversionData.weightLbs}
        onChangeText={(text) => setConversionData({ ...conversionData, weightLbs: text })}
        keyboardType="numeric"
      />
      <View style={{flexDirection: 'row',paddingHorizontal: 80, }}>
   
      <ConversionInput
        label={isMetric ? "Meters (m)" : "Feet (ft)"}
        value={isMetric ? conversionData.heightM : conversionData.heightFt}
        onChangeText={(text) => setConversionData({ ...conversionData, heightFt: text })}
        keyboardType="numeric"
      />
      {!isMetric && (
        <ConversionInput
          label="Inches (in)"
          value={conversionData.heightIn}
          onChangeText={(text) => setConversionData({ ...conversionData, heightIn: text })}
          keyboardType="numeric"
        />
      )}
   </View>
   
      <UnitToggle isMetric={isMetric} onToggle={handleToggle} />
      
      <TouchableOpacity  onPress={saveData} style={styles.button}><Text style={styles.btnText}>Save to disk</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleReset} style={styles.button2}>
  <Text style={styles.btnText}>Reset</Text>
</TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  button: {
    width: '40%',
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 15,
    margin: 5,
    alignItems: 'center',
  },
  button2: {
    width: '50%',
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 12,
    margin: 5,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HooksTab;
