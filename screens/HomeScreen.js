import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, Button } from 'react-native'
import { useTodo } from '../context/TodoContext'

export default function HomeScreen({ navigation }) {

  const { todos, removeTodoTask } = useTodo()


  const handleRemoveTask=(todo)=>{
    removeTodoTask(todo)
  }

  return (
    <View style={styles.container}>
      <Text>
        To Do's
      </Text>

      <Button onPress={() => navigation.navigate('AddTask')} title='Add'></Button>
      <FlatList
        style={{
          flex: 1,
          backgroundColor: 'white'
        }}
        renderItem={({item}, index) => {
          return (
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <Text style={{
                color:'black',
                fontSize:16
              }}>
                {item.title}
              </Text>
              <Button
                onPress={()=>handleRemoveTask(item)}
                color={'red'}
                title="Delete"
              />
            </View>
          )
        }}
        data={todos}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})
