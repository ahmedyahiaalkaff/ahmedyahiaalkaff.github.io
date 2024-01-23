const Tag = ({text}:{text:string}) => {
  return (
    <div className="border py-1 px-3 inline rounded-full bg-gray-400 dark:bg-gray-700 border-primary text-black dark:text-white">
      {text}
    </div>
  );
}
export default Tag;