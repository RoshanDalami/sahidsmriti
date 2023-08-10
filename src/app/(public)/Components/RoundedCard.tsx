"use client";

import Link from "next/link";

export default function RoundedCard(props: any) {
  return (
    <Link href={`${props.path}`}>
      <div className="bg-rose-600 hover:bg-rose-500 flex justify-between m-2 w-[400px]  rounded   md:p-5   " >
        <div className=" group  overflow-hidden flex py-2 px-4 md:flex-col  items-center  ">
        <section>
          {
            <props.icon className="text-5xl  text-white font-normal group-hover:text-white transition-all ease-in-out " />
          }
        </section>
        <section className="flex items-center  ml-10 md:ml-0 ">
          <h1 className="text-center  text-2xl font-medium text-white">
            {props.title}
          </h1>
        </section>
        </div>
        <section className="text-5xl flex justify-center text-slate-100 p-4 opacity-30 ">
            {props.id}
        </section>
      </div>
    </Link>
  );
}
