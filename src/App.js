import React, {Component, useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CheckListForm from "./components/CheckList/checkListForm";
import CheckList from "./components/CheckList/checkList";
import {Helmet} from 'react-helmet'
import CheckDoneList from "./components/CheckList/checkDoneList";

const MainList = () => {
    const [list, setList] = useState([]);  // объявление новой переменной состояния
    const [doneList, setDoneList] = useState([]);  // объявление новой переменной состояния
    const errorBlock = document.getElementById('error-block');
    return (
        <div>
            <Helmet>
                <title>CheckList</title>
            </Helmet>

            <div className={'container'}>
                <CheckListForm saveList={itemText => {
                    const trimmedText = itemText;
                    if (trimmedText.length > 0) {
                        if (list.includes(trimmedText)) {
                            errorBlock.classList.add('active');
                        } else setList([...list, trimmedText]); //добавляем в массив list новый елемент
                    }
                }}/>

                <div className="d-flex justify-content-between flex-md-row flex-column">

                    <CheckList
                        list={list}
                        deleteList={listIndex => { //удаление елемента
                            const newList = list.filter((_, index) => index !== listIndex);
                            setList(newList); //обновление массива
                        }}

                        addDoneList={listIndex => {
                            const newList = list.filter((_, index) => index !== listIndex);
                            setList(newList);
                            setDoneList([...doneList, list[listIndex]]); //добавление елемента в готовые задачи
                        }}
                    />
                    <CheckDoneList
                        doneList={doneList}
                        deleteList={
                            listIndex => {
                            const newList = doneList.filter((_, index) => index !== listIndex);
                            setDoneList(newList);
                        }}
                        repeatTask={
                            listIndex => {
                                setList([...list, doneList[listIndex]]);
                                const newList = doneList.filter((_, index) => index !== listIndex);
                                setDoneList(newList);
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
}

class App extends Component {
    render() {

        return (
            <div className="App">
                <MainList/>
            </div>
        );
    }
}

export default App;