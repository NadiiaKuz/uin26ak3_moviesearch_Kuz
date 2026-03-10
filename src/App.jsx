import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Layout from './components/Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path=':movie' element={<Movie />} /> 
      </Routes>
    </Layout>
  )
}

export default App
