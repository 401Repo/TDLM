import React, {useState} from 'react';


const useForm = (callback) => {
  const [item, setItem] = useState({});

  console.log('this is the item from useForm:', item);

  const handleInputChange = (e) => {
    e.preventDefault();
    setItem({ ...item, [e.target.name]: e.target.value } );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    callback(item);
    
  };
  return [
    item,
    handleInputChange,
    handleSubmit,
  ];
};

export default useForm;