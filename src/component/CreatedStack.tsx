import React, { FC, useState, MouseEvent } from 'react';
import axios from 'axios';
import styles from './CreatedStack.module.css';
import nodePix from './images/node.svg'

interface IStackDataArray{
    imageUrl: string;
    name: string;
    _id: string
}

type CreatedStackProps = {
    stackDataArray: [IStackDataArray]
    onChangeHandler: (event?: MouseEvent<HTMLInputElement>) => void
}

const CreatedStack: (props: CreatedStackProps) => JSX.Element = function  (props: CreatedStackProps){
    const {onChangeHandler, stackDataArray} = props;
    const [modal, setModal] = useState(false)
    const createStackHandler = function(){
        onChangeHandler();
    }

    return(
        <div style={{ width: '1100px'}}>
            <div style={{display: 'flex'}}>
                <h1 className={`${styles["dashboard"]}`}> Dashboard </h1>
                <button className={`${styles["create-stack"]}`} onClick={createStackHandler} >+ Create Stack </button>
            </div>

            <div className={styles["image-container"]}> 
            {
                stackDataArray.map( function(data: IStackDataArray, i){ return(
                    <div key={`${i}`} className={`${styles["admin-dashboard"]}`}>
                        <div className={`${styles["each-stack"]}`}>
                            <div className={`${styles["img-stack"]}`}>
                                <img
                                    src={`${data.imageUrl}`}
                                    alt=""
                                />
                            </div>
                            <p>{data.name}</p>
                        </div>
                    </div>)
                })
            }
            </div>
            {/* <div style={{display: 'flex'}}>
                <h1 className={`${styles["dashboard"]}`}> Dashboard </h1>
                <button className={`${styles["create-stack"]}`} onClick={createStackHandler} >+ Create Stack </button>
            </div>
            <div className={`${styles["admin-dashboard"]}`}>
                <div className={`${styles["each-stack"]}`}>
                    <div className={`${styles["img-stack"]}`}>
                        <img
                            src="https://www.devteam.space/wp-content/uploads/2022/05/nodejs.jpg"
                            alt=""
                        />
                    </div>
                    <p>Node js</p>
                </div>
            </div> */}
        </div>
    )
}

export default CreatedStack;