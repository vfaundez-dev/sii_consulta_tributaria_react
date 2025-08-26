import LeftSection from "./LeftSection"

const Main = () => {
  return (
    <main className="container mx-auto px-6 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        <LeftSection />
      </div>
    </main>
  )
}

export default Main