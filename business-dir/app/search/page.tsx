"use client";
import { useSearchParams} from "next/navigation";
import { useEffect, useState } from "react";
import BusinessCard from "../../components/BusinessCard";

export default function SearchResults() {
    const searchParams = useSearchParams();

    const query = searchParams.get("query") || "";
    const location = searchParams.get("location") || "";
    const category = searchParams.get("category") || "";

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

  // نستخدم useEffect لطلب البيانات بمجرد تشغيل الصفحة
useEffect(() => {
  const getData = async () => {
    try {
      setLoading(true); // نبدأ التحميل
      
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json(); // هنا البيانات بتصير مصفوفة حقيقية
      
      // إذا بدك تشوفي البيانات للتأكد، جربي هاد السطر:
      // alert(JSON.stringify(data.slice(0, 1))); // رح يطبع أول عنصر فقط

      const formattedData = data.map((item: any) => ({
        id: item.id,
        name: item.title,
        location: "السويداء",
        cat: item.category,
        rating: item.rating?.rate || 0, // أضفنا ? للتأكد من عدم وجود خطأ إذا التقييم مفقود
        image: item.image
      }));

      setResults(formattedData);
    } catch (error) {
      console.error("فشل جلب البيانات:", error);
    } finally {
      setLoading(false); // **هذا السطر ضروري جداً** لإخفاء كلمة "جاري التحميل"
    }
  };
  
  getData();
}, []);

   return (
    <div className="search-results-page">
      <h1>نتائج البحث عن: {query || "كل المحلات"}</h1>
      
      {loading ? (
        <p>جاري تحميل النتائج...</p>
      ) : (
        <div className="shops-grid">
          {results.length > 0 ? (
            results.map((shop: any) => (
                <BusinessCard key={shop.id} item={shop} />
            ))
          ) : (
            <p>لا توجد نتائج تطابق بحثك.</p>
          )}
        </div>
      )}
    </div>
  );
}