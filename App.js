import React, { useState } from 'react';
import {
  Text,
  FlatList,
  View,
  Keyboard,
  StatusBar,
} from 'react-native';
import TaskInput from './src/screens/TaskInput';
import TaskItem from './src/screens/TaskItem';
import { globalStyles } from './styles/globalStyles';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim().length === 0) return;

    const newTask = {
      id: Date.now().toString(),
      text: taskText.trim(),
      completed: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setTaskText('');
    Keyboard.dismiss();
  };

  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={globalStyles.header}>PaLista</Text>

      <TaskInput
        text={taskText}
        onChangeText={setTaskText}
        onAddTask={handleAddTask}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
          />
        )}
        ListEmptyComponent={
          <View style={globalStyles.emptyContainer}>
            <Text style={globalStyles.emptyText}>No tasks yet. Add one!</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}