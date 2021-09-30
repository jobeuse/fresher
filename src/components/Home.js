import {useState, useEffect} from 'react';
import BlogList from '../components/BlogList'




function Home(){
//using hooks and useState
//name is the variable indentifier and setName is the function to change current value

const [Blogs,setBlogs]=useState([

{title:'my new website',body:'lorem ipsumlorem ipsumlorem ipsum',author:'John',id:1},
{title:'Just Another one',body:'lorem ipsumlorem ipsumlorem ipsum',author:'Yobu',id:2},
{title:'Hellow world',body:'lorem ipsumlorem ipsumlorem ipsum',author:'Yobu',id:3}

]);

const handleDelete= (id)=>{
	const newBlogs =Blogs.filter(blogs=>blogs.id != id);
	setBlogs(newBlogs);
}

const [name,setName]=useState("jobee")

	useEffect(()=>{
		console.log("heloo")

	},[Blogs]);

	return(
		<div className="home"> 
			<p>{name}</p>
					<button onClick={()=>setName("jo")}>change name</button>
			<BlogList Blogs={Blogs} Title="All In One" handleDelete={handleDelete}/> 
			<BlogList Blogs={Blogs.filter(blog => blog.author==="Yobu" )} Title="Yobu's Blogs" /> 	
		</div>
		)
		
	
}

export default Home;