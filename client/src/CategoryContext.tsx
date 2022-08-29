import React, { useState, createContext, useEffect, } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { API_URL } from "./config";
import {getCategoryList} from "./API";




export const CategoryContext = createContext<null|any>(null);


type CategoryContextProviderProps = {
  children: React.ReactNode;
};






export const CategoryProvider = ({children}:CategoryContextProviderProps)=>{

    const [category,setCategory] = useState<any[]>([]);



    const loadCategory = async()=>{
        try {
            const res = await getCategoryList();
            setCategory(res.data);
          } catch (error: any) {
           
          }
    
    }


    useEffect(()=>{
        loadCategory();
    },[]);

    return(
        <CategoryContext.Provider value={category}>
            {children}
            <ToastContainer autoClose={8000} />

        </CategoryContext.Provider>
    )
}







