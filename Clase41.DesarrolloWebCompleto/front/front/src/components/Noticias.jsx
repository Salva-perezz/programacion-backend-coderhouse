import { useEffect, useState } from "react"
import axios from '../lib/axios.js'

const Noticias = () => {
    const [noticias, setNoticias] = useState([])

    const fetchData = async () => {
        const data = await axios.get('/api/noticia')

        setNoticias(data.data)
    }

    useEffect(() => {
        fetchData()
    })

    
}