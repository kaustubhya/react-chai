How does react work in back scenes:

It converts functions (html tags) to objects (key-value pair)

eg. const anotherElement = (
    <a href="https://google.com" target = '_blank'> Visit Google </a>
)

Gets Converted To: 

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


  // here `string ${js variable} string continues`
  // similarly include js variables inside {} inside html tags (do not include dollar sign '$' here) 

eg. <p>to you {userName}
    {/* {userName is Evaluated Expression i.e. only put the final return output code here, no JS logic code here like loops, if else etc. Include all those inside functions} */}