
import Dock from '../components/dock';

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <Dock />
    </>
  )
}