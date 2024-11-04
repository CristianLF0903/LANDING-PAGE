import checkBlack from '../assets/check.svg'
import checkYellow from '../assets/check2.svg'

function PriceBoard ({ objects, color }) {
  const colorBtn = {
    blue: 'rounded-lg text-white bg-blue-light-400 hover:bg-blue-light-600 px-10 py-4 text-center',
    yellow:
      'border rounded-lg border-yellow-200 hover:border-yellow-300 px-10 py-4 text-center'
  }

  const colorContainer = {
    yellow:
      'border rounded-xl border-yellow-200 flex flex-col items-start justify-start py-10 px-11 gap-6 my-12',
    blue: 'border rounded-xl bg-blue-dark text-white flex flex-col items-start justify-start py-10 px-11 gap-6 h-auto'
  }

  return (
    <div className={colorContainer[color]}>
      <div className='flex flex-col items-start justify-start gap-6'>
        <h3 className='text-2xl font-semibold'>{objects.name}</h3>
        <h3
          className={`text-4xl font-bold ${
            color === 'blue' ? 'text-yellow-200' : null
          }`}
        >
          $ {objects.price}
        </h3>
        <p className='text-lg'>{objects.desc}</p>
      </div>

      <ul className='flex flex-col gap-7'>
        {objects.points.map((point, index) => (
          <li key={index} className='flex items-center gap-5'>
            <img
              src={color === 'yellow' ? checkBlack : checkYellow}
              alt='checkIcon'
            />
            {point}
          </li>
        ))}
      </ul>

      <button className={colorBtn[color]}>Get Started</button>
    </div>
  )
}

export default PriceBoard
