"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShopDetails() {
  const params = useParams();
  const id = params.id; // هذا الـ ID يأتي من الرابط

  const [shop, setShop] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8000/api/shops/${id}`);
        const data = await response.json();
        setShop(data);
      } catch (error) {
        console.error("خطأ في جلب بيانات المحل:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchShopData();
  }, [id]);

  if (loading) return <div className="loader">جاري تحميل التفاصيل...</div>;
  if (!shop) return <div className="error">عذراً، لم يتم العثور على المحل.</div>;

  return (
    <div className="shop-details-container">
      <div className="shop-hero">
        <img src={shop.image || "/images/default-shop.jpg"} alt={shop.name} />
        <div className="shop-overlay">
          <h1>{shop.name}</h1>
          <span className="category-tag">{shop.category}</span>
        </div>
      </div>

      <div className="shop-content-grid">
        <div className="main-info">
          <section>
            <h2>عن المحل</h2>
            <p>{shop.description || "لا يوجد وصف متاح حالياً لهذا المحل."}</p>
          </section>

          <section className="contact-details">
            <h2>معلومات التواصل</h2>
            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>{shop.location}</span>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-phone"></i>
              <span>{shop.phone || "09x-xxx-xxxx"}</span>
            </div>
          </section>
        </div>

        <div className="shop-sidebar">
          <div className="rating-box">
            <h3>التقييم</h3>
            <div className="stars">
              <i className="fa-solid fa-star"></i> {shop.rating}
            </div>
          </div>
          <button className="contact-btn">تواصل عبر الواتساب</button>
        </div>
      </div>
    </div>
  );
}