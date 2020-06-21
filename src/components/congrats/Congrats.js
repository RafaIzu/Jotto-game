import React from 'react'

export default (props) =>{
    if(props.sucess){
        return(
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                congratulations! You guessed the word!
                </span>
            </div>
            )
        }else{
            return(
                <div data-test="component-congrats"/>
            )
        }
        
    
} 