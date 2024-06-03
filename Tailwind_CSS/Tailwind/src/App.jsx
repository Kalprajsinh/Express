import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    Pading
    <div>
    <div class="bg-green-500 p-10">
        This is p-10 class
    </div>
    <hr />
    <div class="bg-green-500 px-10">
        This is px-10 class
    </div>
    <hr />
    <div class="bg-green-500 py-10">
        This is py-10 class
    </div>
    <hr />
    <div class="bg-green-500 pt-10">
        This is pt-10 class
    </div>
    <hr />
    <div class="bg-green-500 pb-10">
        This is pb-10 class
    </div>
    <hr />
    <div class="bg-green-500 pr-10">
        This is pr-10 class
    </div>
    <hr />
    <div class="bg-green-500 pl-10">
        This is pl-10 class
    </div>
    </div>
    Margin
    <div>
    <div class="bg-green-500 m-10">
        This is m-10 class
    </div>
    <hr />
    <div class="bg-green-500 mx-10">
        This is mx-10 class
    </div>
    <hr />
    <div class="bg-green-500 my-10">
        This is my-10 class
    </div>
    <hr />
    <div class="bg-green-500 mt-10">
        This is mt-10 class
    </div>
    <hr />
    <div class="bg-green-500 mb-10">
        This is mb-10 class
    </div>
    <hr />
    <div class="bg-green-500 mr-10">
        This is mr-10 class
    </div>
    <hr />
    <div class="bg-green-500 ml-10">
        This is ml-10 class
    </div>
    </div>
    <div class="block">Block</div>
    <div class="inline">Inline</div>
    <div class="inline-block">Inline-block</div>
    <div class="flex">Flex</div>
    <div class="grid grid-cols-3">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
    <div class="text-left">Left</div>
    <div class="text-center">Center</div>
    <div class="text-right">Right</div>
    <div class="container mx-auto p-8">
        <header class="bg-blue-500 text-white text-center py-4">
            <h1 class="text-3xl font-bold">Tailwind CSS Example</h1>
        </header>

        <main class="mt-8">
            <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-green-500 text-white p-4">
                    <h2 class="text-xl font-bold">Responsive Grid Layout</h2>
                    <p>This content will be displayed in a grid layout on larger screens.</p>
                </div>
                <div class="bg-red-500 text-white p-4">
                    <h2 class="text-xl font-bold">Typography</h2>
                    <p class="text-lg">Large text with a bold font.</p>
                </div>
            </section>

            <section class="mt-8">
                <div class="flex justify-center items-center">
                    <div class="bg-yellow-500 text-white p-4">
                        <h2 class="text-xl font-bold">Flexbox Layout</h2>
                        <p>This content will be centered using flexbox.</p>
                    </div>
                </div>
            </section>

            <section class="mt-8">
                <div class="border-2 border-gray-500 p-4">
                    <h2 class="text-xl font-bold">Border</h2>
                    <p>This content has a gray border.</p>
                </div>
            </section>
        </main>
    </div>
    </>
  )
}

export default App
