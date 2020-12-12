import React from 'react';
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer.js"
import styles from '../../assets/scss/search.module.scss'
import { useSelector } from 'react-redux';
import Tile from '../../components/tile/tile'


export default function SeeAllPage() {
    window.scrollTo(0, 0)
    const cubes = useSelector(state => state.cubes)
    let brand = window.location.pathname.slice(5)


    const renderCubes = () => {
        if(cubes) {
        return Object.keys(cubes).map((cube) => {
            const cubeInfo = cubes[cube]
            if (cubeInfo.brand === brand) {
                            return (
                                <div className={styles.tileContainer}>
                                    <Tile key={cubeInfo.id} title={cubeInfo.title} url={cubeInfo.urls[0]} price={cubeInfo.price} id={cubeInfo.id} />
                                </div>
                            )
                        }
                    })
        }
    }

    const about = {
        "GAN": "Created in 2009, GAN is a puzzle brand famous for its innovative cube designs. GAN cubes have pioneered some huge advances in cubing hardware, particularly 3x3, breaking numerous world and continental records all the time. Our speed cubes are endorsed by the best professional speedcuber in history such as Feliks Zemdegs.",
        "MGC": "MGC has a more tactile and crunchy (still soft) feeling, which for me is a good thing. Not to mention, the feeling of the cube doesn't severely change once lube wears out, which is a big plus.",
        "QiYi": "QiYi has the anti-stick design can prevent the cube viscosity, make the cube solve smoothly .Optimized big round corner - optimized parts of the round corner pieces, makes work coordinate effectively, enhance the corner cutting ability, make it more smooth when solves"
    }

    const header = about[brand]

    return (
        <>
            <Header/>
            <div className={styles.outContainer}>
                <div>
                    <h1 className={styles.headerSet}>{header}</h1>
                </div>
                <div className={styles.container}>
                {renderCubes()}
                </div>
            </div>
            <Footer />
        </>
    )

}
