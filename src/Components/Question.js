import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos';
import './Question.css';

const Question = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div className='container'>
            <div className='padded'>
                <div className='center'>                
                    <h1 className='responsive' data-aos="fade-down" data-compression='11.8' style={{ padding: '10px 50px', fontSize: '3em', color: '#84c449', fontWeight: 'bold', textAlign: 'center'}}>Have Question in mind ?<br />Let us help you</h1>
                    <div className='row' style={{textAlign: 'center'}}>
                      <input className='four fifths' type="text" placeholder="MSID@gmail.com" data-aos="fade-up-right" />
                      <button className='one fifths' id='send' data-aos="fade-up-left">Send</button>
                    </div>
                    <br/>
                    <textarea id="message" placeholder="Enter your question..." data-aos="fade-down-right"></textarea>
                </div>
            </div>
        </div>

    )
}

export default Question;