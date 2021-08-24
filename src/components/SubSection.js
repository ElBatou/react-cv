import React from 'react'

const SubSection = ({ title = null, skills = null, experience = null, achievements = null, projects = null, custom = null }) => {
    const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
    let iterator = 0
    let flag = true

    return (
        <>
            {title !== undefined && title !== null ?
                <div className="bg-primary px-4 py-3 rounded-xl mb-4 md:mb-8">
                    <h3 className="text-white filter drop-shadow-text-primary text-2xl font-bold">{title}</h3>
                </div>
                : null
            }

            <div className="border border-gray-200 mb-6 md:mb-10 section-wrapper">
                <dl>
                    {skills !== undefined && skills !== null ?
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-2xl font-bold">
                                skills
                            </dt>
                            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                                {skills.map( (skill, index) => {
                                    let customIndex = iterator % colors.length
                                    iterator++
                                    return (<span key={`skill-item-${index}`} className={`text-white font-bold mr-2 bg-${colors[customIndex]}-700 inline-block p-4 py-2 rounded-2xl mb-3`}>{skill}</span>)
                                })}
                            </dd>
                        </div>
                        : null
                    }

                    {experience !== undefined && experience !== null ?
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-2xl font-bold">
                                experience
                            </dt>
                            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                                {experience.map( (item, index) => <p key={`experience-item-${index}`}>{item}</p>)}
                            </dd>
                        </div>
                        : null
                    }

                    {achievements !== undefined && achievements !== null ?
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-2xl font-bold">
                                achievements
                            </dt>
                            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                                <div dangerouslySetInnerHTML={{ __html: achievements }} />
                            </dd>
                        </div>
                        : null
                    }

                    {projects !== undefined && projects !== null ?
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-2xl font-bold">
                                projects
                            </dt>
                            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                                {projects.map( (project, index) => {
                                    return (
                                        <p className="mb-4" key={`project-item-${index}`}>
                                            <a href={project.link} className="text-blue-400 break-words" target="_blank" rel="noreferrer">{project.link}</a> {project.label}
                                        </p>
                                    )
                                }
                                )}
                            </dd>
                        </div>
                        : null
                    }

                    {custom !== undefined && custom !== null ?
                        <div>
                            {
                                custom.map( (item, index) => {
                                    flag = !flag
                                    let stripes = 'bg-white'
                                    if (flag) {
                                        stripes = 'bg-gray-50'
                                    }

                                    return (
                                        <div key={`custom-item-${index}`} className={`${stripes} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                            <dt className="text-2xl font-bold">
                                                {item.label}
                                            </dt>
                                            <dd className="mt-1 text-gray-900 sm:mt-0 sm:col-span-2">
                                                <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                            </dd>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                        : null
                    }
                </dl>
            </div>
        </>
    )
}

export default SubSection
