import  { View, FlatList, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy-data';
import ExamItem from '../components/ExamItem';

function ExamView({ route }) {
    
  const exId = route.params.examId;

  const displayedQuestions = MEALS.filter((mealItem) => {
      return mealItem.categoryIds.indexOf(exId) >= 0;
  });

  function renderExamItem(itemData) {
      return <ExamItem title={itemData.item.title} />
  }

  return (
      <View style={styles.container}>
          <FlatList data={displayedQuestions} keyExtractor={(item) => item.id} renderItem={renderExamItem} />
      </View>
  )
}

export default ExamView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})