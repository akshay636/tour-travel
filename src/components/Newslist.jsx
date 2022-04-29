

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import News from "./News";
import Spinner from './Spinner';

const Newslist = (props) => {
    const[data,setdata]=useState([]);
    const[loading,setloading]=useState(false);
    useEffect(() => {
        const url = "https://newsapi.org/v2/everything?q=india&apiKey=6cb0097159ae466b856205b3ce9035c3";

        const fetchData = async () => {
            try {
                setloading(true);
                const response = await fetch(url);
                const json = await response.json();
                setdata(json['articles']);
               
                setloading(false);
            } catch (error) {
               
            }
        };

        fetchData();
    }, []);

    return (
        <><h1 style={{color:props.mode===('dark')?'white':'black'}}>news</h1>
        <div className="row gy-3 ak1">
        {loading && <Spinner/>}
            { 
                data.map((val,index)=>{
                  return(
                    <div className="col md-3" key={index}>
                      <News
                        key={index}
                          title={`${val.title.slice(0,15)}`}
                          url={val.urlToImage}
                          desc={`${val.description.slice(0,45)}....`}
                          href={val.url}
                          mode={props.mode}
                          btn='Read'
                      />
                       </div>
                  )
                })

            }
           
        </div>
        </>
    );
};
export default Newslist;
const Wrapper = styled.div`
    padding-top: 150px;
    margin: 0 auto;
`;

const Paragraph = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 48px;
    text-align: center;
`;