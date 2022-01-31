import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import React, { 
    useEffect, 
    useState 
} from 'react';
import { Link } from 'react-router-dom';
import { 
    ContainerApresentation, 
    ContainerProducts, 
    Card,
    ContainerContact 
} from '../layout/Home-styled';
import Form from './Form';
import LogoApresentation from './images/apresentation.svg';

export default function Home() 
{
    const [data, setData] = useState([])
    useEffect(() =>
    {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => setData(res.data))
    })

    useEffect(() =>
    { 
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <>
            <ContainerApresentation>
                <div data-aos="fade-up" className="box-message-apresentation">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
                    <Link to="">Acessar</Link>
                </div>
                <img data-aos="fade-left" src={LogoApresentation} alt='imagem de apresentação' />
            </ContainerApresentation>
            <ContainerProducts>
                {data.slice(0, 15).map((item, key) =>
                {
                    return(
                        <Card data-aos="fade-up" key={key}>
                            <img src={item.url} alt="imagem renderizada" />
                            <span>
                                <p>{item.title}</p>
                            </span>
                        </Card>
                    )
                })}
            </ContainerProducts>
            <ContainerContact  data-aos="fade-up">
                <Form />
            </ContainerContact>
        </>
    )
}