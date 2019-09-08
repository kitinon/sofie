const fillTemplate = function(templateString, templateVars){
  return new Function("return `"+templateString +"`;").call(templateVars)
}

export default class {
  constructor(template) {
    this.template = template
  }

  set(data) {
    if (this.el) {
      this.el.innerHTML = fillTemplate(this.template, data)
    }
  }

  attach(el) {
    this.el = el
  }
}
