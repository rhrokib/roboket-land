import { ReactNode } from 'react';

interface RatingCardProps {
  children?: ReactNode;
  name?: string;
  designation?: string;
  comments: string;
  rating: number;
  ratingUsrerImageName: string;
}

export function RatingCard({
  rating,
  name,
  designation,
  comments,
  ratingUsrerImageName,
}: RatingCardProps) {
  const numberOfStars = rating;

  const starsArray = Array.from({ length: numberOfStars }, (_, index) => index);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[387px] h-[282px] bg-gray-50">
          <div className="px-6 py-4 mt-8">
            <div
              className="text-center text-neutral-500 text-base font-medium font-poppins leading-tight"
              dangerouslySetInnerHTML={{ __html: comments }}
            ></div>
          </div>
          <div className="h-5 relative flex justify-center items-center mt-7 gap-1">
            {starsArray.map((index) => (
              <div className="w-5 h-5 inline-flex" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18 8.10002C17.9389 7.91554 17.8293 7.75089 17.6827 7.62334C17.5361 7.49578 17.3578 7.41001 17.1667 7.37502L12.9 6.75836L10.9583 2.88336C10.8684 2.70645 10.7313 2.55788 10.5622 2.45411C10.393 2.35034 10.1984 2.29541 10 2.29541C9.80157 2.29541 9.607 2.35034 9.43785 2.45411C9.2687 2.55788 9.13158 2.70645 9.04167 2.88336L7.13334 6.75836L2.86667 7.37502C2.67522 7.4072 2.49618 7.49102 2.34885 7.61744C2.20152 7.74387 2.09148 7.90811 2.03061 8.09245C1.96973 8.2768 1.96032 8.47427 2.00339 8.66357C2.04645 8.85287 2.14037 9.02682 2.27501 9.16669L5.35834 12.175L4.63334 16.425C4.59123 16.6261 4.60904 16.8352 4.68459 17.0263C4.76014 17.2174 4.89009 17.3821 5.05834 17.5C5.23807 17.6364 5.45776 17.7096 5.68334 17.7084C5.85764 17.7075 6.02916 17.6646 6.18334 17.5834L10 15.575L13.8167 17.5834C13.993 17.6767 14.1919 17.7187 14.3908 17.7046C14.5898 17.6906 14.7808 17.621 14.9422 17.5039C15.1037 17.3867 15.229 17.2266 15.304 17.0418C15.3791 16.857 15.4008 16.6549 15.3667 16.4584L14.6417 12.2084L17.725 9.16669C17.862 9.02973 17.9598 8.85852 18.0082 8.67092C18.0566 8.48331 18.0537 8.28616 18 8.10002Z"
                    fill="#FBC02D"
                  />
                </svg>
              </div>
            ))}
          </div>
          <div className="rounded-full overflow-hidden flex justify-center items-center mt-8">
            <img
              className="w-[68px] h-[68px] rounded-full"
              src={ratingUsrerImageName}
              alt="asda"
            />
          </div>
          <div className="h-5 mt-3 relative flex justify-center items-center text-center text-black text-base font-medium font-['Poppins'] leading-tight">
            {name}
          </div>
          <div className="h-5 mt-3 relative flex justify-center items-center text-center text-gray-700 text-base font-medium font-['Poppins'] leading-tight">
            {designation}
          </div>
        </div>
      </div>
    </>
  );
}
