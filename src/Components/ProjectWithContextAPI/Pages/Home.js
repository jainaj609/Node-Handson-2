import React,{useState} from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SubPages/SingleProduct';
import './Home.css'

faker.seed(100)
const Home = () => {

  
    
    const productArray = [...Array(20)].map(()=>({
        id : faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.cats(),

    }))

    const[products] = useState(productArray);

  return (
    <div className='productContainer'>
     {
        products.map((prod) => (
               <SingleProduct prod={prod} key={prod.id}/>
        ))
     }
    </div>
  );
};

export default Home
