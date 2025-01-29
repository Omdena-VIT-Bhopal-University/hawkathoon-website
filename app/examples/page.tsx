import { ProjectCard } from '../card';

const data = [
    {
        title: 'Schizophrenia Detector',
        desc: 'A simple app to detect Schizophrenia',
        link: 'https://github.com/arpy8/Are_you_Schizophrenic',
        image: '/fight-club.jpg'
    },
    {
        title: 'BSOD',
        desc: 'A python package to simulate BSOD',
        link: 'https://github.com/arpy8/bsod',
        image: '/bsod.png'
    },
    {
        title: 'Bhandaro ki Soochna',
        desc: 'Mobile app to assist users in locating nearest bhandara.',
        link: '',
        image: '/fight-club.jpg'
    },
]

export default function ExamplePage() {
    return (
        <div className='animate-fade-in'>
            <div className='text-center m-10 text-4xl font-bold'>
                <h1>Example Projects</h1>
            </div>
            <div className="flex flex-wrap gap-4 m-10 justify-center">
                {
                    data.map((item, index) => {
                        return (
                            <ProjectCard key={index} title={item.title} desc={item.desc} link={item.link} image={item.image} />
                        )
                    })
                }
            </div>
        </div>
    )
}