import HeaderLeftIndex from '@/components/headerLeftIndex'
import HeaderTopIndex from '@/components/headerTopIndex';
import Image from 'next/image'


export default function Home() {

  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <HeaderLeftIndex />
      <HeaderTopIndex />
    </div>
  )
}