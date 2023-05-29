import React from 'react'
import CategoryCard from './CategoryCard'
import { BsVectorPen, BsArrowUpRight, BsFiletypeHtml, BsCamera, BsDatabase, BsBriefcase } from 'react-icons/bs'
import { TbMicrophone2, TbHeartbeat } from 'react-icons/tb'
import { WiSunrise } from 'react-icons/wi'
import { MdMusicNote } from 'react-icons/md'
import { SiMoleculer } from 'react-icons/si'
import { GiTeacher } from 'react-icons/gi'


const Category = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-32'>
        <div className='md:max-w-[1390px] max-w-[600px] m-auto'>
            <div className='flex flex-col justify-center'>
                <h1 className='md:leading-[72px] md:text-3xl text-3xl font-semibold'>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
                <p className='text-lg text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 pt-12'>
                    <CategoryCard 
                        icons={<BsVectorPen size={30} />}
                        title={'Design'}
                    />
                    <CategoryCard 
                        icons={<BsFiletypeHtml size={30} />}
                        title={'Development'}
                    />
                    <CategoryCard 
                        icons={<TbMicrophone2 size={30} />}
                        title={'Marketing'}
                    />
                    <CategoryCard 
                        icons={<BsBriefcase size={30} />}
                        title={'Business'}
                    />

                    <CategoryCard 
                        icons={<WiSunrise size={30} />}
                        title={'Lifestyle'}
                    />
                    <CategoryCard 
                        icons={<BsCamera size={30} />}
                        title={'Photography'}
                    />
                    <CategoryCard 
                        icons={<MdMusicNote size={30} />}
                        title={'Music'}
                    />
                    <CategoryCard 
                        icons={<BsDatabase size={30} />}
                        title={'Data Science'}
                    />

                    <CategoryCard 
                        icons={<BsVectorPen size={30} />}
                        title={'Personal Develop'}
                    />
                    <CategoryCard 
                        icons={<TbHeartbeat size={30} />}
                        title={'Health & Fitness'}
                    />
                    <CategoryCard 
                        icons={<SiMoleculer size={30} />}
                        title={'Finance'}
                    />
                    <CategoryCard 
                        icons={<GiTeacher size={30} />}
                        title={'Teaching'}
                    />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Category