
import './App.css'
import Header from './components/Header';
import Body from './Body';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
      <div className='px-4 body-section'>
        <Header/>
        <Body />
        <Footer/>
      </div>
      <Toaster />
    </>
  )
}

export default App
