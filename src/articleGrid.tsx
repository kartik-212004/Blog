import Article1, {
  Article2,
  Article3,
  Article4,
  Article5,
  Article6,
  Article7,
  Article8,
  Article9,
} from "./articles"

export function Grid() {
  return (
    <div className="grid md:px-24 text-center mx-auto container md:grid-cols-3 grid-cols-1 gap-0">
      <span>
        <Article1 />
      </span>
      <span>
        <Article2 />
      </span>
      <span>
        <Article3 />
      </span>
      <span>
        <Article4 />
      </span>
      <span>
        <Article5 />
      </span>
      <span>
        <Article6 />
      </span>
      <span>
        <Article7 />
      </span>
      <span>
        <Article8 />
      </span>
      <span>
        <Article9 />
      </span>
    </div>
  )
}
