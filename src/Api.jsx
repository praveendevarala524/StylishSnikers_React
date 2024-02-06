import { redirect } from "react-router-dom";


export default async function api(){
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    let arrayinLocalStorage=JSON.parse(localStorage.getItem("arrayinLocalStorage")) || [] ;
    localStorage.setItem("arrayinLocalStorage",JSON.stringify(arrayinLocalStorage));
       return data.products
  
}

export function getItem(){
        let items=JSON.parse(localStorage.getItem("arrayinLocalStorage"));
        return items;
}
// export function isLoggedIn(){
//      let isLoggedIn=localStorage.getItem("isLoggedin", JSON.stringify(isLoggedIn));
//      return isLoggedIn;
// }
export function isLoggedIn() {
    let isLoggedInValue = localStorage.getItem("isLoggedIn");
    if(!isLoggedInValue){
      return  redirect('/login')
    }
  return null;
    // console.log(JSON.parse(isLoggedInValue))
}

export async function action({request}) {
    let cred=await request.formData();
    let userEmail=cred.get('email');
    let userPassWord=cred.get('password')
     
    try{
        if(userEmail==='abc@gmail.com' && userPassWord==='1234'){
            localStorage.setItem("isLoggedIn", "true");
            return redirect('/protected')
        }
        else{
            localStorage.setItem("isLoggedIn", "false");
            throw new Error('Invalid credentials	')
        }
    }
    catch(e){
        // throw new Error(e.message)
        
        return e;
    }

}