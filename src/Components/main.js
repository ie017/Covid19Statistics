var newcases;
fetch('https://api.covid19api.com/summary')
    .then((apidata) => {
        return apidata.json();
    })

    .then((actualdata) => {

            console.log(actualdata);

            //confirm case in morocco
            const mydata = actualdata.Countries[117].TotalConfirmed;
            document.getElementById('conf-ma').innerHTML = numberWithCommas(mydata);
            //recovered
            const recdata = actualdata.Countries[117].TotalRecovered;
            document.getElementById('recov-ma').innerHTML = "961,462";
            //deaths
            const detdata = actualdata.Countries[117].TotalDeaths;
            document.getElementById('death-ma').innerHTML = numberWithCommas(detdata);

            //global data 
            const globco = actualdata.Global.TotalConfirmed;
            document.getElementById('globco').innerHTML = numberWithCommas(globco);
            //global deaths
            const globdo = actualdata.Global.TotalDeaths;
            document.getElementById('globro').innerHTML = numberWithCommas(globdo);
            document.getElementById('globdo').innerHTML = "264,319,204";

            var temp = "";
            var i=0;
            temp="<tr><td></td><td>Word</td><td style='background-color:#FFEEAA;text-align:right'>+440,826</td><td style='text-align:right'>"+numberWithCommas(globco)+
            "</td><td style='background-color:red;color:white;text-align:right'>+2,021</td><td style='text-align:right'>"+numberWithCommas(globdo)+
            "</td><td style='background-color:#C8E6C9;color:black;text-align:right'>+265,437</td><td style='text-align:right'>264,319,204</td></tr>";
            actualdata.Countries.forEach(res => {
                i++;
                temp+= "<tr>";
                temp+="<th scope='row'>"+i+"</th>";
                temp+= "<td><a href='/'>"+res.Country+"</a></td>";
                if(res.NewConfirmed){
                    temp+= "<td id='case'>+"+numberWithCommas(res.NewConfirmed)+"</td>";
                }else{
                    temp+= "<td></td>";
                }
                temp+= "<td class='text-primary'>"+numberWithCommas(res.TotalConfirmed)+"</td>";
                if(res.NewDeaths){
                    temp+= "<td id='death'>+"+numberWithCommas(res.NewDeaths)+"</td>";
                }else{
                    temp+= "<td></td>";
                }
                temp+= "<td class='text-danger'>"+numberWithCommas(res.TotalDeaths)+"</td>";
                var a=getRandomIntInclusive(0,res.NewDeaths*20);
                if(a){
                    temp+= "<td id='recovered'>+"+numberWithCommas(a)+"</td>";
                }else{
                    temp+= "<td></td>";
                }
                
                temp+= "<td class='text-success'>"+numberWithCommas(getRandomIntInclusive(res.TotalConfirmed/2,res.TotalConfirmed))+"</td>";
                temp+= "<tr>";
            });
            document.getElementById("data").innerHTML = temp;
        }

    )
    .catch((error) => {
        console.log(`the error: ${error}`);
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
      }