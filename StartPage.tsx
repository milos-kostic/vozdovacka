// StartPage.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Container from './Container'; 

const StartPage: React.FC = () => {
    const handleButtonPress = (buttonName: string) => {
        console.log('${buttonName} pressed!');
        Alert.alert(
            'pressed',
             buttonName,
            [{ text: 'ok' }],
            { cancelable: true }
        )
    };

    return (
        <Container>
            <View style={styles.content}>
                <Text style={styles.title}> Садржај </Text>
            </View>
 
            <View style={styles.footer}>

            {['Богослужења','Активности','Календар','....'].map((buttonName) => (
                    <Button
                        key={buttonName}
                        title={buttonName}
                        onPress={() => handleButtonPress(buttonName)}
                    /> 
                ))}   


            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    }, 
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },
});

export default StartPage;