import React from 'react';
import "./check-list.css";
import "./checkbox.css";
import trashIcon from "../../assets/images/trash.svg";

const CheckList = ({list, deleteList, addDoneList}) => (
    <div className={"list-container col-12 mb-3 col-md-5"}>
        <h4>Unfinished tasks</h4>
        {list.map((item, index) => ( //выводим все елементы
            <div className={"list-item"}>

                <div >
                    <input id={"item"+item} type="checkbox"  key={item}
                           onChange={() => {
                                   setTimeout(()=>{
                                           addDoneList(index) //вызов ф-и для добавления в массив готовых задач
                                   }, 300); //задержка для анимации checkbox
                           }}/>
                        <label htmlFor={"item"+item}> <span className={"list-text"}>{item}</span></label>
                </div>


                <div className={"delete-icon"}
                     onClick={() => {
                         deleteList(index); //запуск ф-и для удаления елементов
                     }}>
                    <img src={trashIcon} alt=""/>
                </div>
            </div>
            ))}

            </div>

            )

            export default CheckList;