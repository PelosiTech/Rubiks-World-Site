import React, {useState, useEffect} from 'react'
import styles from '../../assets/scss/cartTile.module.scss'
import {removeCart } from '../../Redux/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

export default function CartTile(props) {
    const loggedIn = useSelector(state => state.auth.id)
    const dispatch = useDispatch()
    const [cubeId, setCubeId] = useState('')


    useEffect(() => {
        setCubeId(props.id)
    }, [dispatch])

    const removeCartButton = () => {
        if (loggedIn) {
            dispatch(removeCart(cubeId))
        }
    }
    return (
        <div className={styles.cartTileContainer}>
            <div>
                <img height="50px" src={props.url}  alt='url img'/>
            </div>
            <div>
                <div>
                    {props.title}
                </div>
                <div>
                    ${props.price}
                </div>
                <button className={styles.removeCartButton} onClick={(removeCartButton)}>
                    X
                </button>
            </div>
        </div>
    )
}
