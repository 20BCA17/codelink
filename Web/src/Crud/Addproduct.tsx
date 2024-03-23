import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useInsertDataMutation } from '../Redux/apiSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Topheader from '../pages/Topheader';
import Header from '../pages/Header';

interface FormData {
  name: string;
  email: string;
  sem: string;
  exam: string;
  img: string;
}

const Addproduct: React.FC = () => {
  const history = useNavigate();
  const [img1, setImg1] = useState<string>("");

  const [insertData] = useInsertDataMutation();

  const validateForm = (data: FormData) => {
    const errors: Partial<FormData> = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } 
    if (!data.sem.trim()) {
      errors.sem = 'Semester is required';
    }
    if (!data.exam.trim()) {
      errors.exam = 'Exam is required';
    }
    return errors;
  };

  const handleSubmit = async (values: FormData) => {
    const errors = validateForm(values);
    if (Object.keys(errors).length === 0) {
      try {
        const formData = { ...values };
        if (img1) {
          formData.img = img1;
        }
        await insertData(formData).unwrap();
        setImg1(""); // Clear the img1 state after submission
        history('/');
      } catch (error) {
        console.error('Failed to insert data:', error);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesSelected = e.target.files;
    if (filesSelected && filesSelected.length > 0) {
      const fileToLoad = filesSelected[0];
      const fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent:any) => {
        const srcData = fileLoadedEvent.target.result;
        if (typeof srcData === 'string') {
          setImg1(srcData);
        }
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  };

  return (
    <>
     <Topheader/>
     <Header/>
   
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Add Product</h2>
        <Formik
          initialValues={{ name: '', email: '', sem: '', exam: '', img: '' }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <Field
                type="text"
                name="name"
                placeholder="Product Name"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none`}
              />
              <ErrorMessage name="name" component="p" className="text-red-500" />

              <Field
                type="text"
                name="email"
                placeholder="Price"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none`}
              />
              <ErrorMessage name="email" component="p" className="text-red-500" />

              <Field
                type="text"
                name="sem"
                placeholder="offer"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none`}
              />
              
              <ErrorMessage name="sem" component="p" className="text-red-500" />

              <Field
                  as="textarea"
                name="exam"
                placeholder="Description"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none`}
              />
            

              <ErrorMessage name="exam" component="p" className="text-red-500" />

              <input
                type="file"
                name="img"
                id="inputFileToLoad"
                onChange={(e) => {
                  handleFileChange(e);
                  // Formik handleChange for file inputs doesn't work as expected, so handling separately
                }}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none`}
              />

              <div className="flex justify-between items-center">
                <Link to={"/"} className="px-4 py-2 bg-blue-500 text-white rounded-md">Back</Link>
                <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </>
  );
};

export default Addproduct;
