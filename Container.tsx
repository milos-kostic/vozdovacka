// Container.tsx
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface ContainerProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
    return <View style = {[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5', // sivo
        justifyContent: 'flex-start', // top
        alignItems: 'center', // horizontalno
    },
});

export default Container;