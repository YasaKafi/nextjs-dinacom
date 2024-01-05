import Image from "next/image";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { FaCheck } from "react-icons/fa";
import { buildStyles } from "react-circular-progressbar";

const TrainingCard = ({ post, decorationBox, decorationBottom }) => {
  return (
    <div className="w-full relative flex flex-row rounded-xl p-5 bg-white  shadow-md mb-5">
      <div className="absolute top-0 left-0">
        <Image src={decorationBox} />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src={decorationBottom} />
      </div>

      <div className="flex flex-col w-[70%] justify-between">
        <div className="pr-6">
          <h2 className="font-semibold text-xs md:text-base">{post.title}</h2>
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="w-8 h-8 sm:w-14 sm:h-14 sm:mb-4">
            <CircularProgressbarWithChildren
              value={post.presentase}
              strokeWidth={10}
              styles={buildStyles({
                pathColor: `${
                  post.presentase === 100 ? "#23BB86" : "rgba(40, 178, 255, 1)"
                } `,
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            >
              <div className="text-sm">
                {post.presentase === 100 ? (
                  <FaCheck size={20} color="green" />
                ) : (
                  <h2 className="text-[10px] lg:text-sm">
                    {post.presentase + "%"}
                  </h2>
                )}
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <h2
            className={`${
              post.presentase === 100 ? "pb-3 font-medium text-green-500" : "hidden"
            }`}
          >
            Lulus
          </h2>
        </div>
      </div>
      <div className="w-[30%] mb-4 flex flex-row justify-start items-center">
        <Image
          src={post.imageUrl}
          alt=""
          className="rounded-xl w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TrainingCard;
