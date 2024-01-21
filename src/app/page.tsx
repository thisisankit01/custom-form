import CodeSnippet from '@/components/CodeSnippet'
import Form from '@/components/Form'

export default function Home() {
  return (
    <div className='grid grid-flow-col gap-4'>
    <div className=''> <CodeSnippet /></div>
     <div className='col-span-3'>
      <Form />
     </div>
    </div>
  )
}
