import React from "react"
import "./ListItem.css"

function ListItem(props){
    const {username, message} = props
    return (<div>
        <h3>{username}</h3>
        <p>{message}</p>
    </div>)
}

export default ListItem
