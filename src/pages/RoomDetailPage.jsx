import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HotelHeader from '../components/HotelHeader';
import ImageGallery from '../components/ImageGallery';
import HotelOverview from '../components/HotelOverview';
import HotelSidebar from '../components/HotelSidebar';
import RoomSelection from '../components/RoomSelection';
import GuestReviews from '../components/GuestReviews';

export default function HotelDetailPage() {
  // แอนิเมชันตอนโหลดเข้าหน้าเว็บแบบ Subtle (ค่อยๆ โผล่ขึ้นมา)
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f8]">
      <Navbar />

      <motion.main 
        {...pageTransition}
        className="flex-1 max-w-7xl mx-auto w-full px-4 py-6"
      >
        {/* Breadcrumbs */}
        <nav className="text-sm text-[#64748B] mb-6">
          Home <span className="mx-1">&gt;</span> Greece <span className="mx-1">&gt;</span> Crete Hotels <span className="mx-1">&gt;</span> <span className="font-semibold text-[#191C22]">Grand Azure Resort &amp; Spa</span>
        </nav>

        {/* 1. ส่วนหัวโรงแรม (ชื่อ, ดาว, ปุ่ม Share/Book) */}
        <HotelHeader />

        {/* 2. ส่วนแกลเลอรี่รูปภาพ 5 รูป */}
        <div className="mt-6">
          <ImageGallery />
        </div>

        {/* 3. ส่วนเนื้อหาหลัก แบ่งซ้าย (Overview) - ขวา (Sidebar) */}
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <HotelOverview />
          </div>
          <div className="w-full lg:w-[320px] flex-shrink-0">
            <HotelSidebar />
          </div>
        </div>

        {/* 4. ส่วนตารางเลือกห้องพัก */}
        <div className="mt-12">
          <RoomSelection />
        </div>

        {/* 5. ส่วนรีวิวจากลูกค้า */}
        <div className="mt-12 mb-16">
          <GuestReviews />
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}