import React from 'react'

function Progress(props) {
    if (props.index==0) {
        return (<div className="inside_progress slide1" ></div> );
    } else if(props.index==1){
        return ( <div className="inside_progress slide2" ></div> )
    }else{
        return (<div className="inside_progress slide3" ></div>)
    }
}

export default Progress
