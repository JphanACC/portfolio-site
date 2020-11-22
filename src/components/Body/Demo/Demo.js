import React from 'react';

import items from "../../../container/items.json";
import Modal from "./Modal";

import "./Demo.scss";

export default function Demo() {
    return (
        <div className="container">
            <div className="bg-secondary text-center padding-top-md">
                <div className="row">
                    <div className="col">
                    <img className="nativeJSIcon" src="/assets/icons/simple-javascript.svg" alt="nodejs icon"/>
                    <img className="reactIcon" src="/assets/icons/awesome-react.svg" alt="nodejs icon"/>
                    <img className="djangoIcon" src="/assets/icons/simple-django.svg" alt="nodejs icon"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <img className="mongoDBIcon" src="/assets/icons/simple-mongodb.svg" alt="nodejs icon"/>
                    <img className="nodeJSIcon" src="/assets/icons/awesome-node-js.svg" alt="nodejs icon"/>
                    <img className="pythonIcon" src="/assets/icons/simple-python.svg" alt="nodejs icon"/>
                    </div>
                </div>

            </div> 

            <div className="row">
                {items.map((item, index) => (
                <>
                <div className="col-lg-3 my-2" data-toggle="modal" data-target={"#modal" + index}>
                    <div className="card bg-dark" href={item.href}>
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