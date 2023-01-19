import React, {useState} from 'react';
import styles from '../styles/App.style';

import {View, Text, TouchableOpacity, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

const Card = ({item,todoList, setTodoList}) => {
    const [toggle,setToggle] = useState(item.isDone);
    const removeTodoItem = (item) => {
        Alert.alert('Warning','Are you sure to delete this todo item ?',
        [
            {
                text: 'Yes',
                onPress : () => {
                    let index = todoList.indexOf(item);
                    let newList = todoList.filter(
                        (element) => element.id !== todoList[index].id
                    );
                    setTodoList(newList);
                },
            },
            {
                text: 'No',
                onPress: () => {
                    Alert.alert('','Cancelled!');
                },
            },
        ]);
    };
    return (
    <View style={[styles.cardContainer, toggle && styles.opacity]}>
        <CheckBox
            disabled={false}
            value={toggle}
            onValueChange={(newValue) => {
            setToggle(newValue);
            let index = todoList.findIndex(
                element => element.id === item.id
            );
            todoList[index].isDone = newValue;
            setTodoList(todoList);
            }}/>
        <Text style={[styles.cardText, toggle && styles.overline]}>{item.name}</Text>
        <View>
        <TouchableOpacity onPress={() => removeTodoItem(item)}>
            <Icon name="delete" size={30} color="red"/>
        </TouchableOpacity>
        </View>
    </View>
    );
};

export default Card;
