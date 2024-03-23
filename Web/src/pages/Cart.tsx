
import React, { useEffect, useState } from 'react';
import { useFetchDataQuery, useUpdateDataMutation, useDeleteDataMutation } from '../Redux/apiSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


interface Item {
    id: number;
    name: string;
    email: string;
    sem: string;
    exam: string;
    img: string;
}

function Cart() {

  
    const { data, error, isLoading, refetch } = useFetchDataQuery();

    const [currentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm] = useState('');
    const [cart, setCart] = useState<any>(null);

    useEffect(() => {
        refetch();

    }, [refetch]);

    const onCart = async (id: string) => {
        try {
          const res = await axios.get(`https://649eeb6a245f077f3e9d1c4e.mockapi.io/create/${id}`);
          setCart(res.data); // Store the response data in the cart state

        } catch (error) {
          console.log('Sorry, unable to fetch data');
        }
      };
     
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

    const filteredItems = currentItems.filter((item: Item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) return <div className="spinner"></div>;



    return (
        <>
       
        <div className="container flex flex-wrap gap-10 float-right">



{filteredItems.map((item: Item, index: number) => (

            <div  key={item.id}>
                <span className="" style={{ display: '', alignItems: 'center', bottom: '50px', position: 'relative', top: "33px", backgroundColor: 'black', width: '9%', color: 'white', fontSize: '11px', borderRadius: '3px' }}>
                    ✍️ Engraving Available
                </span>

                <div className=" w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <a href="#">
                        <img className="rounded-t-lg" src={item.img} alt="product image" />
                    </a>
                    <div className="px-5 ">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                        </a>
                        <div className="flex ">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className=" text-xl font-bold text-gray-900 dark:text-white">₹ {item.sem} <br></br><del> {item.email}</del></span>
                          
                          
                        </div>
                        <br></br>
                        <div>
                        {/* <a href="#" >Buy</a> */}
                        {/* <Link to={`Book/${.id}`} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></Link> */}
                        <button className='btn btn-primary' onClick={()=>onCart(item.id)}>Buy</button>
                       
                        </div>
                    </div>
                    <br />
                </div>

            </div>


            ))}
 
 
        </div>
        </>
    )
}

export default Cart
