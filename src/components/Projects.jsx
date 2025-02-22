import React from 'react'
import {useFetchProjects} from "../utils/FetchProjects.jsx";

const Projects = () => {

const {result,isError,isLoading} = useFetchProjects();
    // console.log(isLoading,result)



if (isLoading){

    return <section className='projects'>
        <h4>... app loading</h4>
    </section>
}

if(isError){
    return <section className='projects'>
        <h4>app error. try again later</h4>
    </section>
}

    // console.log(result);


    return (
        <section className='projects'>

            <div className='title'>
                <h2>Projects</h2>
                <div className='title-underline'></div>
            </div>

            <div className='projects-center'>
                {result.map((item) => {
                    const {title, url, img, id} = item;

                    return (
                        <a key={id} href={url} target='_blank' rel='noreferrer' className='project'>
                            <img className='img' src={img} alt={title}/>
                             <h5>{title}</h5>
                        </a>
                    );
                })}
            </div>
        </section>
    )
}
export default Projects
