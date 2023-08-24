
import { ToastContainer } from 'react-toastify'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Question from './Components/Question/Question'

function App() {
  

  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Question></Question>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
