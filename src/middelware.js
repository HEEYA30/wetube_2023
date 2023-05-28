export const avatarUpload = multer({ 
    dest: "upload/avatar", 
    limits: {
        fileSize: 3000000,
    },
});
export const videoUpload = multer({ 
    dest: "upload/video", 
    limits: {
        fileSize: 10000000,
    },
});