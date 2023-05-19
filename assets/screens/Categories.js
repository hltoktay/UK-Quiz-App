import { CATEGORIES } from '../data/dummy-data'

import { FlatList } from 'react-native'
import CategoryGrid from '../components/CategoryGrid';


function Categories({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('Quiz', { 
                examId: itemData.item.id,
            });
        }
       
        return <CategoryGrid
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler} />
    }



    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

export default Categories;