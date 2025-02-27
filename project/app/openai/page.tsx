"use client";
import axios from "axios";
import { Check, ChevronDown, Copy } from "lucide-react";
import { useState } from "react";

const AIPage = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<string[]>([]);
  const [copiedText, setCopiedText] = useState(""); // Track the copied text
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAction = async (type: string) => {
    if (!inputText) return;
    setLoading(true);
    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: `${type}: ${inputText}` }],
        },
        {
          headers: { Authorization: `Bearer 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` },
        }
      );
      if (type.includes("Summarize")) {
        setOutputText(response.data.choices[0].message.content);
        setGeneratedQuestions([]);
      } else {
        setGeneratedQuestions(response.data.choices[0].message.content.split("\n"));
        setOutputText("");
      }
    } catch (error) {
      console.error("Error processing request:", error);
      setOutputText("Failed to process request.");
    }
    setLoading(false);
    setDropdownOpen(false);
  };

  const handleCopy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Text copied to clipboard:', text);
          setCopiedText(text);
          setTimeout(() => setCopiedText(""), 2000);
        })
        .catch(err => {
          console.error('Error copying text: ', err);
        });
    } else {
      // Fallback for browsers that do not support navigator.clipboard
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        console.log('Text copied to clipboard:', text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(""), 2000);
      } catch (err) {
        console.error('Fallback: Unable to copy text:', err);
      }
      document.body.removeChild(textarea);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-200 text-gray-900 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">AI Text Assistant</h1>
      <p className="text-gray-600 mb-6">Summarize text, generate questions, or ask anything!</p>
      <textarea
        className="w-full max-w-2xl p-4 bg-white rounded-lg border border-gray-300 focus:ring focus:ring-purple-500 focus:outline-none shadow-md"
        rows={6}
        placeholder="Enter your text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div className="relative mt-6">
        <button
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg flex items-center gap-2 hover:bg-purple-700 transition"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Choose Action <ChevronDown className="w-5 h-5" />
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-300">
            <button className="block w-full text-left px-4 py-2 hover:bg-purple-100" onClick={() => handleAction("Summarize this")}>Summarize</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-purple-100" onClick={() => handleAction("Generate questions based on this")}>Generate Questions</button>
            <button className="block w-full text-left px-4 py-2 hover:bg-purple-100" onClick={() => handleAction("Answer this question")}>Ask AI</button>
          </div>
        )}
      </div>

      {loading ? (
        <div className="mt-6 w-full max-w-2xl flex flex-col items-center">
          <div className="spinner"></div>
          <p className="mt-2 text-gray-700">Generating response...</p>
        </div>
      ) : (
        <>
          {outputText && (
            <div className="mt-6 w-full max-w-2xl bg-white p-4 rounded-lg border border-gray-300 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Response</h2>
                <button onClick={() => handleCopy(outputText)} className="text-gray-600 hover:text-gray-900 flex items-center">
                  {copiedText === outputText ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-gray-700">{outputText}</p>
            </div>
          )}
          {generatedQuestions.length > 0 && (
            <div className="mt-6 w-full max-w-2xl bg-white p-4 rounded-lg border border-gray-300 shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Generated Questions</h2>
                <button onClick={() => handleCopy(generatedQuestions.join("\n"))} className="text-gray-600 hover:text-gray-900 flex items-center">
                  {copiedText === generatedQuestions.join("\n") ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              <ul className="space-y-2">
                {generatedQuestions.map((q, index) => (
                  <li key={index} className="bg-purple-100 p-3 rounded-lg">{q}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
      <style jsx>{`
        .spinner {
          border: 6px solid #f3f3f3; /* Light gray */
          border-top: 6px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto; /* Center the spinner */
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AIPage;
