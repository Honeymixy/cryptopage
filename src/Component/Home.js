import React, { useState, useEffect } from "react";
import "../Style/Home.css";
import { FaArrowCircleUp,FaArrowCircleDown} from 'react-icons/fa';
import BeatLoader from "react-spinners/BeatLoader";



const Home = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
    const defaultPrice = 0
    
  async function fetchData() {
    try {
      const fetcher = await fetch(
        "https://api.coinlore.net/api/tickers/?start=0&limit=4"
      );
      // console.log(fetcher);
      const res = await fetcher.json();
      console.log(res.data);
      setData(res.data);
    } catch (error) {}
    finally{
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="display">
      {isLoading && <BeatLoader />}
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
          <div className="boxes"  key={id}>
            <div>
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
