
export default class Stepan {

  static createElement(element, parent, attributes = {}) {

    const newElement = document.createElement(element);
    if(element instanceof HTMLUnknownElement){ throw new Stepan.StepanError("Invalid tag name.") }

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static StepanError = class extends Error{
    constructor(message) {
      super(message);
      this.name = "Stepan Error";
    }
  };

  static Component = class {
    constructor(parent) {
      if((parent instanceof HTMLUnknownElement) || parent == null){
        throw new Stepan.StepanError("Parent is null or undefined or is not a valid DOM object.")
      }

      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}
