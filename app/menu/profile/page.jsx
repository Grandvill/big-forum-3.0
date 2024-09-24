'use client';
import React, { useState, Fragment } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import 'flowbite/dist/flowbite.min.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Profil = () => {
  const [activeTab, setActiveTab] = useState('Sejarah');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Sejarah':
        return (
          <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg" id="profile-content" role="tabpanel" aria-labelledby="profile-tab">
            <div className="justify-start mb-4">
              <h3 className="text-2xl font-bold ">Sejarah</h3>
            </div>
            <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            <p className="text-sm text-gray-500 dark:text-gray-400 w-auto mt-4 text-justify" style={{ fontSize: '12px', font: 'inter' }}>
              Pada 1980-an, Orde Baru berada di puncak kekuasaan. Kehidupan bangsa seolah-olah demokratis, kenyataannya press-breidel menjadi alat kekuasaan untuk membungkam media yang kritis. UU Pokok Pers No. 11/1966 yang disempurnakan
              menjadi UU No. 4/1967 menjamin tidak ada breidel, tapi ada SK Menpen yang sewaktu-waktu dapat mencabut Surat Izin Terbit (SIT) yang diberikan kepada media. Karena terus dikeluhkan oleh Masyarakat Pers, UU No. 21/1982 pun
              diterbitkan untuk mengamendemen UU No. 4/1967. Tapi, Menpen Harmoko menciptakan mekanisme Surat Izin Usaha Penerbitan Pers yang identik dengan nyawa media. Begitu SIUPP dicabut, berakhir pula kehidupan sebuah media. Koran
              bisnis ekonomi Jurnal Ekuin di-breidel karena terlalu kritis (a.l. mengungkap tentang Mafia Berkeley, memberitakan materi off-the-record). Setelah kekosongan agak lama, sejumlah pengusaha berinisiatif merintis pendirian koran
              bisnis baru untuk dapat menjembatani kesenjangan informasi dunia usaha nasional.
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 w-auto mt-4 text-justify" style={{ fontSize: '12px', font: 'inter' }}>
              Adalah Sukamdani S. Gitosardjono & Juliah S; Eric Samola & Ciputra; serta Anthony Salim & Subronto Laras, tokoh dari tiga kelompok usaha (Sahid Group, Jaya Group, dan Salim Group) merintis pendirian koran baru tersebut. "Dunia
              usaha di Indonesia kehausan informasi. Kemajuan bisnis global begitu pesat. Perlu ada sebuah media yang mampu menyediakan informasi bagi dunia usaha," demikian kegalauan itu disuarakan. Untuk memperoleh SIUPP di saat itu,
              kekuatan lobby, politics, dan money lebih berbicara. Maka, dimulailah penggalangan berbagai potensi kekuatan. Mulai 14 Desember 1985, sejarah baru diukir. Terbitlah Surat Kabar Harian Bisnis Indonesia secara komersial. Pada
              1988, saat menghadapi kesulitan untuk survival, dilakukan repositioning dengan menjadikan Bisnis Indonesia sebagai koran andalan
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 w-auto mt-4 text-justify" style={{ fontSize: '12px', font: 'inter' }}>
              sektor bursa dan finansial. Akibat diterbitkannya dua paket deregulasi—Pakto '88 dan Paknov '89—maka industri perbankan dan bursa saham pun booming. Bermula dari kantor kecil di bekas bengkel reparasi mesin jahit Singer di
              Jalan Kramat V No. 8, Jakarta Pusat, Harian Bisnis Indonesia tumbuh dan berkembang, sehingga pada 1990 mulai membangun gedung sendiri dan seluruh kegiatan usaha dipindah ke Wisma Bisnis Indonesia (WBI) di Jalan Letjen S.
              Parman Kav. 12A Slipi, Jakarta Barat, pada 1992.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 w-auto mt-4 text-justify" style={{ fontSize: '12px', font: 'inter' }}>
              Demi mendekatkan keberadaan Bisnis Indonesia ke pusat bisnis Jakarta serta sebagai upaya untuk meningkatkan layanan kepada stakeholders, manajemen memutuskan untuk memboyong lagi Bisnis Indonesia pindah ke wilayah Segitiga
              Emas Sudirman mulai 1 Januari 2005, tepatnya di Jl KH Mas Mansyur No 12A, Karet Tengsin, Jakarta Pusat.
            </p>
          </div>
        );
      case 'Visi & Misi':
        return (
          <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg" id="dashboard-content" role="tabpanel" aria-labelledby="dashboard-tab">
            <div className="justify-start" style={{ width: '100px' }}>
              <h3 className="text-2xl font-bold w-40">Visi & Misi</h3>
            </div>
            <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            <h5 className="text-xl font-bold mt-4 text-start pt-3 ml-5">Visi</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400 w-auto mt-4 text-justify ml-5" style={{ fontSize: '14px', font: 'inter' }}>
              Menjadi perusahaan media informasi atau multimedia yang terpercaya dalam rangka ikut mencerdaskan bangsa.
            </p>
            <h5 className="text-xl font-bold mt-4 text-start pt-3 ml-5">Misi</h5>
            <p className="text-sm text-gray-500 dark:text-gray-400 w-auto mt-4 text-justify ml-5 mr-2" style={{ fontSize: '14px', font: 'inter' }}>
              Melakukan diversifikasi usaha multimedia, memberdayakan sumber daya manusia lebih optimal (competence base), menjaga dan mempertahankan kredibilitas usaha yang sehat (sound business), menghasilkan keuntungan yang wajar, serta
              memberikan manfaat bagi lingkungan dunia usaha.
            </p>
          </div>
        );
      case 'Direksi & Komisaris':
        return (
          <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg max-w-7xl" id="settings-content" role="tabpanel" aria-labelledby="settings-tab">
            <div className="text-left mb-4">
              <h3 className="text-2xl font-bold">Direksi & Komisaris</h3>
            </div>
            <hr className="w-full border-gray-300 my-4" />

            {/* Dewan Komisaris */}
            <h5 className="text-xl font-bold mt-4 text-center" style={{ color: '#065A98' }}>
              Dewan Komisaris
            </h5>
            <div className="flex justify-around items-center pt-5">
              <img src="/images/modulMenu/profil/presidenkomisaris.png" alt="Presiden Komisaris" />
              <img src="/images/modulMenu/profil/wakilpresidenkomisaris.png" alt="Wakil Presiden Komisaris" />
            </div>
            <div className="flex justify-around text-center pt-5 mr-14">
              <p className="font-bold text-sm">Prof. DR. H. Sukamdani S. Gitosardjono</p>
              <p className="font-bold text-sm">Soebronto Laras</p>
            </div>
            <div className="flex justify-around text-gray-500 text-sm font-bold pt-2 ml-4">
              <p>Presiden Komisaris</p>
              <p>Wakil Presiden Komisaris</p>
            </div>

            {/* Komisaris */}
            <div className="flex justify-around items-center pt-8">
              <img src="/images/modulMenu/profil/komisaris1.png" alt="Komisaris 1" />
              <img src="/images/modulMenu/profil/komisaris2.png" alt="Komisaris 2" />
              <img src="/images/modulMenu/profil/komisaris3.png" alt="Komisaris 3" />
            </div>
            <div className="flex justify-around text-center pt-5 ">
              <p className="font-bold text-sm ml-10">Ir. Ciputra</p>
              <p className="font-bold text-sm ml-12">Dorothea Samola SH</p>
              <p className="font-bold text-sm">Ir. Hariyadi B. Sukamdani</p>
            </div>
            <div className="flex justify-around text-gray-500 text-sm font-bold pt-2">
              <p>Komisaris</p>
              <p>Komisaris</p>
              <p>Komisaris</p>
            </div>

            {/* Direksi */}
            <h5 className="text-xl font-bold mt-8 text-center" style={{ color: '#065A98' }}>
              Direksi
            </h5>
            <div className="flex justify-around items-center pt-5">
              <img src="/images/modulMenu/profil/direkturpemberitaan.png" alt="Direktur Pemberitaan" />
              <img src="/images/modulMenu/profil/direkturproduksi.png" alt="Direktur Produksi" />
              <img src="/images/modulMenu/profil/presidendirektur.png" alt="Presiden Direktur" />
            </div>
            <div className="flex justify-around text-center pt-5">
              <p className="font-bold text-sm">Arif Budisusilo</p>
              <p className="font-bold text-sm">Ahmad Djauhar</p>
              <p className="font-bold text-sm">Lulu Terianto</p>
            </div>
            <div className="flex justify-around text-gray-500 text-sm font-bold pt-2">
              <p className="ml-16">Direktur Pemberitaan</p>
              <p className="ml-12">Direktur Produksi & Pengembangan Produk</p>
              <p>Presiden Direktur / Direktur Keuangan</p>
            </div>
          </div>
        );

      case 'Struktur Organisasi':
        return (
          <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg" id="contacts-content" role="tabpanel" aria-labelledby="contacts-tab">
            <div className="justify-start" style={{ width: '100px' }}>
              <h3 className="text-2xl font-bold w-60">Struktur Organisasi</h3>
            </div>
            <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            <div className="flex justify-center items-center" style={{ height: '100%' }}>
              <img src="/images/modulMenu/profil/baganbisnis.png" style={{ padding: '20px' }} />
            </div>
          </div>
        );

      case 'Anak Perusahaan':
        return (
          <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg" id="contacts-content" role="tabpanel" aria-labelledby="contacts-tab">
            <div className="justify-start" style={{ width: '100px' }}>
              <h3 className="text-2xl font-bold w-60">Anak Perusahaan</h3>
            </div>
            <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />
            <div className="pt-2">
              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/solopos.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      PT Aksara Solopos
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/solografikautama.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      PT Solo Grafika Utama
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/soloposfm.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      Solopos FM
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Solopos FM adalah media siar hasil kerja sama PT Radio Solo Audio Utama (Bisnis Indonesia Grup) dengan Paguyuban Masyarakat Solo. Mengudara pertama kali pada tanggal 12 April 2004, format siaran Solopos FM menyajikan
                    format berita hingga 60% dan 40% sisanya hiburan (talkshow, musik, dsb). Dipancarkan melalui gelombang 103 MHz , hingga saat ini Solopos FM masih menjadi satu-satunya radio berita di kota Solo.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/aksaragrafikapratama.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      PT Aksara Grafika Pratama
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/dinamikajogja.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      PT Aksara Dinamika Jogja
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/starjogjafm.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      Starjogja FM
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/jayajurnalindoutama.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      PT Jaya Jurnalindo Utama
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/aksaragrafikasurabaya.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      PT Aksara Grafika Surabaya
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/indonesiashangbao.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      Indonesia Shang Bao
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/bisnisindonesiakonsultan.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      Bisnis Indonesia Konsultan
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/bisnisindonesiasibertama.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      Bisnis Indonesia Sibertama
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className="pt-4">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/modulMenu/profil/bisnisindonesiagagaskreasitama.png" style={{ padding: '10px', marginRight: '10px' }} />
                    <span style={{ paddingTop: '25px' }} className="font-bold ml-4">
                      Bisnis Indonesia Gagaskreasitama
                    </span>
                  </AccordionSummary>
                  <AccordionDetails className="text-sm text-gray-500 dark:text-gray-400 ml-36 mr-14 text-justify" style={{ fontSize: '12px', font: 'inter', lineHeight: '32px', marginTop: '-40px', marginLeft: '150px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        );
      case 'Perwakilan':
        return (
          <div className="mx-auto mt-5 p-6 bg-white text-black border-2 border-gray-200 rounded-lg" id="contacts-content" role="tabpanel" aria-labelledby="contacts-tab">
            <div className="justify-start" style={{ width: '100px' }}>
              <h3 className="text-2xl font-bold ml-2">Perwakilan</h3>
            </div>
            <hr style={{ width: '100%', border: '1px solid gray', marginTop: '10px' }} />

            <div className="flex pt-4 justify-center">
              <div className="mx-4">
                <a
                  className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
                  style={{ height: '130px', width: '450px', display: 'flex', alignItems: 'center' }}
                >
                  <img src="/images/modulMenu/profil/jawatimur.png" style={{ width: '120px', height: '100px' }} />
                  <div className="ml-8 text-left" style={{ marginTop: '5px' }}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '16px' }}>
                      Jawa Timur
                    </h5>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Gedung Aksara Grafika Surabaya
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Jl. Raya Berbek No.45, Sidoarjo
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Tlp : (031) 8673151 (Hunting) | Fax : (031) 8678324
                    </p>
                  </div>
                </a>
              </div>

              <div className="mx-2">
                <a
                  className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
                  style={{ height: '130px', width: '450px', display: 'flex', alignItems: 'center' }}
                >
                  <img src="/images/modulMenu/profil/malang.png" style={{ width: '120px', height: '100px' }} />
                  <div className="ml-8 text-left" style={{ marginTop: '5px' }}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '16px' }}>
                      Malang
                    </h5>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Pertokoan Sarangan
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Jl. Sarangan No. 1A, Malang
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Tlp : (0341) 402727 | Fax : (0341) 480630
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex pt-4 justify-center">
              <div className="mx-4">
                <a
                  className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
                  style={{ height: '130px', width: '450px', display: 'flex', alignItems: 'center' }}
                >
                  <img src="/images/modulMenu/profil/denpasar.png" style={{ width: '120px', height: '100px' }} />
                  <div className="ml-8 text-left" style={{ marginTop: '5px' }}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '16px' }}>
                      Denpasar
                    </h5>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Jl. Suli No. 119 Blok B-3, Denpasar 80233
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Tlp : (0361) 7446604 | Fax : (0361) 261067
                    </p>
                  </div>
                </a>
              </div>

              <div className="mx-2">
                <a
                  className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
                  style={{ height: '130px', width: '450px', display: 'flex', alignItems: 'center' }}
                >
                  <img src="/images/modulMenu/profil/jawatengah.png" style={{ width: '120px', height: '100px' }} />
                  <div className="ml-8 text-left" style={{ marginTop: '5px' }}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '16px' }}>
                      Jawa Tengah
                    </h5>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Jl. Sompok Baru No. 79, Semarang
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Tlp : (024) 8442852 | Fax : (024) 8454527
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex pt-4 justify-center">
              <div className="mx-4">
                <a
                  className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
                  style={{ height: '130px', width: '450px', display: 'flex', alignItems: 'center' }}
                >
                  <img src="/images/modulMenu/profil/jawabarat.png" style={{ width: '120px', height: '100px' }} />
                  <div className="ml-8 text-left" style={{ marginTop: '5px' }}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '16px' }}>
                      Jawa Barat
                    </h5>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Jl. Buah Batu No. 46B, Bandung 40261
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Tlp : (022) 7321627 / 7321637 / 7321698 | Fax : (022) 7321689
                    </p>
                  </div>
                </a>
              </div>

              <div className="mx-2">
                <a
                  className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
                  style={{ height: '130px', width: '450px', display: 'flex', alignItems: 'center' }}
                >
                  <img src="/images/modulMenu/profil/sumaterautara.png" style={{ width: '120px', height: '100px' }} />
                  <div className="ml-8 text-left" style={{ marginTop: '5px' }}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '16px' }}>
                      Sumatera Utara
                    </h5>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Kompleks Istana Bisnis Centre, Medan Maimun
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Jl Brigjend Katamso No. 6, Medan
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Tlp : (061) 4554121 / 4553035 | Fax : (061) 4553042
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex pt-4 justify-center">
              <div className="mx-4">
                <a
                  className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
                  style={{ height: '130px', width: '450px', display: 'flex', alignItems: 'center' }}
                >
                  <img src="/images/modulMenu/profil/batam.png" style={{ width: '120px', height: '100px' }} />
                  <div className="ml-8 text-left" style={{ marginTop: '5px' }}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '16px' }}>
                      Batam
                    </h5>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Kompleks Ruko Mahkota
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Raya Blok C No. 8 Batam Centre, Batam
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Tlp : (0778) 7483156 | Fax : (0778) 7483154
                    </p>
                  </div>
                </a>
              </div>

              <div className="mx-2">
                <a
                  className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
                  style={{ height: '130px', width: '450px', display: 'flex', alignItems: 'center' }}
                >
                  <img src="/images/modulMenu/profil/indonesiatimur.png" style={{ width: '120px', height: '100px' }} />
                  <div className="ml-8 text-left" style={{ marginTop: '5px' }}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '16px' }}>
                      Indonesia Timur
                    </h5>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Jl Metro Tanjung Bunga Mall GTC Makassar GA-9 No. 16
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Tlp : (0411) 8114253 | Fax : (0411) 8114253
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex pt-4 justify-center">
              <div className="mx-4">
                <a
                  className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
                  style={{ height: '130px', width: '450px', display: 'flex', alignItems: 'center' }}
                >
                  <img src="/images/modulMenu/profil/balikpapan.png" style={{ width: '120px', height: '100px' }} />
                  <div className="ml-8 text-left" style={{ marginTop: '5px' }}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '16px' }}>
                      Balikpapan
                    </h5>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Balikpapan Superblock
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Jl Jend. Sudirman Stal Kuda Blok A/18, Balikpapan
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Tlp : (0542) 7213507 | Fax : (0542) 7213508
                    </p>
                  </div>
                </a>
              </div>

              <div className="mx-2">
                <a
                  className="block p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-500 dark:border-gray-300 dark:hover:bg-gray-200"
                  style={{ height: '130px', width: '450px', display: 'flex', alignItems: 'center' }}
                >
                  <img src="/images/modulMenu/profil/palembang.png" style={{ width: '120px', height: '100px' }} />
                  <div className="ml-8 text-left" style={{ marginTop: '5px' }}>
                    <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white" style={{ fontSize: '16px' }}>
                      Palembang
                    </h5>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Jl. Demang Lebar Daun No. 01 C, Palembang
                    </p>
                    <p className="" style={{ fontSize: '12px', font: 'inter', color: '#747474', lineHeight: '20px' }}>
                      Tlp : (0711) 444773 | Fax : (0711) 444772
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <div>
        <Breadcrumbs />
        <div className="flex">
          <div className="w-full ml-4">
            <div className="mb-4 w-full border-b border-gray-200 dark:border-gray-700">
              <ul className="flex justify-between text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                {['Sejarah', 'Visi & Misi', 'Direksi & Komisaris', 'Struktur Organisasi', 'Anak Perusahaan', 'Perwakilan'].map((tab) => (
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
      </div>
    </Fragment>
  );
};

export default Profil;
