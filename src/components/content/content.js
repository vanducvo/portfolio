import React from "react";

function Content(props){
    return (
        <div className="flex w-full h-full pt-16 flex-wrap">
            {props.children}
        </div>
    );
}

export default Content;