import Video from "../models/video";


    // Video.find({}, (error, videos) => {
    //     console.log("error", error);
    //     console.log("videos", videos);
    // });이건 왜 안되고 promise는 되지?
    //  - 그이유는 mongoose 6.0이상에선 pomise반환만 가능케 변경됨
    
    // 1. promise방법
    //  Video.find().then((videos, error) => {
    // console.log("videos", videos);
    //  console.log("error", error);
    // });
       
    // 2. async&await방법
    export const home = async(req, res) => {
    const videos = await Video.find({});
    return res.render("home", {pageTitle: "Home", videos});
}; 

export const watch = async (req, res) => {
    const { id } = req.params;
    //const id = req.params.id;와 같음
    const video = await Video.findById(id);
    if(video){
        return res.render("watch", {pageTitle: `Watching ${video.title}`, video});
    };
     return res.render("404", {pageTitle: "Video not found."});
     // return res.send(`Watch Video #${req.params.id}`);
};
export const getEdit = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(video === null){
        //if(!video)도 같은 결과
        return res.render("404", {pageTitle: "Video not found."});
    };
    return res.render("edit", {pageTitle: `Editing ${video.title}`, video});
};

export const postEdit = async (req, res) => {
    const { id } = req.params;
    
    const { title, description, hashtags } = req.body;
    const video = await Video.findById(id);
    if(!video){
        return res.render("404", {pageTitle: "Video not found."});
    };
    //방법1 일일이 업데이트
    video.title = title;
    video.description = description;
    video.hashtags = hashtags
    .split(",")
    .map((word) => 
    word.startsWith('#') ? word :`#${word}`);
    await video.save();
    return res.redirect(`/video/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Uploading Video"});
};

export const postUpload = async (req, res) => {
    const {file } = req.file;
    const {title, description, hashtags} = req.body;
    //방법1
    // const video = new Video({
    //     title,
    //     description,
    //     createdAt: Date.now(),
    // hashtags: hashtags.split(",").map(word => `#${word}`),
    //     views:0,
    //     rating: 0,
    //     },
    //     
    // });
    // await video.save();
    //방법2
    try {
        await Video.create({
        title,
        description,
        fileUrl: file.path,
        hashtags: hashtags.split(",").map(word => `#${word}`),
    });
    return res.redirect("/");
    } catch(error){
    return res.render("upload", { 
        pageTitle: "Upload Video", 
        errorMessage: error._message,
    });
};
};


export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("Delete Video");
};
