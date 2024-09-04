  
  function mainContainer(reactElement,container){
//    const domElement =  document.createElement(reactElement.type)


//    // it means inside the innerhtml that a tag is injected and have access
//    domElement.innerHtml= reactElement.children

//    // to set an attributes
//    // href is an props that needs to set the attributes and we add the address of it 
//    domElement.setAttribute('href',reactElement.props.href)
//    domElement.setAttribute('target',reactElement.props.target)
//    // append

//    container.appendChild(domElement)

// optimize code below for above one

  document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children

  //loop through props use for in loops

  for (const prop in reactElement.props) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
        domElement.setAttribute(prop,reactElement.props[prop])
    }
  }

  }
  
  const reactElement = {
    type : 'a',
    props: {
        href : "https://google.com",
        target: '_blank'
        
    },
    children : 'Click me to visit google'

}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)