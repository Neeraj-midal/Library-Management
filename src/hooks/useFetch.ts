"use client";

import { useEffect, useState } from "react";


export function useFetch<T>(url:string){

    const [data, setData]= useState<T |null>(null);
    const [loading, setLoading]= useState (true);
    const [error, setError]= useState <any>(null);

    useEffect(()=>{
        const fetchData =async ()=>{
            try{
                setLoading(true);

                const res= await fetch(`http://localhost:4000/api${url}`);
                const result = await res.json();

                setData(result);
            }catch(err){
                setError(err);

            }finally{
                setLoading(false);
            }
        };

        fetchData();

    },[url]);


    return {data,loading,error};




}