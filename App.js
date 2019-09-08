import Sofie from './sofie.js'

const app = new Sofie('<h1>Hello, ${this.name}!</h1>')

const body = document.getElementsByTagName('body')[0]

app.attach(body)
app.set({name: 'Sofie'})
