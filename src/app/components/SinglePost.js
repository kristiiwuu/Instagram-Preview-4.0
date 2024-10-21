const SinglePost = ({ post }) => {
  return (
    <div className="w-[300px] h-[300px] bg-pink-500">
      <img src={post.url} alt="post" key={post.id}/>
    </div>
  );
};

export default SinglePost;
