import Footer from './components/Footer'
import FormLayout from './components/FormLayout'
import Header from './components/Header'

function App () {
  // const { state, handleInputChange, steps } = useStep()

  return (
    <div className='bg-magnolia min-h-screen h-[100vh] overflow-scroll font-Ubuntu w-full md:flex md:items-center justify-between'>
      {/* <Header state={state} steps={steps} /> */}
      <div className='md:flex md:justify-center md:w-[930px] md:m-auto md:h-fit md:py-6 gap-10 md:bg-white md:rounded-xl'>
        <Header />
        {/* <FormLayout state={state} handleInputChange={handleInputChange} /> */}
        <div className='md:flex flex-col justify-center'>
          <FormLayout />
          <Footer />
        </div>
      </div>
    </div>

  )
}

export default App
