import Image from "next/image";
import { FaStar } from "react-icons/fa6";



export function RatingCard  ({ title, rating, name, designation, comments})  {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
        stars.push(<span key={i} className="star filled">&#9733;</span>);
        } else {
        stars.push(<span key={i} className="star">&#9734;</span>);
        }
    }

    return (
        <><div className="w-[387px] h-[383px] relative">
            <div className="w-[387px] h-[282px] left-0 top-0 absolute bg-gray-50" />
            <div className="w-[345px] left-[21px] top-[58px] absolute text-center text-neutral-500 text-base font-medium font-['Poppins'] leading-tight">{comments}</div>
            <div className="w-[345px] left-[21px] top-[363px] absolute text-center text-neutral-500 text-base font-medium font-['Poppins'] leading-tight">{designation}</div>
            <div className="w-[108px] h-5 left-[140px] top-[193px] absolute">
            <FaStar />
                <div className="w-5 h-5 left-[44px] top-0 absolute flex-col justify-start items-start inline-flex" />
                <div className="w-5 h-5 left-[22px] top-0 absolute flex-col justify-start items-start inline-flex" />
                <div className="w-5 h-5 left-[66px] top-0 absolute flex-col justify-start items-start inline-flex" />
                <div className="w-5 h-5 left-[88px] top-0 absolute flex-col justify-start items-start inline-flex" />
            </div>

            <div className="left-[122px] top-[332px] absolute text-center text-black text-base font-medium font-['Poppins'] leading-tight">{name}</div>
        </div><div>
                <Image src="/images/demo_id.jpg" width={300} height={300} alt={"avatar"} />
            </div></>
    );
}