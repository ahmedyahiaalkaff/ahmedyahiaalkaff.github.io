import Tag from "./Tag"

const TagList = ({tags}:{tags: string[]}) => {
  return (
    <div className="flex flex-row justify-between flex-wrap gap-y-2 min-h-20 items-start">
      {
        tags.map((t)=> <Tag text={t} key={t}/> )
      }
    </div>
  )
}

export default TagList;