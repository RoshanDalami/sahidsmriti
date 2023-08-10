"use client";
import AboutNavPage from "../../Components/AboutNav";
export default function HistoryPage() {
  return (
    <>
      <div className="flex flex-wrap flex-col items-center  justify-center bg-gradient-to-t from-blue-300  to-sky-600 ">
        <div className="m-4">
          <AboutNavPage />
        </div>
        <section>
            <h1 className="text-4xl text-white text-center">
                How Sahid Smriti Formed
            </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vel
            veritatis cupiditate nostrum. Rem, repellendus. Placeat, laudantium
            deserunt. Modi libero eum nam. In asperiores nostrum animi rem,
            doloribus tenetur culpa.
          </p>
        </section>
      </div>
    </>
  );
}
