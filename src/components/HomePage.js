import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const HomePage = () => {
const[count,setCount]=useState('1');
const[currentImage,setCurrentImage]=useState('https://saifion33.github.io/ecommerce-product-page/images/image-product-1.jpg');
    function increment(){
       setCount(count+1);
    }

    function decrement(){
        setCount(count-1);
     }
      function handleImageClick(imageUrl){
        setCurrentImage(imageUrl);
      }
    return (

        <div className='container'>
            <div className='App'>
                <div>
                    <h1 className='heading'>Sneakers</h1>
                </div>
                <div className='info'>
                    <a href='/' className='collect'>Collections</a>
                    <a href='/' className='collect'>Men</a>
                    <a href='/' className='collect'>Women</a>
                    <a href='/' className='collect'>About</a>
                    <a href='/' className='collect'>Contact</a>
                </div>
                <div className='login'>
                    <BsCart2 className='cart' />
                    <img src='https://raw.githubusercontent.com/saifion33/ecommerce-product-page/b708728a9400446db21d96ea246686ff1367ef4d/images/image-avatar.png' alt='/' className='logo' />
                </div>
            </div>
            <hr />
            <div className='container-img'>
                <div>
                <img src={currentImage} alt='Product' className='img' />
                <div className='group-img'>
                    <img src='https://saifion33.github.io/ecommerce-product-page/images/image-product-1-thumbnail.jpg' alt='Thumbnail 1' className='image1' onClick={()=>handleImageClick('https://saifion33.github.io/ecommerce-product-page/images/image-product-1.jpg')} />
                    <img src='https://saifion33.github.io/ecommerce-product-page/images/image-product-2-thumbnail.jpg' alt='Thumbnail 2' className='image1' onClick={()=>handleImageClick('https://saifion33.github.io/ecommerce-product-page/images/image-product-2.jpg')}/>
                    <img src='https://saifion33.github.io/ecommerce-product-page/images/image-product-3.jpg' alt='Thumbnail 3' className='image1' onClick={()=>handleImageClick('https://saifion33.github.io/ecommerce-product-page/images/image-product-3.jpg')} />
                    <img src='https://saifion33.github.io/ecommerce-product-page/images/image-product-4.jpg' alt='Thumbnail 4' className='image1' onClick={()=>handleImageClick('https://saifion33.github.io/ecommerce-product-page/images/image-product-4.jpg')} />
                </div>
                </div> 
                <div>
                <div className='right-side side'>
                <h2 className='sneaker'>SNEAKER COMPANY</h2><br/>
                <h1>Fall Limited Edition Sneakers </h1>
                <br/>
                <p className='sneaker-para'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p><br/>
                <div className='cost'>
                    <p>$125.00</p>
                    <tag className='tag'>50%</tag>
                </div>
                <p className='org-rate'> $250.00</p>
                <br/>
                <div className='footer'>
                    <div className='cost1'>
                       <FaMinus className='sign' onClick={decrement}/><tag className='num'>{count}</tag> <FaPlus className='sign' onClick={increment}/>
                    </div>
                    <div>
                        <button className='cost2'> <BsCart2 className='cart-btn' /><p className='btn-para'>Add to cart</p></button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
        </div>


    )
}

export default HomePage