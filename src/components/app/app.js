import React, { Fragment } from "react";
import Navigation from '../navigation/navigation';
import Content from '../content/content';
import AboutMe from '../aboutme/aboutme';
import  Education from '../education/education';
import Skill from '../skill/skill';

function App(props){
    return(
        <Fragment>
            <Navigation />
            <Content padding = "pt-16">
                <AboutMe />
                <Education />
                <Skill />
            </Content>
            <Content padding = "">
                
            </Content>
        </Fragment>
    );
}

export default App;