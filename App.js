import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import IdeaItem from './components/IdeaItem';
import IdeaInput from './components/IdeaInput';

export default function App() {
  const [courseIdeas, setCourseIdeas] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addIdeaHandler = (ideaTitle) => {
    if (ideaTitle.length === 0) {
      return;
    }
    setCourseIdeas(currentIdeas => [...currentIdeas, { id: Math.random().toString(), value: ideaTitle }]);
    // note: only renders once even though there are multiple set functions here (they are grouped)
    setIsAddMode(false);
  }

  const removeIdeaHandler = (ideaId) => {
    setCourseIdeas(currentIdeas => {
      return currentIdeas.filter((idea) => idea.id !== ideaId);
    });
  }

  const cancelIdeaAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Idea" onPress={() => setIsAddMode(true)}/>
      <IdeaInput
        onAddIdea={addIdeaHandler}
        visible={isAddMode}
        onCancel={cancelIdeaAdditionHandler}
      />
      <FlatList
        data={courseIdeas}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <IdeaItem id={itemData.item.id} title={itemData.item.value} onDelete={removeIdeaHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
})