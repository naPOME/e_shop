import axios from "axios";

const apiClient = axios.create({
    baseURL:'http://localhost:8000/api',
    timeout:10000,
    headers:{
        'content-type':'application/json',
    },
})

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';


export const productApi = {
    getAll:()=>apiClient.get('/products'),

    getById:(id:number)=>apiClient.get(`/products/${id}`),

    create:(data:any)=>apiClient.post('/products',data),

    update:(id:number,data:any)=>apiClient.put(`/products/${id}`,data),

    delete:(id:number)=>apiClient.delete(`/products/${id}`)

}

export const categoryApi = {
  getAll: () => apiClient.get('/categories', {
    headers: {
      'X-Admin-Username': ADMIN_USERNAME,
      'X-Admin-Password': ADMIN_PASSWORD,
    },
  }),
  
  getAllPublic: () => apiClient.get('/categories/'),
  
  create: (name: string) => apiClient.post('/categories', { name }, {
    headers: {
      'X-Admin-Username': ADMIN_USERNAME,
      'X-Admin-Password': ADMIN_PASSWORD,
    },
  }),
};