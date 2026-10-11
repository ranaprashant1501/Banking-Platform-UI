
const Index = (props) => {
  return (
    <div className="absolute top-8 left-8 h-10 w-10 rounded-full flex justify-center items-center bg-white text-black text-xl font-semibold ">
      {props.idx + 1}
    </div>
  )
}

export default Index
