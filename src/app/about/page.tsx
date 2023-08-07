"use client";
import Card from "@/app/Components/Card";
import { Chairman } from "../../../public/Data/Chairman";
import { BoardMember } from "../../../public/Data/BoardMember";
export default function AboutPage() {
  return (
    <div className="flex flex-wrap flex-col items-center  justify-center bg-gradient-to-t from-blue-300  to-sky-600 ">
      <section>
        <h1 className="text-center text-4xl pt-4 text-white">Chairman</h1>
        {Chairman &&
          Chairman.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.degniation}
            />
          ))}
      </section>
      <section className="">
        <h1 className="text-center text-4xl text-white">Board Members</h1>
        <div className="flex flex-wrap justify-center">
          {BoardMember &&
            BoardMember.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                description={item.degniation}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
