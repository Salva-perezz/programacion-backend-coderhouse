import React, { useEffect, useState } from "react"
import axios from '../lib/axios.js'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Noticias = () => {
    const [noticias, setNoticias] = useState([])

    const fetchData = async () => {
        const data = await axios.get('/api/noticia')
        console.log(data)
        setNoticias(data.data)
    }

    useEffect(() => {
        fetchData()
    })

    return(
        <>
        {noticias.length && noticias.map(noticia => (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={noticia.imagen} />
                <Card.Body>
                    <Card.Title>{noticia.titulo}</Card.Title>
                    <Card.Text>
                    {noticia.cuerpo}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Autor: {noticia.autor}</ListGroup.Item>
                    <ListGroup.Item>Email del Autor: {noticia.email}</ListGroup.Item>
                </ListGroup>
            </Card>
        ))}
    </>
    )
}

export default Noticias