import home from "../images/home.svg";
export default function Home(){
    return(
       <div className="container">
        <h1 className="title">หน้าแรกของเว็บ</h1>
        <img src={home} alt="home" />
        </div>
    )
}