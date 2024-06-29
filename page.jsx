'use client';

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Breadcrumbs from '@/components/Breadcrumbs';

const ImageCard = ({ src, title, description }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ width: '320px', height: '360px' }}>
        <a href="#" onClick={openModal}>
          <img className="rounded-t-lg" style={{ width: '320px', height: 'auto', borderRadius: '10px 10px 0 0' }} src={src} alt="" />
        </a>
        <div className="p-5">
          <a href="#" onClick={openModal}>
            <p
              className="mb-2 tracking-tight text-gray-900 dark:text-white"
              style={{
                fontFamily: 'Inter',
                fontSize: '14px',
                lineHeight: '32px',
                fontWeight: '600',
                letterSpacing: '-1.9%',
                color: '#065A98',
              }}
            >
              {title}
            </p>
          </a>
          <p
            className="mb-3 text-gray-700 dark:text-gray-400"
            style={{
              fontFamily: 'Inter',
              fontSize: '10px',
              lineHeight: '24px',
              fontWeight: '400',
              letterSpacing: '-1.9%',
              color: '#747474',
              width: '300px',
              height: '50px',
            }}
          >
            {description}
          </p>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            width: '952px',
            height: '667px',
            margin: 'auto',
            padding: '0',
            overflow: 'hidden',
            borderRadius: '10px',
            position: 'relative',
            textAlign: 'center',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        {/* Modal */}
        <div style={{ position: 'relative' }}>
          <img src={src} alt="" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
          <div
            style={{
              position: 'absolute',
              marginLeft: '25px',
              bottom: '30px', // Increased from 10px to 30px to move the text up
              left: '10px',
              right: '10px',
              color: 'white',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)',
            }}
          >
            <h2
              style={{
                fontFamily: 'Inter',
                fontWeight: '600',
                fontSize: '24px',
                lineHeight: '32px',
                paddingBottom: '10px',
                letterSpacing: '-1.9%',
                color: '#ffffff',
                textAlign: 'left',
                margin: '0',
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-1.9%',
                color: '#ffffff',
                textAlign: 'left',
                margin: '0',
              }}
            >
              {description}
            </p>
          </div>
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '2px',
              right: '10px',
              padding: '5px',
              background: 'transparent',
              color: '#fff',
              border: 'none',
              fontSize: '40px',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        </div>
      </Modal>
    </>
  );
};

const Galeri = () => {
  useEffect(() => {
    if (document.getElementById('__next')) {
      Modal.setAppElement('#__next'); // Atur elemen root aplikasi Anda (disesuaikan dengan elemen root di aplikasi Next.js)
    }
  }, []);

  return (
    <>
      <Breadcrumbs />
      {/* Kolom Atas */}
      <div className="flex space-x-6 pt-2">
        <ImageCard src="/images/modulMenu/profil/galeri/galeri.png" title="Media Visit HSBC Indonesia" description="Media Visit HSBC Indonesia diadakan pada hari Rabu, 21 September 2016 yang dihadiri oleh CEO HSBC..." />
        <ImageCard src="/images/modulMenu/profil/galeri/visitindosat.png" title="Media Visit Indosat" description="Media Visit Indosat diadakan pada hari Kamis, 22 September 2016 yang dihadiri oleh CEO Indosat..." />
        <ImageCard src="/images/modulMenu/profil/galeri/visitvkool.png" title="Media Visit V-Kool" description="Media Visit V-Kool diadakan pada hari Jumat, 23 September 2016 yang dihadiri oleh CEO V-Kool..." />
      </div>

      {/* Kolom Bawah */}
      <div className="flex space-x-6 pt-6">
        <ImageCard
          src="/images/modulMenu/profil/galeri/remajatampubolon.png"
          title="Media Visit Remaja Tampubolon"
          description="Media Visit Remaja Tampubolon diadakan pada hari Sabtu, 24 September 2016 yang dihadiri oleh CEO Remaja Tampubolon..."
        />
        <ImageCard
          src="/images/modulMenu/profil/galeri/remajatampubolon1.png"
          title="Media Visit Remaja Tampubolon 1"
          description="Media Visit Remaja Tampubolon 1 diadakan pada hari Minggu, 25 September 2016 yang dihadiri oleh CEO Remaja Tampubolon..."
        />
        <ImageCard
          src="/images/modulMenu/profil/galeri/standargreeting.png"
          title="Media Visit Standard Greeting"
          description="Media Visit Standard Greeting diadakan pada hari Senin, 26 September 2016 yang dihadiri oleh CEO Standard Greeting..."
        />
      </div>
    </>
  );
};

export default Galeri;
