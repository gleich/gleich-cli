import * as figlet from 'figlet'
import * as lolcatjs from 'lolcatjs'

export const header = () => {
  console.log(lolcatjs.fromString(figlet.textSync('Matthew Gleich')))
  console.log('\nHello! Welcome to my CLI!')
}
