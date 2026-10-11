import Button from "./Button"
import Theme from "./Theme"

const Navbar = () => {
  return (
    <div className=" h-[10vh] flex justify-between items-center px-4">
      <Button />
      <Theme />
    </div>
  )
}

export default Navbar
