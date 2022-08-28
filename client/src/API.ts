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
  const res = await axios.post(API_URL + "/create-category", { ...props },headerConfig());
  return res;
};

export const getCategoryList = async () => {
  const res = await axios.get(API_URL + "/category-list", headerConfig());
  return res;
};

export const deleteCategory = async (id: number) => {
  const res = await axios.delete(API_URL + "/delete-category/" + id,headerConfig());
  return res;
};
