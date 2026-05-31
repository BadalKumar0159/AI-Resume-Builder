import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import framer from "../../assets/Framer.svg";
import huawei from "../../assets/Huawei.svg";
import instagram from "../../assets/Instagram.svg";
import microsoft from "../../assets/Microsoft.svg";
import walmart from "../../assets/Walmart.svg";
import menuLogo from "../../assets/menu.svg";
import starLogo from "../../assets/star.svg";
import { ArrowRight, Video, Star } from 'lucide-react';
const Hero = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const companiesLogo = [ framer, huawei, instagram, microsoft, walmart];

    return (
        <>
            <div className="min-h-screen pb-20">
                {/* Navbar */}
                <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                    <a>
                        <img src='/logo.svg' alt='logo' className='h-11 w-auto' />
                    </a>

                    <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
                        <a href="#" className="hover:text-green-600 transition">Home</a>
                        <a href="#features" className="hover:text-green-600 transition">Features</a>
                        <a href="#testimonials" className="hover:text-green-600 transition">Testimonials</a>
                        <a href="#cta" className="hover:text-green-600 transition">Contact</a>
                    </div>

                    <div className="flex gap-2">
                        <Link to={'/app?state=register'} className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white">
                            Get started
                        </Link>
                        <Link to={'/app?state=login'} className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" >
                            Login
                        </Link>
                    </div>

                    <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition" >
                       <img src={menuLogo} alt="" />
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >
                    <a href="/" className="text-white">Home</a>
                    <a href="#features" className="text-white">Features</a>
                    <a href="#testimonials" className="text-white">Testimonials</a>
                    <a href="#contact" className="text-white">Contact</a>
                    <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex" >
                        X
                    </button>
                </div>

                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
                    <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

                    {/* Avatars + Stars */}
                    <div className="flex items-center mt-24">
                        <div className="flex -space-x-3 pr-3">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]" />
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="user1" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[2]" />
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="user2" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]" />
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="user5" className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[5]" />
                        </div>

                        <div>
                            <div className="flex ">
                                {Array(5).fill(0).map((_, i) => (
                                    <Star size={20} key={i} strokeWidth={1} className="text-black fill-green-600"  />
                                ))}
                            </div>
                            <p className="text-sm text-gray-700">
                                Used by 10,000+ users
                            </p>
                        </div>
                    </div>

                    {/* Headline + CTA */}
                    <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
                        Land your dream job with <span className=" bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-nowrap">AI-powered</span> resumes.
                    </h1>

                    <p className="max-w-md text-center text-base my-7">
                        Create, edit and download professional resumes with AI-powered assistance.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4 ">
                        <Link to={'/app'} className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors">
                            Get started
                            <ArrowRight className="lucide lucide-arrow-right ml-1 size-4"/>
                        </Link>
                        <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-full px-7 h-12 text-slate-700 cursor-pointer">
                            <Video className="size-5" strokeWidth={1}/>
                            <span>Try demo</span>
                        </button>
                    </div>

                    <p className="py-6 text-slate-600 mt-14">Trusting by leading brands, including</p>

                    <div className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4" id="logo-container">
                        {companiesLogo.map((company, index) => (
                            <img key={index} src={company} className="h-7 w-auto max-w-xs"   />
                        ))}
                    </div>
                </div>
            </div>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                `}
            </style>
        </>
    )
}

export default Hero
