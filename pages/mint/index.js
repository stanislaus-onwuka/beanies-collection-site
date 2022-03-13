import Head from 'next/head'
import styles from '../../styles/mintpage.module.scss'
import { useState, useContext } from "react";
import Web3 from "web3";
import { useAlert } from "react-alert";
//import BeaniesABI from "../artifacts/BeaniesABI.json";
import Counter from "../../components/counter";
import MintHeader from "../../components/MintHeader";
import { WalletContext } from "../../state/Wallet";
import { beaniesGallery } from '../../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Mint() {

    const [amountToMint, setAmountToMint] = useState(0);

    const { provider, connectWallet, walletAddress } = useContext(WalletContext);

    const alert = useAlert();

    //const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
    const CONTRACT_ADDRESS = "0x2A0a23e0476a7f31442F8Ab8BA0eE90b2b7024bB";
    //const COLLECTION_PRICE = process.env.NEXT_PUBLIC_COLLECTION_PRICE;
    const COLLECTION_PRICE = 500000000000000000;

    const onIncrement = () => {
        if (amountToMint < 3) {
            setAmountToMint(amountToMint + 1);
        }
    };

    const onDecrement = () => {
        if (amountToMint > 0) {
            setAmountToMint(amountToMint - 1);
        }
    };

    const initMint = (_provider, _address) => {
        const contract = new _provider.Contract(BeaniesABI, CONTRACT_ADDRESS);

        const transaction = {
            from: _address,
            to: CONTRACT_ADDRESS,
            value: COLLECTION_PRICE * amountToMint,
            data: contract.methods.mintBeanies(amountToMint).encodeABI(),
        };

        _provider
            .sendTransaction(transaction)
            .on("receipt", () => {
                alert.show("Minted successfully, check your wallet", {
                    type: "success",
                });
            })
            .on("error", (err) => {
                alert.show(err.message, {
                    type: "error",
                });
                console.error(err);
            });
    };

    // Slider settings
    const fadeSliderWithoutBtnsSettings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        swipeToSlide: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
          />
        );
    }
      
    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
            />
        );
    }

    const mint = (provider, address) => {
        if (amountToMint > 0 && provider && address) {
            initMint(provider, address);
        } else {
            connectWallet()
                .then((_provider, _address) => {
                    initMint(_provider, _address);
                })
                .catch((err) => {
                    console.log("something went wrong", err);
                });
        }
    };


    return (
        <>
            <Head>
                <title>Mint Page | Beanies</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MintHeader wallet />
            <div className={styles.container}>
                <div className={styles.beaniesSliderContainer}>
                    <div className={styles.imageSliderWrapper}>
                        <Slider {...fadeSliderWithoutBtnsSettings}>
                            {
                                beaniesGallery.map((beanie,idx) => {
                                    return (
                                        <div key={idx} className={styles.imageSlide}>
                                            <img src={beanie.src} alt={ beanie.name }/>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    <div className={styles.beaniesSliderText}>
                        <h3 className={styles.beaniesSliderTitle}>Join the beanies party</h3>
                        <p className={styles.beaniesSliderSubtitle}>MINT YOUR  BEANIE FOR 0.2 ETH + Gas fees</p>
                    </div>
                </div>

                <div className={styles.counterWrapper}>
                    {/*<p>
                        MINT PRICE OF {Web3.utils.fromWei(String(COLLECTION_PRICE))} ETH
                    </p>*/}
                    <Counter
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        amountToMint={amountToMint}
                    />
                    <button
                        onClick={() => {
                            mint(provider, walletAddress);
                        }}
                        className={`${styles.mintBtn} ${amountToMint > 0 && styles.active}`}
                    >
                        MINT
                    </button>
                    <p className={styles.mintInfo}>mint max is 3</p>
                </div>
            </div>
        </>

    )
}