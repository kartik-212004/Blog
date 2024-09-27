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
          className=" object-cover border border-black w-[50rem] rounded-md"
          src={ad4}
          alt=""
        />
      </div>
      <div className="text-2xl font-medium px-44">Latest Post</div>
      <Grid />
      <div className=" container w-fit mx-auto border font-medium hover:drop-shadow-xl rounded-lg m-2 px-3 py-2 border-slate-300">
        View All Post
      </div>
      <div className="flex justify-center h-24 ">
        <img
          className=" object-cover border border-black w-[50rem] rounded-md h-24 "
          src={ad3}
          alt=""
        />
      </div>
    </>
  )
}
