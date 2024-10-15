import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com", // Tüm isteklerde kullanılacak temel URL
  timeout: 5000, // İsteğin zaman aşım süresi (opsiyonel)
  headers: {
    "Content-Type": "application/json", // Varsayılan olarak tüm istekler JSON olacak
    // 'Authorization': `Bearer ${token}`, // Eğer bir token gerekiyorsa ekleyebilirsiniz
  },
});

export default axiosInstance;
