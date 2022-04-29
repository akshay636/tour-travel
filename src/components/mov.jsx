import React, { useState, useEffect } from 'react';
import axios from "axios";
import { FcSearch } from 'react-icons/fc'
import Card from './Card';
import Spinner from './Spinner';
const Movies = (props) => {
   
    const [search, setSearch] = useState('');
    const [movie, setMovies] = useState([]);
    const[loading,setloading]=useState(false);
    const getInput = (e) => {

        setSearch(e.target.value);
    }
    const Search = (e) => {
        e.preventDefault();
        
        setloading(true);
          // axios.get(`https://api.themoviedb.org/3/search/movie?api_key=84dbdc1c29687f553612e38b1484c3e2&query=iron`).then((res)
     
        axios.get(`http://www.omdbapi.com/?s=${search}&apikey=63ac9fc3`).then((res) => {
            
            const data = res.data;
            setMovies(data.Search);
            setloading(false)
            console.log('data',movie);
            
        });
    }

    return (

        <>
            <form className="d-flex justify-content-center m-5">
                <input
                    onChange={getInput}
                    className="form-control me-2"
                    style={{ width: "200px" }}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button onClick={Search} className="btn btn-outline-primary" type="submit">
                    Search
                </button>
            </form><div className="row  mt-1 md-12 gy-3 
             ak1">
            {loading && <Spinner/>}
            
                {
                    movie.map((val,index) => {
                        return (
                            <div className="col" key={index}>
                                <Card
                                    title={val.Title}
                                    img={val.Poster}
                                    desc={`Year : ${val.Year}`}
                                    Type={`Type: ${val.Type}`}
                                    mode={props.mode}
                                    btn='watch now'
                                />
                            </div>
                        )
                    })

                }
            </div>

        </>
    );
}

export default Movies;
