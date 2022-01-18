import React, { Component } from 'react'
import NavBar from './NavBar';
class Container extends Component {
    render() {
        return (
            <header className='padded' id='Home'>
                <div className='container'>
                        <div className='row'>
                            <div className='one half'>
                                <h2 className='animate__animated animate__fadeInRightBig animate__delay-0.5s' style={{  top: '-0.5em' }} ><a href="/" target="_parent" style={{ textDecoration: 'none', color: '#FF9900', fontSize: '35px',fontWeight: 'bold' }}><img
                                    src={require('./WorldometerLOGO.jpg')} alt="Worldometer" style={{
                                        height: '1.5em', position: 'relative'
                                        , top: '0.33em', marginright: '0.3em', borderRadius: '30%'
                                    }} /> Worldometer</a></h2>
                            </div>
                            <div className="one half" data-aos="zoom-in-down">
                            <p className="small double-pad-top no-pad-small-tablet align-right align-left-small-tablet"><a href="https://github.com/groundworkcss/groundwork" target="_parent">Github Project</a> - First version<br />Created &amp; Maintained by <a href="https://github.com/ie017" target="_blank">Issam Elorf</a> & <a href="https://github.com/ie017" target="_blank">Ahmed Oukhira</a></p>
                            </div>
                        </div>
                        <NavBar />
                        <br />
                        <br />
                        <br />
                        <br />
                </div>
            </header>
        )
    }
}
export default Container;