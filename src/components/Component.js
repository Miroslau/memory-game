class Component {
  constructor(tagName ='div', className = '') {
    this.element = document.createElement(tagName);

    if (className) {
      this.element.className = className;
    }
  }

  getElement() {
    return this.element;
  }
}

export default Component;
