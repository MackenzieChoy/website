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
    <div className="font-skin theme-elegant flex flex-col h-screen justify-between">
      <NavBar links={links} />
      <main className="lg:px-36">{children}</main>
      <Footer />
    </div>
  );
}
