import type { researchStory, leadership, media } from './community';

// Bản dịch tiếng Việt của phần giới thiệu do người dùng cung cấp.
export const researchStoryVi: typeof researchStory = [
  'Tôi đến với nghiên cứu y sinh từ một trải nghiệm cá nhân. Chứng kiến một người thân đối mặt với ung thư, tôi nhận ra rằng đằng sau mỗi hồ sơ lâm sàng, hình ảnh và dữ liệu phân tử là một người bệnh và gia đình đang tìm kiếm những câu trả lời rõ ràng hơn, những lựa chọn tốt hơn. Trải nghiệm đó vẫn định hướng các câu hỏi nghiên cứu mà tôi theo đuổi.',
  'Tôi bắt đầu với trí tuệ nhân tạo và khoa học dữ liệu, rồi dần quan tâm nhiều hơn đến các vấn đề trong y học và sinh học. Tôi muốn hiểu vì sao cùng một căn bệnh lại diễn tiến khác nhau ở từng bệnh nhân, làm thế nào để kết hợp dữ liệu hình ảnh, lâm sàng và phân tử, và liệu các phương pháp tính toán có thể giúp nhận ra những quy luật còn khó thấy trong dữ liệu hay không.',
  'Những hướng nghiên cứu tôi quan tâm gồm học đa phương thức, mạng nơ-ron đồ thị, phân tích sống còn, nghiên cứu ung thư, hệ gen học tính toán và sinh học RNA. Tôi đặc biệt quan tâm đến các mô hình không chỉ đưa ra dự đoán mà còn có thể diễn giải, mang ý nghĩa sinh học và giúp chúng ta hiểu rõ hơn về bệnh.',
  'Tôi thích làm việc ở điểm giao thoa giữa khoa học máy tính và sinh học, nơi những ý tưởng kỹ thuật gắn với các câu hỏi khoa học có ý nghĩa. Bên cạnh hiệu năng mô hình, tôi quan tâm đến việc tri thức rút ra từ dữ liệu có thể góp phần hỗ trợ những quyết định tốt hơn, phương pháp điều trị chính xác hơn và mang lại thêm hy vọng cho bệnh nhân cùng gia đình.',
  'Về lâu dài, tôi mong muốn phát triển các phương pháp AI đáng tin cậy, giúp gắn kết những khám phá trong sinh học với y học chính xác.',
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
    title: 'Hành trình học tập, nghiên cứu và kết nối sinh viên',
    description: 'Bài viết về quá trình học tập, nghiên cứu, danh hiệu Sao Tháng Giêng và những hoạt động của tôi trong cộng đồng sinh viên Việt Nam tại Australia.',
    url: 'https://tienphong.vn/sao-thang-gieng-va-hanh-trinh-khai-mo-tri-thuc-ket-noi-o-xu-so-kangaroo-post1821795.tpo',
    linkLabel: 'Đọc bài viết',
  },
  {
    outlet: 'VTV1',
    kind: 'Truyền hình quốc gia · Góc nhìn sinh viên',
    title: 'Góc nhìn sinh viên về khoa học và phát triển đất nước',
    description: 'Tôi chia sẻ trên bản tin thời sự VTV1 nhân Ngày truyền thống học sinh, sinh viên Việt Nam về vai trò của sinh viên trong việc triển khai Nghị quyết số 57.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7416105946592096256/',
    linkLabel: 'Xem bài đăng LinkedIn',
  },
];
