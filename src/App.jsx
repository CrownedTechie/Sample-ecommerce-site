import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ShoppingCart from './pages/ShoppingCart';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:productId' element={<ProductDetailsPage />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
      </Routes>

    </>
  )
}

export default App;