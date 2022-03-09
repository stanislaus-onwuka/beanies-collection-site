import { useEffect } from 'react';
import styles from '@styles/gallery.module.scss';
import BeanieProfile from '@components/BeanieProfile';
import { beaniesColorGallery } from '../data'

export default function Gallery() {

    for (var beaniesList = [], i = 0; i < 10; ++i){
        beaniesList[i] = i
    };

    function shuffleBeanies(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }

    const shuffledBeanieList = shuffleBeanies(beaniesList);

    return (
        <div className={styles.gallery}>
            <div className={styles.galleryGrid}>
                <div className={styles.galleryColumnOne}>
                    <BeanieProfile beanieId={shuffledBeanieList[0]} beanieBg={beaniesColorGallery[0]} />
                </div>
                <div className={styles.galleryColumnTwo}>
                    <BeanieProfile beanieId={shuffledBeanieList[1]} beanieBg={beaniesColorGallery[1]} />
                    <BeanieProfile beanieId={shuffledBeanieList[2]} beanieBg={beaniesColorGallery[2]}/>
                </div>
                <div className={styles.galleryColumnThree}>
                    <BeanieProfile beanieId={shuffledBeanieList[3]} beanieBg={beaniesColorGallery[3]} />
                    <BeanieProfile beanieId={shuffledBeanieList[4]} beanieBg={beaniesColorGallery[4]} />
                </div>
            </div>
            <div className={styles.galleryGrid}>
                <div className={styles.galleryColumnOne}>
                    <BeanieProfile beanieId={shuffledBeanieList[5]} beanieBg={beaniesColorGallery[5]} />
                </div>
                <div className={styles.galleryColumnTwo}>
                    <BeanieProfile beanieId={shuffledBeanieList[6]} beanieBg={beaniesColorGallery[6]} />
                    <BeanieProfile beanieId={shuffledBeanieList[7]} beanieBg={beaniesColorGallery[7]} />
                </div>
                <div className={styles.galleryColumnThree}>
                    <BeanieProfile beanieId={shuffledBeanieList[8]} beanieBg={beaniesColorGallery[8]} />
                    <BeanieProfile beanieId={shuffledBeanieList[9]} beanieBg={beaniesColorGallery[9]} />
                </div>
            </div>
            <div className={styles.galleryGrid}>
                <div className={styles.galleryColumnOne}>
                    <BeanieProfile beanieId={shuffledBeanieList[0]} beanieBg={beaniesColorGallery[0]} />
                </div>
                <div className={styles.galleryColumnTwo}>
                    <BeanieProfile beanieId={shuffledBeanieList[1]} beanieBg={beaniesColorGallery[1]} />
                    <BeanieProfile beanieId={shuffledBeanieList[2]} beanieBg={beaniesColorGallery[2]} />
                </div>
                <div className={styles.galleryColumnThree}>
                    <BeanieProfile beanieId={shuffledBeanieList[3]} beanieBg={beaniesColorGallery[3]} />
                    <BeanieProfile beanieId={shuffledBeanieList[4]} beanieBg={beaniesColorGallery[4]} />
                </div>
            </div>
            <div className={styles.galleryGrid}>
                <div className={styles.galleryColumnOne}>
                    <BeanieProfile beanieId={shuffledBeanieList[5]} beanieBg={beaniesColorGallery[5]} />
                </div>
                <div className={styles.galleryColumnTwo}>
                    <BeanieProfile beanieId={shuffledBeanieList[6]} beanieBg={beaniesColorGallery[6]} />
                    <BeanieProfile beanieId={shuffledBeanieList[7]} beanieBg={beaniesColorGallery[7]} />
                </div>
                <div className={styles.galleryColumnThree}>
                    <BeanieProfile beanieId={shuffledBeanieList[8]} beanieBg={beaniesColorGallery[8]} />
                    <BeanieProfile beanieId={shuffledBeanieList[9]} beanieBg={beaniesColorGallery[9]}/>
                </div>
            </div>
        </div>
    )
}
