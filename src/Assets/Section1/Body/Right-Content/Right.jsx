
import Frame from './Frame'

const Right = () => {

  const frames = [
    {
      img: "https://i.pinimg.com/736x/51/fe/49/51fe4985b301e6667b5dbc455d278147.jpg",
      intro: "Reach more people with simple, accessible banking built around everyday needs.",
      remark: "Underserved",
      color: "bg-blue-500"
    },
    {
      
      img: "https://i.pinimg.com/736x/9e/27/70/9e27700db5a32bb856e4d66afad67bb7.jpg",
      intro: "Give people without traditional bank access a clear path to useful financial services.",
      remark: "Underbanked",
      color: "bg-violet-500"
    },
    {
      img: "https://i.pinimg.com/736x/47/47/8d/47478d5724acc0ab5c6fb2251423bd50.jpg",
      intro: "Reward loyal customers with faster service, helpful tools, and experiences they value.",
      remark: "Satisfied",
      color: "bg-amber-500"
    },
    {
      img: "https://i.pinimg.com/1200x/0d/74/72/0d7472fb60c74bdcb38f57ef11a15a1f.jpg",
      intro: "Help small businesses manage cash flow, accept payments, and grow with confidence.",
      remark: "Small businesses",
      color: "bg-rose-500"
    }
  ];

  return (
    <div className="mx-12 my-10 w-2/3 h-[80vh] flex flex-nowrap gap-10 overflow-x-auto overflow-y-hidden scrollbar-none">
      {frames.map((elem,idx) => {
        return <Frame key={idx} idx={idx} img={elem.img} intro={elem.intro} remark={elem.remark} color={elem.color} />
      })}
    </div>
  )
}

export default Right
