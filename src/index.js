//TODO: Add some sass file and try to watch changes + compile him

function component() {
  let element = document.createElement('div');

  element.innerHTML = 'Hello, webpack!';

  return element;
}

document.body.appendChild(component());