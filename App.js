
// div 
// div 
//     h1
// /div 
// /div

    // const heading=React.createElement("h1",{id:"heading"},"Hello world!!");
const parent = React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                   [React.createElement("h1",{id:"heading"},"This is heading one"),React.createElement("h1",{id:"heading"},"This is heading two")]
                )
)
//the object is the react element
//react oject becomes html that the browser understands
//while rendering the object gets converted to the html and puts up that into the dom


    // place where I will give attributes to my tags, we can give attributes in the object
    const root=ReactDOM.createRoot(document.getElementById("root"));
    console.log(parent);
    root.render(parent);


    //heading is a react element

// children and attributes will go inside my h1 tag -- inline number 1
// hello world!! -- children
// second thing is the attribute
//React.createElement is an object
//render method is converting the object to an h1 tag and putting that over there in the dom