import React from 'react'
import Main from './Main';

const MainContainer = props => {

    let state = props.store.getState();
   
    return (
        <Main 
            img={state.mainPage.img.img}
            data={state.mainPage.text}
        />
    )
}

export default MainContainer;