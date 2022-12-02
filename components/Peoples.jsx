import React from 'react'

const Peoples = ({imgUrl, Title}) => {
    return (
        <>
            <img src={`${imgUrl}`} alt="people" className="w-full h-full object-cover rounded-[10px]" />

            <div className="absolute bottom-10 left-8 w-[25px] h-[25px] rounded-full bg-[#5D6680] z-30">
                <img src="/people-01.png" alt="people" className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 left-12 w-[25px] h-[25px] rounded-full bg-[#5D6680] z-20">
                <img src="/people-02.png" alt="people" className="w-full h-full" />
            </div>
            <div className="absolute bottom-10 left-16 w-[25px] h-[25px]  rounded-full bg-[#5D6680] z-10" >
                <img src="/people-03.png" alt="people" className="w-full h-full" />
            </div>
            <span className='absolute bottom-[2.75rem] left-24 text-[12px] text-white text-center'>+264 has joined</span>
            <span className='absolute top-[75%] left-6 text-[18px] font-bold text-white'>{Title}</span>
        </>
    )
}

export default Peoples