'use client'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

 const Typewriter = () => {
  const [text] = useTypewriter({
    words: ['Luxe Ensembles', 'Effortless Grace', 'Timeless Glamour', 'Divine Drapes','Divine Drapes','Sophisticated Silhouettes','Sophisticated Silhouettes','Radiant Elegance','Regal Threads','Opulent Aura','Serene Chic']
    // loop: 3,
    // onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

  return (
    <div className='App'>
      <span className='text-[5vh] lg:text-[10vh]'>{text}</span>
      <Cursor cursorColor='red' />
    </div>
  )
}
export default Typewriter;
