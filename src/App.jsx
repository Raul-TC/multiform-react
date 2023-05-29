import Footer from './components/Footer'
import FormLayout from './components/FormLayout'
import Header from './components/Header'

function App () {
  // const { state, handleInputChange, steps } = useStep()

  return (
    <div className='bg-light-blue min-h-screen font-Ubuntu '>
      {/* <Header state={state} steps={steps} /> */}
      <Header />
      <div>
        {/* <FormLayout state={state} handleInputChange={handleInputChange} /> */}
        <FormLayout />
      </div>
      <Footer />
    </div>

  )
}

export default App
