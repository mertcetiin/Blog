import HeaderTopIndex from '@/components/headerTopIndex'
import HeaderBlogIndex from '@/container/headerBlogIndex'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <HeaderTopIndex />
      <HeaderBlogIndex />
    </div>
  )
}