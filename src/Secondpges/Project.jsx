import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { BiGridAlt } from "react-icons/bi";
import Link from "../Third_page/Link_data"
import Star from "../Assert/Star.png"

function Project() {
    const buttonData = ['All', 'Android', 'iOS', 'Web', 'Linux', 'ML'];
    const dataProjects = [
        { id: 1, category: 'iOS', description: "Swift UI using MVVP layout" },
        { id: 2, category: 'Ansible & Kubernetes', description: "Using Docker to deploy the project using Kubernetes and Ansible automation" },
        { id: 3, category: 'Linux', description: "Using Docker to deploy the synk to detect problem and sonar" }
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isGrid, setIsGrid] = useState(false);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const toggleLayout = () => {
        setIsGrid(prevState => !prevState);
    };

    const filteredProjects = selectedCategory === 'All' ? dataProjects : dataProjects.filter(project => project.category === selectedCategory);

    return (
        <div className='h-screen flex flex-col items-center justify-center gap-14 bg-black text-white'>
            <div className='text-[64px] text-center'>
                <h1>Creating Next Level Projects</h1>
            </div>
            <div className='flex flex-col justify-between items-center'>
                <div className='flex gap-3 mt-3'>
                    {buttonData.map((name, index) => (
                        <div className={`border rounded-[500px] py-8 px-10 text-center cursor-pointer ${selectedCategory === name ? 'bg-gray-500 text-white' : 'border-gray-500 text-gray-500'}`} key={index}
                            onClick={() => handleCategoryClick(name)}>
                            <h1 className='font-bold text-xl'>{name}</h1>
                        </div>
                    ))}
                    <div className='flex gap-3'>
                        <div className='border rounded-full text-5xl text-center items-start flex px-4 py-4 cursor-pointer'onClick={() => setIsGrid(!isGrid)}>
                            <IoReorderThreeOutline />
                        </div>
                        <div className='border rounded-full text-5xl text-center items-start flex px-4 py-4 cursor-pointer' onClick={toggleLayout}>
                            <BiGridAlt />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 container'>
                <div className='flex flex-row text-center text-[#6B6868] text-2xl gap-2 font-ptsans tracking-wider font-bold justify-between mr-32'>
                    <h1>Recent Projects</h1>
                    <h1>Tools Used</h1>
                </div>
                <div className="w-full h-1 bg-gray-300 my-2 text-3xl" />
                <div className={isGrid ? "grid grid-cols-2 gap-8" : "flex flex-col gap-20"}>
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={isGrid ? "p-4 border rounded-lg" : "w-full h-1my-2 text-3xl"}>
                           <Link
                                heading={project.category}
                        subheading={project.description}
                            imgSrc={Star}
                        href="#"
                        />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
