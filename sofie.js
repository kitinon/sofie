const fillTemplate = function(templateString, templateVars){
  return new Function(`return \`${templateString}\``).call(templateVars)
}

export default class {
  constructor(template) {
    this.template = template

    const handler = new Tautologistics.NodeHtmlParser.DefaultHandler((error, dom) => {
      if (error) alert(error)
      else console.log(JSON.stringify(dom, null, 2))
    })
    const parser = new Tautologistics.NodeHtmlParser.Parser(handler)
    parser.parseComplete(template)
    //alert(JSON.stringify(handler.dom, null, 2))
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
