import React, { Component } from 'react'
import Aos from 'aos';
import 'aos/dist/aos';
import './table.css'
class Table extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        Aos.init({
            // initialise with other settings
            duration: 2000
        });
    }
    render() {
        return (
            <div className='container'>
                <div className='padded'>
                <div className="row" style={{textAlign: 'center'}}  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className="one half">
                <h1>Moroccan Coronavirus Cases:</h1>
                      <h2 className='quicksand1' id='conf-ma'></h2>
                    <h1>Moroccan Deaths:</h1>
                      <h2 className='quicksand1' id='death-ma'></h2>
                    <h1>Moroccan Recovered:</h1>
                      <h2 className='quicksand1' id='recov-ma'></h2>
                  </div>

                  <div className="one half">
                    <h1>Coronavirus Cases:</h1>
                      <h2 className='quicksand1' id='globco'></h2>
                    <h1>Deaths:</h1>
                      <h2 className='quicksand1' id='globro'></h2>
                    <h1>Recovered:</h1>
                      <h2 className='quicksand1' id='globdo'></h2>
                    </div>
                </div>

                    <div className="row"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <div className="one whole padded tableFixHead" style={{ overflowX: 'auto' }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Countries</th>
                                        <th>New Cases</th>
                                        <th>Total Cases</th>
                                        <th>New Deaths</th>
                                        <th>Total Deaths</th>
                                        <th>New Recovered</th>
                                        <th>Total Recovered</th>
                                    </tr>
                                </thead>
                                <tbody id="data">
                                    
                                </tbody>
                            </table>
                        </div>
                        <script src="main.js"></script>
                    </div>
                </div>

            </div>
        )
    }
}
export default Table;