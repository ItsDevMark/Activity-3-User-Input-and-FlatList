import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export default function TaskInput({ text, onChangeText, onAddTask }) {
  return (
    <View style={globalStyles.inputWrapper}>
      <TextInput
        style={globalStyles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#94A3B8"
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={onAddTask}
        returnKeyType="done"
      />
      <TouchableOpacity
        style={globalStyles.addButton}
        onPress={onAddTask}
        activeOpacity={0.8}
      >
        <Text style={globalStyles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}