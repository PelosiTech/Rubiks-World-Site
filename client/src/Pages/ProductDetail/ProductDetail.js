import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cube } from '../../Redux/actions/cubeActions'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from '../../assets/scss/product.module.scss'
import CustomCarousel from '../../components/Carousel/CarouselCube'
import {addCart} from '../../Redux/actions/cartActions'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ProductDetail() {
    const data = useSelector(state => state.cubes.cube)
    const loggedIn = useSelector(state => state.auth.id)
    const [cubeData, setCubeData] = useState({})
    const [images, setImages] = useState([])
    const [cubeInfo, setCubeInfo] = useState('')
    const [skuNumber, setSkuNumber] = useState('')
    const [description, setDescription] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [type, setType] = useState('')
    const [quantity, setQuantity] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        let value = window.location.pathname.slice(7)
        dispatch(cube(value))
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
    if(data) {
        setImages(data.urls)
        setCubeInfo(data.title)
        setSkuNumber(data.id)
        setDescription(data.description)
        setBrand(data.brand)
        setPrice(data.price)
        setType(data.type)
        setQuantity(data.quantity)
        setCubeData(data)
    }
    }, [data])

    const addToCart = () => {
        if(loggedIn) {
            dispatch(addCart(cubeData))
        }
    }

    return (
        <>
        <Header></Header>
            <div className={styles.productContainer}>

                <div className={styles.topContainer}>
                        <div className={styles.leftPane}>
                            {images ? <CustomCarousel items={images}>
                            </CustomCarousel> : ''
                            }
                            <div className={styles.cubeInfo}>
                                {cubeInfo}
                            </div>
                        </div>
                        <div className={styles.rightPane}>
                        <h1 className={styles.cubeTitle}>
                            {cubeInfo}
                        </h1>
                        <h3 className={styles.cubeSku}>
                            SKU: {skuNumber}
                        </h3>
                        <div className={styles.cubeCartParent}>
                        {loggedIn ? 
                        <Link to="/cart">
                        <button className={styles.cubeCart} onClick={addToCart}>
                                Add to Cart
                        </button>
                        </Link> :
                        <button className={styles.cubeCart} onClick={() => history.push('/login')}>
                                Log in
                        </button>   
                        }
                        </div>
                        </div>
                </div>
                <div className={styles.middleContainer}>
                    <h3 className={styles.productDetails}>
                        Product Details
                    </h3>
                    
                    <p className={styles.productDetailsInfo}>
                        {description}
                    </p>
                
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.cubeDetails}>
                        <div className={styles.cubeDetailsTitle}>Brand</div>
                        <div>{brand}</div>
                    </div>
                    <div className={styles.cubeDetails}>
                        <div className={styles.cubeDetailsTitle}>Type</div>
                        <div>{type}</div>
                    </div>
                    <div className={styles.cubeDetails}>
                        <div className={styles.cubeDetailsTitle}>Quantity</div>
                        <div>{quantity}</div>
                    </div>
                    <div className={styles.cubeDetails}>
                        <div className={styles.cubeDetailsTitle}>Price</div>
                        <div>${price}</div>
                    </div>
                </div>
        </div>
        <Footer/>
        </>
        
    )
}
