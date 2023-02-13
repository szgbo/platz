
import Dock from '../components/dock';
import NavBar from './navBar';

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      {children}
      <Dock />
    </>
  )
}