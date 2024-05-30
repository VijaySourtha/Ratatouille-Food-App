import React from "react";
import ReactDOM from "react-dom/client";

//this is JSX - which parcel send to Babel to transpile into javascript code which then runs on javascript engine.
//JSX -> react.createElement -> rendered into DOM -> HTML element.
//JSX syntax is like html but it is not html.
const jsxHeading = <h1 id="heading"> Namaste React by JSX 🚀</h1>;


// both heading 1 and heading 2 are same, just in different syntax.
//these both are functional components.
const Heading1 = () => <h1 id="heading">Namaste React using functional component 1.</h1>

const Heading2 = () => {
    return <h1 id="heading">Namaste React using functional component 2.</h1>
}

//component composition -> using one component into another.
//using reactElement and functional components in different ways into a component.
const Parent = () =>(
    <div id="parent">
        {jsxHeading}
        <Heading1/>
        {Heading2()}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Parent/>);