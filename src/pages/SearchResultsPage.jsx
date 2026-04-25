import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Import assets
import mandalaImg from '../assets/Mandala_Sky_Luxury_Villas.png'
import emeraldImg from '../assets/Emerald_Jungle_Retreat.png'
import seminyakImg from '../assets/Seminyak_Shores_Club.png'
import azureImg from '../assets/The_Azure_serenity_Resort.png'
import luminaImg from '../assets/Lumina_Beach_Villas.png'
import palmsImg from '../assets/palmsanchuary.png'
import mapImg from '../assets/map.png'

const flashDeals = [
  {
    id: 1,
    name: 'Mandala Sky Luxury Villas',
    location: 'Uluwatu, Bali • Cliff-top view',
    stars: 5,
    originalPrice: 1200,
    discountedPrice: 480,
    discount: 60,
    img: mandalaImg,
  },
  {
    id: 2,
    name: 'Emerald Jungle Retreat',
    location: 'Ubud, Bali • Private Sanctuary',
    stars: 4,
    originalPrice: 450,
    discountedPrice: 247,
    discount: 45,
    img: emeraldImg,
  },
  {
    id: 3,
    name: 'Seminyak Shores Club',
    location: 'Seminyak, Bali • Beachfront Bliss',
    stars: 5,
    originalPrice: 680,
    discountedPrice: 442,
    discount: 35,
    img: seminyakImg,
  },
]

const regularHotels = [
  {
    id: 4,
    name: 'The Azure Serenity Resort',
    location: 'Ubud, Bali • 2.5 km from center',
    stars: 5,
    rating: 8.9,
    ratingLabel: 'Excellent',
    reviews: '1,240 reviews',
    price: 284,
    originalPrice: 320,
    tags: ['Free Wi-Fi', 'Pool', 'Breakfast'],
    badge: 'Top Choice',
    message: 'Only 2 rooms left at this price!',
    img: azureImg,
  },
  {
    id: 5,
    name: 'Lumina Beach Villas',
    location: 'Seminyak, Bali • Beachfront',
    stars: 4,
    rating: 9.2,
    ratingLabel: 'Exceptional',
    reviews: '856 reviews',
    price: 415,
    tags: ['Private Beach', 'Spa'],
    message: 'Free cancellation before Oct 10',
    img: luminaImg,
  },
  {
    id: 6,
    name: 'The Palms Sanctuary',
    location: 'Nusa Dua, Bali • 0.8 km from beach',
    stars: 4,
    rating: 8.4,
    ratingLabel: 'Great',
    reviews: '2,102 reviews',
    price: 189,
    tags: ['Airport Shuttle', 'Gym'],
    message: 'Breakfast + Dinner deal available',
    img: palmsImg,
  },
]

