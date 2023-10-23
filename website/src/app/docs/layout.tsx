import Sidebar from '@/components/Sidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='w-full h-full flex'>
      <Sidebar />
      <main>{children}</main>
    </main>
  )
}
