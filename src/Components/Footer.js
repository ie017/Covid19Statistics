import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos';
import './Footer.css'
const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div className='container'>
            <div className='padded'>
            <footer className="gap-top bounceInUp animated">
      <div className="box square charcoal"id='box1'  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="container padded" >
          <div className="row">
            <div className="one small-tablet fourth padded">
              <h5 className="green">Top Source Organization</h5>
              <ul className="unstyled">
                <li><a href="https://www.who.int/ar">World Health Organization (WHO)</a></li>
                <li><a href="https://www.aljazeera.net/">Al Jazeera</a></li>
                <li><a href="https://arabic.rt.com/">RT</a></li>
                <li><a href="https://www.cdc.gov/nchs/index.htm">the National Center for Health Statistics</a></li>
              </ul>
            </div>
            <div className="one small-tablet fourth padded">
              <h5 className="blue">Frequently Asked Question about COVID-19</h5>
              <ul className="unstyled ">
                <li><a href="./grid.html" title="Responsive grid system, grid adapters and helpers">How dangerous is the virus?</a></li>
                <li><a href="./helpers.html" title="Layout helpers, spinners and much more">How contagious is the Wuhan Coronavirus? (Ro)</a></li>
                <li><a href="./typography.html" title="Text elements, quotes, code and web fonts">Age and conditions of Coronavirus cases</a></li>
              </ul>
            </div>
            <div className="one small-tablet fourth padded">
              <h5 className="blue">Frequently Asked Question about COVID-19</h5>
              <ul className="unstyled ">
                <li><a href="./grid.html" title="Responsive grid system, grid adapters and helpers">How dangerous is the virus?</a></li>
                <li><a href="./helpers.html" title="Layout helpers, spinners and much more">How contagious is the Wuhan Coronavirus? (Ro)</a></li>
                <li><a href="./typography.html" title="Text elements, quotes, code and web fonts">Age and conditions of Coronavirus cases</a></li>
              </ul>
            </div>
            <div className="one small-tablet fourth padded">
              <ul className="unstyled ">
                <li><i class=" icon-chevron-up"></i><a href="http://localhost:3000/#Home" style={{textDecoration: 'none'}}>  Back to top</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="box square" id='box2'  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="container padded">
          <div className="row">
            <div className="one half padded">
            <p>Worldometer is <b>a reference website that provides counters and real-time statistics for diverse topics </b>. <a href="mailto:elorfissam1@gmail.com">Give a shout out</a> if you have any feedback.</p>
              <p>Find a bug? Help squash it by <a href="https://github.com/ie017" target="_blank">filing an issue</a> on Github.</p>
            </div>
            <div className="one half padded">
              <p className="large padded align-right align-center-small-tablet"><a href="http://twitter.com" target="_blank" title="@twitter" style={{textdecoration: 'none'}} className="large inline gapped"></a><a href="https://github.com/ie017" target="_blank" title="@ie017" style={{textdecoration:'none'}} className="large inline gapped"></a><a href="mailto:elorfissam1@gmail.com" title="@elorfissam1@gmail.com" style={{textdecoration:'none'}} className="large inline gapped"></a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
            </div>
        </div>
        
        )
    }
    
    export default Footer;