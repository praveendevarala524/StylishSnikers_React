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
    let isLoggedInValue = localStorage.getItem("isLoggedin");
    return JSON.parse(isLoggedInValue);
    // console.log(JSON.parse(isLoggedInValue))
}