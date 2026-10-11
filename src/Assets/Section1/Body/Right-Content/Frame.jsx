import Index from "./Index"
import Intro from "./Intro"
import Remark from "./Remark"


const Frame = (props) => {
  return (
    <div className="h-[80vh] w-1/3 shrink-0 rounded-4xl overflow-hidden relative">
      <img className="w-full h-full object-cover " src={props.img} alt="" />

      <Index idx={props.idx} />
      <Intro intro={props.intro} />
      <Remark remark={props.remark} color={props.color} />
    </div>
  )
}

export default Frame
