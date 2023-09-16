import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface ErrorDisplayProps {
  error: string | undefined;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (error) {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Something went wrong:</Text>
        <Text style={styles.text}>{error && error.toString()}</Text>
      </View>
    );
  }

  return null;
};

export default ErrorDisplay;
