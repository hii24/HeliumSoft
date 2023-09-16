import React, {Component, ComponentType} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';


function withErrorHandling<TProps>(
  WrappedComponent: ComponentType<TProps>,
): ComponentType<TProps> {
  return class ErrorBoundary extends Component<
    TProps,
    {hasError: boolean; error: Error | null}
  > {
    constructor(props: TProps) {
      super(props);
      this.state = {hasError: false, error: null};
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      this.setState({hasError: true, error});
    }

    render() {
      if (this.state.hasError) {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Something went wrong:</Text>
            <Text style={styles.text}>{this.state.error && this.state.error.toString()}</Text>
          </View>
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withErrorHandling;
