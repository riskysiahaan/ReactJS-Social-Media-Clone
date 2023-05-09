import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)
    //TEMPORARY
    const stories = [
        {
        id: 1,
        name: "Kamaboko Gonpachiro",
        img: "https://www.dailysia.com/wp-content/uploads/2022/02/Kamado-Tanjiro_1.jpg",
        },
        {
        id: 2,
        name: "Tomioka Giyuu",
        img: "https://cdn.idntimes.com/content-images/duniaku/post/20200209/kimetsu-no-yaiba-giyuu-tomioka-side-face-a370f00a0938b299fec53c0228b6f491.jpg",
        },
        {
        id: 3,
        name: "Muzan Kibutsuji",
        img: "https://pict.sindonews.net/dyn/850/pena/news/2022/07/21/700/832313/10-fakta-muzan-kibutsuji-raja-iblis-demon-slayer-kimetsu-no-yaiba-dgl.jpg",
        },
        {
        id: 4,
        name: "Mitsuri Kanroji",
        img: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/03/09/3875096540.jpg",
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePicture} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories