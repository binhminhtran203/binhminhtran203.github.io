type BilingualText = { en: string; vi: string };

interface NewsItem {
  id: string;
  date: string;
  dateLabel: BilingualText;
  before: BilingualText;
  link: { href: string; label: BilingualText };
  after: BilingualText;
}

// Newest month first. Dates retain the precision available in the existing CV
// and project records; publication years are not treated as acceptance dates.
export const news: NewsItem[] = [
  {
    id: 'anu-visiting-research',
    date: '2026-10',
    dateLabel: { en: 'Oct. 2026', vi: '10/2026' },
    before: { en: 'I joined the ', vi: 'Tôi bắt đầu làm nghiên cứu viên khách mời tại ' },
    link: {
      href: '/about/#experience',
      label: { en: 'Australian National University', vi: 'Đại học Quốc gia Australia' },
    },
    after: {
      en: ' as a Visiting Researcher, working on computational RNA biology with Professor Eduardo Eyras.',
      vi: ', nghiên cứu sinh học RNA tính toán cùng Giáo sư Eduardo Eyras.',
    },
  },
  {
    // Funding supported by the review council on 8 October 2026; implementation
    // is scheduled for December 2026–November 2027 (profile.ts, NIPT project).
    id: 'nipt-funding',
    date: '2026-10',
    dateLabel: { en: 'Oct. 2026', vi: '10/2026' },
    before: { en: 'The review council supported funding for our ', vi: 'Đề tài ' },
    link: {
      href: '/research/nipt-probability/',
      label: { en: 'NIPT probability modelling project', vi: 'xây dựng mô hình xác suất sau kết quả NIPT nguy cơ cao' },
    },
    after: {
      en: ' at Hanoi Medical University. The study is planned for December 2026–November 2027.',
      vi: ' tại Trường Đại học Y Hà Nội được Hội đồng xét duyệt ủng hộ cấp kinh phí, dự kiến triển khai từ tháng 12/2026 đến tháng 11/2027.',
    },
  },
  {
    id: 'sydney-honours-research',
    date: '2026-02',
    dateLabel: { en: 'Feb. 2026', vi: '02/2026' },
    before: { en: 'I began my honours research on ', vi: 'Tôi bắt đầu thực hiện nghiên cứu tốt nghiệp với đề tài ' },
    link: {
      href: '/research/nimsurv/',
      label: { en: 'NIMSurv', vi: 'NIMSurv' },
    },
    after: {
      en: ' at the University of Sydney, supervised by Associate Professor Xiuying Wang.',
      vi: ' tại Đại học Sydney, dưới sự hướng dẫn của Phó Giáo sư Xiuying Wang.',
    },
  },
  {
    id: 'hmu-research-collaboration',
    date: '2025-12',
    dateLabel: { en: 'Dec. 2025', vi: '12/2025' },
    before: { en: 'I began a research collaboration with Hanoi Medical University on ', vi: 'Tôi bắt đầu hợp tác nghiên cứu với Trường Đại học Y Hà Nội về ' },
    link: {
      href: '/research/receptor-prediction/',
      label: {
        en: 'multimodal learning for breast cancer receptor prediction',
        vi: 'học đa phương thức để dự đoán tình trạng biểu hiện thụ thể trong ung thư vú',
      },
    },
    after: { en: '.', vi: '.' },
  },
];
