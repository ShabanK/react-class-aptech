import React from "react"
import ListItem from "./ListItem"

function List(props){

    const {listItems} = props
    return (
        <div>
            {listItems.map((item)=>{ 
                const {id,username,message} = item;
                return (
                    // add a key
                    <ListItem
                        key={id}
                        username={username}
                        message={message}
                    />
                )}
            )}
        </div>
        

    )
}

export default List