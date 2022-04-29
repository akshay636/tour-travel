import React, { useState, useEffect } from 'react';
import Card from './Card';
import users from './MOCK_DATA';
import cities from './Cities'
const Searchbar = (props) => {
    const search='Akshay';
    const [text, settext] = useState('');
    
    const input=(e)=>{
        settext(e.target.value);

    }
    const sear=(e)=>{
        e.preventDefault();
        

    }
    return (

        <>
        <input
            onChange={input}
        />
        <button onClick={sear}>Search</button>
        
        <div className="row">
            {/* {
                users.map((val,index)=>{
                
                    return(
                        <div className="col md-4" key={index}>
                        <Card
                            title={val.first_name}
                            last_name={val.last_name}
                          desc={val.gender}
                            email={val.email}
                            btn='send request'
                        />
                        </div>
                    )
                 
                })  
            } */}




                 <div className="row">
            {
                cities.filter((val)=>{
            if(text===''){
                return val;
            }
            else if(val.name.toLowerCase().includes(text.toLowerCase())){
               return val;
            }
        }).map((val1)=>{
            return((
                <div className="col col-md-4">
                <Card
                title={val1.name}
                email={val1.state}
                last_namr={val1.id}
                mode={props.mode}
            />
            </div>))
        })
            }
            </div>
            </div>
        </>
    );
}

export default Searchbar;

