import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Nezuko Kamado",
      userId: 1,
      profilePic:
        "https://otakotaku.com/asset/img/character/2018/11/nezuko-kamado-5bfa89d458c2fp.jpg",
      desc: "Baru beli keranjang bambu nih guys hehe",
      img: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2022/04/07/3245214536.jpg",
    },
    {
      id: 2,
      name: "Nezuko Kamado",
      userId: 1,
      profilePic:
        "https://otakotaku.com/asset/img/character/2018/11/nezuko-kamado-5bfa89d458c2fp.jpg",
      desc: "Zenitsu kenapa ya guys",
      img: "https://external-preview.redd.it/XbIxPMAPczk0d-_MxWEBkr-hM1fZ9nQuDtci5rbJbQU.png?format=pjpg&auto=webp&s=01c7b27be493420e64fea15583b4c0abbac11a5a",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;