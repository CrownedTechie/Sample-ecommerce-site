import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/productdetails' element={<ProductDetailsPage />}  />
      </Routes>

    

    </>
  )
}

export default App;
