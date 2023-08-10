'use client';
import AboutNavPage from "../../Components/AboutNav";
import { Chairman } from "../../../../../public/Data/Chairman";
import { VicePresident } from "../../../../../public/Data/Vice_President";
import Card from '../../Components/Card';
export default function PresidentPage(){
    return(
        <>
      <div className="flex flex-wrap flex-col items-center  justify-center bg-gradient-to-t from-blue-300  to-sky-600 ">
        <div className="m-4">
          <AboutNavPage />
        </div>
        <section>
        <h1 className="text-center text-4xl pt-4 text-white">President</h1>
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

      <section>
      <h1 className="text-center text-4xl text-white">Vice President</h1>
        <div className="flex flex-wrap items-center justify-center" >

        {VicePresident &&
          VicePresident.map((item) => (
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
    </>
    )
}