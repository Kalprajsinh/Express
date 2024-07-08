// src/Compiler.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Compiler = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python3');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const helloWorldExamples = {
    python3: 'print("Hello, World!")',
    c: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
    cpp17: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
    java: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
    csharp: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}',
    php: '<?php\n    echo "Hello, World!";\n?>',
    nodejs: 'console.log("Hello, World!");'
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setCode(helloWorldExamples[selectedLanguage]);
  };

  const compileCode = async () => {
    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true',
      headers: {
        'x-rapidapi-key': '6129d442d1mshc5b312e0de8c457p183411jsn6a0870a6274a',
        'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        language_id: getLanguageId(language),
        source_code: code,
        stdin: ''
      }
    };

    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setOutput(response.data.stdout || response.data.stderr);
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
    setIsLoading(false);
  };

  const getLanguageId = (language) => {
    const languageIds = {
      python3: 71,
      c: 50,
      cpp17: 54,
      java: 62,
      csharp: 51,
      php: 68,
      nodejs: 63
    };
    return languageIds[language];
  };

  return (
    <div>
      <h1>Online Compiler</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows="10"
        cols="50"
        placeholder="Write your code here..."
      ></textarea>
      <br />
      <select value={language} onChange={handleLanguageChange}>
        <option value="python3">Python 3</option>
        <option value="c">C</option>
        <option value="cpp17">C++ 17</option>
        <option value="java">Java</option>
        <option value="csharp">C#</option>
        <option value="php">PHP</option>
        <option value="nodejs">Node.js</option>
      </select>
      <br />
      <button onClick={compileCode} disabled={isLoading}>
        {isLoading ? 'Compiling...' : 'Compile'}
      </button>
      <br />
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Compiler;


//-------------------------------------------

// import { useState } from 'react';
// import './App.css';
// import Editor from "@monaco-editor/react";
// import Navbar from './Navebar';
// import Axios from 'axios';
// import spinner from './spinner.svg';

// function App() {

//     // State variable to set users source code
//     const [userCode, setUserCode] = useState(``);

//     // State variable to set editors default language
//     const [userLang, setUserLang] = useState("python");

//     // State variable to set editors default theme
//     const [userTheme, setUserTheme] = useState("vs-dark");

//     // State variable to set editors default font size
//     const [fontSize, setFontSize] = useState(20);

//     // State variable to set users input
//     const [userInput, setUserInput] = useState("");

//     // State variable to set users output
//     const [userOutput, setUserOutput] = useState("");

//     // Loading state variable to show spinner
//     // while fetching data
//     const [loading, setLoading] = useState(false);

//     const options = {
//         fontSize: fontSize
//     }

//     // Function to call the compile endpoint
//     function compile() {
//         setLoading(true);
//         if (userCode === ``) {
//             return;
//         }

//         // Post request to compile endpoint
//         Axios.post(`http://localhost:8000/compile`, {
//             code: userCode,
//             language: userLang,
//             input: userInput
//         }).then((res) => {
//             setUserOutput(res.data.output);
//         }).then(() => {
//             setLoading(false);
//         }).catch((err) => {
//             console.error(err);
//             setLoading(false);
//         });
//     }

//     // Function to clear the output screen
//     function clearOutput() {
//         setUserOutput("");
//     }

//     return (
//         <div className="App">
//             <Navbar
//                 userLang={userLang} setUserLang={setUserLang}
//                 userTheme={userTheme} setUserTheme={setUserTheme}
//                 fontSize={fontSize} setFontSize={setFontSize}
//             />
//             <div className="main">
//                 <div className="left-container">
//                     <button className="run-btn" onClick={() => compile()}>
//                         Run
//                     </button>
//                     <Editor
//                         options={options}
//                         height="calc(100vh - 50px)"
//                         width="100%"
//                         theme={userTheme}
//                         language={userLang}
//                         defaultLanguage="python"
//                         defaultValue="# Enter your code here"
//                         onChange={(value) => { setUserCode(value) }}
//                     />
//                 </div>
//                 <div className="right-container">
//                     <h4>Input:</h4>
//                     <div className="input-box">
//                         <textarea id="code-inp" onChange=
//                             {(e) => setUserInput(e.target.value)}>
//                         </textarea>
//                     </div>
//                     <h4>Output:</h4>
//                     {loading ? (
//                         <div className="spinner-box">
//                             <img src={spinner} alt="Loading..." />
//                         </div>
//                     ) : (
//                         <div className="output-box">
//                             <pre>{userOutput}</pre>
//                             <button onClick={() => { clearOutput() }}
//                                 className="clear-btn">
//                                 Clear
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App;


// import './App.css';
// import React, { useState } from 'react';
// import axios from 'axios';

// const Compiler = () => {
//   const [code, setCode] = useState('');
//   const [language, setLanguage] = useState('python3');
//   const [output, setOutput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const compileCode = async () => {
//     const options = {
//       method: 'POST',
//       url: 'https://online-code-compiler.p.rapidapi.com/v1/',
//       headers: {
//         'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
//         'x-rapidapi-host': 'online-code-compiler.p.rapidapi.com',
//         'Content-Type': 'application/json'
//       },
//       data: {
//         language: language,
//         version: 'latest',
//         code: code,
//         input: null
//       }
//     };

//     setIsLoading(true);
//     try {
//       const response = await axios.request(options);
//       setOutput(response.data.output);
//     } catch (error) {
//       setOutput('Error: ' + error.message);
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div>
//       <h1>Online Compiler</h1>
//       <textarea
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         rows="10"
//         cols="50"
//         placeholder="Write your code here..."
//       ></textarea>
//       <br />
//       <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//         <option value="python3">Python 3</option>
//         <option value="c">C</option>
//         <option value="cpp17">C++ 17</option>
//         <option value="java">Java</option>
//         <option value="csharp">C#</option>
//         <option value="php">PHP</option>
//         <option value="nodejs">Node.js</option>
//       </select>
//       <br />
//       <button onClick={compileCode} disabled={isLoading}>
//         {isLoading ? 'Compiling...' : 'Compile'}
//       </button>
//       <br />
//       <h3>Output:</h3>
//       <pre>{output}</pre>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Compiler />
//       </header>
//     </div>
//   );
// }

// export default App;
