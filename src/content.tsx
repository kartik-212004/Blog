import ImageSlider from "./ImageSlider"
import ad4 from "./assets/ad4.png"
import ad3 from "./assets/fashion.jpg"
import { Grid } from "./articleGrid"
export default function Content() {
  return (
    <>
      <div className="flex justify-center">
        <ImageSlider />
      </div>
      <div className="flex justify-center h-24 ">
        <img
          className="object-cover border border-black 2xl:w-[50rem] xl:w-[40rem] xl:h-[] w-[20rem] h-24 rounded-md "
          src={ad4}
          alt=""
        />
      </div>
      <div className="text-2xl text-center font-medium md:px-44 px-6 my-3">
        Latest Post
      </div>
      <Grid />
      <div className=" container w-fit mx-auto border font-medium hover:drop-shadow-xl rounded-lg m-2 px-3 py-2 border-slate-300">
        View All Post
      </div>
      <div className="flex justify-center h-24 ">
        <img
          className=" object-cover border border-black 2xl:w-[50rem] xl:w-[40rem] xl:h-[] w-[20rem] h-24 rounded-md  "
          src={ad3}
          alt=""
        />
      </div>
    </>
  )
}
