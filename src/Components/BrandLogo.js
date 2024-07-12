import brandLogo1 from '../Images/brandLogo1.jpeg';
import brandLogo2 from '../Images/brandLogo2.jpeg';
import brandLogo3 from '../Images/brandLogo3.jpeg';
import brandLogo4 from '../Images/brandLogo4.jpeg';
import brandLogo5 from '../Images/brandLogo5.jpeg';
import './BrandLogo.css';


const Brand = () =>{
    return(
        <div className="brand-names">
        <div className="brandHeadings">
        <h1 class="brand-heading">We work with <span>Brands</span></h1>
        <h1 class="brand-heading">You <span>Believe</span> In..</h1>
        </div>
        <div class="brand-logo">
          <ul>
            <li>
              <img src={brandLogo1} className="brandImg"></img>
            </li>
            <li>
              <img src={brandLogo2} className="brandImg"></img>
            </li>
            <li>
              <img src={brandLogo3} className="brandImg"></img>
            </li>
            <li>
              <img src={brandLogo4} className="brandImg"></img>
            </li>
            <li>
              <img src={brandLogo5} className="brandImg"></img>
            </li>
          </ul>
        </div>
  
      </div>
  
        
    )
}
export default Brand;