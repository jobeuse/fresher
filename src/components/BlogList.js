const BlogList = ({Blogs,Title}) =>{
//	const Blogs=props.blogs;
//	const Title=props.Title;

	return(
		<div className="blog-list">
		<small className="">{Title}</small>
			{Blogs.map((blog)=>(
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					
				</div>
				))}
		</div>
		);
}

export default BlogList