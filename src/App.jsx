import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:productId' element={<ProductDetailsPage />}  />
      </Routes>

    

    </>
  )
}

export default App;
