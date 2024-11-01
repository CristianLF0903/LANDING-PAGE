import HeadLine from './components/Headline'
import ImgContainer from './components/ImageContainer'
import NavBar from './components/NavBar'
import WorkTogetherImage from './assets/WorkTogetherImage.png'

function App () {
  return (
    <>
      <NavBar />
      <main className='flex-grow'>
        <section className='flex items-center justify-center gap-20 bg-blue-dark px-56 py-36 hero-section' id='Home'>
          <HeadLine
            title={{ content: 'Get More Done with whitepace', color: 'white' }}
            paragraph={{ content: 'Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.', color: 'white' }}
            btnText='Try Whitepace free'
          />
          <ImgContainer
            src='https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Hero-section'
            sizes='w-4/5'
          />
        </section>
        <section className='flex items-center justify-center gap-16 px-56 py-36 work-management' id='Products'>
          <HeadLine
            title={{ content: 'Project <span class="line-decoration">Management</span>', color: 'black' }}
            paragraph={{ content: 'Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.', color: 'black' }}
            btnText='Get Started'
          />
          <ImgContainer
            src='https://images.unsplash.com/photo-1677078611286-4d023c913878?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='projectManagement'
            sizes='w-5/6'
          />
        </section>
        <section className='flex items-center justify-center gap-28 px-56 pb-36'>
          <ImgContainer
            src={WorkTogetherImage}
            alt='WorkTogetherImage'
          />
          <HeadLine
            title={{ content: 'Work <span class="line-decoration">together</span>', color: 'black' }}
            paragraph={{ content: 'With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.', color: 'black' }}
            btnText='Try it now'
          />
        </section>
        <section className='flex items-center justify-center gap-24 bg-blue-dark px-56 py-36'>
          <HeadLine
            title={{ content: 'Use as <span class="line-decoration">Extension</span>', color: 'white' }}
            paragraph={{ content: 'Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.', color: 'white' }}
            btnText='Let’s Go'
          />
          <ImgContainer
            src='https://images.unsplash.com/flagged/photo-1579888798036-3b823ff1a2f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Extensions'
            sizes='w-2/5'
          />
        </section>
      </main>
    </>
  )
}

export default App
