const UploadBar = ({ setPosts }) => {
    const handleUpload = (e) => {
        const file = e.target.files[0];
        setPosts((prev) => [...prev, file]);
    }
    return (
        <div className="w-[930px] h-[50px] bg-pink-100 rounded-lg flex justify-center items-center">
        <input type="file" />
        <button onSubmit={handleUpload} className="bg-black text-white p-[10px] rounded-lg">
            Upload
        </button>
        </div>
    );
};

export default UploadBar;
