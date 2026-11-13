type BilingualText = { en: string; vi: string };

interface Experience {
  id: string;
  /** Role, shown in bold. */
  role: BilingualText;
  organisation: BilingualText;
  period: BilingualText;
  /** Optional second line: unit, topic and supervisor or host. */
  detail?: BilingualText;
}

// Research experience from the November 2026 CV, newest first, in the usual
// academic-homepage format ("Role, organisation, dates" plus a short line for
// topic and supervisor). VinBigdata is listed in the CV as "Nov 2026 (expected)".
export const researchExperience: Experience[] = [
  {
    id: 'vinbigdata',
    role: { en: 'Research Intern', vi: 'Thực tập sinh nghiên cứu' },
    organisation: { en: 'VinBigdata', vi: 'VinBigdata' },
    period: { en: 'Nov 2026 (incoming)', vi: '11/2026 (dự kiến)' },
    detail: { en: 'Center for Biomedical Informatics, Hanoi', vi: 'Trung tâm Tin học Y sinh (Center for Biomedical Informatics), Hà Nội' },
  },
  {
    id: 'anu-visiting',
    role: { en: 'Visiting Researcher', vi: 'Nghiên cứu viên khách mời' },
    organisation: { en: 'Australian National University', vi: 'Đại học Quốc gia Australia' },
    period: { en: 'Oct 2026 – present', vi: '10/2026 – nay' },
    detail: {
      en: 'AI/ML for genetic variants affecting RNA modifications · Host: Prof. Eduardo Eyras',
      vi: 'AI cho biến thể di truyền ảnh hưởng đến biến đổi RNA · Người hướng dẫn: GS. Eduardo Eyras',
    },
  },
  {
    id: 'sydney-honours',
    role: { en: 'Honours Research Student', vi: 'Sinh viên nghiên cứu chương trình cử nhân danh dự' },
    organisation: { en: 'The University of Sydney', vi: 'Đại học Sydney' },
    period: { en: 'Feb – Oct 2026', vi: '02/2026 – 10/2026' },
    detail: {
      en: 'Survival prediction from imaging mass cytometry (NIMSurv, HiNT-Surv) · Supervisor: A/Prof. Xiuying Wang',
      vi: 'Dự đoán sống còn từ dữ liệu IMC (NIMSurv, HiNT-Surv) · Người hướng dẫn: PGS. Xiuying Wang',
    },
  },
  {
    id: 'hmu-collaborator',
    role: { en: 'Research Collaborator', vi: 'Cộng tác viên nghiên cứu' },
    organisation: { en: 'Hanoi Medical University', vi: 'Trường Đại học Y Hà Nội' },
    period: { en: 'Dec 2025 – present', vi: '12/2025 – nay' },
    detail: {
      en: 'Department of Obstetrics & Gynaecology · Multimodal ER, PR and HER2 status prediction',
      vi: 'Bộ môn Phụ sản · Dự đoán tình trạng biểu hiện ER, PR và HER2 bằng học đa phương thức',
    },
  },
  {
    id: 'vast-assistant',
    role: { en: 'Research Assistant', vi: 'Trợ lý nghiên cứu' },
    organisation: { en: 'Vietnam Academy of Science and Technology', vi: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam' },
    period: { en: 'Dec 2025 – Mar 2026', vi: '12/2025 – 03/2026' },
    detail: {
      en: 'Reproducible NGS workflows for mutation and microbial gene-function analyses',
      vi: 'Quy trình phân tích dữ liệu NGS có khả năng tái lập cho đột biến và chức năng gen',
    },
  },
  {
    id: 'haui-collaborator',
    role: { en: 'Research Collaborator', vi: 'Cộng tác viên nghiên cứu' },
    organisation: { en: 'Hanoi University of Industry', vi: 'Trường Đại học Công nghiệp Hà Nội' },
    period: { en: 'Dec 2024 – Dec 2025', vi: '12/2024 – 12/2025' },
    detail: {
      en: 'Graph learning for lncRNA–disease association prediction · Supervisor: A/Prof. Dang Hung Tran',
      vi: 'Học trên đồ thị để dự đoán mối liên hệ lncRNA–bệnh · Người hướng dẫn: PGS. Dang Hung Tran',
    },
  },
];
