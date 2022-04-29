import axios from "axios";
import React, { useState } from "react";
import Spinner from "./Spinner";
import '../index.css'
import Cards from "./Cards";
export const Trains = (props) => {
    console.log('trainnnnnn mode',props.modex)
    console.log('train', props.mode);
    const [text, settext] = useState("");
    const [travel, settravel] = useState([]);
    const [loading, setloading] = useState(false);
    const [days, setdays] = useState([]);
    const click = (e) => {
        console.log("workin");
        e.preventDefault();
        console.log(text);
        setloading(true);
        const options = {
            method: "POST",
            url: "https://trains.p.rapidapi.com/",
            headers: {
                "content-type": "application/json",
                "x-rapidapi-host": "trains.p.rapidapi.com",
                "x-rapidapi-key": "ac7ea9e5b9msh1159866ef3d17bdp153af3jsn2abff55084ef",
            },
            data: { search: `${text}` },
        };
        axios
            .request(options)
            .then(function (response) {

                console.log("resp length", response);
                if (response !== null) {
                    settravel(response.data);
                    setloading(false);
                }
                else {
                    alert('provide valid train detail')
                }

            })
            .catch(function (error) {
                console.error(error);
                alert('please [')
            });

    };

    const handleinput = (e) => {
        settext(e.target.value);
    };


    return (
        <>
            <form className="d-flex justify-content-center m-5">
                <input
                    onChange={handleinput}
                    className="form-control me-2"
                    style={{ width: "200px" }}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button onClick={click} className="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
            {loading && <Spinner />}
            <div className="cont2" style={{ height: "700px" }}>
                <div className="container">
                    <div className="row mt-1 md-12 gx-3 ">
                        {travel.map((value,index) => {
                            
                            return (
                                <div  key={index}>
                        
                                 <div className="col-md-3 mx-3">
                                <div className="card mt-40px " style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title cap">{`${value.name}`}</h5>
                        
                                        <p className="card-text">
                                            {`Traim num.${value.train_num}`}
                                        </p>
                                        <p className="card-text">{`From ${value.train_from}`}</p>
                                        <p className="card-text">{`To ${value.train_to}`}</p>
                                        <p className="card-text">{`arrival time: ${value.data.arriveTime}`}</p>
                                        <p className="card-text">{`Departure time: ${value.data.departTime}`}</p>
                                       
            
                                        <div className="card-footer text-muted">{`days: ${[value.data].map(
                                            (val1) => {
                                                const ak = val1.days;
                                                return JSON.stringify(ak);
                                            }
                                        )}`}</div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            );
                            
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Trains;







