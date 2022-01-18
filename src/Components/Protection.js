import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos';

const Protection = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div className='container' id='Prevention'>
            <div className='padded'>
                <div className=' center' data-aos="fade-up" style={{ textAlign: 'center' }}>
                    <h3 className='quicksand' style={{ color: '#84c449', fontWeight: 'bold', fontSize: '43px' }}>What Should We Do ?</h3>
                    <h3 className='responsive quicksand' style={{
                        padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                        lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                    }}>Corona Viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type.</h3>
                </div>
                <div className="row" >
                    <div className="one half" data-aos="fade-right" style={{ padding: '10px 30px' }}>
                        <h1 className='responsive' data-compression='11.8' style={{ padding: '10px 50px', fontSize: '3em', color: '#84c449', fontWeight: 'bold' }}>Wear Masks<br /> To Stop Corona Virus</h1>
                        <p className='white box' data-truncate='13' style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>Continually seize impactful vitals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "Outside the Box" Thinking.<br /></p>
                        <br />
                    </div>
                    <div className="one half" data-aos="fade-left" >
                        <img src={require('./girl1.png')} alt="" style={{ display: 'block', margin: '0 auto 0 auto' }} />
                    </div>
                </div>
                <div className="row " >
                    <div className="one half" data-aos="fade-right" >
                        <img src={require('./girl2.png')} alt="" style={{ display: 'block', margin: '0 auto 0 auto' }} />

                    </div>
                    <div className="one half" data-aos="fade-left" >
                        <h1 className='responsive' data-compression='11.8' style={{ padding: '10px 50px', fontSize: '3em', color: '#84c449', fontWeight: 'bold' }}>Wash your hands</h1>
                        <p className='white box' data-truncate='13' style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>Continually seize impactful vitals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "Outside the Box" Thinking.<br /></p>
                        <br />
                    </div>
                </div>
                <div className="row" >
                    <div className="one half" data-aos="fade-right" style={{ padding: '10px 30px' }}>
                        <h1 className='responsive' data-compression='11.8' style={{ padding: '10px 50px', fontSize: '3em', color: '#84c449', fontWeight: 'bold' }}>Use Nose - Rag</h1>
                        <p className='white box' data-truncate='13' style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>Continually seize impactful vitals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "Outside the Box" Thinking.<br /></p>
                        <br />
                    </div>
                    <div className="one half" data-aos="fade-left" >
                        <img src={require('./girl3.png')} alt="" style={{ display: 'block', margin: '0 auto 0 auto' }} />
                    </div>
                </div>
                <div className="row " >
                    <div className="one half" data-aos="fade-right" >
                        <img src={require('./girl4.png')} alt="" style={{ display: 'block', margin: '0 auto 0 auto' }} />

                    </div>
                    <div className="one half" data-aos="fade-left" >
                        <h1 className='responsive' data-compression='11.8' style={{ padding: '10px 50px', fontSize: '3em', color: '#84c449', fontWeight: 'bold' }}>Avoid Contacts</h1>
                        <p className='white box' data-truncate='13' style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>Continually seize impactful vitals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "Outside the Box" Thinking.<br /></p>
                        <br />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <hr />
                <br />
            </div>
        </div>

    )
}

export default Protection;