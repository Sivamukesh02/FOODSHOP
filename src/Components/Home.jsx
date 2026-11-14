import React, { useState, useEffect } from "react";
import "../assets/Style/style.css";

import vid1 from '../assets/Image/vid.mp4';
import vid2 from '../assets/Image/zomvideo.mp4';

import img1 from '../assets/Image/zom1.avif';
import img2 from '../assets/Image/zom2.webp';
import img3 from '../assets/Image/zom3.avif';
import img4 from '../assets/Image/zom4.avif';
import img5 from '../assets/Image/zom5.avif';
import img6 from '../assets/Image/zom6.avif';
import img7 from '../assets/Image/zom7.avif';
import img8 from '../assets/Image/zom8.avif';
import img9 from '../assets/Image/zom9.avif';
import img10 from '../assets/Image/zom10.avif';
import img11 from '../assets/Image/zom11.avif';
import img12 from '../assets/Image/zom12.avif';
import img13 from '../assets/Image/zom13.avif';
import img14 from '../assets/Image/zom14.avif';
import img15 from '../assets/Image/zom15.avif';
import img16 from '../assets/Image/zom16.avif';
import img17 from '../assets/Image/zom17.avif';
import img18 from '../assets/Image/zom18.avif';

function Home(){

    // true = loading page kaattum, false = website kaattum
    const [loading, setLoading] = useState(true);

    // 4 second apram loading page poidum
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    // navbar click panna andha section ku scroll aagum
    function goTo(e, id) {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Most orders - 4 cards (img1 to img4)
    const topOrders = [
        {
            img: img1,
            name: "Chicken Biryani",
            price: "₹249",
            text: "Aromatic rice cooked with chicken and a boiled egg."
        },
        {
            img: img2,
            name: "Crispy Chicken Combo",
            price: "₹499",
            text: "Popcorn chicken, burgers, fries and a cold drink."
        },
        {
            img: img3,
            name: "Chicken Bucket & Burger",
            price: "₹399",
            text: "Golden fried chicken bucket with a crispy burger."
        },
        {
            img: img4,
            name: "Biryani Feast Platter",
            price: "₹599",
            text: "Biryani with grilled chicken, parotta and sides."
        }
    ];

    // Foods section - 12 cards (img6 to img17)
    const foods = [
        { img: img6,  name: "Chapati & Kurma",          price: "₹119", text: "Soft chapati with spicy homestyle kurma." },
        { img: img7,  name: "Idli Vada Set",            price: "₹89",  text: "Fluffy idli and crispy vada with sambar." },
        { img: img8,  name: "Ghee Dosa",                price: "₹99",  text: "Golden dosa with sambar and fresh chutney." },
        { img: img9,  name: "Tandoori Chicken",         price: "₹279", text: "Smoky grilled chicken with mint chutney." },
        { img: img10, name: "Biryani Bucket Combo",     price: "₹699", text: "Big bucket of biryani with fried chicken." },
        { img: img11, name: "Corn Cheese Flatbread",    price: "₹189", text: "Cheesy flatbread with corn, olives and mayo." },
        { img: img12, name: "Double Patty Burger",      price: "₹169", text: "Two crispy patties with cheese sauce and lettuce." },
        { img: img13, name: "Soft Parotta",             price: "₹59",  text: "Fresh layered parotta, soft and flaky." },
        { img: img14, name: "Grilled Chicken",          price: "₹259", text: "Juicy grilled chicken with onion salad." },
        { img: img15, name: "Paper Roast Dosa",         price: "₹109", text: "Extra long crispy dosa with 4 chutneys." },
        { img: img16, name: "Seeraga Samba Biryani",    price: "₹229", text: "Chicken leg piece biryani with a boiled egg." },
        { img: img17, name: "Hyderabadi Chicken Biryani", price: "₹269", text: "Long grain rice layered with spicy chicken." }
    ];

    // form submit pannum bodhu
    function handleSubmit(e) {
        e.preventDefault();
        alert("Thank you! We will contact you soon.");
        e.target.reset();
    }

    // Loading page
    if (loading) {
        return (
            <div className="loading-page">
                <video
                    className="loading-video"
                    src={vid1}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="loading-overlay"></div>
                <h1 className="loading-title">RAKA FOODS</h1>
                <p className="loading-slogan">Taste The Happiness</p>

                {/* suthura loader */}
                <div className="loader"></div>

                <p className="loading-text">Loading tasty food...</p>
            </div>
        );
    }

    // Main website
    return(<>

        {/* Navbar */}
        <nav className="navbar">
            <h2 className="logo">RAKA FOODS</h2>
            <ul className="nav-links">
                <li><a href="#home" onClick={(e) => goTo(e, "home")}>Home</a></li>
                <li><a href="#foods" onClick={(e) => goTo(e, "foods")}>Foods</a></li>
                <li><a href="#about" onClick={(e) => goTo(e, "about")}>About</a></li>
                <li><a href="#contact" onClick={(e) => goTo(e, "contact")}>Contact</a></li>
            </ul>
        </nav>

        {/* Hero section */}
        <section className="hero" id="home">
            <video
                className="hero-video"
                src={vid2}
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <p className="hero-small">Welcome to RAKA FOODS</p>
                <h1 className="hero-heading">
                    Taste The <span>Happiness</span> In Every Bite
                </h1>
                <p className="hero-para">
                    Hot, tasty and freshly made food delivered
                    right to your home. Order now and enjoy
                    the real taste of RAKA FOODS.
                </p>
                <button className="hero-btn">Order Now</button>
            </div>
        </section>

        {/* Most orders section */}
        <section className="orders-section">
            <h2 className="section-heading">Most Orders</h2>
            <p className="section-sub">Our customers' favourite dishes</p>

            <div className="cards-container">
                {topOrders.map((item, index) => (
                    <div className="food-card" key={index}>
                        <img className="food-img" src={item.img} alt={item.name} />
                        <div className="food-info">
                            <h3 className="food-name">{item.name}</h3>
                            <p className="food-price">{item.price}</p>
                            <p className="food-text">{item.text}</p>
                            <button className="order-btn">Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Monthly combo offer section */}
        <section className="offer-section">
            <img className="offer-img" src={img5} alt="Combo offer" />

            <div className="offer-content">
                <p className="offer-small">Monthly Combo Offer</p>
                <h2 className="offer-heading">South Indian Feast Combo</h2>
                <p className="offer-text">
                    Crispy masala dosa, golden poori, 3 types of
                    chutney, sambar and kurma served on a banana leaf.
                    A full tasty meal for 2 people at a
                    special monthly price.
                </p>
                <p className="offer-price">
                    <span className="old-price">₹799</span> ₹549
                </p>
                <button className="order-btn">Grab Offer</button>
            </div>
        </section>

        {/* Foods section */}
        <section className="foods-section" id="foods">
            <h2 className="section-heading">Foods</h2>
            <p className="section-sub">Pick your favourite and order now</p>

            <div className="foods-container">
                {foods.map((item, index) => (
                    <div className="food-card" key={index}>
                        <img className="food-img" src={item.img} alt={item.name} />
                        <div className="food-info">
                            <h3 className="food-name">{item.name}</h3>
                            <p className="food-price">{item.price}</p>
                            <p className="food-text">{item.text}</p>
                            <button className="order-btn">Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* About section */}
        <section className="about-section" id="about">
            <img className="about-img" src={img18} alt="About RAKA FOODS" />

            <div className="about-content">
                <h2 className="section-heading about-heading">About Us</h2>
                <p className="about-text">
                    RAKA FOODS started with a simple dream - to serve
                    hot, fresh and tasty food to everyone. Our chefs
                    use fresh ingredients every day and cook every
                    dish with love.
                </p>
                <p className="about-text">
                    From hot biryanis to crispy dosas and fried chicken,
                    we deliver happiness to your doorstep in just 30
                    minutes. Taste once and you will come back again.
                </p>
            </div>
        </section>

        {/* Contact section */}
        <section className="contact-section" id="contact">
            <h2 className="section-heading">Contact Us</h2>
            <p className="section-sub">Have a question? Send us a message</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    type="text"
                    placeholder="Your Name"
                    required
                />
                <input
                    className="form-input"
                    type="email"
                    placeholder="Your Email"
                    required
                />
                <input
                    className="form-input"
                    type="tel"
                    placeholder="Phone Number"
                    required
                />
                <textarea
                    className="form-input form-textarea"
                    placeholder="Your Message"
                    required
                ></textarea>
                <button className="order-btn form-btn" type="submit">
                    Send Message
                </button>
            </form>
        </section>

        {/* Footer - 4 sections */}
        <footer className="footer">
            <div className="footer-top">

                {/* Section 1 - logo and slogan */}
                <div className="footer-box">
                    <h2 className="footer-logo">RAKA FOODS</h2>
                    <p className="footer-slogan">Taste The Happiness</p>
                    <p className="footer-text">
                        Fresh, hot and tasty food delivered
                        to your home every day.
                    </p>
                </div>

                {/* Section 2 - quick links */}
                <div className="footer-box">
                    <h3 className="footer-title">Quick Links</h3>
                    <p className="footer-link" onClick={(e) => goTo(e, "home")}>Home</p>
                    <p className="footer-link" onClick={(e) => goTo(e, "foods")}>Foods</p>
                    <p className="footer-link" onClick={(e) => goTo(e, "about")}>About</p>
                    <p className="footer-link" onClick={(e) => goTo(e, "contact")}>Contact</p>
                </div>

                {/* Section 3 - contact */}
                <div className="footer-box">
                    <h3 className="footer-title">Contact</h3>
                    <p className="footer-text">📍 Madurai, Tamil Nadu</p>
                    <p className="footer-text">📞 +91 98765 43210</p>
                    <p className="footer-text">✉️ rakafoods@gmail.com</p>
                    <p className="footer-text">🕒 10 AM - 11 PM</p>
                </div>

                {/* Section 4 - social links */}
                <div className="footer-box">
                    <h3 className="footer-title">Follow Us</h3>
                    <div className="social-row">

                        {/* Facebook */}
                        <a className="social-icon" href="#">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                <path d="M13 22v-8h3l.5-4H13V8c0-1.1.4-2 2-2h1.7V2.6C16.4 2.5 15.3 2.4 14.2 2.4 11.6 2.4 9.8 4 9.8 7v3H7v4h2.8v8H13z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a className="social-icon" href="#">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                            </svg>
                        </a>

                        {/* YouTube */}
                        <a className="social-icon" href="#">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                <rect x="2" y="5" width="20" height="14" rx="4" />
                                <polygon points="10,9 16,12 10,15" fill="#2a1d0e" />
                            </svg>
                        </a>

                        {/* X / Twitter */}
                        <a className="social-icon" href="#">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <line x1="4" y1="4" x2="20" y2="20" />
                                <line x1="20" y1="4" x2="4" y2="20" />
                            </svg>
                        </a>

                    </div>
                    <p className="footer-text social-text">
                        Follow us for daily offers and new dishes.
                    </p>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 RAKA FOODS. All rights reserved.
            </div>
        </footer>

    </>);
}
export default Home;