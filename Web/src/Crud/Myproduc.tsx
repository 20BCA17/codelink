  import React, { useEffect, useState } from 'react';
  import { useFetchDataQuery, useUpdateDataMutation, useDeleteDataMutation } from '../Redux/apiSlice';

  import { Formik, Form, Field, ErrorMessage } from 'formik';
import Topheader from '../pages/Topheader';
import Header from '../pages/Header';
import { number } from 'yup';

  interface Item {
    id: number;
    name: string;
    email: string;
    sem: string;
    exam: string;
    img: string;
  }

  const HomePage: React.FC = () => {
    const { data, error, isLoading, refetch } = useFetchDataQuery();
    const [updateData] = useUpdateDataMutation();
    const [deleteData] = useDeleteDataMutation();

    const [showModal, setShowModal] = useState(false);
    const [updateItem, setUpdateItem] = useState<Item | null>(null);
    const [, setDeleteItemId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      refetch();
    }, [refetch]);

    const handleUpdate = async (id: number, newData: Item) => {
      try {
        await updateData({ id, ...newData }).unwrap();
        setShowModal(false);
        refetch();
      } catch (error) {
        console.error('Failed to update data:', error);
      }
    };

    const handleDelete = async (id: number) => {
      if (window.confirm('Are you sure you want to delete this item?')) {
        try {
          await deleteData(id).unwrap();
          setDeleteItemId(null);
          refetch();
        } catch (error) {
          console.error('Failed to delete data:', error);
        }
      }
    };

    const handleModalOpen = (item: Item) => {
      setUpdateItem(item);
      setShowModal(true);
    };

    const handleModalClose = () => {
      setShowModal(false);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);  ``
    };

    const filteredItems = currentItems.filter((item: Item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) return <div className="spinner"></div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
      <>
      
     <Topheader/>
     <Header/>
      <div className='my-5'>
        {/* <Link to="/Insert" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mx-5">
        
        </Link> */}
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleSearch}
          className="block px-4 py-2 mb-4 border rounded-md float-right mx-3"
        />

        <table className="border-collapse border border-slate-500 w-full mx-auto" id="tableID">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 border border-gray-500">S.r</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-500">product Name</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-500">Price</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-500">offer</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-500">Description</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-500">Images</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item: Item, index: number) => (
              <tr >
                <td className="px-4 py-2 border border-gray-500">{indexOfFirstItem + index + 1}</td>
                <td className="px-4 py-2 border border-gray-500">{item.name}</td>
                <td className="px-4 py-2 border border-gray-500">{item.email}</td>
                <td className="px-4 py-2 border border-gray-500">{item.sem}</td>
                <td className="px-4 py-2 border border-gray-500">{item.exam}</td>
                <td className="px-4 py-2 border border-gray-500">
                  <img src={item.img} alt="not found" className=' w-56 h-25'/>
                </td>
                <td className="px-4 py-2 border border-gray-500">
                  <button onClick={() => handleModalOpen(item)} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md">Update</button>
                  <button onClick={() => handleDelete(item.id)} className="px-4 py-2 bg-red-500 text-white rounded-md">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <ul className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(data ? data.length / itemsPerPage : 0) }, (_, i) => (
            <li key={i} onClick={() => paginate(i + 1)} className="cursor-pointer mx-1 px-3 py-1 bg-gray-200">{i + 1}</li>
          ))}
        </ul>

        {/* Modal for update */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-md">
              <h2 className="text-lg font-semibold mb-4">Update Item</h2>
              <Formik
                initialValues={{ name: updateItem?.name || '', email: updateItem?.email || '', sem: updateItem?.sem || '', exam: updateItem?.exam || '' }}
                onSubmit={(values) => handleUpdate(updateItem!.id, values)}
              >
                <Form>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="block w-full px-4 py-2 mb-2 border rounded-md"
                  />
                  <ErrorMessage name="name" component="p" className="text-red-500" />

                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="block w-full px-4 py-2 mb-2 border rounded-md"
                  />
                  <ErrorMessage name="email" component="p" className="text-red-500" />

                  <Field
                    type="text"
                    name="sem"
                    placeholder="Semester"
                    className="block w-full px-4 py-2 mb-2 border rounded-md"
                  />
                  <ErrorMessage name="sem" component="p" className="text-red-500" />

                  <Field
                    type="text"
                    name="exam"
                    placeholder="Exam"
                    className="block w-full px-4 py-2 mb-2 border rounded-md"
                  />
               
                  <ErrorMessage name="exam" component="p" className="text-red-500" />

                  <div className="flex justify-end">
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">{data ? "Update.." : "Update."}</button>
                    <button onClick={handleModalClose} className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md">Cancel</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        )}
      </div>
      </>
    );
  };

  export default HomePage;
