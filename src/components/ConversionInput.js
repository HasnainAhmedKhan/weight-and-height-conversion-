import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const ConversionInput = ({ label, value, onChangeText, keyboardType }) => {
  return (
    <View style={styles.inputContainer}>
      
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      <View style={{alignItems: 'center'}}>
      <Text style={{color: '#fff'}}>{label}</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    marginBottom: 20,
   
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    color: '#fff'
  },
});

export default ConversionInput;