const AmenityIcon = ({ name }) => {
  switch (name) {
    case 'Free Wi-Fi':
      return (
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
          <path d="M14 19.8333C13.1833 19.8333 12.4931 19.5514 11.9292 18.9875C11.3653 18.4236 11.0833 17.7333 11.0833 16.9167C11.0833 16.1 11.3653 15.4097 11.9292 14.8458C12.4931 14.2819 13.1833 14 14 14C14.8167 14 15.5069 14.2819 16.0708 14.8458C16.6347 15.4097 16.9167 16.1 16.9167 16.9167C16.9167 17.7333 16.6347 18.4236 16.0708 18.9875C15.5069 19.5514 14.8167 19.8333 14 19.8333ZM7.40833 13.2417L4.95833 10.7333C6.10556 9.58611 7.45208 8.67708 8.99792 8.00625C10.5437 7.33542 12.2111 7 14 7C15.7889 7 17.4562 7.34028 19.0021 8.02083C20.5479 8.70139 21.8944 9.625 23.0417 10.7917L20.5917 13.2417C19.7361 12.3861 18.7444 11.7153 17.6167 11.2292C16.4889 10.7431 15.2833 10.5 14 10.5C12.7167 10.5 11.5111 10.7431 10.3833 11.2292C9.25556 11.7153 8.26389 12.3861 7.40833 13.2417ZM2.45 8.28333L0 5.83333C1.78889 4.00556 3.87917 2.57639 6.27083 1.54583C8.6625 0.515278 11.2389 0 14 0C16.7611 0 19.3375 0.515278 21.7292 1.54583C24.1208 2.57639 26.2111 4.00556 28 5.83333L25.55 8.28333C24.0528 6.78611 22.3174 5.61458 20.3438 4.76875C18.3701 3.92292 16.2556 3.5 14 3.5C11.7444 3.5 9.62986 3.92292 7.65625 4.76875C5.68264 5.61458 3.94722 6.78611 2.45 8.28333Z" fill="#191C22"/>
        </svg>
      )
    case 'Pool':
      return (
        <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
          <path d="M0 21V18.6667C0.738889 18.6667 1.29306 18.4722 1.6625 18.0833C2.03194 17.6944 2.76111 17.5 3.85 17.5C4.93889 17.5 5.6875 17.6944 6.09583 18.0833C6.50417 18.4722 7.05833 18.6667 7.75833 18.6667C8.45833 18.6667 9.0125 18.4722 9.42083 18.0833C9.82917 17.6944 10.5778 17.5 11.6667 17.5C12.7556 17.5 13.5042 17.6944 13.9125 18.0833C14.3208 18.4722 14.875 18.6667 15.575 18.6667C16.275 18.6667 16.8292 18.4722 17.2375 18.0833C17.6458 17.6944 18.3944 17.5 19.4833 17.5C20.5722 17.5 21.3014 17.6944 21.6708 18.0833C22.0403 18.4722 22.5944 18.6667 23.3333 18.6667V21C22.1861 21 21.4326 20.8056 21.0729 20.4167C20.7132 20.0278 20.1833 19.8333 19.4833 19.8333C18.7833 19.8333 18.2292 20.0278 17.8208 20.4167C17.4125 20.8056 16.6639 21 15.575 21C14.4861 21 13.7375 20.8056 13.3292 20.4167C12.9208 20.0278 12.3667 19.8333 11.6667 19.8333C10.9667 19.8333 10.4125 20.0278 10.0042 20.4167C9.59583 20.8056 8.84722 21 7.75833 21C6.66944 21 5.92083 20.8056 5.5125 20.4167C5.10417 20.0278 4.55 19.8333 3.85 19.8333C3.15 19.8333 2.62014 20.0278 2.26042 20.4167C1.90069 20.8056 1.14722 21 0 21ZM0 15.75V13.4167C0.738889 13.4167 1.29306 13.2222 1.6625 12.8333C2.03194 12.4444 2.76111 12.25 3.85 12.25C4.93889 12.25 5.69236 12.4444 6.11042 12.8333C6.52847 13.2222 7.07778 13.4167 7.75833 13.4167C8.45833 13.4167 9.0125 13.2222 9.42083 12.8333C9.82917 12.4444 10.5778 12.25 11.6667 12.25C12.7556 12.25 13.5042 12.4444 13.9125 12.8333C14.3208 13.2222 14.875 13.4167 15.575 13.4167C16.275 13.4167 16.8292 13.2222 17.2375 12.8333C17.6458 12.4444 18.3944 12.25 19.4833 12.25C20.5722 12.25 21.3014 12.4444 21.6708 12.8333C22.0403 13.2222 22.5944 13.4167 23.3333 13.4167V15.75C22.1861 15.75 21.4326 15.5556 21.0729 15.1667C20.7132 14.7778 20.1833 14.5833 19.4833 14.5833C18.7833 14.5833 18.2438 14.7778 17.8646 15.1667C17.4854 15.5556 16.7222 15.75 15.575 15.75C14.4667 15.75 13.7132 15.5556 13.3146 15.1667C12.916 14.7778 12.3667 14.5833 11.6667 14.5833C10.9278 14.5833 10.3785 14.7778 10.0188 15.1667C9.65903 15.5556 8.90556 15.75 7.75833 15.75C6.61111 15.75 5.84792 15.5556 5.46875 15.1667C5.08958 14.7778 4.55 14.5833 3.85 14.5833C3.15 14.5833 2.62014 14.7778 2.26042 15.1667C1.90069 15.5556 1.14722 15.75 0 15.75ZM5.71667 9.8L9.59583 5.92083L8.42917 4.75417C7.7875 4.1125 7.10694 3.64583 6.3875 3.35417C5.66806 3.0625 4.78333 2.91667 3.73333 2.91667V0C5.19167 0 6.39722 0.160417 7.35 0.48125C8.30278 0.802083 9.23611 1.41944 10.15 2.33333L17.6167 9.8C17.2861 10.0139 16.9653 10.184 16.6542 10.3104C16.3431 10.4368 15.9833 10.5 15.575 10.5C14.875 10.5 14.3208 10.3056 13.9125 9.91667C13.5042 9.52778 12.7556 9.33333 11.6667 9.33333C10.5778 9.33333 9.82917 9.52778 9.42083 9.91667C9.0125 10.3056 8.45833 10.5 7.75833 10.5C7.35 10.5 6.99028 10.4368 6.67917 10.3104C6.36806 10.184 6.04722 10.0139 5.71667 9.8ZM17.15 0C17.9667 0 18.6569 0.286806 19.2208 0.860417C19.7847 1.43403 20.0667 2.11944 20.0667 2.91667C20.0667 3.73333 19.7847 4.42361 19.2208 4.9875C18.6569 5.55139 17.9667 5.83333 17.15 5.83333C16.3333 5.83333 15.6431 5.55139 15.0792 4.9875C14.5153 4.42361 14.2333 3.73333 14.2333 2.91667C14.2333 2.11944 14.5153 1.43403 15.0792 0.860417C15.6431 0.286806 16.3333 0 17.15 0Z" fill="#191C22"/>
        </svg>
      )
    case 'Breakfast':
      return (
        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
          <path d="M3.5 23.3333V12.6583C2.50833 12.3861 1.67708 11.8417 1.00625 11.025C0.335417 10.2083 0 9.25556 0 8.16667V0H2.33333V8.16667H3.5V0H5.83333V8.16667H7V0H9.33333V8.16667C9.33333 9.25556 8.99792 10.2083 8.32708 11.025C7.65625 11.8417 6.825 12.3861 5.83333 12.6583V23.3333H3.5ZM15.1667 23.3333V14H11.6667V5.83333C11.6667 4.21944 12.2354 2.84375 13.3729 1.70625C14.5104 0.56875 15.8861 0 17.5 0V23.3333H15.1667Z" fill="#191C22"/>
        </svg>
      )
    case 'Private Beach':
      return (
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
          <path d="M19.3667 21.0292L11.9583 13.6208L13.5917 11.9875L21 19.3958L19.3667 21.0292ZM3.44167 20.2125C2.275 19.0458 1.40972 17.7333 0.845833 16.275C0.281944 14.8167 0 13.3292 0 11.8125C0 10.2958 0.281944 8.81806 0.845833 7.37917C1.40972 5.94028 2.275 4.6375 3.44167 3.47083C4.60833 2.30417 5.91597 1.43403 7.36458 0.860417C8.81319 0.286806 10.2958 0 11.8125 0C13.3292 0 14.8118 0.286806 16.2604 0.860417C17.709 1.43403 19.0167 2.30417 20.1833 3.47083L3.44167 20.2125ZM3.675 16.6542L5.25 15.0792C4.93889 14.6708 4.64236 14.2528 4.36042 13.825C4.07847 13.3972 3.82083 12.9694 3.5875 12.5417C3.35417 12.1139 3.15 11.6861 2.975 11.2583C2.8 10.8306 2.64444 10.4125 2.50833 10.0042C2.29444 11.1514 2.27986 12.2986 2.46458 13.4458C2.64931 14.5931 3.05278 15.6625 3.675 16.6542ZM6.94167 13.4458L13.4167 6.9125C12.5806 6.27083 11.7396 5.75069 10.8938 5.35208C10.0479 4.95347 9.25556 4.68125 8.51667 4.53542C7.77778 4.38958 7.11181 4.36528 6.51875 4.4625C5.92569 4.55972 5.46389 4.77361 5.13333 5.10417C4.80278 5.45417 4.58889 5.92569 4.49167 6.51875C4.39444 7.11181 4.41875 7.78264 4.56458 8.53125C4.71042 9.27986 4.98264 10.0722 5.38125 10.9083C5.77986 11.7444 6.3 12.5903 6.94167 13.4458ZM15.05 5.27917L16.6833 3.70417C15.6528 3.08194 14.5639 2.67361 13.4167 2.47917C12.2694 2.28472 11.1222 2.30417 9.975 2.5375C10.4028 2.67361 10.8306 2.82917 11.2583 3.00417C11.6861 3.17917 12.1139 3.37847 12.5417 3.60208C12.9694 3.82569 13.3924 4.07847 13.8104 4.36042C14.2285 4.64236 14.6417 4.94861 15.05 5.27917Z" fill="#191C22"/>
        </svg>
      )
    case 'Spa':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
          <path d="M11.6667 23.3333C10.2472 23.1583 8.8375 22.7743 7.4375 22.1812C6.0375 21.5882 4.78819 20.7375 3.68958 19.6292C2.59097 18.5208 1.70139 17.1208 1.02083 15.4292C0.340278 13.7375 0 11.7056 0 9.33333V8.16667H1.16667C2.15833 8.16667 3.17917 8.29306 4.22917 8.54583C5.27917 8.79861 6.26111 9.17778 7.175 9.68333C7.40833 8.01111 7.93819 6.29514 8.76458 4.53542C9.59097 2.77569 10.5583 1.26389 11.6667 0C12.775 1.26389 13.7424 2.77569 14.5688 4.53542C15.3951 6.29514 15.925 8.01111 16.1583 9.68333C17.0722 9.17778 18.0542 8.79861 19.1042 8.54583C20.1542 8.29306 21.175 8.16667 22.1667 8.16667H23.3333V9.33333C23.3333 11.7056 22.9931 13.7375 22.3125 15.4292C21.6319 17.1208 20.7424 18.5208 19.6437 19.6292C18.5451 20.7375 17.3007 21.5882 15.9104 22.1812C14.5201 22.7743 13.1056 23.1583 11.6667 23.3333ZM11.6083 20.9417C11.3944 17.7139 10.4368 15.2736 8.73542 13.6208C7.03403 11.9681 4.91944 10.9472 2.39167 10.5583C2.60556 13.8833 3.59236 16.3625 5.35208 17.9958C7.11181 19.6292 9.19722 20.6111 11.6083 20.9417ZM11.6667 13.5333C11.9583 13.1056 12.3132 12.6632 12.7312 12.2063C13.1493 11.7493 13.5528 11.3556 13.9417 11.025C13.9028 9.91667 13.684 8.75972 13.2854 7.55417C12.8868 6.34861 12.3472 5.17222 11.6667 4.025C10.9861 5.17222 10.4465 6.34861 10.0479 7.55417C9.64931 8.75972 9.43056 9.91667 9.39167 11.025C9.78056 11.3556 10.1889 11.7493 10.6167 12.2063C11.0444 12.6632 11.3944 13.1056 11.6667 13.5333ZM13.9417 20.4167C14.6611 20.1833 15.4097 19.8431 16.1875 19.3958C16.9653 18.9486 17.6896 18.341 18.3604 17.5729C19.0312 16.8049 19.6049 15.8472 20.0812 14.7C20.5576 13.5528 20.8444 12.1722 20.9417 10.5583C19.1139 10.8306 17.5097 11.4382 16.1292 12.3813C14.7486 13.3243 13.6889 14.525 12.95 15.9833C13.1833 16.6056 13.3826 17.2861 13.5479 18.025C13.7132 18.7639 13.8444 19.5611 13.9417 20.4167Z" fill="#191C22"/>
        </svg>
      )
    case 'Gym':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
          <path d="M13.1833 23.1L11.55 21.4667L15.6917 17.325L5.775 7.40833L1.63333 11.55L0 9.91667L1.63333 8.225L0 6.59167L2.45 4.14167L0.816667 2.45L2.45 0.816667L4.14167 2.45L6.59167 0L8.225 1.63333L9.91667 0L11.55 1.63333L7.40833 5.775L17.325 15.6917L21.4667 11.55L23.1 13.1833L21.4667 14.875L23.1 16.5083L20.65 18.9583L22.2833 20.65L20.65 22.2833L18.9583 20.65L16.5083 23.1L14.875 21.4667L13.1833 23.1Z" fill="#191C22"/>
        </svg>
      )
    case 'Airport Shuttle':
      return (
        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
          <path d="M2.91667 8.16667C2.43056 8.16667 2.01736 7.99653 1.67708 7.65625C1.33681 7.31597 1.16667 6.90278 1.16667 6.41667H0V1.16667C0 0.845833 0.114236 0.571181 0.342708 0.342708C0.571181 0.114236 0.845833 0 1.16667 0H9.33333L12.8333 3.5V6.41667H11.6667C11.6667 6.90278 11.4965 7.31597 11.1562 7.65625C10.816 7.99653 10.4028 8.16667 9.91667 8.16667C9.43056 8.16667 9.01736 7.99653 8.67708 7.65625C8.33681 7.31597 8.16667 6.90278 8.16667 6.41667H4.66667C4.66667 6.90278 4.49653 7.31597 4.15625 7.65625C3.81597 7.99653 3.40278 8.16667 2.91667 8.16667ZM8.16667 2.91667H10.5L8.75 1.16667H8.16667V2.91667ZM4.66667 2.91667H7V1.16667H4.66667V2.91667ZM1.16667 2.91667H3.5V1.16667H1.16667V2.91667ZM2.91667 7.14583C3.12083 7.14583 3.2934 7.07535 3.43438 6.93437C3.57535 6.7934 3.64583 6.62083 3.64583 6.41667C3.64583 6.2125 3.57535 6.03993 3.43438 5.89896C3.2934 5.75799 3.12083 5.6875 2.91667 5.6875C2.7125 5.6875 2.53993 5.75799 2.39896 5.89896C2.25799 6.03993 2.1875 6.2125 2.1875 6.41667C2.1875 6.62083 2.25799 6.7934 2.39896 6.93437C2.53993 7.07535 2.7125 7.14583 2.91667 7.14583ZM9.91667 7.14583C10.1208 7.14583 10.2934 7.07535 10.4344 6.93437C10.5753 6.7934 10.6458 6.62083 10.6458 6.41667C10.6458 6.2125 10.5753 6.03993 10.4344 5.89896C10.2934 5.75799 10.1208 5.6875 9.91667 5.6875C9.7125 5.6875 9.53993 5.75799 9.39896 5.89896C9.25799 6.03993 9.1875 6.2125 9.1875 6.41667C9.1875 6.62083 9.25799 6.7934 9.39896 6.93437C9.53993 7.07535 9.7125 7.14583 9.91667 7.14583ZM1.16667 5.25H1.63333C1.79861 5.075 1.98819 4.93403 2.20208 4.82708C2.41597 4.72014 2.65417 4.66667 2.91667 4.66667C3.17917 4.66667 3.41736 4.72014 3.63125 4.82708C3.84514 4.93403 4.03472 5.075 4.2 5.25H8.63333C8.79861 5.075 8.98819 4.93403 9.20208 4.82708C9.41597 4.72014 9.65417 4.66667 9.91667 4.66667C10.1792 4.66667 10.4174 4.72014 10.6313 4.82708C10.8451 4.93403 11.0347 5.075 11.2 5.25H11.6667V4.08333H1.16667V5.25ZM11.6667 4.08333H11.2C11.0347 4.08333 10.8451 4.08333 10.6313 4.08333C10.4174 4.08333 10.1792 4.08333 9.91667 4.08333C9.65417 4.08333 9.41597 4.08333 9.20208 4.08333C8.98819 4.08333 8.79861 4.08333 8.63333 4.08333H4.2C4.03472 4.08333 3.84514 4.08333 3.63125 4.08333C3.41736 4.08333 3.17917 4.08333 2.91667 4.08333C2.65417 4.08333 2.41597 4.08333 2.20208 4.08333C1.98819 4.08333 1.79861 4.08333 1.63333 4.08333H1.16667H11.6667Z" fill="#191C22"/>
        </svg>
      )
    default:
      return null
  }
}

