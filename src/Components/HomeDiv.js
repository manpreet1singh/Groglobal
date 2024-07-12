import './HomeDiv.css';
import team from '../Images/teammember.png';

const HomeDiv = () => {
    return(
        
        <div className="main-div">
          
            <div className="inner-div">
            <h2 className="heading-div">"GroGlobally's professionalism and innovative approach make them the ideal partner for any business looking to excel in social media marketing."</h2>
               
                <br/>
                <div className='Credentials'>
                    <img src={team}></img><br/>
                    <p className='name'>Ms.Sameeksha Manekar</p>
                    <p>Social Media Manager</p>
                
                </div>
            </div>
            <div className="inner-div">
                <h2 className="heading-div">"Working with GroGlobally has been a game-changer for our social media and lead generation efforts. Their team’s expertise and dedication are evident in the results we've achieved"</h2>
                <br/>
                <div className='Credentials'>
                    <img src={team}></img><br/>
                    <p className='name'>Mr.Pratap Pawar</p>
                    <p>Guruji Air</p>
                
                </div>
               
                
            </div>
        </div>
        
    )
}


export default HomeDiv;