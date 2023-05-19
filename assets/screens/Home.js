import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, onPress, Pressable, Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Nav from '../components/Nav';


const Home = ({ navigation }) => {
  return (
    
    <View style={styles.mainView}>
      {/* <Nav></Nav> */}
      <View style={styles.titleExam}>
        <Text style={styles.textExam}>Exam Information</Text>
      </View>
       <ScrollView style={{width: '100%'}}>
      <View style={{padding: 15,}}>
        <Text style={{fontSize: 16}}>
          The following tests are a <Text style={{fontWeight: "bold"}}>compilation of exam questions </Text> reported by candidates.     
          {"\n"} {"\n"}
          You'll have <Text style={{fontWeight: "bold"}}>40 minutes to answer 24 questions </Text>  about British traditions and customs.
          {"\n"} {"\n"}

          For more information please visit offical goverment website.
        </Text>
      </View>
     
      <View style={styles.buttonView}>
          <Pressable onPress={() => navigation.navigate('Quiz')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 1
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Quiz2')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 2
              </Text>
            </View>
          </Pressable>
      </View>

       <View style={styles.buttonView}>
          <Pressable onPress={() => navigation.navigate('Quiz3')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 3
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Quiz4')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 4
              </Text>
            </View>
          </Pressable>
      </View>

       <View style={styles.buttonView}>
          <Pressable onPress={() => navigation.navigate('Quiz5')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 5
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Quiz6')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 6
              </Text>
            </View>
          </Pressable>
      </View>

       <View style={styles.buttonView}>
          <Pressable onPress={() => navigation.navigate('Quiz7')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 7
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Quiz8')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 8
              </Text>
            </View>
          </Pressable>
      </View>


 <View style={styles.buttonView}>
          <Pressable onPress={() => navigation.navigate('Quiz9')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 9
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Quiz10')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 10
              </Text>
            </View>
          </Pressable>
      </View>


 <View style={styles.buttonView}>
          <Pressable onPress={() => navigation.navigate('Quiz11')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 11
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Quiz12')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 12
              </Text>
            </View>
          </Pressable>
      </View>


 <View style={styles.buttonView}>
          <Pressable onPress={() => navigation.navigate('Quiz13')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 13
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Quiz14')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 14
              </Text>
            </View>
          </Pressable>
      </View>

       <View style={styles.buttonView}>
          <Pressable onPress={() => navigation.navigate('Quiz15')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 15
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('Quiz16')}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null,]}   >
            <View style={[styles.innerContainer, { backgroundColor: '#252C4A' }]}>
              <Text style={styles.title}>
                EXAM 16
              </Text>
            </View>
          </Pressable>
      </View>


       
    
        <View style={styles.footerContainer}>
          <Text style={{fontSize: 16}}>Life in the UK Test Web has already helped thousands of candidates to pass their Life in the UK Test successfully and we continuously work to provide the best online training possible for candidates. 
          {"\n"} {"\n"}
          We want to congratulate all the people who have passed their citizenship test and thank all of those who have contributed with their feedback and support. 
          {"\n"} {"\n"}
          If you would also like to contribute to the website, you can do it by sharing your experiences with us, leaving your feedback in the comment section, spreading the word through social media, donating or writing directly to us. If you have any questions please do not hesitate to contact us and we will be very happy to assist you</Text>
        </View>

          </ScrollView>
    </View>

  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    height: '100%'
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  titleExam: {
    backgroundColor: '#252C4A', 
    padding: 14
  },  
  textExam: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: '800',
    color: 'white'
  }, 
  gridItem: {
        flex: 1,
        margin: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 6},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 8,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    footerContainer :{
      flex: 1,
      margin: 15,
      paddingTop: 25,
      paddingBottom: 80
    }
});
