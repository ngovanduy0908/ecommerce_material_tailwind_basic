import React from 'react'
import Announce from '../components/Announce'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Cart = () => {
  return (
    <div>
        <Announce />
        <Navbar />

            <div className="p-5">
                <div className="flex justify-center
                text-center text-5xl"
                >
                    Cart
                </div>
                <div className='flex items-center justify-between
                mt-4 mobile:flex-col'>
                    <button className="btn bg-white
                    text-[#8a4af3] border-2 border-[#8a4af3]
                    hover:bg-white">
                        Continue Shopping
                    </button>
                    <div className='flex underline text-lg
                    hover:cursor-pointer mobile:mt-3
                    mobile:mb-3'>
                        <p>Items in your Cart : 3</p>
                        <p className="ml-5">Whitelist Item: 0</p>
                    </div>
                    <button className="btn">Checkout</button>
                </div>
                {/* central div */}
                <div className='flex mt-7 mobile:flex-col'>
                    <div className="flex flex-col flex-1 
                    ">
                        {/* list of products div */}
                        <div className="flex w-[100%] h-auto
                        items-center mobile:flex-col">
                            <div className="product flex self-start
                            pl-5">
                                <img 
                                    className="w-[7.2rem] h-[80%]
                                    rounded-lg shadow-lg 
                                    hover:scale-[1.1] ease-in 
                                    duration-300"
                                    src='https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824' 
                                    alt='product_img'
                                />
                                <div className='description 
                                flex flex-col ml-5 h-auto
                                justify-between'>
                                    <p>
                                        <b className='mr-2'>ID: </b>030201008924
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product: </b> Dazzing Sky Shirt
                                    </p>
                                    <p className="flex item-center justify-start">
                                        <b className='mr-2'>Color: </b>
                                        <div className="colorSelect bg-sky-500 ml-1 
                                        rounded-full w-[20px] h-[20px]
                                        border-2"></div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size: </b>M
                                    </p>
                                </div>
                            </div>
                            <div className="
                            flex flex-col justify-center 
                            items-center flex-auto 
                            mobile:mt-3">
                                <Counter />
                                <p className="flex items-center justify-center
                                text-4xl mt-3">
                                    <b>$70</b>
                                </p>
                            </div>
                        </div>
                        <hr className="mt-7 mb-7"/>
                        {/* 2nd product */}
                        <div className="flex w-[100%] h-auto
                        items-center mobile:flex-col">
                            <div className="product flex self-start
                            pl-5">
                                <img 
                                    className="w-[7.2rem] h-[80%]
                                    rounded-lg shadow-lg 
                                    hover:scale-[1.1] ease-in 
                                    duration-300"
                                    src='https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812' 
                                    alt='product_img'
                                />
                                <div className='description 
                                flex flex-col ml-5 h-auto
                                justify-between'>
                                    <p>
                                        <b className='mr-2'>ID: </b>030201008924
                                    </p>
                                    <p>
                                        <b className='mr-2'>Product: </b> Dazzing Sky Shirt
                                    </p>
                                    <p className="flex item-center justify-start">
                                        <b className='mr-2'>Color: </b>
                                        <div className="colorSelect bg-sky-500  ml-1 
                                        rounded-full w-[20px] h-[20px]
                                        border-2"></div>
                                    </p>
                                    <p>
                                        <b className='mr-2'>Size: </b>M
                                    </p>
                                </div>
                            </div>
                            <div className="
                            flex flex-col justify-center 
                            items-center flex-auto
                            mobile:mt-3">
                                <Counter />
                                <p className="flex items-center justify-center
                                text-4xl mt-3">
                                    <b>$70</b>
                                </p>
                            </div>
                        </div>
                        <hr className="mt-7 mb-7"/>
                    </div>
                    <div className="p-5 flex-[0.4] w-auto
                    border-2 border-[#8a4af3] h-[50vh] shadow-lg
                    rounded-md flex flex-col items-center">
                        <h1 className="text-[2rem]">Summary</h1>
                        <div className="flex justify-between
                        mt-3 w-[100%]">
                            <p>Subtotal</p>
                            <p>$140</p>
                        </div>
                        <div className="flex justify-between
                        mt-3 w-[100%]">
                            <p>Shipping</p>
                            <p>$40</p>
                        </div>
                        <div className="flex justify-between
                        mt-3 w-[100%]">
                            <p>Shipping discount</p>
                            <p>-$40</p>
                        </div>
                        <div className="flex justify-between
                        mt-3 w-[100%] text-3xl font-bold">
                            <p>Total</p>
                            <p>$140</p>
                        </div>
                    </div>
                </div>
            </div>

        <Newsletter />
        <Footer />
    </div>
  )
}

export default Cart