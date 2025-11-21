import './App.css'
import Wavify from './components/Wavify'




function App() {
  return (
      <div className='bg-base-200 flex flex-col min-h-screen'>
        <div className='flex items-center justify-center py-10'>
          <div className='card py-5 w-10/12 md:w-1/2 bg-base-300 flex items-center justify-center shadow-2xl rounded-2xl'>
              <div className='avatar'>
                <div className='w-52 rounded-full border border-base-300'>
                  <img src="/images/profile-putra.webp" alt="Profile Putra"/>
                </div>
              </div>
            <div className='card-body items-center text-center'>
              <div className='font-bold'>
                <h1 className='text-2xl'><span className='text-accent'>Hai!</span> <span className='text-accent-content'>Aku Putra</span></h1>
                <p className='text-sm'><span className='text-accent'>Seorang Programmer</span> <span className='text-accent-content'>dan Anak Mamah</span></p>
                <div className='mt-5 flex justify-center gap-4 flex-wrap'>
                  <button className='btn' onClick={()=> document.getElementById('about-modal').showModal()}>
                    About
                  </button>
                  <dialog id='about-modal' className='modal'>
                    <div className='modal-box w-full max-w-sm md:max-w-md overflow-y-auto max-h-screen text-accent bg-base-300'>
                      <div className='flex left-0 text-justify text-2xl'>
                        <h3>Namaku Muhammad Putra Ramadhan</h3>
                      </div>
                      <div className='flex text-justify text-pretty'>
                        <p>
                          Biasanya aku dipanggil Putra. Sedikit tentang aku, aku sangat menyukai Coding!
                          Aku memulai pertualngan coding ku waktu SMP. dimana aku membuat program simpel seperti Discord Bot.
                          Setelah beberapa project. Aku memutuskan untuk mengejar karir sebagai programmer.
                        </p>                     
                      </div>
                      <div className='divider'></div>
                      <div className='flex flex-row flex-wrap text-justify text-pretty'>
                        <h3 className='text-xl'>Berikut beberapa informasi tentang aku!</h3>
                        <ul className='py-1 flex flex-col gap-1'>
                          <li>Umurku 19 tahun</li>
                          <li>Aku suka ngoding</li>
                          <li>Aku sayang orangtua ku</li>
                          <li>Aku mencintai pacar ku</li>
                        </ul>
                      </div>
                    </div>
                    <form method='dialog' className='modal-backdrop'>
                      <button>close</button>
                    </form>
                  </dialog>
                  <button className='btn' onClick={()=> document.getElementById('projects-modal').showModal()}>
                    Projects
                  </button>
                  <dialog id='projects-modal' className='modal'>
                    <div className='modal-box w-full max-w-sm md:max-w-md overflow-y-auto max-h-screen text-accent bg-base-300'>
                      <h3>Belum ada bang ehek</h3>
                    </div>
                    <form method='dialog' className='modal-backdrop'>
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
                <div className='mt-5 mb-0 flex justify-center gap-5'>
                  <a className='btn' href="https://www.instagram.com/froggyjumpys?igsh=MWplejloMWMydXNscQ==" target='_blank'>Instagram
                    <img src="/images/insta-logo.webp" alt="logo-insta" className='w-5'/>
                  </a>
                  <a className='btn' href="https://github.com/FroggyJumpys" target='_blank'>Github
                    <img src="/images/github-logo.webp" alt="logo-github" className='w-5' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sticky bottom-0 w-full'>
          <Wavify />
        </div>
      </div>
  )
}

export default App;