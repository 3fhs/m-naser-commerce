import Carousel from 'react-bootstrap/Carousel';
import store from '../image/store.jpg';
import shopping from '../image/shopping.jpg';
import clothing from '../image/clothing.jpg';

export default function Slide() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img style={{height:"calc(100vh + 56px)", width: "100%"}} src={store} text="First slide" />
                <Carousel.Caption>
                    <h3>Hello there</h3>
                    <p>thats the best position</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img style={{height:"calc(100vh + 56px)", width: "100%"}} src={shopping} text="Second slide" />
                <Carousel.Caption>
                    <h3>Hello there</h3>
                    <p>there are many clothes</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height:"calc(100vh + 56px)", width: "100%"}} src={clothing} text="Three slide" />
                <Carousel.Caption>
                    <h3>Hello there</h3>
                    <p>i waite for you</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}