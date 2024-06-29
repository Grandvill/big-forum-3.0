'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import React, { Fragment, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Extension = () => {
  const [activeTab, setActiveTab] = useState('PT Jurnalindo Aksara Grafika');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'PT Jurnalindo Aksara Grafika':
        return (
          <div className="p-3" style={{ marginLeft: '-15px' }}>
            <h3 className="mb-10" style={{ fontFamily: 'inter', fontWeight: '700', fontSize: '20px', lineHeight: '30px', letterSpacing: '-1.9%', color: '#1E1E1E' }}>
              PT Jurnalindo Aksara Grafika
            </h3>

            <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg">
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="whitespace-nowrap" style={{ fontWeight: '700', fontSize: '18px', lineHeight: '27px', letterSpacing: '-1.9%', color: '#1E1E1E' }}>
                  Pemberitaan/Redaksi
                </h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid', marginTop: '10px', color: '#AFB1B6' }} />

              <table className="border border-none border-separate border-spacing-y-7 w-full" style={{}}>
                <thead className="bg-lightbluebig">
                  <tr className="text-sm text-left">
                    <th className="py-4 px-2 rounded-l-md w-72">
                      Nama <FaChevronDown className="w-3 h-3 inline ml-2" />
                    </th>
                    <th className="py-4 ">
                      Jabatan <FaChevronDown className="w-3 h-3 inline ml-2" />
                    </th>
                    <th className="py-4" style={{ width: '300px' }}>
                      Bagian <FaChevronDown className="w-3 h-3 inline ml-2" />
                    </th>
                    <th className="py-4" style={{ width: '150px' }}>
                      Ext <FaChevronDown className="w-3 h-3 inline ml-2" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border border-gray-300 text-sm text-left">
                    <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
                    <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Direksi</td>
                    <td className="py-5 border-y-2 border-lightbluebig">N/A</td>
                    <td className="py-5 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">635</td>
                  </tr>
                  <tr className="bg-white border border-gray-300 text-sm text-left">
                    <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
                    <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Pemimpin Redaksi</td>
                    <td className="py-5 border-y-2 border-lightbluebig">N/A</td>
                    <td className="py-5 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">712</td>
                  </tr>
                  <tr className="bg-white border border-gray-300 text-sm text-left">
                    <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
                    <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Wakil Pemimpin Redaksi</td>
                    <td className="py-5 border-y-2 border-lightbluebig">N/A</td>
                    <td className="py-5 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">743</td>
                  </tr>
                  <tr className="bg-white border border-gray-300 text-sm text-left">
                    <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
                    <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Wakil Pemimpin Redaksi</td>
                    <td className="py-5 border-y-2 border-lightbluebig">N/A</td>
                    <td className="py-5 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">748</td>
                  </tr>
                  <tr className="bg-white border border-gray-300 text-sm text-left">
                    <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
                    <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Redaktur</td>
                    <td className="py-5 border-y-2 border-lightbluebig">Bagian Market/Korporasi</td>
                    <td className="py-5 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">N/A</td>
                  </tr>
                  <tr className="bg-white border border-gray-300 text-sm text-left">
                    <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
                    <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Reporter</td>
                    <td className="py-5 border-y-2 border-lightbluebig">Bagian Perbankan</td>
                    <td className="py-5 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg">
              <div className="justify-start" style={{ width: '100px' }}>
                <h3 className="whitespace-nowrap" style={{ fontWeight: '700', fontSize: '18px', lineHeight: '27px', letterSpacing: '-1.9%', color: '#1E1E1E' }}>
                  Produksi dan Pengembangan Produk
                </h3>
              </div>
              <hr style={{ width: '100%', border: '1px solid', marginTop: '10px', color: '#AFB1B6' }} />
              <table className="border border-none border-separate border-spacing-y-7 w-full" style={{}}>
                <thead className="bg-lightbluebig">
                  <tr className="text-sm text-left">
                    <th className="py-4 px-2 rounded-l-md w-72">
                      Nama <FaChevronDown className="w-3 h-3 inline ml-2" />
                    </th>
                    <th className="py-4 ">
                      Jabatan <FaChevronDown className="w-3 h-3 inline ml-2" />
                    </th>
                    <th className="py-4" style={{ width: '300px' }}>
                      Bagian <FaChevronDown className="w-3 h-3 inline ml-2" />
                    </th>
                    <th className="py-4" style={{ width: '150px' }}>
                      Ext <FaChevronDown className="w-3 h-3 inline ml-2" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border border-gray-300 text-sm text-left">
                    <td className="py-5 px-2 rounded-l-md border-l-2 border-y-2 border-lightbluebig">FULL NAME</td>
                    <td className="py-5  border-y-2 border-lightbluebig whitespace-nowrap">Manajer</td>
                    <td className="py-5 border-y-2 border-lightbluebig">Bagian Operasi Produksi</td>
                    <td className="py-5 rounded-r-md border-y-2 border-r-2 cursor-pointer border-lightbluebig">636</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'PT Bisnis Indonesia Konsultan':
        return (
          <div className="p-3" style={{ marginLeft: '-15px' }}>
            <h3 className="mb-10" style={{ fontFamily: 'inter', fontWeight: '700', fontSize: '20px', lineHeight: '30px', letterSpacing: '-1.9%', color: '#1E1E1E' }}>
              PT Bisnis Indonesia Konsultan
            </h3>
          </div>
        );
      case 'PT Bisnis Indonesia Sibertama':
        return (
          <div className="p-3" style={{ marginLeft: '-15px' }}>
            <h3 className="mb-10" style={{ fontFamily: 'inter', fontWeight: '700', fontSize: '20px', lineHeight: '30px', letterSpacing: '-1.9%', color: '#1E1E1E' }}>
              PT Bisnis Indonesia Sibertama
            </h3>
          </div>
        );
      case 'PT Bisnis Indonesia Gagaskreasitama':
        return (
          <div className="p-3" style={{ marginLeft: '-15px' }}>
            <h3 className="mb-10" style={{ fontFamily: 'inter', fontWeight: '700', fontSize: '20px', lineHeight: '30px', letterSpacing: '-1.9%', color: '#1E1E1E' }}>
              PT Bisnis Indonesia Gagaskreasitama
            </h3>
          </div>
        );
    }
  };

  return (
    <>
      <>
        <Breadcrumbs />
        <div className="flex">
          <div className="w-full ml-4">
            <div className="mb-4 w-full border-b border-gray-200 dark:border-gray-700">
              <ul className="flex justify-between text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                {['PT Jurnalindo Aksara Grafika', 'PT Bisnis Indonesia Konsultan', 'PT Bisnis Indonesia Sibertama', 'PT Bisnis Indonesia Gagaskreasitama'].map((tab) => (
                  <li key={tab} className="flex-grow" role="presentation">
                    <button
                      className={`w-full p-4 border-b-4 ${activeTab === tab ? 'border-blue-500' : 'border-transparent'} focus:outline-none`}
                      id={`${tab}-tab`}
                      data-tabs-target={`#${tab}-content`}
                      type="button"
                      role="tab"
                      aria-controls={`${tab}-content`}
                      aria-selected={activeTab === tab ? 'true' : 'false'}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div id="default-tab-content">{renderTabContent()}</div>
          </div>
        </div>
      </>
    </>
  );
};

export default Extension;
