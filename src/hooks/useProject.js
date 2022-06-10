import { useEffect, useState } from "react"

const useProject = projectId => {
    const [project , setProject] =useState({})
   
    useEffect(() =>{
        
     fetch(`http://localhost:3000/project/${projectId}`)
     .then(res => res.json())
    .then(data => setProject(data))
    },[projectId])

    return [project]
}
export default useProject;

