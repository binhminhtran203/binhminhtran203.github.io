import type { researchStory, leadership, media } from './community';

// Bản dịch tiếng Việt của phần giới thiệu do người dùng cung cấp.
export const researchStoryVi: typeof researchStory = [
  'Mối quan tâm của tôi đối với nghiên cứu y sinh bắt nguồn từ một trải nghiệm rất riêng. Chứng kiến một người thân trong gia đình đối mặt với ung thư giúp tôi nhận ra rằng đằng sau mỗi hồ sơ lâm sàng, hình ảnh và dữ liệu phân tử là một con người, cùng một gia đình đang tìm kiếm câu trả lời rõ ràng hơn và những lựa chọn tốt hơn. Trải nghiệm ấy tiếp tục định hướng những câu hỏi nghiên cứu mà tôi theo đuổi.',
  'Tôi bắt đầu hành trình của mình với trí tuệ nhân tạo và khoa học dữ liệu, nhưng ngày càng bị thu hút bởi các vấn đề trong y học và sinh học. Tôi muốn hiểu vì sao cùng một căn bệnh lại diễn tiến khác nhau giữa các bệnh nhân, làm thế nào để kết hợp thông tin hình ảnh, lâm sàng và phân tử, và liệu các phương pháp tính toán có thể giúp phát hiện những quy luật vốn khó nhận ra hay không.',
  'Các hướng nghiên cứu tôi quan tâm hiện bao gồm học đa phương thức, mạng nơ-ron đồ thị, phân tích sống còn, nghiên cứu ung thư, hệ gen học tính toán và sinh học RNA. Tôi đặc biệt quan tâm đến việc tiến xa hơn khả năng dự đoán đơn thuần, hướng tới các mô hình có thể diễn giải, có ý nghĩa sinh học và giúp hiểu sâu hơn về bệnh.',
  'Tôi yêu thích làm việc ở nơi giao thoa giữa các lĩnh vực, khi khoa học máy tính gặp sinh học và những ý tưởng kỹ thuật trở thành các câu hỏi khoa học có ý nghĩa. Với tôi, nghiên cứu không chỉ nhằm cải thiện hiệu năng mô hình; điều tôi hướng tới là để tri thức thu được từ dữ liệu có thể góp phần mang lại những quyết định tốt hơn, phương pháp điều trị chính xác hơn và thêm hy vọng cho bệnh nhân cùng gia đình.',
  'Mục tiêu dài hạn của tôi là phát triển các phương pháp AI đáng tin cậy, góp phần thu hẹp khoảng cách giữa khám phá sinh học và y học chính xác.',
];

export const leadershipVi: typeof leadership = [
  {
    role: 'Chánh Văn phòng',
    organisation: 'SVAU — Hội Sinh viên Việt Nam tại Australia',
    period: 'Tháng 7 năm 2025 — nay',
    status: 'Hiện tại',
    source: 'https://www.linkedin.com/in/binhminh2003/',
  },
  {
    role: 'Phó Chủ tịch Thường trực',
    organisation: 'UAVS-NSW — Hội Sinh viên Việt Nam tại New South Wales',
    period: 'Tháng 1 năm 2023 — tháng 3 năm 2026',
    status: 'Trước đây',
    source: 'https://www.linkedin.com/in/binhminh2003/',
  },
];

export const mediaVi: typeof media = [
  {
    outlet: 'Tiền Phong',
    kind: 'Bài viết chân dung · 20 tháng 2 năm 2026',
    title: 'Nghiên cứu, ghi nhận và kết nối cộng đồng sinh viên',
    description: 'Bài viết về hành trình học thuật, danh hiệu Sao Tháng Giêng và hoạt động của tôi trong cộng đồng sinh viên Việt Nam tại Australia.',
    url: 'https://tienphong.vn/sao-thang-gieng-va-hanh-trinh-khai-mo-tri-thuc-ket-noi-o-xu-so-kangaroo-post1821795.tpo',
    linkLabel: 'Đọc bài viết',
  },
  {
    outlet: 'VTV1',
    kind: 'Truyền hình quốc gia · Góc nhìn sinh viên',
    title: 'Tiếng nói sinh viên trong khoa học và phát triển đất nước',
    description: 'Xuất hiện trên bản tin thời sự VTV1 nhân Ngày truyền thống học sinh, sinh viên Việt Nam, chia sẻ góc nhìn về vai trò của sinh viên trong triển khai Nghị quyết số 57.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7416105946592096256/',
    linkLabel: 'Xem bài đăng LinkedIn',
  },
];
