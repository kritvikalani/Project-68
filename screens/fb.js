import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class Fb extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Facebook</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1, 
            justifyContent:'center', 
            alignItems:'center'
        },
        text:{
            fontSize:15,
            color: 'blue',
            textDecorationStyle: 'bold'
        },
    }
)