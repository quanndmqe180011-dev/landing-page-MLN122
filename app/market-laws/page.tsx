"use client"
import HorizontalScrollContainer from "@/components/horizontal-scroll-container"

const frames = [
  {
    id: 1,
    title: "Hàng hóa",
    subtitle: "Commodity",
    description:
      "Hàng hóa là sản phẩm của lao động có giá trị sử dụng và giá trị trao đổi. Nó là nền tảng của nền kinh tế hàng hóa, nơi mà các sản phẩm được trao đổi trên thị trường.",
    icon: "📦",
    color: "from-amber-900 to-amber-700",
  },
  {
    id: 2,
    title: "Lao động",
    subtitle: "Labor",
    description:
      "Lao động là nguồn gốc của mọi giá trị. Chính hoạt động lao động của con người tạo ra giá trị sử dụng và giá trị trao đổi cho các hàng hóa.",
    icon: "🔨",
    color: "from-red-900 to-red-700",
  },
  {
    id: 3,
    title: "Giá trị",
    subtitle: "Value",
    description:
      "Giá trị là lượng lao động xã hội cần thiết để sản xuất một hàng hóa. Nó được xác định bởi thời gian lao động trung bình cần thiết trong điều kiện sản xuất bình thường.",
    icon: "⚖️",
    color: "from-yellow-900 to-yellow-700",
  },
  {
    id: 4,
    title: "Tiền tệ",
    subtitle: "Money",
    description:
      "Tiền tệ là hình thức cụ thể của giá trị trao đổi. Nó phục vụ như một phương tiện trao đổi, thước đo giá trị, và kho trữ giá trị trong nền kinh tế hàng hóa.",
    icon: "💰",
    color: "from-yellow-800 to-amber-700",
  },
  {
    id: 5,
    title: "Tư bản",
    subtitle: "Capital",
    description:
      "Tư bản là giá trị được sử dụng để tạo ra giá trị mới. Nó là quá trình tích lũy giá trị thông qua khai thác lao động và tái đầu tư lợi nhuận.",
    icon: "📈",
    color: "from-red-800 to-red-600",
  },
  {
    id: 6,
    title: "Thị trường",
    subtitle: "Market",
    description:
      "Thị trường là nơi gặp gỡ của cung và cầu. Nó là sân khấu nơi các lực lượng kinh tế tương tác, giá cả dao động, và giá trị thặng dư được phân phối.",
    icon: "🏪",
    color: "from-purple-900 to-purple-700",
  },
  {
    id: 7,
    title: "Kết luận",
    subtitle: "Summary",
    description:
      "Hiểu được các quy luật kinh tế là chìa khóa để nhận thức được bản chất của hệ thống tư bản chủ nghĩa. Từ hàng hóa đến thị trường, mỗi yếu tố đều liên kết với nhau trong một chu trình vô tận.",
    icon: "🌍",
    color: "from-gold-900 to-gold-700",
  },
]

export default function MarketLawsPage() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <HorizontalScrollContainer frames={frames} />
    </div>
  )
}
