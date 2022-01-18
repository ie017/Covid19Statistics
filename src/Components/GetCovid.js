import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos';
import './GetCovid.css'
const GetCovid = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div className='container' id='Overview'>
            <div className='padded'>
                <div className="row" data-aos="zoom-out" data-aos="zoom-in-right" >
                    <div className="one half center" >
                        <img src={require('./whatIsCovid.png')} alt="" className='' />
                    </div>
                    <div className="one half center" style={{ top: '30px', padding: '70px'}} >
                        <h1 className='responsive' data-truncate='1' style={{ padding: '10px 50px', fontSize: '3em', color: '#84c449', fontWeight: 'bold' }}>What Is Covid-19</h1>
                        <p  className=' white box ' data-truncate='8' style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>Corona Viruses are a type of Virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of Respiratory illness now called COVID-19.<br /></p>
                        <br />
                        <button className='round center' id='btn1'>Learn More</button>
                    </div>
                </div>
                <hr />
                <br />
            </div>
        </div>
    )
}

export default GetCovid;