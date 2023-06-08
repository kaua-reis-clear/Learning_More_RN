import React, {Component} from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={valorSwitch => this.setState({status: valorSwitch})}
        />
        <Text style={{textAlign: 'center', fontSize: 30}}>
          {this.state.status ? 'Ativo' : 'Inativo'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});

export default App;
