import Sofie from './sofie.js'

const app = new Sofie('Hello, ${this.name}!')

const body = document.getElementsByTagName('body')[0]

app.attach(body)
app.set({name: 'Sofie'})
