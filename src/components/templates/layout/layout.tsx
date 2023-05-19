import Header from "../organisms/header/header"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-dark-d1">
      <header>
        <Header></Header>
      </header>
      <main className='flex justify-center w-full'>
        <div className='grid gap-6 grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 max-w-screen-xl w-screen h-screen text-white'>
          <div className='hidden md:block h-screen md:col-span-1 lg:col-span-2 xl:col-span-3 border-2 border-gray-d1'>
            <aside className="">sidebar</aside>
          </div>
          <div className="col-span-3 lg:col-span-6 xl:col-span-7 p-4">
            {children}
          </div>
          <div className=" hidden xl:block h-screen xl:col-span-2 border-2 border-gray-d1">
            <aside className="">sidebar</aside>
          </div>
        </div>
      </main>
    </div>
  )
}