import BlogList from '../components/BlogList'
import useFetch from './useFetch';
import {useState, useEffect} from 'react';


function Home(){
const [name,setName]=useState("jobee");

const {Data:Blogs ,isLoading,error } = useFetch("http://localhost:8000/Blogs");

	return(
		<div className="home"> 
			{error}
			{isLoading && <div>Wait....</div>}
			{/* <button onClick={()=>setName("jo")}>change name</button>*/}
		{ Blogs &&	<BlogList Blogs={Blogs} Title="All In One" /> }
		{ Blogs &&	<BlogList Blogs={Blogs.filter(blog => blog.author==="Yobu" )} Title="Yobu's Blogs" /> }	
		</div>
		)
		
	
}

export default Home;