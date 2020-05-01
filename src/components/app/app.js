import React, { Fragment } from "react";
import Navigation from '../navigation/navigation';
import Content from '../content/content';
import AboutMe from '../aboutme/aboutme';

function App(props){
    return(
        <Fragment>
            <Navigation />
            <Content>
                <AboutMe />
            </Content>
        </Fragment>
    );
}

export default App;