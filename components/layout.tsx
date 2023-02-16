import Dock from '../components/dock';
import CommandMenu from '../components/cmdk';

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      {children}
      <Dock />
      <CommandMenu/>
    </div>
  )
}