import {
  resetNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";

const CLOUDINARY_ACCOUNT = "10xjoshua";
const API_KEY = "353477697489967";
const UPLOAD_IMAGE_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_ACCOUNT}/raw/upload`;

type PRESET_TYPES =
  | "image-medium"
  | "standard_image_preset"
  | "profile_cover_upload_preset"
  | "thumbnail_upload_preset"
  | "course_image_preset"
  | "profile-photo-preset";

async function UploadToCloudinary(
  file: File,
  type?: PRESET_TYPES
): Promise<string | undefined> {
  console.log("Uploading image");
  let timeStamp = Date.now();
  let formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", API_KEY);
  formData.append("timestamp", `${timeStamp}`);
  formData.append("public_id", `file-${file.name}-${timeStamp}`);
  formData.append("upload_preset", "zip-upload");

  startNavigationProgress();
  let response = await fetch(UPLOAD_IMAGE_URL, {
    method: "POST",
    mode: "cors",
    body: formData,
  });

  resetNavigationProgress();

  let data = await response.json();

  console.log(data);

  if (response.status == 200) {
    console.log(response);
    return data.url;
  } else {
    throw "Could not upload";
  }
}

export async function uploadImage(file: File) {
  return await UploadToCloudinary(file, "image-medium");
}
