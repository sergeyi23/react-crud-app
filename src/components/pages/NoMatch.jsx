import React from "react";
import {useLocation} from "react-router-dom";

function NoMatch() {
    let location = useLocation();
    let style = {
        codeError: {
            fontWeight: "600",
            fontSize: "60px",
            color: "#bc1268"
        },
        textError: {
            fontSize: "20px"
        }
    }
    return (
        <div className="container">
            <p style={style.codeError}>404</p>
            <p style={style.textError}><code>{location.pathname}</code> not found</p>
        </div>
    );
}

export default NoMatch;