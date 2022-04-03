/**
 * @file the main layout
 */
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
