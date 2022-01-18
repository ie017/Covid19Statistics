import React, { Component } from 'react'
import Aos from 'aos';
import 'aos/dist/aos';
import { Chart } from "chart.js/dist/chart.min";
import './Graphe.css'

window.onload = function () {
    var list = document.getElementById('list');
    var ctx = document.getElementById("myChart").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: [],
            datasets: []
        },

        // Configuration options go here
        options: {
            responsive: true,
        }
    });


    let http_Req_countries = new XMLHttpRequest();

    http_Req_countries.open("GET", "https://api.covid19api.com/countries", true);
    http_Req_countries.onreadystatechange = () => {
        if (http_Req_countries.readyState == 4 && http_Req_countries.status == 200) {
            let raws = JSON.parse(http_Req_countries.response)

            raws.forEach(country => {
                var div = document.createElement("div");
                div.setAttribute('id', country.ISO2)
                div.setAttribute('class', "Countries")
                div.textContent = country.Country;
                div.onclick = () => {
                    country_data(div.textContent);
                    console.log(div.textContent)
                };
                list.appendChild(div);

            });

            country_data(null)


        }

    }

    http_Req_countries.send();

    function country_data(id) {
        var id_ = "null";
        if (id == null) {
            var id_ = "MA";
            alert("my Country Morocco");
        } else {
            var id_ = id;

        }
        let http_Req_country = new XMLHttpRequest();
        http_Req_country.open("GET", "https://api.covid19api.com/dayone/country/" + id_, true);
        http_Req_country.onreadystatechange = () => {

            if (http_Req_country.readyState == 4 && http_Req_country.status == 200) {

                let raws = JSON.parse(http_Req_country.response)
                let labels = raws.map(e => {
                    let date = new Date(e.Date);
                    let day = date.getDate()
                    let month = date.getMonth() + 1;
                    return `${day}/${month}`;
                }
                )
                let confirmed = raws.map(e => e.Confirmed)
                let recovered = raws.map(e => e.Recovered)
                let active = raws.map(e => e.Active)
                let deaths = raws.map(e => e.Deaths)

                let datasets = [{
                    label: "confirmed",
                    data: confirmed,
                    borderColor: '#FF9900',
                    borderWidth: 1,
                    borderWidth: 3,
                    pointBorderColor: 'transparent'


                },
                {
                    label: "recovered",
                    data: recovered,
                    backgroundColor: 'transparent',
                    borderColor: 'green',
                    borderWidth: 3,
                    pointBorderColor: 'transparent'
                },
                {
                    label: "active",
                    data: active,
                    borderColor: '#8080FF',
                    borderWidth: 1,
                    borderWidth: 3,
                    pointBorderColor: 'transparent'
                }
                    ,
                {
                    label: "deaths",
                    data: deaths,
                    borderColor: 'red',
                    borderWidth: 1,
                    borderWidth: 3,
                    pointBorderColor: 'transparent'

                }


                ]
                chart.data.datasets = datasets;
                chart.data.labels = labels;
                chart.update();

            }
        }
            http_Req_country.send();

    }

}
class Graphe extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        Aos.init({
            // initialise with other settings
            duration: 2000
        });
    }


    render() {
        return (

            <div className='container' id='Statistique'>
                <div className='padded'>
                    <div className=' center' style={{ padding: '2rem', textAlign: 'center' }} data-aos="zoom-in-down">
                        <h3 className='quicksand' style={{ color: '#84c449', fontWeight: 'bold', fontSize: '43px' }}>Graphe</h3>
                        <h3 className='responsive quicksand' style={{
                            padding: '10px 60px', color: '#747474', fontsize: '1.15em', letterspacing: '0.04em', fontWeight: '500',
                            lineheight: '1.5em', fontFamily: 'Rubik, sans-serif'
                        }}>Graphs about Daily New Cases and Deaths</h3>
                    </div>
                    <br />
                    <div className="row" >

                        <div id="list" className='one fifth' data-aos="zoom-out-right" ></div>
                        
                        <div className="four fifths" id='graphe' data-aos="zoom-out-left">


                            <canvas id="myChart" height="120px"></canvas>
                            
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default Graphe;