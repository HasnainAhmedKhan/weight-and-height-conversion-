import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ConversionContext = createContext();

const ConversionProvider = ({ children }) => {
  const [conversionData, setConversionData] = useState({
    weightLbs: '',
    weightKg: '',
    heightFt: '',
    heightIn: '',
    heightM: '',
  });

  // Load data when the component is mounted
  useEffect(() => {
    const loadData = async () => {
      const savedData = await AsyncStorage.getItem('conversionData');
      if (savedData) {
        setConversionData(JSON.parse(savedData));
      }
    };

    loadData();
  }, []);

  // Function to save data to AsyncStorage
  const saveData = async () => {
    try {
      await AsyncStorage.setItem('conversionData', JSON.stringify(conversionData));
      alert('Data saved');
    } catch (e) {
      // saving error
      console.error("Failed to save the data to the storage");
    }
  };

  return (
    <ConversionContext.Provider value={{ conversionData, setConversionData, saveData }}>
      {children}
    </ConversionContext.Provider>
  );
};

export { ConversionContext, ConversionProvider };
