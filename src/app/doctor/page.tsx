"use client";

import { Doctor } from "../../../public/Data/Doctor";
import Card from "@/app/Components/Card";

export default function DoctorPage() {
  return (
    <div>
      <p className="bg-white m-3 p-4 text-justify rounded-xl shadow-md  "  >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        architecto beatae in suscipit dolores mollitia vitae veniam, tempore
        voluptatem iusto tenetur expedita consequatur ducimus unde sequi iure
        cupiditate nisi fugiat.
      </p>
      <div className="flex flex-wrap justify-center  ">
        {Doctor &&
          Doctor.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
      </div>
    </div>
  );
}
