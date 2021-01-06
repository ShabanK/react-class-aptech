DOM REVIEW:

SELECTION

- document.getElementById()
- document.getElementsByClassName()
- document.getElementsbyTagName()
- document.querySelector()
- document.querySelectorAll()

MANIPULATION

- changing attr
  node.ATTRIBUTE_NAME
- changing styles
  node.style.ATTRIBUTE_NAME
- parent-child nodes
  node.parentNode
- appending to a node
  parent.appendChild(newNode)
- removing from a node
  parent.removeChild(child)

EVENTS

- document.addEventListener(event, ()=>{
  // action
  })

ASSIGNMENT:

1. Create two buttons on each existing list item and all new list items
2. Label one button "Up" and the other "Down"
3. Assign both buttons with a class "sideButton"
4. Add event listeners to the buttons, so that when you press "Up", the list item moves up, and it moves down if we press "Down"

Hints:

1. Feel free to Google. I don't care as long as you understand the code you present
2. Read the documentation on MDN for any properties you might need.
3. You have to think of moving up or down the list as swapping two list items.
4. Some helpful methods/properties to look at:
   - parentNode.insertBefore(node2,node1) //you can use this both ways
   - node.nextSibling
   - node.prevSibling
5. Message me whenever if you need any help
