import "./Home.css";
import Eric from "../../Images/eric.jpeg";


const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>
            <img 
                src={Eric}
                alt="Eric Jackson"
                className="profile-pic"
            />
        </div>
    )
}

export default Home;