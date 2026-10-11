import 'remixicon/fonts/remixicon.css'

const Remark = ({ remark, color }) => {
    return (
        <div className="absolute bottom-5 left-0 w-full h-20 text-2xl flex items-center justify-between px-6">
            <button className={`${color} text-gray-200 font-semibold px-5 py-2 text-xl rounded-3xl`}>{remark}</button>
            <i
                className={`ri-arrow-right-line ${color} px-4 py-2 rounded-full text-xl font-thin text-gray-200`}
            ></i>
        </div>
    )
}

export default Remark
