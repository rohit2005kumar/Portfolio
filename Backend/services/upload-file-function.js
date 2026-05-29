import streamifier from "streamifier";
import cloudinary from "./cloudinary-for-image-upload.js";

export const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {

    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "portfolio",
        
      },
      (error, result) => {

        if (result) resolve(result);
        else reject(error);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};
export const uploadMultipleFilesToCloudinary = async (filesArray) => {
 

  const uploadPromises = filesArray.map((file) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "portfolio/assets",
          resource_type: file.mimetype === "application/pdf"
                              ? "image"
                              : "image"
        },
        (error, result) => {
          if (result) resolve(result);
          else reject(error);
        }
      );

      streamifier
        .createReadStream(file.buffer)
        .pipe(stream);
    });
  });

  return await Promise.all(uploadPromises);
};