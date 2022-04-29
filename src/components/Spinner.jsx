import React from 'react';
import loader from '../loading.gif'
const Spinner = () => {
  return (
    <div>
      <div className="text-center"><img src={loader} style={{width:'50px', height:'50px'}}/></div>
    </div>
  );
}

export default Spinner;
