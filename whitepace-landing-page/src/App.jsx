import HeadLine from './components/Headline'
import ImgContainer from './components/ImageContainer'
import NavBar from './components/NavBar'
import WorkTogetherImage from './assets/WorkTogetherImage.png'
import PriceBoard from './components/PriceBoard'
import ButtonPrimary from './components/Button'
import youData from './assets/youData.png'
import Apps from './assets/Apps.png'

import apple from './assets/Apple.png'
import microsoft from './assets/microsoft.png'
import slack from './assets/Slack.png'
import google from './assets/Google.png'
import CarruselComments from './components/CarruselComments'

function App () {
  const pricesPlans = {
    free: {
      name: 'Free',
      price: '0',
      desc: 'Capture ideas and find them quickly',
      points: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks'
      ]
    },
    personal: {
      name: 'Personal',
      price: '11.99',
      desc: 'Capture ideas and find them quickly',
      points: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks'
      ]
    },
    organization: {
      name: 'Organization',
      price: '49.99',
      desc: 'Capture ideas and find them quickly',
      points: [
        'Sync unlimited devices',
        '10 GB monthly uploads',
        '200 MB max. note size',
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks'
      ]
    }
  }

  const sponsors = [
    { name: 'apple', src: apple, id: 1 },
    { name: 'microsoft', src: microsoft, id: 2 },
    { name: 'slack', src: slack, id: 3 },
    { name: 'google', src: google, id: 4 }
  ]

  return (
    <>
      <NavBar />
      <main className='flex-grow'>
        <section
          className='flex items-center justify-center gap-20 bg-blue-dark px-56 py-36 hero-section'
          id='Home'
        >
          <HeadLine
            title={{ content: 'Get More Done with whitepace', color: 'white' }}
            paragraph={{
              content:
                'Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.',
              color: 'white'
            }}
            btnText='Try Whitepace free'
          />
          <ImgContainer
            src='https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Hero-section'
            sizes='w-4/5'
          />
        </section>
        <section
          className='flex items-center justify-center gap-16 px-56 py-36 work-management'
          id='Products'
        >
          <HeadLine
            title={{
              content:
                'Project<br><span class="line-decoration">Management</span>',
              color: 'black'
            }}
            paragraph={{
              content:
                'Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.',
              color: 'black'
            }}
            btnText='Get Started'
          />
          <ImgContainer
            src='https://images.unsplash.com/photo-1677078611286-4d023c913878?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='projectManagement'
            sizes='w-5/6'
          />
        </section>
        <section className='flex items-center justify-center gap-28 px-56 pb-36'>
          <ImgContainer src={WorkTogetherImage} alt='WorkTogetherImage' />
          <HeadLine
            title={{
              content: 'Work <span class="line-decoration">together</span>',
              color: 'black'
            }}
            paragraph={{
              content:
                'With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.',
              color: 'black'
            }}
            btnText='Try it now'
          />
        </section>
        <div id='Solutions'>
          <section className='flex items-center justify-center gap-24 bg-blue-dark px-56 py-36'>
            <HeadLine
              title={{
                content:
                  'Use as <span class="line-decoration">Extension</span>',
                color: 'white'
              }}
              paragraph={{
                content:
                  'Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.',
                color: 'white'
              }}
              btnText='Let’s Go'
            />
            <ImgContainer
              src='https://images.unsplash.com/flagged/photo-1579888798036-3b823ff1a2f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Extensions'
              sizes='w-2/5'
            />
          </section>
          <section className='flex items-center justify-center gap-24 px-56 py-36'>
            <ImgContainer
              src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='CustomNeeds'
              sizes='w-3/5'
            />
            <HeadLine
              title={{
                content:
                  'Customise it to<br><span class="line-decoration">your needs</span>',
                color: 'black'
              }}
              paragraph={{
                content:
                  'Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.',
                color: 'black'
              }}
              btnText='Let’s Go'
            />
          </section>
        </div>
        <section
          className='flex items-center justify-center flex-col gap-24 px-56 py-36 text-center'
          id='Pricing'
        >
          <HeadLine
            title={{
              content: 'Choose <span class="line-decoration">Your Plan</span>',
              color: 'black'
            }}
            paragraph={{
              content:
                'Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.',
              color: 'black'
            }}
          />
          <div className='flex items-stretch justify-center gap-8'>
            <PriceBoard objects={pricesPlans.free} color='yellow' />
            <PriceBoard objects={pricesPlans.personal} color='blue' />
            <PriceBoard objects={pricesPlans.organization} color='yellow' />
          </div>
        </section>
        <section className='flex flex-col items-center justify-center gap-16 bg-blue-dark px-56 py-36 you-work text-center'>
          <div className='flex flex-col items-center justify-center gap-6 w-4/5'>
            <h2 className='text-white font-bold text-6xl tracking-wider'>
              Your work, everywhere{' '}
              <span className='line-decoration-blue'>you are</span>
            </h2>
            <p className='text-white text-lg my-7 mx-4'>
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
          <ButtonPrimary>Try Taskey</ButtonPrimary>
        </section>
        <section className='flex items-center justify-center gap-24 px-56 py-36'>
          <HeadLine
            title={{
              content: '100% <span class="line-decoration">your data</span>',
              color: 'black'
            }}
            paragraph={{
              content:
                "The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.",
              color: 'black'
            }}
            btnText='Read more'
          />
          <ImgContainer src={youData} alt='youData' sizes='w-full' />
        </section>
        <section className='flex flex-col items-center justify-center gap-28 px-56 py-36'>
          <h2 className='text-black font-bold text-6xl tracking-wider'>
            Our <span className='line-decoration'>sponsors</span>
          </h2>
          <div className='flex items-center justify-between w-full'>
            {sponsors.map((sponsor) => (
              <img key={sponsor.id} src={sponsor.src} alt={sponsor.name} />
            ))}
          </div>
        </section>
        <section
          className='flex items-center justify-center gap-20 bg-blue-dark px-56 py-36 apps-section'
          id='Resources'
        >
          <ImgContainer src={Apps} alt='Apps' sizes='w-full' />
          <HeadLine
            title={{
              content: 'Work with Your Favorite Apps Using whitepace',
              color: 'white'
            }}
            paragraph={{
              content:
                'Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.',
              color: 'white'
            }}
            btnText='Read more'
          />
        </section>
        <section>
          <h2 className='text-black font-bold text-6xl tracking-wider'>
            What Our Clients <span className='line-decoration'>Says</span>
          </h2>
          <CarruselComments />
        </section>
      </main>
    </>
  )
}

export default App
