function customRender(reactElement, container) {
/*
    // creating a dom element
    const domElement = document.createElement(reactElement.type)
    // create element from where

    // add the children now
    domElement.innerHTML = reactElement.children
    // take from reactElement and add its children

    // set its attributes now
    domElement.setAttribute('href', reactElement.props.href)
    // setAttribute(set what, set from where)

    domElement.setAttribute('target', reactElement.props.target)

    // now add it inside the main container as a child
    container.appendChild(domElement) 
} */

// now if we have multiple set attributes, the above method of writing code is not feasible, hence we write it in a loopy manner

const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for(const prop in reactElement.props) {
    // this is a for in loop
    // prop is key and we are iterating props (getting it from reactElement.props)

    if(prop === 'children') {
        // take care of the syntax here
        continue;
        // rn there is no childern inside prop
    }
    domElement.setAttribute(prop, reactElement.props[prop])
    // (insert what, insert where)

} 
container.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    // this is type of html tag
    props: {
        // props is an object having the attributes of the main html tag
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
    // this is like a tree graph having both parent and child together
}

const mainContainer = document.querySelector('#root')

// created function above, calling it here
customRender(reactElement, mainContainer)
// customRender(render what, render where)