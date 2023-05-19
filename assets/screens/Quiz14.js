import React, {useState} from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { COLORS, SIZES } from '../constants';
import data13 from '../data/Quiz14';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Quiz14 = () => {

    const allQuestions = data13;
    const [currentQuestIndex, setCurrentQuestIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null)
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false)
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // SET Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }

    const handleNext = () => {
        if(currentQuestIndex==allQuestions.length-1){
            // Last Question
            //Show Score Modal
            setShowScoreModal(true)
        } else {
            setCurrentQuestIndex(currentQuestIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null)
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null)
        setIsOptionsDisabled(false);
        setShowNextButton(false);

          Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 5,
                padding: 5
            }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{ color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2 }}>{currentQuestIndex + 1}</Text>
                    <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>/ {allQuestions.length}</Text>
                </View>

               {/* QUESTIONS */}
               <Text style={{
                   color: COLORS.white,
                   fontSize: 24
               }}>{allQuestions[currentQuestIndex]?.question}</Text>
            </View>
        )
    }

    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestIndex]?.options.map(option => (
                        <TouchableOpacity 
                            onPress={() => validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3,
                                borderColor: option==correctOption 
                                ? COLORS.success
                                : option==currentOptionSelected 
                                ? COLORS.error
                                : COLORS.secondary+'40',
                                backgroundColor: option==correctOption 
                                ? COLORS.success+'20'
                                : option==currentOptionSelected 
                                ? COLORS.error + '20'
                                : COLORS.secondary+'20',
                                height: 60, 
                                borderRadius: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginVertical: 10
                            }}
                        >
                            <Text style={{fontSize: 18, color: COLORS.white}}>{option}</Text>
                        
                            {/* SHOW CHECK OR Cross Icon based on correct answer */}
                            {
                                option == correctOption ? (
                                    <View style={{
                                        width: 30, height: 30, borderRadius: 30 / 2,
                                        backgroundColor: COLORS.success,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <MaterialCommunityIcons name="check" style={{
                                            color: COLORS.white,
                                            fontSize: 20
                                        }} />
                                    </View>
                                ) : option == currentOptionSelected ? (
                                        <View style={{
                                            width: 30, height: 30, borderRadius: 30 / 2,
                                            backgroundColor: COLORS.error,
                                            justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            <MaterialCommunityIcons name="close" style={{
                                                color: COLORS.white,
                                                fontSize: 20
                                            }} />
                                        </View>
                                    ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    const renderNextButton = () => {
        if(showNextButton){
            return ( 
                <TouchableOpacity 
                onPress={handleNext}
                style={{
                    marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
                }}>
                    <Text style={{
                        fontSize: 20, color: COLORS.white, textAlign: 'center'
                    }}>Next</Text>
                </TouchableOpacity>
            ) 
        } else {
            return null
        }
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })

    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',
            }}>
            <Animated.View style={[{
                height: 20,
                borderRadius: 20,
                backgroundColor: COLORS.accent
            }, {
                width: progressAnim
            }]}>

            </Animated.View>

            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
            <View style={{
                flex: 1,
                paddingVertical: 40,
                paddingHorizontal: 16,
                backgroundColor: COLORS.background,
                position: 'relative'
            }}>

            {/* PROGRESS BAR */}
            { renderProgressBar()}

            {/* QUESTIONS */}
            {renderQuestion()}

            {/* OPTIONS */}
            {renderOptions()}

            {/* NEXT BUTTON */}
            {renderNextButton()}

              {/* SCORE MODAL */}
              <Modal 
              animationType="slide"
              transparent={true}
              visible={showScoreModal}
              >
                <View style={{
                    flex: 1,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        backgroundColor: COLORS.white,
                        width: '90%',
                        borderRadius: 20,
                        padding: 20,
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        fontSize: 20, fontWeight: 'bold'
                    }}>{ score> (allQuestions.length/1.3) ? 'Congratulation, you pass the test!' : 'Please try again.'}</Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginVertical: 20
                    }}>
                        <Text style={{
                            fontSize: 30, 
                            color: score> (allQuestions.length/1.3 ? COLORS.success : COLORS.error)
                        }}>{score}</Text>
                        <Text style={{
                            fontSize: 20, color: COLORS.black
                        }}>/ {allQuestions.length}</Text>
                    </View>

                    {/* Retry Quiz Button */}
                    <TouchableOpacity 
                    onPress={restartQuiz}
                    style={{
                        backgroundColor: COLORS.accent,
                        padding: 20, width: '100%', borderRadius: 20
                    }}>
                        <Text style={{
                            textAlign: 'center', color: COLORS.white, fontSize: 20
                        }}>Retry Quiz</Text>
                    </TouchableOpacity>

                    </View>
                </View>

              </Modal>

            <Image
                source={require('../images/flag-bg.png')}
                style={{
                    width: SIZES.width,
                    height: 130,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: 0.5
                }}
                resizeMethod={Platform.OS === 'android' ? 'auto' : 'contain'}
            />

            </View>
        </SafeAreaView>
    )
}

export default Quiz14;