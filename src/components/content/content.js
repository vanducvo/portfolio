import React from "react";

function Content(props){
    return (
        <div className={"flex w-full flex-wrap pt-2 px-2 " + props.padding}>
            {props.children}
        </div>
    );
}

export default Content;