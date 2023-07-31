
import { PharmacyData } from "../../../../public/Data/pharmacy"
import Card from '@/app/Components/Card';
import { GiMedicines } from "react-icons/gi";

export default function PharmacyPage(){
    return(
        <div>
            <div className="bg-rose-600 h-[300px] p-4 flex flex-col md:items-center justify-evenly md:flex-row md:justify-between ">
            <div className="flex flex-col">

            <p className=" text-white" >Sahidsmriti Samudayik Hospital</p>
            <h1 className=" text-white text-3xl font-bold">Our Pharmacy Service</h1>
            </div>
            <h1 className="text-5xl  text-white opacity-50 md:mr-16 font-bold ">
                Pharmacy Services
            </h1>
            <GiMedicines className="text-white text-[300px] absolute opacity-20 md:opacity-10" />
        </div>

        <div className="bg-rose-600 p-6 flex flex-col justify-center items-center md:flex-row">
            <section className='text-[300px] text-white'>
                <GiMedicines  />
            </section>
            <section className=" text-white ml-6">
                <p className="text-4xl">
                Discover Your Path to Wellness at Our Pharmacy!
                <br />
                </p>
                <span className=" text-[15px] text-justify">
                Our team of knowledgeable pharmacists is here to assist you with expert advice, medication management, and a wide range of high-quality products.
                    </span> 
            </section>
        </div>
        <h1 className="text-3xl text-center p-6 ">Our Pharmacist</h1>
            <div className="flex flex-wrap justify-center">

            {
                PharmacyData && PharmacyData.map((item)=>{
                    return <Card key={item.id} title={item.title} description={item.description} image={item.image} />
                })
            }
            </div>
        </div>
    )
}