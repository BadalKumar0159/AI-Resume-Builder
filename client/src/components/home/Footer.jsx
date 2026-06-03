import React from 'react'

const Footer = () => {
  return (
     <footer id='contact' className="w-full bg-gradient-to-b from-green-200/50 to-whitetext-gray-800 mt-35">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img src='/logo.svg' alt="" />
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Helping students and professionals create resumes with AI assistance.
                </p>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                   Turning Potential Into Opportunities.
                </p>
                
            </div>
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <p> resume ©2026. All rights reserved. </p>
                </div>
            </div>
        </footer>
  )
}

export default Footer
