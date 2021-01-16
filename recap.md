# Recap

## Creating a React App

```
npx create-react-app "my-project"
cd my-project
```

## ReactDOM and Virtual Dom

## The structure for most React Apps

## Components and JSX

### The two rules of creating a react component

### Wrong way

```
function myComponent(){
    return(
        <h1>Heading</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    )
}
```

### Right way

```
function MyComponent(){
    return(
        <>
            <h1>Heading</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </>
    )
}
```

## Exporting a component

```
// ./components/MyComponent.js

function MyComponent(){
    return(
        <>
            <h1>Heading</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </>
    )
}

export default MyComponent;
```

## Import a component

```
import "./App.css";
import MyComponent from "./components/MyComponent"

function App() {
  return (
    <div className="App">
        <MyComponent />
    </div>
  );
}

export default App;
```

## Using normal with JSX

```
// ./components/MyComponent.js

function MyComponent(){
    //do normal js stuff here
    let myHeading = "This is my heading"
    let add = (num1,num2) =>{
        return num1+num2
    }
    return(
        <>
            <h1>{ myHeading }</h1>
            <p>Paragraph 1</p>
            <p>{ add(1,2) }</p>
        </>
    )
}

export default MyComponent;
```

## Props

```
import "./App.css";
import MyComponent from "./components/MyComponent"

function App() {
  return (
    <div className="App">
        <MyComponent
            customProp1={2}
            customProp1={true}
            customProp1="Hello"
        />
    </div>
  );
}

export default App;
```

```
// ./components/MyComponent.js

function MyComponent(props){
    //do normal js stuff here
    return(
        <>
            <h1>{ props.customProp1 }</h1>
            <p>{ props.customProp3 }</p>
        </>
    )
}

export default MyComponent;
```
