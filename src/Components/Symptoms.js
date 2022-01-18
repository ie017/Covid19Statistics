import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos';


const Symptoms = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (

        <div className='container' id='Symptoms' data-aos="fade-up" style={{ padding: '2rem', textAlign: 'center' }} >
            <div className='padded' >
                <div className=' center' >
                    <h3 className='quicksand' style={{ color: '#84c449', fontWeight: 'bold', fontSize: '43px' }}>Symptoms</h3>
                    <h3 className='responsive quicksand' style={{
                        padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                        lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                    }}>Corona Viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified typepe has Caused a recent outbreak of respiratory.</h3>
                </div>
                <div className="row" style={{ padding: '2rem', textAlign: 'center' }} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <img src={require("./symptoms.png")} alt="" />
                </div>
            </div>
        </div>


    )
}

export default Symptoms;