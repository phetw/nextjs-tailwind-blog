function Layout({ children }) {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="container p-4">{children}</div>
    </div>
  )
}

export default Layout
