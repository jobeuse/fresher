import {useState, useEffect} from 'react';

//using hooks and useState
//name is the variable indentifier and setName is the function to change current value
const useFetch = (url) =>{

const [Data,setData]=useState(null);
const [isLoading, setisLoading]=useState(true);
const [error, seterror]=useState(null);


    useEffect(()=>{

        fetch(url)

        .then(res =>{
            if (!res.ok) {
                setisLoading(false);
                throw Error("could not fetch data");
            }
            return res.json();
        })
        .then(data =>{

            setData(data);
            setisLoading(false);
            seterror(null);

        })
        .catch(error =>{

            console.log(error.message);
            seterror(error.message);

        })

        },[url]);

        return(Data,isLoading,error);
}

export default useFetch;