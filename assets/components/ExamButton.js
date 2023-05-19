// import React from 'react'
// import { StyleSheet, Text, View, SafeAreaView, Button, Pressable, Platform} from 'react-native';

// function ExamButton({children}) {


//     return (
//         <View style={styles.gridItem}>
//             <Pressable android_ripple={{color: '#ccc'}} 
//             style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null, ]}    
//             >
//                 <View style={[styles.innerContainer, {backgroundColor: '#256fb2'}]}>
//                     <Text style={styles.title}>
//                         {children}
//                     </Text>
//                 </View>
//             </Pressable>
//         </View>
//     )
// }

// export default ExamButton;

// const styles = StyleSheet.create({
//     gridItem: {
//         flex: 1,
//         margin: 8,
//         elevation: 4,
//         // backgroundColor: '#256fb2',
//         shadowColor: 'black',
//         shadowOpacity: 0.25,
//         shadowOffset: {width: 0, height: 6},
//         shadowRadius: 8,
//         overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
//     },
//     button: {
//         flex: 1
//     },
//     buttonPressed: {
//         opacity: 0.5,
//     },
//     innerContainer: {
//         flex: 1,
//         padding: 16,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 8,
//     },
//     title: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: '600'
//     }
// });