import React from 'react';
import Profile from '../../images/profile.jpg';

function Avatar(props){
    return (
        <img src={Profile} alt="Profile" className="w-7/12 md:w-full h-auto rounded self-center"/>
    );
}

function Tag(props){
    return (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">{props.tag}</span>
    );
}

function AboutMe(props){
    let tags =["#webdeveloper", "#nodejs", "#1 May 2020"]
    return (
        <div id="aboutme" className="w-full md:max-w-sm rounded shadow-md mx-1 flex flex-col h-auto bg-gray-100">
            <Avatar />
            <div className="px-6 py-1">
                <div className="font-bold text-xl mb-1">About Me</div>
                <p className="text-gray-700 text-sm text-justify">
                    Hello, My full name is <b>Vo Van Duc</b>. I was born in <b>Quang Ngai</b> in <b>1999</b> but I grow up in <b>Ba Ria - Vung Tau</b>. I am studying in <b>Ho Chi Minh city University of Technology</b> also known as <b>Bach Khoa University</b> with majoring in <b>computer science</b>.
                </p>
            </div>
            <div className="px-2 py-1">
                {tags.map(v => <Tag tag={v} />)}
            </div>
        </div>
    );
};

export default AboutMe;