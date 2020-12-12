import React, {useEffect} from "react";
import Tile from '../tile/tile'
import styles from '../../assets/scss/section.module.scss'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'

export function Section(props) {
    const history = useHistory()

    const renderCubes = () => {
        if(props.data){
            return props.data.map(cube => {
                if (cube.urls) {
                    return (
                        <Tile key={cube.id} title={cube.title} url={cube.urls[0]} price={cube.price} id={cube.id}/>
                    )
                }
                return <></>
            })
        }
    }

    useEffect(() => {

    }, [props.data])

    return (
        <div className={styles.container}>
            <div className={styles.topSec}>
                <h1 className={styles.topText}>{props.name}</h1>
                <Button variant="outlined" onClick={() => history.push(`/all/${props.brand}`)} >See All</Button>
            </div>
            <div className={styles.tile}>
                {renderCubes()}
            </div>
        </div>
    )
}
