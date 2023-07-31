"use client";
import Card from '@/app/Components/Card';
import { Chairman } from '../../../public/Data/Chairman';
import { BoardMember } from '../../../public/Data/BoardMember';
export default function AboutPage(){
    return(
        
        <div className='flex flex-wrap flex-col items-center  justify-center '>
            <section>
                <h1 className='text-center text-4xl'>Chairman</h1>
            {
                Chairman && Chairman.map((item)=> <Card key={item.id} title={item.title} image={item.image} description={item.degniation} />)
            }
            </section>
            <section className=''>
            <h1 className='text-center text-4xl'>Board Members</h1>
            <div className='flex flex-wrap justify-center'>
                {
                    BoardMember && BoardMember.map((item)=> <Card key={item.id} title={item.title} image={item.image} description={item.degniation}/>)
                }
            </div>

            </section>
             
        </div>
    )
}