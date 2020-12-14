import React from 'react'

import "./Demo.scss";

export default function Modal(props) {
    return (
        <div className="modal fade" id={"modal" + props.index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog " role="document">
                <div className="modal-content modal-bg font-primary">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                    <button type="button" className="close font-secondary" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Description:
                    <p className="font-secondary">{ props.description }</p>
                    Git Url: 
                    <a href={props.href}><p className="font-secondary">{props.href}</p></a>
                    Deployed Url:
                    <a href={props.deployedUrl}><p className="font-secondary">{ props.deployedUrl }</p></a>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}
