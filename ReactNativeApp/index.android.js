/**
 * Sample React Native App
 * Testing the number of touches
 * By Rafael Mont'Alvão Seixas de Siqueira
 */

import React, { Component } from 'react';
import {
	AppRegistry,
  	Text,
  	View,
} from 'react-native';

import {createResponder} from 'react-native-gesture-responder';

export default class ReactNativeApp extends Component {	

	constructor(props) {
    	super(props);

    	this.state = {
      		gestureState: {}
    	}
  	}
	
	componentWillMount() {
    	this.gestureResponder = createResponder({
			onStartShouldSetResponder: (evt, gestureState) => true,
		  	onStartShouldSetResponderCapture: (evt, gestureState) => true,
		  	onMoveShouldSetResponder: (evt, gestureState) => true,
		  	onMoveShouldSetResponderCapture: (evt, gestureState) => true,

      		onResponderGrant: (evt, gestureState) => {
      		},
      		onResponderMove: (evt, gestureState) => {
        		this.setState({
          			gestureState: {
            			...gestureState
          			}
        		})
      		},
      		onResponderTerminationRequest: (evt, gestureState) => true,
      		onResponderRelease: (evt, gestureState) => {
        		this.setState({
          			gestureState: {
            			...gestureState
          			}
        		})
      		},
      		debug: true
    	});
  	}
	
	render() {
    	return (
			<View
        		style={{flex: 1, backgroundColor: '#800080', padding: 20, alignItems: 'center', justifyContent: 'center'}}
        		{...this.gestureResponder}>
		
        		<LabelView
          			label='Number of Touches'
          			value={this.state.gestureState.numberActiveTouches}/>

      		</View>
		);
  	}
}

class LabelView extends Component {
	render() {
    	return (
      		<View style={{flexDirection: 'row', alignSelf: 'stretch'}}>
        		<Text style={{flex: 7, color:'#F1F1F1', textAlign: 'right', marginRight: 10}}>{this.props.label}</Text>
        		<Text style={{flex: 3, color:'#F1F1F1', textAlign: 'left', marginLeft: 10}}>{JSON.stringify(this.props.value)}</Text>
      		</View>
    	);
  	}
}

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
