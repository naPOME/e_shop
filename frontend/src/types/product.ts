export interface Product {
    id:number;
    name:string;
    description:string | null;
    price:number;
    stock:number;
    image_url:string | null;
    category:string | null;
    created_at:string;
    updated_at:string;

}

export interface Category {
    id:number;
    name:string;
}

export interface ProductFormData {
    name:string;
    description:string;
    price:string;
    stock:string;
    image_url:string;
    category:string;    
}

export interface ApiError{
    message:string;
    error?:Record<string, string[]>;
}