import React,{Fragment} from 'react';
import "./Sponsors.scss";
import sponsors from '../../../assets/images/old_sponsors.png'

export default function Sponsors() {
    return (
        <Fragment>
            <div>
                <h1 className="page-header d-flex justify-content-center mt-5">
                    Sponsors
                </h1>
            </div>
            <div className="img-wrapper">
                <img src={sponsors} className="sponsors" />
            </div>
        </Fragment>
    )
}

