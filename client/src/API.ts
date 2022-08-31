import axios from "axios";
import { API_URL, headerConfig } from "./config";

/****************************************/
/*********     User         *************/
/****************************************/

export interface UserRegistrationProps {
  name: string;
  email: string;
  password: string;
  profession: string;
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


// to get user lists

export const getUserLists = async()=>{

  const res = await axios.get(API_URL+"/all-user-lists");
  return res;

}

// to get single user posts in public profile page



export const getSingleUserPosts = async(slug:any)=>{

  const res = await axios.get(API_URL+"/user-posts/"+slug);
  return res;

}


// to get single user details

export const getSingleUserDetails = async(slug:any)=>{

  const res = await axios.get(API_URL+"/user-details/"+slug);
  return res;

}

/****************************************/
/*********     Category     *************/
/****************************************/

export interface CreateCategoryProps {
  categoryName: string;
}

export const createCategory = async (props: CreateCategoryProps) => {
  const res = await axios.post(API_URL + "/create-category",{ ...props },headerConfig());
  return res;
};

export const getCategoryList = async () => {
  const res = await axios.get(API_URL + "/category-list");
  return res;
};

// to delete cate

export const deleteCategory = async (id: number) => {
  const res = await axios.delete(API_URL + "/delete-category/" + id,headerConfig());
  return res;
};

// to get posts by  category

export const getPostsByCategory = async(slug:any)=>{

  const res = await axios.get(API_URL+"/posts-by-category/"+slug);
  return res;

}


// to get category details

export const getCategoryDetails = async(slug:any)=>{
  const res = await axios.get(API_URL+"/category-details/"+slug);
  return res;
}

/****************************************/
/********* Upload Image to AWS S3  ******/
/****************************************/

export interface UploadImageProps {
  image: any;
}

export const uploadImage = async (props: UploadImageProps) => {
  const res = await axios.post(API_URL + "/upload-image",{ ...props },headerConfig());
  return res;
};

/****************************************/
/*********  Post                *********/
/****************************************/

export interface PostCreateProps {
  title: string;
  des: string;
  image: any;
  categoryBy: string;
}


// to create posts

export const createPost = async (props: PostCreateProps) => {
  const res = await axios.post(API_URL + "/create-post", { ...props }, headerConfig());
  return res;
};

// to get all the posts

export const getAllPosts = async () => {
  const res = await axios.get(API_URL + "/get-all-posts",);
  return res;
};

// to get loged in user posts

export const getLogedInUserPosts = async () => {
  const res = await axios.get(API_URL + "/logedin-user-posts", headerConfig());
  return res;
};


// to delete posts

export const deletePosts = async(id:number)=>{

  const res = await axios.delete(API_URL+"/delete-post/"+id,headerConfig());
  return res;

}

// to get single post details

export const singlePostDetails = async(slug:any) =>{

  const res = await axios.get(API_URL+"/details-post/"+slug,);
  return res;

}


// to get more posts by the same user..

export const getMorePostBySameUser = async(slug:any) =>{

  const res = await axios.get(API_URL+"/more-posts-by-user/"+slug,);
  return res;

}

// to get related posts by the same category


export const getRelatedPostsByCategory = async(slug:any)=>{

  const res = await axios.get(API_URL+"/related-posts/"+slug);
  return res;

}


