import React, { useState } from 'react';
import "./check-list.css";
import "./checkbox.css";

const CheckListForm = ({saveList}) => {
    const [value, setValue] = useState(''); // объявление новой переменной состояния
    return (
        <div className={'dark-bg checklist-form'}>
            <h3>
                CheckList
            </h3>
        <form
            onSubmit={event => {
                event.preventDefault();
                saveList(value); //вызов ф-и для добавление нового элемента в массив
                setValue(''); //очищаем поле
            }}
        >

            <div className="input-group mb-3 list-input-container">
                <input type="text" className="form-control" placeholder="Enter the task"
                        onInput={()=>{
                            document.getElementById('error-block').classList.remove("active");
                        }}
                       onChange={event => {
                           setValue(event.target.value);
                       }}
                       value={value}               />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" >Add</button>
                    </div>
            </div>
        </form>
            <div>
                <p id={"error-block"}>YOU ALREADY HAVE THIS TASK</p>
            </div>
            </div>
    )
}
export default CheckListForm;