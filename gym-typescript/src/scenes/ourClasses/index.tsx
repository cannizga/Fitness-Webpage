import { ClassType, SelectedPage } from '@/shared/types';
import React from 'react'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';

const classes: Array <ClassType> = [
    {
        name: "Fitness Classes",
        description: "Proin auctor ligula tellus, ut bibendum orci auctor et. Praesent tristique mi a dolor rutrum, at accumsan erat efficitur. Cras eu odio in magna ullamcorper malesuada. Donec arcu leo, pharetra nec sem id, imperdiet interdum urna. Cras lorem nibh, rutrum ut orci a, elementum pulvinar sem. Curabitur id efficitur diam. Duis finibus porttitor erat. Praesent at sodales leo, sed tempus nibh.",
        image: image1
    },
    {
        name: "Training Classes",
        image: image2
    },
    {
        name: "Adventure Classes",
        description: "Proin auctor ligula tellus, ut bibendum orci auctor et. Praesent tristique mi a dolor rutrum, at accumsan erat efficitur. Cras eu odio in magna ullamcorper malesuada. Donec arcu leo, pharetra nec sem id, imperdiet interdum urna. Cras lorem nibh, rutrum ut orci a, elementum pulvinar sem. Curabitur id efficitur diam. Duis finibus porttitor erat. Praesent at sodales leo, sed tempus nibh.",
        image: image3
    },
    {
        name: "Weight Training Classes",
        description: "Proin auctor ligula tellus, ut bibendum orci auctor et. Praesent tristique mi a dolor rutrum, at accumsan erat efficitur. Cras eu odio in magna ullamcorper malesuada. Donec arcu leo, pharetra nec sem id, imperdiet interdum urna. Cras lorem nibh, rutrum ut orci a, elementum pulvinar sem. Curabitur id efficitur diam. Duis finibus porttitor erat. Praesent at sodales leo, sed tempus nibh.",
        image: image4
    },
    {
        name: "Ab Core Classes",
        description: "Proin auctor ligula tellus, ut bibendum orci auctor et. Praesent tristique mi a dolor rutrum, at accumsan erat efficitur. Cras eu odio in magna ullamcorper malesuada. Donec arcu leo, pharetra nec sem id, imperdiet interdum urna. Cras lorem nibh, rutrum ut orci a, elementum pulvinar sem. Curabitur id efficitur diam. Duis finibus porttitor erat. Praesent at sodales leo, sed tempus nibh.",
        image: image5
    },
    {
        name: "Yoga Classes",
        image: image6
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourClasses" className="w-full bg-primary-100 py-40">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0}
                }}>
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">
                            Maecenas aliquam nulla ut quam congue tincidunt. Maecenas ullamcorper accumsan diam eu varius. Suspendisse suscipit pellentesque arcu, ut egestas ligula semper
                            non. Proin consequat tincidunt massa at congue. Quisque blandit ultrices lacus id venenatis. Aenean a arcu tellus. Curabitur bibendum mauris tincidunt, 
                            vestibulum leo eget, ornare libero. Nunc efficitur nibh at malesuada commodo. Duis sit amet tellus molestie, fringilla ipsum eget, sollicitudin lorem. 
                            Cras sodales tincidunt egestas. Suspendisse rutrum nibh et semper sagittis.
                        </p>
                    </div>

            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}/>
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses