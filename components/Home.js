import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {

    constructor() {
        super();
    }
   
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.props.decreaseCounter()}>
                    <View><Text style={styles.textStyle}>-</Text></View>
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.props.increaseCounter()}>
                    <View><Text style={styles.textStyle}>+</Text></View>
                </TouchableOpacity>
            </View>
        )
    }
}
// Left side is what you call in this component, right side is what you call in your reducer.js
function mapStateToProps(state){
return {
    counter:state.counter
}
}
// Left side is what you call in this component, right side is what you call in your reducer.js
function mapDispatchToProps(dispatch){
return {
    increaseCounter: () => dispatch({type:'INCREMENT'}),
    decreaseCounter: () => dispatch({type:'DECREMENT'})
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonStyle: {
        marginHorizontal: 20,
        backgroundColor: 'indigo',
        padding: 20
    },
    textStyle: {
        color: 'white',
        fontSize: 20
    }
});
