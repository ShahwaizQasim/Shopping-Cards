

async function getAllProducts(){
    try {
        const CARDS_API = await fetch('https://api.escuelajs.co/api/v1/products');
        const products = await CARDS_API.json()
        console.log("products", products);
        return products;
    } catch (error) {
        console.log(error.message);
        throw Error("Something Went Wrong")        
    }
}

export default getAllProducts;