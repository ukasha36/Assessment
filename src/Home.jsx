 import Navbar from './Components/Navbar/Navbar.jsx'
 import '../src/Home.css'
import bannerimg from './assets/bannerimg.png'
import reactangle from './assets/Rectangle 2.png'
import Footer from './Components/Footer/Footer.jsx';
import Plan from './Components/Plans/Plan.jsx';


export default function Home() {
  return (
    <>
    <div className='home' >
   
      <Navbar/>
      <div className="group-22">
      <img className="rectangle-2" src={reactangle} />
    </div>


     <div className="banner">
      <div className='banner1'>
      <h2 className='bannertitle'>Join Our Ecosystem <br /> and rule the maket.</h2>
      <button  className="bannerbtn"> Get it now </button>
      </div>
      <div className='banner2'>
      <img src={bannerimg} alt=""  className='bannerimg'/>
      </div>
     
     </div>
     
    </div>

    <Footer/>

    <Plan/>
    </>
  );
}