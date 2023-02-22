import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import MetaData from "../../components/layout/MetaData";
import {
  Book,
  Category,
  Description,
  House,
  Language,
  Money,
  Numbers,
  Pages,
  Person,
  TypeSpecimen,
} from "@mui/icons-material";
import {
  BOOK_CATEGORIES,
  BOOK_LANGUAGE,
  BOOK_TYPE,
} from "../../utils/booksData";
import "./CreateNewBook.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Loader from "../../assets/loader.svg";

const CreateNewBook = () => {
  // const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(undefined);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [bookType, setBookType] = useState("");
  const [language, setLanguage] = useState("");
  const [noOfPages, setNoOfPages] = useState(undefined);
  const [stock, setStock] = useState(undefined);

  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setLoading(false);
    setName("");
    setPrice(0);
    setDescription("");
    setImages([]);
    setImagesPreview([]);
    setCategory("");
    setAuthor("");
    setPublisher("");
    setBookType("");
    setLanguage("");
    setNoOfPages(0);
    setStock(0);
  };

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("price", price);
    myForm.append("description", description);
    images.forEach((image) => {
      myForm.append("photos", image);
    });
    myForm.append("category", category);
    myForm.append("author", author);
    myForm.append("publisher", publisher);
    myForm.append("bookType", bookType);
    myForm.append("language", language);
    myForm.append("noOfPages", noOfPages);
    myForm.append("stock", stock);

    setLoading(true);

    try {
      const config = {
        headers: {
          Accept: "multipart/form-data",
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "/api/v1/admin/product/new",
        myForm,
        config
      );

      if (data?.success === true) {
        resetForm();
        toast.success("Product Created Successfully!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }

      if (data?.error) {
        setLoading(false);
        toast.error(data?.error || "Error Occured in Book Upload!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }

      return data;
    } catch (error) {}
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <section className='min-h-screen w-full'>
      <MetaData title='Create New Book' />
      <ToastContainer />
      <div className='container mx-auto w-4/5 flex flex-col items-center'>
        <h2 className='text-xl md:text-3xl font-medium text-slate-600 mb-5'>
          Add New Book
        </h2>
        <form
          className='flex flex-col gap-4 items-center'
          encType='multipart/form-data'
          onSubmit={createProductSubmitHandler}
        >
          <div className='custom-input-container'>
            <Book className='custom-input-icon' />
            <input
              type='text'
              placeholder='Book Name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='custom-input'
            />
          </div>

          <div className='custom-input-container'>
            <Money className='custom-input-icon' />
            <input
              type='number'
              placeholder='Price'
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='custom-input'
            />
          </div>

          <div className='custom-input-container'>
            <Description className='custom-input-icon -mt-1' />
            <textarea
              placeholder='Book Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols='20'
              rows='5'
              className='w-full pl-10'
            />
          </div>

          <div id='createProductFormFile'>
            <input
              type='file'
              name='photos'
              accept='image/*'
              onChange={createProductImagesChange}
              className='custom-input'
              multiple
            />
          </div>

          <div id='createProductFormImage'>
            {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt='Product Preview' />
            ))}
          </div>

          <div className='custom-input-container'>
            <Person className='custom-input-icon' />
            <input
              type='text'
              placeholder='Author'
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='custom-input'
            />
          </div>

          <div className='custom-input-container'>
            <House className='custom-input-icon' />
            <input
              type='text'
              placeholder='Publisher'
              required
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              className='custom-input'
            />
          </div>

          <div className='custom-input-container'>
            <Pages className='custom-input-icon' />
            <input
              type='number'
              placeholder='Number of Pages'
              required
              onChange={(e) => setNoOfPages(e.target.value)}
              className='custom-input'
            />
          </div>

          <div className='custom-input-container'>
            <Numbers className='custom-input-icon' />
            <input
              type='number'
              placeholder='Stock'
              required
              onChange={(e) => setStock(e.target.value)}
              className='custom-input'
            />
          </div>

          <div className='custom-input-container'>
            <Category className='custom-input-icon' />
            <select
              className='custom-input'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value=''>Choose Book Category</option>
              {BOOK_CATEGORIES.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
          </div>

          <div className='custom-input-container'>
            <TypeSpecimen className='custom-input-icon' />
            <select
              className='custom-input'
              onChange={(e) => setBookType(e.target.value)}
            >
              <option value=''>Choose Book Type</option>
              {BOOK_TYPE.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className='custom-input-container'>
            <Language className='custom-input-icon' />
            <select
              className='custom-input'
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value=''>Choose Book Language</option>
              {BOOK_LANGUAGE.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>

          <button
            type='submit'
            className='mt-2 py-1 px-6 rounded-sm w-80 text-xl text-blue-600 border border-blue-500 hover:bg-blue-200 active:bg-blue-400 active:text-white cursor-pointer'
          >
            {loading ? (
              <img src={Loader} alt='Loading...' className='w-8 mx-auto' />
            ) : (
              "Create"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateNewBook;
