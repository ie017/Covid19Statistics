import React, { Component } from 'react'
import Aos from 'aos';
import 'aos/dist/aos';

class navBar extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        Aos.init({
          // initialise with other settings
          duration : 2000
        });
      }
    click(){
        var element = document.getElementsByTagName('ul')[0];
        if (element.getAttribute("aria-expanded") == "true") {
            element.setAttribute("aria-expanded" ,"false");
        }
        else{
            element.setAttribute("aria-expanded" ,"true");
        }
    }
    render() {
        return (
                <nav role='navigation' className='nav gap-top' style={{backgroundColor: '#FF9900'}} title='Menu' data-aos="flip-up" >
                    <button className='hamburger' onClick={this.click}></button>
                    <ul role="menubar" data-aos="fade-down" aria-expanded="false" style={{backgroundColor: '#FF9900'}} >
                    <li><a href='http://localhost:3000/' style={{backgroundColor: '#FF9900'}}><i className="icon-home"></i> Home</a></li>
                        <li>
                        <a href="http://localhost:3000/#Overview" target="_parent" className='link1' style={{backgroundColor: '#FF9900'}}>Overview</a>
                        </li>
                        <li>
                        <a href="http://localhost:3000/#Contagion" target="_parent"  className='link1' style={{backgroundColor: '#FF9900'}}>Contagion</a>
                        </li>
                        <li>
                        <a href="http://localhost:3000/#Symptoms" target="_parent"  className='link1' style={{backgroundColor: '#FF9900'}}>Symptoms</a>
                        </li>
                        <li>
                        <a href="http://localhost:3000/#Prevention" target="_parent"  className='link1' style={{backgroundColor: '#FF9900'}}>Prevention</a>
                        </li>
                        <li>
                        <a href="http://localhost:3000/#Statistique" target="_parent"  className='link1' style={{backgroundColor: '#FF9900'}}>Statistique</a>
                        </li>
                    </ul>
                </nav>
            
        )
    }
}



export default navBar;
