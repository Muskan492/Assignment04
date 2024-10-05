import React from 'react'
import Card from '@/components/Card';

const Home = () =>{
    return(
        <>
        <div className="heading text-4xl text-center pt-10 text-black">
           <h1>Student Identification Card</h1>
        </div>
        <div className='flex mt-52 h-full w-full fix'>
        <Card name='Muskan'
           age={17}
           rollNumber={12145} 
           day='Monday'
           time='2 to 5'
           cardBtnText='comments'/>
        <Card name='Ujala'
           age={13}
           rollNumber={54121} 
           day='sunday'
           time='9 to 12'
           cardBtnText='comments'/>
        <Card name='sana'
           age={20}
           rollNumber={9124} 
           day='tuesday'
           time='7 to 10'
           cardBtnText='comments'/>
        </div>
        </>
    )
}
export default Home;

