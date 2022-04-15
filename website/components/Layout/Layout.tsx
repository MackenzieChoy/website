/**
 * @file the main layout
 */
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
export default function Layout({ children }) {
  const links = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
  ];

  return (
    <div className="theme-elegant font-skin flex flex-col justify-between">
      <NavBar links={links} />
      <main className="lg:px-36">{children}</main>
      <Footer />
    </div>
  );
}
