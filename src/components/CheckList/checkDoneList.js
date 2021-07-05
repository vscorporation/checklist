import React from 'react';
import "./check-list.css";
import "./checkbox.css";
import trashIcon from "../../assets/images/trash.svg";
import repeatIcon from "../../assets/images/repeat.svg";

const CheckDoneList = ({doneList, deleteList, repeatTask}) => (

    <div className={"list-container col-12 mb-3 col-md-5"}>
        <h4>Already done</h4>
        {doneList.map((item, index) => (
            <div key={index.toString()} className={"list-item"}>
                <span>#{index+1}</span>
                <span className={"list-text"}>{item}</span>


                <div className={"delete-icon"}
                     >
                    <img src={repeatIcon} alt=""
                         onClick={() => {
                             repeatTask(index);
                         }}
                    />

                    <img src={trashIcon} alt=""
                         onClick={() => {
                             deleteList(index);
                         }}/>
                </div>
            </div>
        ))}

    </div>


)
export default CheckDoneList;