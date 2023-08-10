"use client";
import Card from "@/app/(public)/Components/Card";

import AboutNavPage from "../../Components/AboutNav";
import { BoardMember } from "../../../../../public/Data/BoardMember";
import { Advisory } from "../../../../../public/Data/advisory";
import { Accounts } from "../../../../../public/Data/accounts";
export default function AboutPage() {
  return (
    <>
    <div className="flex flex-wrap flex-col items-center  justify-center bg-gradient-to-t from-blue-300  to-sky-600 ">
    <div className="m-4">
      <AboutNavPage/>
    </div>
  

      <section className="mb-16">
        <h1 className="text-center text-4xl text-white">Board Members</h1>
        <div className="flex flex-wrap items-center justify-center">
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
      <section className="mb-16">
        <h1 className="text-center text-4xl text-white">Advisory Board Members</h1>
        <div className="flex flex-wrap items-center justify-center">
          {Advisory &&
            Advisory.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
        </div>
      </section>
      <section className="mb-16">
        <h1 className="text-center text-4xl text-white">Accounting Board</h1>
        <div className="flex flex-wrap items-center justify-center">
          {Accounts &&
            Accounts.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
        </div>
      </section>
    </div>
    </>
  );
}
