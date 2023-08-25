import notfound from "../images/cat.jpg";
import "./NotFound.css";
export default function NotFound() {
  return (
    <div className="container">
      <h1>ไม่พบหน้าเว็บ (404 Page Not Found)</h1>
      <img src={notfound} alt="notfound"></img>
    </div>
  );
}
