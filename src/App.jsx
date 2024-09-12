import { useState, useEffect } from 'react'
import './App.css'
import getAllProducts from './utils/shoppingCards'
import Card from './components/card'

function App() {
  const [products, setProducts] = useState([])
  // console.log("products", products);


  useEffect(() => {
    fetchAllProducts();
  }, [])

  const fetchAllProducts = async () => {
    const products2 = await getAllProducts();
    setProducts([...products2])
    //  console.log(products2);
  }

  return (
    <>
      <h2 className='text-3xl font-normal'>Shopping List</h2>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              products.map((data) => {
                return <Card key={data.id} item={data} />
              })
            }
          </div>
        </div>
      </section>

    </>
  )
}

export default App
