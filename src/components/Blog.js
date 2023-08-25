import blogs from "../data/blog";
import "./Blog.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
export default function Blog() {
  const [search,setsearch] = useState("")
  const [filterBlog,setFilterBlog]= useState([])
  useEffect(()=>{
    //กรองข้อมูลชื่อบทความ
    const result = blogs.filter((item) => item.title.includes(search));
    setFilterBlog(result)
  },[search])
  return (
    <div className="blogs-container">
      <div className="search">
        <input type="text" className="search-input" placeholder="ค้นหาบทความ"value={search}
        onChange={(e)=>setsearch(e.target.value)}/>
      </div>
      <article>
        {filterBlog.map((item) => (
          <Link to={`/blogg/${item.id} `} key = {item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 300)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}
