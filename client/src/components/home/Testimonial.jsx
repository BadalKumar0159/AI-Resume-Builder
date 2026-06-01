import React from 'react'
import Title from './Title'
import { BookUserIcon, Star } from 'lucide-react'

const Testimonial = () => {
    const TestimonialData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: 'John Doe',
            title: 'Marketing Director, TechCorp',
            content: 'I finally felt confident hitting the apply button. The AI turned my rough resume into something I was proud to share.',
            rating: 4,
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: 'Jane Smith',
            title: 'Content Creator, TechCorp',
            content: 'I stopped overthinking every line of my resume. The platform made the entire process simple, fast, and enjoyable.',
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            name: 'David Lee',
            title: 'Content Writer, TechCorp',
            content: 'I was surprised by how professional my resume looked. What used to take hours was done in just a few minutes.',
            rating: 4,
        },
    ]

    return (
        <>
            <div id='testimonials' className='flex flex-col items-center my-10 scroll-mt-12'>
                <div className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10 border border-green-200 rounded-full px-4 py-1">
                    <BookUserIcon strokeWidth={1} className='size-4.5 text-green-600' />
                    <span>Testimonials</span>
                </div>

                <Title title="Don't just take our words" description="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review." />
            </div>


            <div className='flex flex-wrap mt-10 justify-center px-4 sm:px-20 xl:px-32 py-14'>
                {TestimonialData.map((testimonial, index) => (
                    <div key={index} className='p-8 m-4 max-w-md rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer'>
                        <div className="flex items-center gap-1">
                            <Star strokeWidth={1} className='size-5 text-green-700 fill-green-700'/>
                            <Star strokeWidth={1} className='size-5 text-green-700 fill-green-700'/>
                            <Star strokeWidth={1} className='size-5 text-green-700 fill-green-700'/>
                            <Star strokeWidth={1} className='size-5 text-green-700 fill-green-700'/>
                            <Star strokeWidth={1} className='size-5 text-green-700 fill-green-700'/>
                        </div>
                        <p className='text-gray-500 text-sm my-4'>"{testimonial.content}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 object-contain rounded-full' alt='' />
                            <div className='text-sm text-gray-600'>
                                <h3 className='font-medium'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Testimonial
