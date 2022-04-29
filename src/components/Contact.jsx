import React, { useState } from 'react';
const Contact = (props) => {
    const [cform, setcform] = useState({
        name: '',
        email: '',
        mobile: '',
        msg: ''
    });
    const [search, setsearch] = useState('');
    const [g, setg] = useState('');
    const getInput1 = (e) => {
        setg(e.target.value);
    }

    const handleInputChange = (event) => {
        setcform({ ...cform, [event.target.name]: event.target.value })
    }
    const show = (event) => {

    event.preventDefault();

        localStorage.setItem(`${cform.name}`, JSON.stringify(cform));
    }
    const getInput = (e) => {
        setsearch(e.target.value);

    }
    const Delete = (e) => {
        e.preventDefault();
    
        if (localStorage.getItem(search) != null) {
            localStorage.removeItem(search);
            alert('user data is successfully delete');
        }
        else {
            console.log('user is not found')
            alert('user is not found in localstorage....!!!!!!!!')
        }


    }
    return (
        <>
            <section id="cover" className="min-vh-100">
                <div id="cover-caption">
                    <div className="container">
                        <div className={`row text-${props.mode === ('dark') ? 'white' : 'black'}`}>
                            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                <h1 className="display-4 py-2 text-truncate">Contact Form</h1>
                                <div className="px-2">
                                    <form action="" className="justify-content-center">
                                        <div className="form-group">
                                            <label className="sr-only">Name</label>
                                            <input type="text" name='name' onChange={handleInputChange} className="form-control" placeholder="Akshay Khajuriya" />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only">Email</label>
                                            <input type="text" name='email' onChange={handleInputChange} className="form-control" placeholder="Enter akshaykhajuriy@webkorps.com" />
                                        </div>
                                        <div className="form-group">
                                            <label className="sr-only">Mobile no.</label>
                                            <input type="text" name='mobile' onChange={handleInputChange} className="form-control" placeholder="+91" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Leave message</label>
                                            <textarea name='msg' onChange={handleInputChange} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your query here.."></textarea>
                                        </div>
                                        <button type="submit" onClick={show} className="btn btn-primary btn-lg">Submit</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <form className="d-flex justify-content-center m-5">
                        <input
                            onChange={getInput}
                            className="form-control me-2"
                            style={{ width: "200px" }}
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button onClick={Delete} className="btn btn-outline-primary" type="submit">
                            delete
                        </button>
                    </form>
                    <form className="d-flex justify-content-center m-5" action='https://www.google.com/search?q=react&rlz=1C1UEAD_enIN989IN989&oq=react&aqs=chrome..69i57j69i59l2j69i60j69i61j69i60l3.4223j0j4&sourceid=chrome&ie=UTF-8'>
                        <input
                            onChange={getInput1}
                            className="form-control me-2"
                            style={{ width: "200px" }}
                            type="search"
                            placeholder="google search"
                            aria-label="Search"
                        />

                    </form>
                    <a href={`https://www.google.com/search?q=${g}&rlz=1C1UEAD_enIN989IN989&oq=react&aqs=chrome..69i57j69i59l2j69i60j69i61j69i60l3.4223j0j4&sourceid=chrome&ie=UTF-8`}> <button className="btn btn-outline-primary" type="submit">

                        search</button> </a>
                </div>
            </section>

        </>

    );
}

export default Contact;
