import SinglePost from "./SinglePost";
import UploadBar from "./UploadBar";
import { useState } from "react";

const Gallery = () => {
    const [posts, setPosts] = useState([]);

    return (
        <div className="w-[930px] h-[500px] gap-[10px] bg-[#F0F0F0] flex flex-wrap">
        <UploadBar setPosts={setPosts} />
        {posts.map((post) => (
            <SinglePost post={post} />
        ))}
        </div>
    );
};

export default Gallery;
