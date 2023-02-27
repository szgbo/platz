
import CommandMenu from '../cmdk';
import Dock from '../dock/dock';
import NavBar from '../navBar';

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <NavBar />
      {children}
      <Dock />
      <CommandMenu/>
    </div>
  )
}