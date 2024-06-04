

function App() {
  return (
    <>
    <div className="mx-auto w-28 h-28 bg-slate-600 flex justify-center items-center box-border border-4 border-red-700">
        Hello
    </div>
    <div class="box-border w-64 p-4 border-4">
    This element has box-border applied.
    </div>
    <div class="box-content w-64 p-4 border-4">
    This element has box-content applied.
    </div>

    <div className="bg-red-600 flex">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, enim.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, enim.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, enim.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, enim.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, enim.</p>
    </div>

    <div class="table w-full border-collapse border border-gray-200">
    <div class="table-caption text-lg font-bold pb-4">
      Example Table Caption
    </div>

    <div class="table-header-group bg-gray-100">
      <div class="table-row">
        <div class="table-cell p-2 border border-gray-300">Header 1</div>
        <div class="table-cell p-2 border border-gray-300">Header 2</div>
        <div class="table-cell p-2 border border-gray-300">Header 3</div>
        <div class="table-cell p-2 border border-gray-300">Header 4</div>
      </div>
    </div>

    <div class="table-row-group">
      <div class="table-row">
        <div class="table-cell p-2 border border-gray-300">table-cell</div>
        <div class="table-cell p-2 border border-gray-300">table-cell</div>
        <div class="table-cell p-2 border border-gray-300">table-cell</div>
        <div class="table-cell p-2 border border-gray-300">table-cell</div>
      </div>
      <div class="table-row">
        <div class="table-cell p-2 border border-gray-300">table-cell</div>
        <div class="table-cell p-2 border border-gray-300">table-cell</div>
        <div class="table-cell p-2 border border-gray-300">table-cell</div>
        <div class="table-cell p-2 border border-gray-300">table-cell</div>
      </div>
    </div>

    <div class="table-footer-group bg-gray-100">
      <div class="table-row">
        <div class="table-cell p-2 border border-gray-300">Footer 1</div>
        <div class="table-cell p-2 border border-gray-300">Footer 2</div>
        <div class="table-cell p-2 border border-gray-300">Footer 3</div>
        <div class="table-cell p-2 border border-gray-300">Footer 4</div>
      </div>
    </div>
  </div>

  <div class="table border-separate border-gray-800">
  <div class=" table-header-group bg-gray-50">  
      <div class="table-cell px-14 p-3 border">A</div>
      <div class="table-cell px-14 p-3 border">B</div>
      <div class="table-cell px-14 p-3 border">C</div>
  </div>
  <div class="table-row">
    <div class="table-cell px-14 p-3 border">A</div>
    <div class="table-cell px-14 p-3 border">B</div>
    <div class="table-cell px-14 p-3 border">C</div>
  </div>
  <div class="table-row">
    <div class="table-cell px-14 p-3 border">A</div>
    <div class="table-cell px-14 p-3 border">B</div>
    <div class="table-cell px-14 p-3 border">C</div>
  </div>
</div>

<div className="grid grid-cols-3 border w-80 text-center">
    <p>O</p>
    <p>O</p>
    <p>O</p>
    <p>O</p>
    <p className="border">O</p>
    <p>O</p>
    <p>O</p>
    <p>O</p>
    <p>O</p>
</div>

<div class="mx-10"> 
    <img class="float-right p-2" 
         src= 
"https://media.geeksforgeeks.org/wp-content/uploads/20190807114330/GFG115.png"></img> 
    <p class="text-justify object-cover">How many times were you frustrated while looking out   
      for a good collection of programming/algorithm/interview  
      questions? What did you expect and what did you get?   
      This portal has been created to provide well written,   
      well thought and well explained solutions for selected   
      questions. An IIT Roorkee alumnus and founder of   
      GeeksforGeeks. He loves to solve programming problems  
      in most efficient ways. Apart from GeeksforGeeks, he   
      has worked with DE Shaw and Co. as a software developer   
      and JIIT Noida as an assistant professor.It is a good   
      platform to learn programming. It is an educational   
      website. Prepare for the Recruitment drive of product   
      based companies like Microsoft, Amazon, Adobe etc with  
      a free online placement preparation course.</p> 
</div>

right
<div class="h-12 w-80 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 rounded-lg"> Hello </div> 
left
<div class="h-12 w-80 bg-gradient-to-l from-yellow-400 via-green-500 to-blue-500 rounded-lg"> Hello </div> 
bottom
<div class="h-12 w-80 bg-gradient-to-b from-yellow-400 via-green-500 to-blue-500 rounded-lg"> Hello </div>
<div class="h-12 w-80 bg-gradient-to-bl from-yellow-400 via-green-500 to-blue-500 rounded-lg"> Hello </div>
<div class="h-12 w-80 bg-gradient-to-br from-yellow-400 via-green-500 to-blue-500 rounded-lg"> Hello </div>
top
<div class="h-12 w-80 bg-gradient-to-t from-yellow-400 via-green-500 to-blue-500 rounded-lg"> Hello </div>
<div class="h-12 w-80 bg-gradient-to-tl from-yellow-400 via-green-500 to-blue-500 rounded-lg"> Hello </div>
<div class="h-12 w-80 bg-gradient-to-tr from-yellow-400 via-green-500 to-blue-500 rounded-lg"> Hello </div>
    
<div class="flex justify-center items-center bg-red-600 w-80 h-80">
  <p class="font-bold">Center</p>
</div>

  
  <table class="border border-collapse">
  <thead>
    <tr>
      <th class="p-3 font-bold text-left text-gray-700 border border-gray-400">Empno</th>
      <th colspan="4" class="p-3 font-bold text-left text-gray-700 border border-gray-400 text-center">
        Marks
      </th>
    </tr>
    <tr>
      <th class="p-3 font-bold text-left text-gray-700 border border-gray-400"></th>
      <th class="p-3 font-bold text-center text-gray-700 border border-gray-400">Sec A</th>
      <th class="p-3 font-bold text-center text-gray-700 border border-gray-400">Sec B</th>
      <th class="p-3 font-bold text-center text-gray-700 border border-gray-400">Sec C</th>
      <th class="p-3 font-bold text-center text-gray-700 border border-gray-400">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-3 text-left text-gray-600 border border-gray-400">1</td>
      <td class="p-3 text-left text-gray-600 border border-gray-400">1</td>
      <td class="p-3 text-left text-gray-600 border border-gray-400">2</td>
      <td class="p-3 text-left text-gray-600 border border-gray-400">3</td>
      <td class="p-3 text-left text-gray-600 border border-gray-400">6</td>
    </tr>
    </tbody>
</table>


    Pading
    <div>
    <div className="bg-green-500 p-10">
        This is p-10 class
    </div>
    <hr />
    <div className="bg-green-500 px-10">
        This is px-10 class
    </div>
    <hr />
    <div className="bg-green-500 py-10">
        This is py-10 class
    </div>
    <hr />
    <div className="bg-green-500 pt-10">
        This is pt-10 class
    </div>
    <hr />
    <div className="bg-green-500 pb-10">
        This is pb-10 class
    </div>
    <hr />
    <div className="bg-green-500 pr-10">
        This is pr-10 class
    </div>
    <hr />
    <div className="bg-green-500 pl-10">
        This is pl-10 class
    </div>
    </div>
    Margin
    <div>
    <div className="bg-green-500 m-10">
        This is m-10 class
    </div>
    <hr />
    <div className="bg-green-500 mx-10">
        This is mx-10 class
    </div>
    <hr />
    <div className="bg-green-500 my-10">
        This is my-10 class
    </div>
    <hr />
    <div className="bg-green-500 mt-10">
        This is mt-10 class
    </div>
    <hr />
    <div className="bg-green-500 mb-10">
        This is mb-10 class
    </div>
    <hr />
    <div className="bg-green-500 mr-10">
        This is mr-10 class
    </div>
    <hr />
    <div className="bg-green-500 ml-10">
        This is ml-10 class
    </div>
    </div>
    <div className="block">Block</div>
    <div className="inline">Inline</div>
    <div className="inline-block">Inline-block</div>
    <div className="flex">Flex</div>
    <div className="grid grid-cols-3">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
    <div className="text-left">Left</div>
    <div className="text-center">Center</div>
    <div className="text-right">Right</div>
    <div className="container mx-auto p-8">
        <header className="bg-blue-500 text-white text-center py-4">
            <h1 className="text-3xl font-bold">Tailwind CSS Example</h1>
        </header>

        <main className="mt-8">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-500 text-white p-4">
                    <h2 className="text-xl font-bold">Responsive Grid Layout</h2>
                    <p>This content will be displayed in a grid layout on larger screens.</p>
                </div>
                <div className="bg-red-500 text-white p-4">
                    <h2 className="text-xl font-bold">Typography</h2>
                    <p className="text-lg">Large text with a bold font.</p>
                </div>
            </section>

            <section className="mt-8">
                <div className="flex justify-center items-center">
                    <div className="bg-yellow-500 text-white p-4">
                        <h2 className="text-xl font-bold">Flexbox Layout</h2>
                        <p>This content will be centered using flexbox.</p>
                    </div>
                </div>
            </section>

            <section className="mt-8">
                <div className="border-2 border-gray-500 p-4">
                    <h2 className="text-xl font-bold">Border</h2>
                    <p>This content has a gray border.</p>
                </div>
            </section>
        </main>
    </div>
    </>
  )
}

export default App
