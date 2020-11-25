import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (options) => {
  
  const [data, setData] = useState(null);

  useEffect(() => {
          
    if (options.url) {
      const fetchData = async () => {
        const response = await axios(options);
        setData(response.data);
      };
      
      fetchData();
    }
    
  }, [options]);
  return [ data ];
};

export default useFetch;