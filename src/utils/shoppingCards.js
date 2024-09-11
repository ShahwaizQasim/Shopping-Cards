

async function getAllProducts(){
    try {
        const CARDS_API = await fetch('https://api.escuelajs.co/api/v1/products');
        const products = CARDS_API.json()
        return products;
    } catch (error) {
        console.log(error.message);
        throw Error("Something Went Wrong")        
    }
}

export default getAllProducts;