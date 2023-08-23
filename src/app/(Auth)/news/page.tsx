// app/page.tsx
"use client";
import { FormEvent, useEffect, useState } from "react";
import { storage } from "@/firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import Card from '@/app/(public)/Components/Card';
import BackEndNavPage from "../nav";
export default function Home() {
  const [file, setFile] = useState<File | undefined>();
  const [urlImage, setUrl] = useState("");
  const [urlExist, setUrlExist] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingCloud, setLoadingCloud] = useState(false);
  const [eventInput, setEventInput] = useState({
    fileurl: "",
    title: "",
    description: "",
  });
  const [data, setData] = useState([]);

  const uploadToCloud = async () => {
    setLoadingCloud(true)
    console.log('uploading to cloud...')
    if (!file) {
      return;
    }
    const imageRef = ref(storage, `${file.name + Date.now()}`);
    const uploadedImage = await uploadBytes(imageRef, file);
    await getDownloadURL(imageRef).then((url) => setUrl(url));
    // eventInput.fileurl = urlImage;
    console.log(urlImage)
    setLoadingCloud(false)
  };
useEffect(()=>{
  if(file){

    uploadToCloud();
  }
},[file])
  const onSubmitHandler = async (e: FormEvent) => {
    try {
      setLoading(true);
      e.preventDefault();
      // if (!file) {
      //   return;
      // }
      // const imageRef = ref(storage, `${file.name + Date.now()}`);
      // const uploadedImage = await uploadBytes(imageRef, file);
      // await getDownloadURL(imageRef).then((url) => setUrl(url));

      // const url = await getDownloadURL(imageRef);
      // setUrl(url);
      eventInput.fileurl = urlImage;
      console.log(urlImage);
      console.log(eventInput);
      if (urlImage.length !== 0) {
        const response = await axios.post("api/upload", eventInput);
        console.log("uploaded");
        setEventInput({
          fileurl: "",
          title: "",
          description: "",
        });
        setUrl('')
        setUrlExist(true);
        setFile(undefined);
        setLoading(false);
      } else {
        setUrlExist(false);
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getData = async () => {
    const response = await axios.get("api/upload");
    const data = await response.data;
    setData(data);
  };
  useEffect(() => {
    getData();
    
  }, [data]);
  return (
    <main className="p-10 flex flex-col">
      <div>
        <BackEndNavPage/>
      </div>

      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold m-5 opacity-70" > Upload News and Events</h1>
      </div>
      {/* <div>

        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => {
            setFile(e.target.files![0]);
          }}
          required
        />
       
      </div> */}
      {
       
      <form action="" onSubmit={onSubmitHandler} className="text-black flex flex-col justify-evenly  ">
         <label htmlFor="url" className="text-black text-xl">Select Image</label>
         <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => {
            setFile(e.target.files![0]);
          }}
          required
          className="py-2 my-2 px-4 cursor-pointer placeholder:Choose Image  rounded bg-white border-2 broder-black"
        />
        {loadingCloud && <p> uploading to cloud ...</p>}
        <label htmlFor="url" className="text-black text-xl">Generated URL</label>
        <input
          type="text"
          name="imageurl"
          id="imageurl"
          onChange={(e) => {
            setEventInput({ ...eventInput, fileurl: e.target.value });
          }}
          className=" px-3 py-2 my-2 rounded border-2 broder-black"
          value={urlImage}
          readOnly
        />
       <label htmlFor="title" className="text-black text-xl" >Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => {
            setEventInput({ ...eventInput, title: e.target.value });
          }}
          className=" px-3 py-2 my-2 rounded border-2 broder-black "
          value={eventInput.title}
          required
        />
        <label htmlFor="description" className="text-black text-xl" >Description</label>
        <input
        className=" px-3 py-2 my-2 rounded border-2 broder-black "
          type="text"
          name="description"
          id="description"
          onChange={(e) => {
            setEventInput({ ...eventInput, description: e.target.value });
          }}
          value={eventInput.description}
          required
        />
        {urlExist ? "" : <p className="text-red-600"> Please try again</p>}
        
        <input
          type="submit"
          disabled = {loadingCloud ? true:false}
          value={loading ? "uploading" : "upload"}
          className="px-3 py-2 bg-sky-600 text-white" 
        />
      </form> 
      }
      <div className="flex flex-wrap items-center justify-center mt-4">
        {data.length !== 0 ? (
          data.map((item: any) => {
            return (
              <Link href={`news/${item._id}`} className="" key={item._id}>
                
              <div  className="bg-white p-4 rounded m-2 w-[300px] shadow-lg ">
                <Image src={item.fileurl} alt="" width={400} height={400} className=" align-middle" />
                <div>
                  <h1 className="text-black text-lg font-bold m-2">{item.title}</h1>
                </div>
              </div>
              </Link>
            );
          })
        ) : (
          <p className=" font-bold text-xl my-5"> No Event ... </p>
        )}
      </div>
    </main>
  );
}
