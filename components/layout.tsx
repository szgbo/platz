import Dock from '../components/dock';
import CommandMenu from '../components/cmdk';

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      {children}
      <Dock />
      <CommandMenu/>
    </div>
  )
}