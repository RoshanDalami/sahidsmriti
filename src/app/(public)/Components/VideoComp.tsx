import { CldVideoPlayer } from "next-cloudinary";

export default function VideoComp() {
  return (
    <div className="bg-white p-3 rounded-2xl mb-5 mx-4" >
        <h1 className="text-center text-2xl font-bold p-2 ">Sahid Smriti Samudayiak Hospital</h1>
      <video controls muted preload="true" src="/video.mp4" className=" rounded-2xl" />
    </div>
  );
}
