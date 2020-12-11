import React , {Component} from 'react';
import {StyleSheet,Text,View,Button, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{
  constructor(){
    super()
    this.state = {}
  } 
  Chan
  render(){
    let a = 1
    return(
      <View style = {styles.device}>
          <View style = {styles.text}></View>
          <View style = {styles.resultText}></View>
          <View style = {styles.buttons}>
          <View style = {styles.row }>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>-/+</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>x2</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>/</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.row }>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>+</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.row }>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>-</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.row }>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>*</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.row }>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rowForeach}>
              <Text style = {styles.font}>.</Text>
            </TouchableOpacity>
          </View>
          </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  device : {
    flex : 1,
  },
  buttons:{
    flex : 2,
    backgroundColor : 'white',

  },
  row:{
    flex : 1,
    backgroundColor : 'white',
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    alignItems : "center"


  },
  rowForeach :{
    flex : 1,
    backgroundColor : 'white',
    flexDirection : 'row',
    justifyContent : "center",
    alignItems : "center"
  },
  text : {
    flex : 0.5,
    backgroundColor : 'black'
  },
  resultText : {
    flex : 0.5,
    backgroundColor : 'gray'
  },
  font : {
    fontSize : 42
  }
   
})