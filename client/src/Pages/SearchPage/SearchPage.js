import React, {useState} from 'react';
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer.js"
import styles from '../../assets/scss/search.module.scss'
import {useSelector} from 'react-redux';
import Tile from '../../components/tile/tile'
import SearchIcon from '@material-ui/icons/Search';


export default function SearchPage() {
    window.scrollTo(0, 0)
    const [value, setValue] = useState('')
    const cubes = useSelector(state => state.cubes)


    const renderCubes = () => {
        if (cubes) {
            return Object.keys(cubes).map((cube) => {

                const cubeInfo = cubes[cube]
                if (cubeInfo.title) {
                    if (cubeInfo.title.toUpperCase().includes(value.toUpperCase())) {
                        return (
                            <div className={styles.tileContainer}>
                                <Tile key={cubeInfo.id} title={cubeInfo.title} url={cubeInfo.urls[0]}
                                      price={cubeInfo.price} id={cubeInfo.id}/>
                            </div>
                        )
                    }
                }
            })
        }
    }

    const handleSearch = (value) => {
        setValue(value)
    }

    return (
        <>
            <Header></Header>
            <div className={styles.outContainer}>
                <div>
                    <h1>Shop All</h1>
                </div>
                <div className={styles.searchSection}>
                    <SearchIcon fontSize='large'/>
                    <input className={styles.input} placeholder='Type a Value'
    onChange={(e) => handleSearch(e.target.value)} value={value}/>
                </div>
                <div className={styles.container}>
                    {renderCubes()}
                </div>
            </div>
            <Footer/>
        </>
    )

}
