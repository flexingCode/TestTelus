import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import { useTodo } from '../context/TodoContext';

export default function AddTaskScreen({ route, navigation }) {
  const {addTodoTask} = useTodo()

  const [title, setTitle] = useState('');

  const createTast = () => {
    addTodoTask({
      id:Date().toString(),
      title
    })
    setTitle('')
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title='Back'></Button>
      <TextInput value={title} onChangeText={(text) => (setTitle(text))} />
      <Button onPress={() => createTast()} title='Save'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
})
