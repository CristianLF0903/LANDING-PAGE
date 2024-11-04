import quoteBlue from '../assets/QuoteBlue.svg'
import quoteWhite from '../assets/QuoteWhite.svg'

function ClientComment ({ data }) {
  const containerClass = {
    male: 'flex flex-col items-stretch justify-start rounded-lg shadow-md gap-16 px-10 py-14 bg-cian-300 text-white',
    female:
      'flex flex-col items-stretch justify-start rounded-lg shadow-md gap-16 px-10 py-14'
  }

  return (
    <>
      {data.map((element) => (
        <div key={element.id} className={containerClass[element.genere]}>
          <div
            className={`flex flex-col justify-start items-start gap-8 pb-10 border-b border-b-${
              element.genere === 'male' ? 'white' : 'blue-dark'
            }`}
          >
            <img
              src={element.genere === 'male' ? quoteWhite : quoteBlue}
              alt='quotes'
            />
            <p className='text-lg'>{element.comment}</p>
          </div>
          <div className='flex items-center justify-center gap-11'>
            <img src={element.avatar} alt='avatar' />
            <div className='flex flex-col items-start justify-center gap-4'>
              <h1 className='text-2xl font-semibold'>{`${element.name},${element.company}`}</h1>
              <p className='text-lg'>{`${element.job},${element.location}`}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ClientComment
