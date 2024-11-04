import user1 from '../assets/Avater1.png'
import user2 from '../assets/Avater2.png'
import user3 from '../assets/Avater3.png'

import ClientComment from './ClientComment'

function CarruselComments () {
  const data = [
    {
      id: 1,
      name: 'Oberon Shaw',
      company: 'MCH',
      job: 'Head of Talent Acquisition',
      location: 'North America',
      avatar: user1,
      genere: 'female',
      comment:
        'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.'
    },
    {
      id: 2,
      name: 'Oberon Shaw',
      company: 'MCH',
      job: 'Head of Talent Acquisition',
      location: 'North America',
      avatar: user2,
      genere: 'male',
      comment:
        'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.'
    },
    {
      id: 3,
      name: 'Oberon Shaw',
      company: 'MCH',
      job: 'Head of Talent Acquisition',
      location: 'North America',
      avatar: user3,
      genere: 'male',
      comment:
        'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.'
    },
    {
      id: 4,
      name: 'Oberon Shaw',
      company: 'MCH',
      job: 'Head of Talent Acquisition',
      location: 'North America',
      avatar: user1,
      genere: 'female',
      comment:
        'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.'
    },
    {
      id: 5,
      name: 'Oberon Shaw',
      company: 'MCH',
      job: 'Head of Talent Acquisition',
      location: 'North America',
      avatar: user2,
      genere: 'male',
      comment:
        'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.'
    },
    {
      id: 6,
      name: 'Oberon Shaw',
      company: 'MCH',
      job: 'Head of Talent Acquisition',
      location: 'North America',
      avatar: user3,
      genere: 'male',
      comment:
        'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.'
    },
    {
      id: 7,
      name: 'Oberon Shaw',
      company: 'MCH',
      job: 'Head of Talent Acquisition',
      location: 'North America',
      avatar: user1,
      genere: 'female',
      comment:
        'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.'
    },
    {
      id: 8,
      name: 'Oberon Shaw',
      company: 'MCH',
      job: 'Head of Talent Acquisition',
      location: 'North America',
      avatar: user2,
      genere: 'male',
      comment:
        'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.'
    },
    {
      id: 9,
      name: 'Oberon Shaw',
      company: 'MCH',
      job: 'Head of Talent Acquisition',
      location: 'North America',
      avatar: user3,
      genere: 'male',
      comment:
        'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.'
    }
  ]

  return (
    <div className='flex gap-8'>
      <ClientComment data={data} />
    </div>
  )
}

export default CarruselComments
