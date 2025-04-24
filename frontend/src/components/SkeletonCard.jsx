const SkeletonCard = ()=>{
    return (
       <div className="card md:w-[240px] w-[180px] bg-gray-100 animate-pulse rounded-2xl flex flex-col justify-start items-center gap-1">
              <div className="image md:w-[240px] w-[180px] md:h-[240px] h-[180px] flex justify-center items-center overflow-hidden ">
              <div alt="" srcset="" className='rounded-t-2xl bg-gray-300 w-full h-full object-cover'/>
              </div>
              <div className=" bg-gray-300 w-32 h-9 rounded-xl"></div>
              <div className=" flex md:gap-16 gap-4 justify-between border-t-1 border-gray-300 pt-2">
              <div className="bg-gray-300 w-16 h-8 rounded-xl "></div>
              <div className="bg-gray-300  w-16 h-8 rounded-xl"></div>
              </div>
              <div className="bg-gray-300 w-24 h-9 rounded-xl"
              ></div>
          </div>
    )
  }

  export default SkeletonCard;