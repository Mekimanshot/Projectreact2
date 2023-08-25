import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import "./Detail.css"
import blogs from "../data/blog"
export default function Detail(){
    const {id} = useParams()
    const [title,settitle] = useState("")
    const [image,setimage] = useState("")
    const [Content,setContent] = useState("")
    const [author,setAuthpr] = useState("")

    useEffect(()=>{
        //ดึงข้อมูลบทความ
        const result = blogs.find((item)=>item.id === parseInt(id))
        settitle(result.title)
        setimage(result.image_url)
        setContent(result.content)
        setAuthpr(result.author)
        // eslint-disable-next-line
    },[])
    return(
      <div className="container">
            <h2 className="title">บทความ : {title}</h2>
            <img src={image} alt={title} className="blog-img"/>
            <div className="blog-detail">
                <strong>ผู้เขียน : {author}</strong>
                <p>{Content}</p>
            </div>
      </div>
    )
}