import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FcSearch } from "react-icons/fc";

const FetchProductDetails = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const fetchProductData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                const productsData = res.data;
                // console.log(productsData);
                setProducts(productsData);
                // console.log("after data set ", productsData)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const filterData = () => {
        const results = products.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredData(results);
    };

    const onChangeFunction = (e) => {
        console.log(e.target.value)
        setSearchQuery(e.target.value)
    }

    useEffect(() => {

        // get product detail   
        fetchProductData();

        // filterdata
        filterData();

    }, [onChangeFunction])


    return (
        <>
            <div className="d-flex justify-content-center py-3">
                <h1>FetchProductDetails</h1>
            </div>

            <div className="filter py-3 mx-3  ">
                <div className="input-group mb-3">

                    <input type="text" className="form-control" placeholder="Add Category Name" aria-label="Recipient's username" aria-describedby="button-addon2" value={searchQuery}
                        onChange={(e) => onChangeFunction(e)} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={filterData}><FcSearch /></button>
                </div>
            </div>
            <Row xs={1} md={2} className="g-4 h-50 ">
                {
                    filteredData.length > 0 ?
                        filteredData && filteredData.map((product, idx) => (
                            <Col key={idx}>
                                <Card className="border  border-primary p-4 ">
                                    <Card.Img variant="top" src={product.image} className="w-25 h-25 m-auto" />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.price}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.rating.rate}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.category}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) :
                        products && products.map((product, idx) => (
                            <Col key={idx}>
                                <Card className="border  border-primary p-4 ">
                                    <Card.Img variant="top" src={product.image} className="w-25 h-25 m-auto bg-success" />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.price}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.rating.rate}
                                        </Card.Text>
                                        <Card.Text>
                                            {product.category}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
            </Row>
        </>

    )
}

export default FetchProductDetails