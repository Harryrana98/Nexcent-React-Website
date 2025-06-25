import Rafiki from "./assets/rafiki.svg"
function SpendingSection() {
  return (
    <>
    <div className="p-[2rem] flex justify-around  items-center">
        <div className="w-[40%]">
            <img className="w-full" src={Rafiki} alt="" />
        </div>
        <div className="w-[38%]">
            <h1  className="text-2xl font-bold">The unseen of spending three years at pixcelgrade</h1>
            <p className="text-gray-500 text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa rerum voluptate ex recusandae molestiae illo, incidunt modi quibusdam quod? Quibusdam facilis minima sit exercitationem hic veritatis voluptate incidunt. Perferendis, sapiente!</p>
        </div>
    </div>
    
    </>
  )
}

export default SpendingSection