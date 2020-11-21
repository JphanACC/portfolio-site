import React from 'react';

import items from "../../../container/items.json";
import Modal from "./Modal";

export default function Demo() {
    return (
        <div className="container">
            <div className="bg-secondary text-center padding-top-md">
                <i className="fa fa-js">test</i>
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