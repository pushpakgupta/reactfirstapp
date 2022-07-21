import React, { useEffect, useState } from 'react';
import './Covid.css';
const Covid = () => {

    const [data, setdata] = useState([]);

    const getCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const Actualdata = await res.json();
            console.log(Actualdata.statewise[0]);
            setdata(Actualdata.statewise[0]);
        }catch (err){
            console.log(err);
        }
        
    }

    useEffect ( () =>{
      getCovidData();
    }, []);

  return(
   
    <div className='mainbody'>
            <h1>Live</h1>
            <h2>Covid Result</h2>
            <div className='covid_wrap'>
                <ul>
                <div className='card_main'>
                    <div className='card_name'><span>our</span> Country</div>
                    <div className='card_total'>India</div>
                </div>
                <div className='card_main'>
                    <div className='card_name'><span>Total</span> Recovered</div>
                    <div className='card_total'>{data.recovered}</div>
                </div>
                <div className='card_main'>
                    <div className='card_name'><span>Total</span> Confirmed</div>
                    <div className='card_total'>{data.confirmed}</div>
                </div>
                <div className='card_main'>
                    <div className='card_name'><span>Total</span> Deaths</div>
                    <div className='card_total'>{data.deaths}</div>
                </div>
                <div className='card_main'>
                    <div className='card_name'><span>Total</span> Active</div>
                    <div className='card_total'>{data.active}</div>
                </div>
                <div className='card_main'>
                    <div className='card_name'><span>Last</span> Updated</div>
                    <div className='card_total'>{data.lastupdatedtime}</div>
                </div>
                </ul>
            </div>
    </div>

  )

}

export default Covid