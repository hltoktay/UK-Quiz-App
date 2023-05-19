import { StyleSheet, Text, View } from 'react-native';


function Nav() {
    return (
        <View style={styles.nav}>
            <Text style={styles.navText}>Life in the UK Exam</Text>
        </View>
    )

}

export default Nav;

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#000',
        padding: 30,
    },
    navText:{ 
        color: '#fff',
        fontSize: 20,
        fontWeight: '800',
        marginTop: 20  
    }
});
