import React, { useState } from 'react'
import { Zap, SquareUserRound, SquarePen, Download } from 'lucide-react';
import Title from './Title';

const Features = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div id='features' className='flex flex-col items-center my-10 scroll-mt-12'>

            <div className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 border border-green-200 rounded-full px-4 py-1">
                <Zap strokeWidth={1} className='size-5 stroke-green-600'/>
                <span>Simple Process</span>
            </div>

            <Title title='Build Your Resume' description='Our Streamlined porcess helps you create a professional resume in
            minutes with intelligent AI-powered tools and features.' />

            <div className="flex flex-col md:flex-row items-center justify-center">
                <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="" />
                <div className="px-4 md:px-0" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <div className={"flex items-center justify-center gap-6 max-w-md group cursor-pointer"}>
                        <div className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
                            <SquareUserRound strokeWidth={2} className='text-indigo-500' />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Instant Resume Builder</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Create polished resumes in seconds with AI-powered assistance</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
                            <SquarePen className='text-green-500'/>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Intelligent Suggestions</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Get smart recommendations for skills, summaries, and project descriptions,</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
                            <Download className='text-red-600'/>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">One-Click Export</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Download your resume instantly in clean professional formats.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}
            </style>
        </div>
    )
}

export default Features
