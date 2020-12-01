import React, {useState} from 'react';

import items from "../../../container/items.json";
import Modal from "./Modal";

import "./Demo.scss";

//icons
import NativeJSIcon from "../../Icons/NativeJSIcon";
import ReactIcon from "../../Icons/ReactIcon";
import DjangoIcon from "../../Icons/DjangoIcon";
import MongoDBIcon from "../../Icons/MongoDBIcon";
import NodeJSIcon from "../../Icons/NodeJSIcon";
import PythonIcon from "../../Icons/PythonIcon";

export default function Demo() {
    const [tags, setTags] = useState([]);

    return (
        <div className="container">
            <div className="bg-gray text-center icon-bar fixed-top">
                <div className="row">
                    <div className="col">
                        <NativeJSIcon width={25} height={25} className={tags.includes("NativeJS") ? "highlighted" : "gray-color"} style={{margin:"0 5px 0 5px"}}/>
                        <ReactIcon width={25} height={25} className={tags.includes("React") ? "highlighted" : "gray-color"} style={{margin:"0 5px 0 5px"}}/>
                        <DjangoIcon width={25} height={25} className={tags.includes("Django") ? "highlighted" : "gray-color"} style={{margin:"0 5px 0 5px"}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <MongoDBIcon width={25} height={25} className={tags.includes("MongoDB") ? "highlighted" : "gray-color"} style={{margin:"0 5px 0 5px"}}/>
                        <NodeJSIcon width={25} height={25} className={tags.includes("NodeJS") ? "highlighted" : "gray-color"} style={{margin:"0 5px 0 5px"}}/>
                        <PythonIcon width={25} height={25} className={tags.includes("Python") ? "highlighted" : "gray-color"} style={{margin:"0 5px 0 5px"}}/>
                    </div>
                </div>
            </div> 

            <div className="row item-padding-div">
                {items.map((item, index) => (
                    <>
                        <div
                        key={index} 
                        className={`col-lg-3 my-2" ${item.tags.join(' ')}`} 
                        onMouseOver={() =>setTags(item.tags)}
                        onMouseOut={() => setTags([])}
                        data-toggle="modal"
                        data-target={"#modal" + index}
                        >
                            <div 
                            className="card bg-gray gray-color" 
                            href={item.href}
                            >
                                <div className="card-header text-center">
                                    {item.title}
                                </div>
                                <img className="card-img-bottom" src={"/" + item.imgSrc} alt="thumbnails"/>
                            </div>
                        </div>
                        
                        <Modal index={index} {...item} />
                    </>
                ))}
            </div>

        </div>
    )
}