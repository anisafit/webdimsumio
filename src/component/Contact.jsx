// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-details">
            <h3>Datangi outlet kami di:</h3>
            <p>Jl. Purnawirawan No. 31, Kenangan, Percut Sei Tuan</p>
            <h3>Jam Operasional</h3>
            <p>Senin: 09.00 - 18.00</p>
            <p>Selasa, Kamis, Jumat: 10.00 - 16.30</p>
            <p>Rabu, Minggu: Tutup</p>
            <p>Sabtu: 12.00 - 16.30</p>
          </div>
          <div className="social-media-section">
            <h3>Kunjungi dan follow juga akun INSTAGRAM dan TIKTOK kami yaa</h3>
            <div className="social-media">
              <a href="https://www.instagram.com/dimsum.io_mpl" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.png" alt="Instagram" />
              </a>
              <a href="https://www.tiktok.com/@dimsum.io" target="_blank" rel="noopener noreferrer">
                <img src="/icons/tiktok.png" alt="TikTok" />
              </a>
              <a href="https://linktr.ee/dimsum.io" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linktree.png" alt="Linktree" />
              </a>
            </div>
          </div>
          <div className="order-online">
            <h3>Order Online Disini, okeyyy</h3>
          </div>
        </div>
        <div className="contact-image">
          <img src="/images/dimsumkomplit.jpeg" alt="Dimsum" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
