import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

/**
 * 
 * @param {string} url // get the url from supabase.com
 * @param {string} key // Les deux se trouvent dans le Dashboard > Settings > API
 * @returns {object}
 */


export function superbase(url, key){
    
    const SUPABASE_URL = url 
    const SUPABASE_KEY = key
    
   const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
   console.log('Supabase Instance: ', supabase)
/**  It's a function that takes two parameters (email and password) and returns an object with two
properties (user and error).

* @param {string} email  
* @param {string} password 
 * @returns {object}
*/


 async function  createUser (email, password ){
    let data = await supabase.auth.signUp({
        email: email,
        password: password,
      })
     
      return  data  
       
 }

 async function login (email, password){
    let data =  await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })

      
      return data
      
      //return  { user, error }
}
 
async function logout (){
  let { error } = await supabase.auth.signOut()
  return error
}

 
  return {
    createUser, 
    login, 
    logout
    
  }


}

 