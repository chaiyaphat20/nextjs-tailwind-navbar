import Navbar from './components/navbar'

export default function Home() {
  return (
    <section
      className="h-screen bg-slate-100 bg-cover bg-Hero
    font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-gray-500 text-2xl font-medium ">Fashion Tips</h2>
        <h1 className="md:text-5xl text-3xl text-gray-500 font-semibold py-5">
          Items every woman should have
        </h1>
      </div>
    </section>
  )
}
