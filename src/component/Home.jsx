// src/components/Home.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Carousel 
        showArrows={true} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={3000} 
        transitionTime={500} 
        showThumbs={false}
        showStatus={false}
      >
        <div className="carousel-slide">
          <img src="/images/bgdimsumio.jpg" alt="Dimsum 1" />
          <div className="carousel-caption">
            <h1>Dimsum.io</h1>
            <h2>When curiosity meet hunger</h2>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="/images/bgdimsumio.jpg" alt="Dimsum 2" />
          <div className="carousel-caption">
            <h1>Dimsum.io</h1>
            <h2>Nikmati Lezatnya Dimsum.Io dengan Keautentikan yang Lokal</h2>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="/images/bgdimsumio.jpg" alt="Dimsum 3" />
          <div className="carousel-caption">
            <h1>Dimsum.io</h1>
            <h2>Ayo Nikmati Dimsum.io</h2>
          </div>
        </div>
      </Carousel>

      <section className="about">
        <h2>About Us</h2>
        <p>
        Dimsum.io adalah sebuah inovasi di dunia kuliner yang mengusung konsep fusion food, 
        didirikan di kota Medan pada tanggal 7 September 2022. Didirikan oleh sekelompok pengusaha muda 
        dengan latar belakang yang beragam, Dimsum.io bertujuan untuk menghadirkan sesuatu yang baru dan 
        berbeda di tengah dinamika industri makanan yang semakin berkembang. Dengan tagline "When Curiosity 
        Meets Hunger," Dimsum.io menggabungkan keingintahuan dan kelezatan dalam setiap hidangan yang disajikan, 
        menarik perhatian konsumen yang selalu mencari pengalaman kuliner unik dan menarik. Tujuan utama Dimsum.io
        adalah untuk meningkatkan variasi produk dengan menambah variasi saus dan isian dimsum, guna memenuhi 
        kebutuhan dan keinginan konsumen yang beragam serta menarik lebih banyak pelanggan. Selain itu, Dimsum.io 
        bertujuan menyesuaikan rasa dengan preferensi lokal melalui pengembangan resep yang menggabungkan 
        keotentikan dimsum dan kuah tomyam dengan cita rasa yang sesuai dengan selera masyarakat setempat. 
        Dimsum.io juga berkomitmen untuk mempertahankan kualitas produk dengan menjaga standar tinggi pada setiap 
        variasi saus dan isian dimsum melalui proses produksi yang ketat dan pemilihan bahan baku terbaik.
        </p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h3>Visi</h3>
          <p>
          Kami ingin menjadi pelopor dalam memasak dan menjual dimsum yang memiliki rasa dan aroma khas, dengan 
          fokus pada kualitas dan inovasi dalam setiap hidangan. Dimsum.io berkomitmen untuk menghadirkan perpaduan
          cita rasa antara dimsum otentik dengan kuah pedas, gurih, dan asam seperti kuah tomyam, menciptakan 
          pengalaman kuliner yang unik dan memuaskan bagi setiap pelanggan.
          </p>
        </div>
        <div className="vision">
          <h3>Misi</h3>
          <p>
          Kami menciptakan dimsum yang otentik dengan perpaduan kuah tomyam yang khas, menjaga standar harga yang 
          terjangkau dan kualitas yang konsisten. Kami menyediakan saus cabai khusus yang memungkinkan pelanggan 
          untuk mempersonalisasi tingkat kepedasan sesuai selera. Selain itu, kami berkomitmen untuk menghadirkan 
          proses pemesanan yang efisien dan mudah, memastikan setiap pelanggan mendapatkan layanan terbaik dan 
          kepuasan maksimal.
          </p>
        </div>
      </section>

      <section className="owner">
        <h2>Meet the Owner</h2>
        <div className="owner-info">
          <img src="/images/Ownerdimsum.jpg" alt="Owner" />
          <div className="owner-details">
            <h3>Owner:
                Annisa, Reny, Zahra, Zahrotun, 21 Tahun</h3>
            <p>
                Annisa, Reny, Zahra, Zahrotun, empat orang pemudi yang merupakan pendiri dari Dimsum.io. 
                Mereka mendirikan Dimsum.io pada 7 September 2022 di kota Medan dengan maksud untuk menghadirkan 
                sesuatu yang baru dan berbeda di tengah dinamika industri makanan yang semakin berkembang. 
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; Copyright 2024 © By Dimsum.io</p>
      </footer>
    </div>
  );
};

export default Home;
