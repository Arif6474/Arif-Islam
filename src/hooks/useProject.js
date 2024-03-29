import { useEffect, useState } from "react"

const useProject = projectId => {
    const [project , setProject] =useState({})
   
    useEffect(() =>{
        
     fetch(`https://personal-portfolio-server.up.railway.app/project/${projectId}`)
     .then(res => res.json())
    .then(data => setProject(data))
    },[projectId])

    return [project]
}
export default useProject;

