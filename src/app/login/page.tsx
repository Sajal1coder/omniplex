"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../login/login.module.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index
  const router = useRouter(); // Initialize the useRouter hook

  // Image paths for the carousel
  const carouselImages = ["/f1.png", "/f2.png", "/f3.png"];

  useEffect(() => {
    // Automatically change slide every 3 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(slideInterval);
  }, [carouselImages.length]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with email/password", { email, password });
    router.push("/");
  };

  const handleGoogleAuth = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In Successful", user);
      router.push("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        {/* Left Section: Login Card */}
        <div className={styles.loginCard}>
          <div className={styles.logoSection}>
            <img
              src="/Apple-Icon.png"
              alt="Omniplex Logo"
              className={styles.logo}
            />
            <h1 className={styles.branding}>Omniplex</h1>
          </div>

          <h2 className={styles.tagline}>Where knowledge evolves</h2> 
          <h3 className={styles.subtag}>Privacy-first AI that helps you create in confidence.</h3>
          <div className={styles.googleAuth}>
            <button className={styles.googleButton} onClick={handleGoogleAuth}>
              <img
                src="/svgs/Google.svg"
                alt="Google Logo"
                className={styles.googleIcon}
              />
              Continue with Google
            </button>
          </div>
        </div>

        {/* Right Section: Image Carousel */}
        <div className={styles.carousel}>
          <div className={styles.imageWrapper} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={styles.carouselImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
