import useSWR from "swr";
import { productApi } from "@/utils/api";
import { Product } from "@/types/product";


const fetcher = (url:string)=> productApi.getAll().then(res=>res.data);

export function useProducts(){
    const {data,error,isLoading, mutate}= useSWR<Product[]>('/api/products',fetcher)
    return{
        products:data || [],
        isLoading,
        isError:error,
        mutate,
    }
}

export function useProduct(id:number){
 const {data,error,isLoading}= useSWR<Product>(`/api/products/${id}`,
    ()=>productApi.getById(id).then(res=>res.data));
 return{
        product:data,
        isLoading,
        isError:error,
    }

}