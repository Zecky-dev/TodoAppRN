import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    addTodoContainer:{
        display: 'flex',
        flexDirection: 'row',
        margin: 8,
    },
    todoInputContainer:{
        flex: 0.7,
        borderBottomWidth: 0.5,
        margin:4,
    },
    addTodoButton:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex: 0.3,
        margin:4,
        backgroundColor:'red',
        borderRadius: 4,
    },
    addTodoText:{
        color: 'white',
    },
    cardContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#dcdcdc',
        margin: 8,
        padding: 16,
        borderRadius: 4,
    },
    cardText:{
        color:'black',
        fontSize: 18,
    },
    overline:{
        textDecorationLine: 'line-through',
    },
    opacity:{
        opacity: 0.7,
    },
    emptyList:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    emptyListText:{
        fontSize: 18,
        fontWeight:'bold',
        color:'black',
        textTransform:'uppercase',
    }
});