const StarRating = ({ count }) => {
  return (
    <span className="stars text-[10px]">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

export default function HotelDetailPage() {
  const navigate = useNavigate()
  const [priceRange, setPriceRange] = useState(1000)

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      {/* ── TOP SEARCH BAR ── */}
      <div className="bg-white border-b border-gray-100 py-4 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-2 items-stretch">
          {/* Destination */}
          <div className="flex items-center gap-3 flex-1 border border-gray-200 rounded-xl px-4 py-2 bg-[#F1F5F9] min-w-0">
            <svg className="w-4 h-4 text-[#005CBD] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <div className="min-w-0">
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Destination</p>
              <p className="text-sm text-gray-800 font-bold truncate">Bali, Indonesia</p>
            </div>
          </div>

          {/* Dates */}
          <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 bg-[#F1F5F9] w-full sm:w-56">
            <svg className="w-4 h-4 text-[#005CBD] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <div>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Dates</p>
              <p className="text-sm text-gray-800 font-bold">Oct 12 – Oct 19, 2024</p>
            </div>
          </div>

          {/* Travelers */}
          <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 bg-[#F1F5F9] w-full sm:w-52">
            <svg className="w-4 h-4 text-[#005CBD] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <div>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Travelers</p>
              <p className="text-sm text-gray-800 font-bold">2 Adults, 1 Room</p>
            </div>
          </div>

          {/* Update Search */}
          <button
            className="px-8 py-3 rounded-xl text-sm font-bold text-white flex-shrink-0 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-blue-200"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Update Search
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto w-full px-4 py-8 flex flex-col md:flex-row gap-8">

        {/* ── FILTER SIDEBAR ── */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-4 h-4 text-[#005CBD]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/>
              </svg>
              <h2 className="text-base font-bold text-gray-900">Filters</h2>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-gray-800 mb-4">Price Range</h3>
              <div className="relative flex items-center">
                <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#005CBD]"
                  style={{
                    background: `linear-gradient(to right, #005CBD 0%, #005CBD ${(priceRange/1000)*100}%, #E2E8F0 ${(priceRange/1000)*100}%, #E2E8F0 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-bold text-gray-400 mt-2">
                <span>$0</span>
                <span className="text-[#005CBD] font-black">${priceRange}{priceRange === 1000 ? '+' : ''}</span>
                <span>$1000+</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Property Type */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-4">Property Type</h3>
                <div className="space-y-3">
                  {['Hotels', 'Resorts', 'Apartments', 'Villas'].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#005CBD] focus:ring-[#005CBD]" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-4">Star Rating</h3>
                <div className="space-y-3">
                  {[5, 4].map((stars) => (
                    <label key={stars} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#005CBD] focus:ring-[#005CBD]" />
                      <StarRating count={stars} />
                    </label>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-4">Facilities</h3>
                <div className="space-y-3">
                  {['Free Wi-Fi', 'Swimming Pool', 'Fitness Center', 'Spa', 'Parking', 'Pet Friendly'].map((f) => (
                    <label key={f} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#005CBD] focus:ring-[#005CBD]" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{f}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Review Score */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-4">Review Score</h3>
                <div className="space-y-3">
                  {['Superb 9+', 'Very Good 8+', 'Good 7+'].map((r) => (
                    <label key={r} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#005CBD] focus:ring-[#005CBD]" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{r}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Neighborhood */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-4">Neighborhood</h3>
                <div className="space-y-3">
                  {['Padang', 'Kerob', 'Kuta', 'Seminyak'].map((n) => (
                    <label key={n} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#005CBD] focus:ring-[#005CBD]" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{n}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Bed Type */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-4">Bed Type</h3>
                <div className="space-y-3">
                  {['Single', 'Double', 'King'].map((b) => (
                    <label key={b} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#005CBD] focus:ring-[#005CBD]" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{b}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative rounded-2xl overflow-hidden h-44 shadow-sm border border-gray-100 group cursor-pointer">
            <img src={mapImg} alt="Map" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        </aside>

        {/* ── RESULTS PANEL ── */}
        <main className="flex-1 min-w-0">
          {/* Results header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-extrabold text-gray-900">245 properties in Bali</h1>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Sort by:</span>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-sm font-bold text-[#005CBD]">Recommended</span>
                <svg className="w-3.5 h-3.5 text-[#005CBD]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </div>
          </div>

          {/* ── FLASH DEALS SECTION ── */}
          <div className="bg-white border-[3px] border-[#FCE7F3] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
            {/* Flash header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#FDF2F8] border-b border-[#FCE7F3]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-[#C8185A] rounded-full flex items-center justify-center text-white shadow-md shadow-pink-100">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
                <span className="text-base font-bold text-[#C8185A]">Flash Deals for You</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ends in:</span>
                <div className="flex gap-1.5">
                  {['08', '45', '12'].map((t, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-xs font-black text-white px-2 py-1 rounded-lg shadow-sm" style={{ backgroundColor: 'var(--color-accent)' }}>{t}</span>
                      {i < 2 && <span className="text-xs font-black text-[#C8185A]">:</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flash deal cards */}
            <div className="divide-y divide-gray-50">
              {flashDeals.map((hotel) => (
                <div
                  key={hotel.id}
                  onClick={() => navigate('/hotel/1')}
                  className="flex flex-col sm:flex-row gap-6 p-6 cursor-pointer hover:bg-gray-50/50 transition-colors group"
                >
                  {/* Image */}
                  <div className="relative w-full sm:w-48 h-56 sm:h-36 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm">
                    <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 bg-[#C8185A] text-[10px] font-black text-white px-2.5 py-1 rounded-full shadow-lg">
                      {hotel.discount}% OFF
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <h3 className="text-[17px] font-black text-gray-900 group-hover:text-[#005CBD] transition-colors leading-tight">{hotel.name}</h3>
                          <StarRating count={hotel.stars} />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <svg width="12" height="15" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#191C22"/>
                          </svg>
                          <p className="text-[12px] text-[#64748B] font-bold">{hotel.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400 font-bold line-through mb-0.5">${hotel.originalPrice}</p>
                        <div className="flex items-baseline justify-end gap-1">
                          <span className="text-2xl font-black text-[#C8185A]">${hotel.discountedPrice}</span>
                          <span className="text-[10px] font-bold text-gray-400">/night</span>
                        </div>
                        <button
                          className="mt-3 px-6 py-2 rounded-xl text-xs font-black text-white transition-all shadow-md shadow-pink-100 hover:scale-105 active:scale-95"
                          style={{ backgroundColor: 'var(--color-accent)' }}
                        >
                          Claim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── REGULAR HOTEL CARDS ── */}
          <div className="space-y-6">
            {regularHotels.map((hotel, index) => (
              <div
                key={hotel.id}
                onClick={() => navigate('/hotel/1')}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col lg:flex-row group border border-gray-50"
              >
                {/* Image */}
                <div className="relative w-full lg:w-64 h-64 lg:h-auto flex-shrink-0 overflow-hidden">
                  <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Top Choice Badge */}
                  {index === 0 && (
                    <div className="absolute top-2.5 left-2.5 bg-white text-[10px] font-black text-[#005CBD] px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md z-10 border border-gray-100">
                      <div className="w-2.5 h-2.5 bg-[#005CBD] rounded-full flex items-center justify-center">
                        <svg width="6" height="6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      Top Choice
                    </div>
                  )}

                  {hotel.badge && index !== 0 && (
                    <div className="absolute top-4 left-4 bg-[#005CBD] text-[10px] font-black text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="4"/>
                      </svg>
                      {hotel.badge}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 p-6 flex flex-col lg:flex-row items-stretch justify-between gap-6">
                  <div className="flex-1 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-[20px] font-black text-gray-900 group-hover:text-[#005CBD] transition-colors leading-tight">{hotel.name}</h3>
                        <StarRating count={hotel.stars} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg width="12" height="14" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#191C22"/>
                        </svg>
                        <p className="text-[12px] text-[#64748B] font-bold">{hotel.location}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.tags.map(tag => (
                        <div key={tag} className="flex items-center gap-1.5 px-2.5 py-1 bg-[#F1F5F9] rounded-lg border border-gray-100">
                          <AmenityIcon name={tag} />
                          <span className="text-[10px] font-black text-[#64748B]">{tag}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-2">
                      <p className="text-[11px] font-bold text-gray-400 group-hover:text-[#005CBD] transition-colors">{hotel.message}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end lg:w-40 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-6">
                    <div className="text-right w-full">
                      <div className="inline-flex items-center gap-3 mb-6 bg-blue-50/50 px-3 py-1.5 rounded-2xl border border-blue-50">
                        <div className="text-right">
                          <p className="text-[13px] font-black text-[#005CBD] leading-none">{hotel.rating} {hotel.ratingLabel}</p>
                          <p className="text-[9px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">{hotel.reviews}</p>
                        </div>
                      </div>
                      <div className="mt-auto">
                        {hotel.originalPrice && (
                          <p className="text-xs text-gray-400 font-bold line-through mb-0.5">${hotel.originalPrice}</p>
                        )}
                        <div className="flex items-baseline justify-end gap-1.5">
                          <span className="text-3xl font-black text-[#C8185A]">${hotel.price}</span>
                          <span className="text-[10px] font-bold text-gray-400">/night</span>
                        </div>
                      </div>
                    </div>

                    <button
                      className="w-full mt-6 py-3.5 rounded-2xl text-sm font-black text-white transition-all shadow-xl shadow-pink-100 hover:scale-[1.02] active:scale-[0.98]"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#005CBD] hover:text-[#005CBD] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-xl bg-[#005CBD] text-white font-bold text-sm shadow-lg shadow-blue-200">1</button>
            <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500 hover:border-[#005CBD] hover:text-[#005CBD] transition-colors">2</button>
            <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500 hover:border-[#005CBD] hover:text-[#005CBD] transition-colors">3</button>
            <span className="text-gray-400 font-bold px-2">...</span>
            <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500 hover:border-[#005CBD] hover:text-[#005CBD] transition-colors">12</button>
            <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#005CBD] hover:text-[#005CBD] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
