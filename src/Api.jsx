export default async function api(){
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
       return data.products
  
}