import type { researchStory, leadership, media } from './community';

// Phần giới thiệu tiếng Việt do người dùng cung cấp, giữ nguyên văn.
export const researchStoryVi: typeof researchStory = [
  'Tôi đến với nghiên cứu y sinh từ một trải nghiệm trong chính gia đình mình. Chứng kiến một người thân đối mặt với ung thư, tôi hiểu rõ hơn rằng đằng sau mỗi hồ sơ bệnh án, mỗi hình ảnh hay dữ liệu phân tử là một con người, cùng gia đình đang tìm kiếm những câu trả lời rõ ràng hơn và những lựa chọn tốt hơn. Trải nghiệm ấy vẫn ở lại với tôi, nhắc tôi về ý nghĩa của những câu hỏi mình theo đuổi.',
  'Xuất phát từ trí tuệ nhân tạo và khoa học dữ liệu, tôi dần hướng sự tò mò của mình đến những vấn đề trong y học và sinh học. Tôi muốn hiểu vì sao cùng một căn bệnh lại diễn tiến khác nhau ở từng người, và việc kết hợp dữ liệu hình ảnh, lâm sàng và phân tử có thể giúp làm sáng tỏ sự khác biệt ấy như thế nào. Điều thu hút tôi là khả năng tìm thấy những mối liên hệ còn khó nhận ra khi xem xét từng nguồn dữ liệu riêng lẻ.',
  'Những câu hỏi đó dẫn tôi đến các phương pháp như học đa phương thức, mạng nơ-ron đồ thị và phân tích sống còn, đặc biệt trong nghiên cứu ung thư. Tôi cũng quan tâm đến hệ gen học tính toán và sinh học RNA, với mong muốn hiểu sâu hơn những quá trình sinh học liên quan đến bệnh. Khi tìm hiểu một mô hình, tôi muốn biết nó dựa vào điều gì để đưa ra dự đoán, và những kết quả ấy giúp chúng ta hiểu thêm điều gì về mặt sinh học.',
  'Tôi thích quá trình đi từ một câu hỏi sinh học đến một cách tiếp cận tính toán, rồi trở lại với câu hỏi ban đầu để xem mình đã hiểu thêm được điều gì. Đó cũng là điều khiến tôi yêu thích việc làm nghiên cứu ở nơi khoa học máy tính và sinh học gặp nhau. Bên cạnh hiệu năng của mô hình, tôi luôn quan tâm đến cách những hiểu biết từ dữ liệu có thể góp phần hỗ trợ các quyết định chăm sóc và điều trị.',
  'Về lâu dài, tôi mong phát triển những phương pháp AI đáng tin cậy, giúp đưa các khám phá sinh học đến gần hơn với y học chính xác. Điều tôi hy vọng là những đóng góp ấy có thể trở nên hữu ích cho người bệnh và gia đình — những con người đã khiến các câu hỏi nghiên cứu mang một ý nghĩa rất riêng đối với tôi.',
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
