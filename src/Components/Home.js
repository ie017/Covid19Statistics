import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos';
import './Home.css'
const Home = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div className='container'>
            <div className='padded'>
                <div className="row" data-aos="fade-down" >
                    <div className="one half" >
                        <h1 className='responsive' data-compression='11.8' style={{ padding: '10px 50px', fontSize: '3em', color: '#84c449', fontWeight: 'bold' }}>Stay At Home Quarantine<br /> To Stop Corona Virus</h1>
                        <p className='white box' data-truncate='13' style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>There is No Specific Medicine To Prevent Or Treat Coronavirus Disease
                            (COVID-19). People May Need Supportive Care To.<br /></p>
                        <br />
                        <button className='round red center ' id='btn'>Let Us Help</button>
                    </div>
                    <div className="one half" >
                        <img src={require('./starter.png')} alt="" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
            </div>
        </div>

    )
}

export default Home;