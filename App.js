{/* <div id ="parent">
    <div id="child">
        <h1>i am h1 tag</h1>
    </div>
</div>
 ReactElement(Object)=HTML(browser understands) */}

// SIBLING
{/* <div id ="parent">
    <div id="child">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>
</div>
 ReactElement(Object)=HTML(browser understands) */}






 const parent=React.createElement("div",{id:"parent"},
    React.createElement( "div", {id:"child"},
    [React.createElement("h1",{},"I AM H1 TAG"),
     React.createElement("h2",{},"I AM H2 TAG") 
]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I AM H1 TAG"),
React.createElement("h2",{},"I AM H2 TAG")
]),
 )
  //JSX  

// const parent=React.createElement(
// "div",
// {id:"parent"},
// React.createElement(
// "div",
// {id:"child"},
// // React.createElement("h1",{},"I AM H1 TAG") 
// //array of children (sibling)two elements as sibling
// [React.createElement("h1",{},"I AM H1 TAG"),
// React.createElement("h2",{},"I AM H2 TAG") ]
// ))     
      
      
      
    //   const heading=  React.createElement("h1",{id:"heading"},"hello world")
    //    console.log(heading)
    //  const root=ReactDOM.createRoot(document.getElementById("root"))
      
    //   root.render(parent)
console.log(parent)//OBJECT
const root=ReactDOM.createRoot(document.getElementById("header"))
  
root.render(parent)