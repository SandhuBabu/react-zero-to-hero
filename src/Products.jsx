import React from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

const data = [
    {
        "title": "Headphones",
        "offer": "10",
        "id": "1",
        "image": "https://pngimg.com/d/headphones_PNG101964.png"
    },
    {
        "title": "Smartwatches",
        "offer": "20",
        "id": "2",
        "image": "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/fire-boltt-asteroid-smartwatch-black-front-view-min.png"
    },
    {
        "title": "Smartphones",
        "offer": "15",
        "id": "3",
        "image": "https://apple-store.ifuture.co.in/wp-content/uploads/2023/01/Latest-Apple-Model-iphone-14-2022.png"
    },
    {
        "title": "Laptops",
        "offer": "26",
        "id": "4",
        "image": "https://images.macrumors.com/t/Au-OUIb73hHvx2w8CirAir5bNbM=/1600x/article-new/2013/09/macbook-air-m2-roundup-header.png"
    },
    {
        "title": "Shoes",
        "offer": "30",
        "id": "5",
        "image": "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_.png"
    },
    {
        "title": "T-Shirts",
        "offer": "25",
        "id": "6",
        "image": "https://freepngimg.com/download/tshirt/10-2-t-shirt-png-image.png"
    },
    {
        "title": "Watches",
        "offer": "42",
        "id": "7",
        "image": "https://pngimg.com/d/clock_PNG6663.png"
    },
    {
        "title": "Neckbands",
        "offer": "23",
        "id": "8",
        "image": "https://www.boultaudio.com/cdn/shop/files/01_bec31560-056c-42ba-a1c5-8470acefab37_1445x.png?v=1700566190"
    },
    {
        "title": "Gaming Monitors",
        "offer": "18",
        "id": "9",
        "image": "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1530/innergigabyteimages/bg1.png"
    },
    {
        "title": "Tws",
        "offer": "22",
        "id": "10",
        "image": "https://media.croma.com/image/upload/v1697622828/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/247657_hgdfmh.png"
    }
]

const Products = () => {
    return (
        <main>
            <Header />

            <div
                className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-4 gap-4 my-8'
            >
                {
                    data.map((item, k) => (
                        <ProductCard product={item} key={k} />
                    ))

                }
            </div>
            <Footer />
        </main>
    )
}

export default Products