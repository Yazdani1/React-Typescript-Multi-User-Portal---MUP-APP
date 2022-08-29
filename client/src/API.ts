import axios from "axios";
import { API_URL, headerConfig } from "./config";

/****************************************/
/*********     User         *************/
/****************************************/

export interface UserRegistrationProps {
  name: string;
  email: string;
  password: string;
}

export const userRegistration = async (props: UserRegistrationProps) => {
  const res = await axios.post(API_URL + "/registration", { ...props });
  return res;
};

export interface UserLoginProps {
  email: string;
  password: string;
}

export const userLogin = async (props: UserLoginProps) => {
  const res = await axios.post(API_URL + "/login", { ...props });
  return res;
};

/****************************************/
/*********     Category     *************/
/****************************************/

export interface CreateCategoryProps {
  categoryName: string;
}

export const createCategory = async (props: CreateCategoryProps) => {
  const res = await axios.post(
    API_URL + "/create-category",
    { ...props },
    headerConfig()
  );
  return res;
};

export const getCategoryList = async () => {
  const res = await axios.get(API_URL + "/category-list");
  return res;
};

export const deleteCategory = async (id: number) => {
  const res = await axios.delete(
    API_URL + "/delete-category/" + id,
    headerConfig()
  );
  return res;
};

/****************************************/
/********* Upload Image to AWS S3  ******/
/****************************************/

export interface UploadImageProps {
  image: any;
}

export const uploadImage = async (props: UploadImageProps) => {
  const res = await axios.post(
    API_URL + "/upload-image",
    { ...props },
    headerConfig()
  );

  return res;
};

/****************************************/
/*********       Post        ************/
/****************************************/

export interface PostCreateProps {
  title: string;
  des: string;
  image: any;
  categoryBy: string;
}

export const createPost = async (props: PostCreateProps) => {
  const res = await axios.post(API_URL + "/create-post", { ...props }, headerConfig());
  return res;
};

export const getAllPosts = async () => {
  const res = await axios.get(API_URL + "/get-all-posts",);
  return res;
};

export const getLogedInUserPosts = async () => {
  const res = await axios.get(API_URL + "/logedin-user-posts", headerConfig());
  return res;
};

export const deletePosts = async(id:number)=>{

  const res = await axios.delete(API_URL+"/delete-post/"+id,headerConfig());
  return res;

}
