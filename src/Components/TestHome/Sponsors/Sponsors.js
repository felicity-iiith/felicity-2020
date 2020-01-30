import React,{Fragment} from 'react';
import "./Sponsors.scss";
import sponsors from '../../../assets/images/old_sponsors.png';
import WorkInProgress from "../../WorkInProgress/WIP";
import Logo from "../Logo/Logo";

export default function Sponsors() {
    return (
        <Fragment>
            {/* <div className="section-generic">
                <img src={}
                <h1 className="page-header">
                    Sponsors
                </h1>
                <h1 className="page-header">
                    Sponsors
                </h1>
                <h1 className="page-header">
                    Sponsors
                </h1>
                <div className="img-wrapper">
                    <img src={sponsors} className="sponsors" />
                </div>
            </div>             */}
            <Logo />
            <WorkInProgress />
        </Fragment>
    )
}

