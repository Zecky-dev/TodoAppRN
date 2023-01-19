import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import styles from './styles/App.style.js';
import uuid from 'react-native-uuid';

import Card from './components/Card';

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState('');

    const addTodo = () => {
        if (todoValue !== ''){
            let _id = uuid.v4();
            setTodoList(todoList => todoList.concat({id: _id, name: todoValue, isDone: false}));
            setTodoValue('');
        }
        else {
            Alert.alert('Warning','Please fill blank area!');
        }
    };

    const renderItem = ({item}) => {
        return <Card item={item} todoList={todoList} todoValue={todoValue} setTodoList={setTodoList}/>;
    };

    const renderEmptyList = () => {
        return (
            <View style={styles.emptyList}>
                <Text style={styles.emptyListText}>
                    There ıs no todo yet!
                </Text>
            </View>
        );
    };

    return (
        // App Container
        <View style={styles.container}>
            {/* Add Todo Container */}
            <View style={styles.addTodoContainer}>
                {/* Todo Input*/}
                <View style={styles.todoInputContainer}>
                    <TextInput
                    placeholder="Todo Name.."
                    onChangeText={
                        (text) => {
                            setTodoValue(text);
                        }
                    }
                    value = {todoValue}
                    />
                </View>
                {/* Add Todo Button */}
                <TouchableOpacity style={styles.addTodoButton} onPress={addTodo}>
                    <Text style={styles.addTodoText}>ADD</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                    contentContainerStyle={{flexGrow:1}}
                    disableVirtualization={false}
                    data={todoList}
                    renderItem={renderItem}
                    ListEmptyComponent={renderEmptyList}
            />
        </View>
    );
};

export default App;
