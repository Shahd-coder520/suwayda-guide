"use client";
import BusinessCard from "./BusinessCard";
import { useState } from "react";
const data = [
  {
    id: 1,
    name: "محل 1",
    location: "السويداء/حي النهضة",
    rating: 4.5,
    image: "/images/user.jpg",
    cat: "ملابس"
  },
  {
    id: 2,
    name: "محل 2",
    location: "السويداء/المشنقة",
    rating: 4.2,
    image: "/images/user.jpg",
    cat: "أحذية"
  },
  {
    id: 3,
    name: "محل 3",
    location: "السويداء/المحوري",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "أغذية"
  },
  {
    id: 4,
    name: "محل 3",
    location: "السويداء/شارع الشعراني",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "أحذية"
  },
  {
    id: 5,
    name: "محل 3",
    location: "السويداء/شارع الشعراني",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "ملابس"
  },
  {
    id: 6,
    name: "محل 3",
    location: "السويداء/شارع الشعراني",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "ملابس"
  },
  {
    id: 7,
    name: "محل 3",
    location: "السويداء/شارع الشعراني",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "أحذية"
  },
  {
    id: 8,
    name: "محل 3",
    location: "السويداء/شارع الشعراني",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "أغذية"
  },
  {
    id: 9,
    name: "محل 3",
    location: "السويداء/شارع الشعراني",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "أحذية"
  },
  {
    id: 10,
    name: "محل 3",
    location: "السويداء/شارع الشعراني",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "أحذية"
  },
  {
    id: 11,
    name: "محل 3",
    location: "السويداء/شارع الشعراني",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "أحذية"
  },
  {
    id: 12,
    name: "محل 3",
    location: "السويداء/شارع الشعراني",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "ملابس"
  },
  {
    id: 13,
    name: "محل 3",
    location: "السويداء/شارع الشعراني",
    rating: 4.8,
    image: "/images/user.jpg",
    cat: "ملابس"
  }
];

export default function Body() {
  // Filter Featured Cards Depends on Rating
  const featuredData = data
  .filter(item => item.rating >= 4.5)
  .slice(0, 4);
  // Filter Explore Depends on Select
const [catFilter, setCatFilter] = useState('');
const [locationFilter, setLocationFilter] = useState('');
const [rateFilter, setRateFilter] = useState('');

  const filteredData = data.filter(item => {
  return (
    (catFilter === '' || item.cat === catFilter) &&
    (locationFilter === '' || item.location === locationFilter) &&
    (rateFilter === '' || item.rating === parseFloat(rateFilter))
  );
});
  // Pagination Dynamic
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 8;
const totalPages = Math.ceil(data.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentItems = filteredData.slice(startIndex, endIndex);

    return (
        <div className="body">
            <div className="featured-section">
    <div className="section-header">
  <h2>الصفحات المميزة هذا الأسبوع</h2>
</div>
<div className="cards">
{featuredData.map(item => (
  <BusinessCard key={item.id} item={item} />
))}
</div>
</div>
<section className="results-section">

  {/* Header */}
  <div className="results-header">

    <h2>اكتشف اكثر</h2>

    {/* Filters */}
    <div className="filters">

      <select onChange={(e) => setCatFilter(e.target.value)}>
        <option value="">كل الفئات</option>
        <option value= "ملابس">ملابس</option>
        <option value= "أحذية">أحذية</option>
        <option value="أغذية">أغذية</option>
      </select>

      <select onChange={(e) => setLocationFilter(e.target.value)}>
        <option value="">كل المناطق</option>
        <option value="السويداء/المحوري">السويداء/المحوري</option>
        <option value="السويداء/المشنقة">السويداء/المشنقة</option>
      </select>

      <select onChange={(e) => setRateFilter(e.target.value)}>
        <option value="">التقييم</option>
        <option value="4.8">4.8</option>
        <option value="4.5">4.5</option>
      </select>

    </div>
  </div>

  {/* Results Grid */}
  <div className="results-grid">
  {currentItems.map(item => (
    <BusinessCard key={item.id} item={item} />
  ))}

  </div>
  </section>
    <div className="pagination">
 <button
  disabled={currentPage === 1}
  onClick={() => setCurrentPage(p => p - 1)}
  className="page-btn"
>
  ‹ السابق
</button>

  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i}
      className= {currentPage === i + 1 ? "page-number active" : "page-number"}
      onClick={() => setCurrentPage(i + 1)}
    >
      {i + 1}
    </button>
  ))}

  
<button
  disabled={currentPage === totalPages}
  onClick={() => setCurrentPage(p => p + 1)}
  className="page-btn"
>
  التالي ›
</button>
</div>


{/* About Us */}
<section className="about-section">

  <div className="section-header">
    <h2>من نحن</h2>
  </div>

  <div className="about-content">
    <p>
      نحن منصة دليل تجاري تهدف إلى جمع جميع المحلات والخدمات في محافظتنا
      ضمن مكان واحد، لتسهيل الوصول إليها ومساعدة المستخدمين في إيجاد أفضل الخيارات.
    </p>
  </div>

</section>


{/* Contact */}
<section className="contact-section">

  <div className="section-header">
    <h2>تواصل معنا</h2>
  </div>

  <div className="contact-container">

    {/* معلومات */}
    <div className="contact-info">
      <p><i className="fa-solid fa-location-dot"></i> السويداء - سوريا</p>
      <p><i className="fa-solid fa-location"></i> مجمع الناصر طابق ثالث</p>
            <p><i className="fa-solid fa-phone"></i> 0999999999</p>

    </div>
</div>
</section>
</div>
    );
}