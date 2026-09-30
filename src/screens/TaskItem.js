import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export default function TaskItem({ item, onToggleComplete, onDeleteTask }) {
  return (
    <View
      style={[
        globalStyles.taskItem,
        item.completed && globalStyles.taskItemCompleted,
      ]}
    >
      <TouchableOpacity
        style={globalStyles.taskContent}
        onPress={() => onToggleComplete(item.id)}
        activeOpacity={0.7}
      >
        <View
          style={[
            globalStyles.checkCircle,
            item.completed && globalStyles.checkCircleCompleted,
          ]}
        >
          {item.completed && <Text style={globalStyles.checkmarkIcon}>✓</Text>}
        </View>

        <Text
          style={[
            globalStyles.taskText,
            item.completed && globalStyles.completedTaskText,
          ]}
        >
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.deleteButton}
        onPress={() => onDeleteTask(item.id)}
        activeOpacity={0.7}
      >
        <Text style={globalStyles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}