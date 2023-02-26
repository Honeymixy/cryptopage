import React, { useState, useEffect } from "react";
import "../Style/Home.css";
import { FaArrowCircleUp,FaArrowCircleDown} from 'react-icons/fa';


const Home = () => {
  const [Data, setData] = useState([]);
    const defaultPrice = 0
    
  async function fetchData() {
    try {
      const fetcher = await fetch(
        "https://api.coinlore.net/api/tickers/?start=0&limit=4"
      );
      console.log(fetcher);
      const res = await fetcher.json();
      console.log(res.data);
      setData(res.data);
    } catch (error) {}
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="display">
      {Data.map((datum) => {
        const {
          id,
          symbol,
          market_cap_usd,
          nameid,
          price_usd,
          rank,
          percent_change_1h,
        } = datum;
        return (
          <div className="boxes">
            <div key={id}>
              <div className="symbol">
                <h4>{symbol}/USD</h4>
                <p>{percent_change_1h} {percent_change_1h > defaultPrice ? <FaArrowCircleUp style={{color:'green'}}/> : <FaArrowCircleDown style={{color:'red'}}/>}</p>
              </div>
              <p>{price_usd} USD</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
