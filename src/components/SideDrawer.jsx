import { useState, useEffect } from "react";
import "./SideDrawer.css"

const SideDrawer = ({ children, open, onCloseDrawer }) => {
    const onClickBackdrop = () => {
        console.log("on click backdrop");
    }
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open])


    return (


        <> {open ? <div className="back-drop" onClick={() => {
            onCloseDrawer()
        }} ></div> : null}
            <div className={"side-drawer" + `${open ? ' open' : ''}`}>

                <div className="main-content">
                    <div className="side-drawer-header">
                        <i></i>
                    </div>
                    <div className="children">
                        {children}

                    </div>
                </div>

            </div > </>
    )
}


export default SideDrawer;