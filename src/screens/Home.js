import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

import {decrement, increment} from '../store/actions';
class Home extends Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }

  UNSAFE_componentWillMount() {
    console.log('Before Render');
  }

  render() {
    console.log(this.props.state);
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Button title="Decrement" onPress={() => this.props.decrement()} />
          <Text style={{color: 'black', fontSize: 15}}>
            Counter: {this.props.counter}
          </Text>
          <Button title="Increment" onPress={() => this.props.increment()} />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
