import './HomeQues.css'
import { RiAddLargeFill } from "react-icons/ri";

const HomeQues = ()=>{

    return(
        <div className="main-sec">
            <h2 className='heading-ques'>Frequently Asked Questions:</h2>
            <div className="ques"><h3>1.What Services are provided by GroGlobally ?</h3>
                <p>GroGlobally offers a comprehensive range of digital marketing services, including digital advertising, social media strategy, SEO, content marketing, content writing, social media management, video editing, and account optimization. Our goal is to enhance your online visibility and drive growth through well-researched, optimized, and creative solutions tailored to your business needs.</p>
            </div>
            <div className="ques"><h3>2.How can GroGlobally <u>"help my business grow"</u> ?</h3>
                <p>GroGlobally helps your business grow by transforming your ambitions into reality with cutting-edge marketing solutions. We create customized strategies to increase your online visibility, engage your target audience, and convert leads into customers. By leveraging our expertise in various marketing disciplines, we deliver measurable results that align with your business goals.</p>
            </div>
            <div className="ques"><h3>3.What sets Groglobally apart from <u>"Other Digital Marketing Agencies" ?</u></h3>
                <p>GroGlobally stands out from other digital marketing agencies with our client-centric approach and commitment to making marketing services accessible and economically feasible for startups and businesses. Our tailored solutions, focus on measurable results, and dedication to understanding your unique business needs ensure that we provide actionable insights and effective strategies to drive your digital success.</p>
            </div>
            
        </div>
    )

}

export default HomeQues;