import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos';
import './Contagion.css'

const Contagion = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (

        <div className='container'  id='Contagion'  style={{padding: '2rem', textAlign: 'center'}}>
            <div className='padded'>
                <div className=' center' data-aos="fade-up">
                    <h3  className='quicksand' style={{color: '#84c449', fontWeight: 'bold', fontSize: '43px'}}>Contagion</h3>
                    <h3 className='responsive quicksand' style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>Corona Viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type.</h3>
                </div>
                <div className="row" data-aos="fade-down" id='row1' style={{padding: '2rem', textAlign: 'center'}}>
                    <div className='one third' id= 'box1' style={{padding: '2rem', textAlign: 'center', marginbottom: '1rem', maxheight: '8rem', }}>
                        <img src={require("./humanContact.png")} alt="" style={{maxheight: '8rem'}}/>
                        <div className="text">
                            <h3 className="title" style={{color: '#84c449', fontWeight: 'bold'}}>Human Contacts</h3>
                            <p className="description" style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>
                                Washing your hands is one of the simplest ways you can protect.
                            </p>
                        </div>
                    </div>
                    <div className='one third' id= 'box2' style={{padding: '2rem', textAlign: 'center', marginbottom: '1rem', maxheight: '8rem' }}>
                        
                        <img src={require("./airTransmission.png")} alt="" style={{maxheight: '8rem'}}/>
                        <div className="text">
                            <h3 className="title" style={{color: '#84c449', fontWeight: 'bold'}}>Air Transmission</h3>
                            <p className="description" style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>
                                Objectively evolve tactical expertise before extensible
                                initiatives.
                            </p>
                        </div>

                    </div>
                    <div className='one third' id= 'box3' style={{padding: '2rem', textAlign: 'center', marginbottom: '1rem', maxheight: '8rem', }}>
                        <img src={require("./containedObject.png")} alt="" style={{maxheight: '8rem'}}/>
                        <div className="text">
                            <h3 className="title" style={{color: '#84c449', fontWeight: 'bold'}}>Air Transmission</h3>
                            <p className="description" style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>
                                Use the tissue while Sneezing. In this Way, You Can Protect Your
                                Droplets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contagion;