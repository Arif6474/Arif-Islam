import { useEffect, useState } from "react"

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://personal-portfolio-server-arif-islam.vercel.app/project')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return [projects, setProjects]
}

export default useProjects;