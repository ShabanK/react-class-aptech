import React from "react"
// import ListItem from "./ListItem"

function List(props){
    return (
        <div className="content">
            {props.listItems.map((item)=>{ 
                return (
                    // add a key
                    <div>
                        <h3>{item.username}</h3>
                        <p>{item.message}</p>
                    </div>
                )}
            )}
        </div>
        

    )
}

export default List