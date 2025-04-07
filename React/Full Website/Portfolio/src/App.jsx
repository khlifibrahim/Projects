import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home/Home';
import Blog from './Components/Layout';
import Article from './Pages/Article/Article'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path='article/:title' element={<Article/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
