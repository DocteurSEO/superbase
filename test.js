import {superbase} from './lib.js'

const {logout, login} = superbase('url','token')




//const { user, error } = signUp('doo@gmail.com', '123456')
 
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')
const btn = document.querySelector('#in')
const btnOut = document.querySelector('#out')

btn.addEventListener('click', async () =>{
   const data = await login('docteurseoo+pub@gmail.com', '123456') 
   console.log(data)
  
})


btnOut.addEventListener('click', async () => {
   const error = await logout()
   console.log(error)
}) 