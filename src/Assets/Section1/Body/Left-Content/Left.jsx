import Icon from "./Icon"
import Lower_text from "./Lower_text"
import Upper_text from "./Upper_text"

const Left = () => {
  return (
    <div className=" mx-12 my-10 w-1/3 h-[80vh] flex flex-col justify-between">
      <div>
        <Upper_text />
        <Lower_text />
      </div>
      <Icon />
    </div>
  )
}

export default Left
