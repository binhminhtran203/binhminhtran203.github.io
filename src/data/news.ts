type BilingualText = { en: string; vi: string };

interface NewsItem {
  id: string;
  date: string;
  dateLabel: BilingualText;
  before: BilingualText;
  link: { href: string; label: BilingualText };
  after: BilingualText;
}

// Newest first, formatted like common academic homepages (and the Minimal Light
// demo): a bold [Mon. YYYY] date, then one short sentence with a single link on
// the key term. Keep each item to about one line.
//
// Dating of the November 2026 items: the CV of 28 October 2026 still listed
// HiNT-Surv and the ultrasound paper as under review and did not list the
// Fourth Prize; the CV of November 2026 lists all three. VinBigdata is listed
// there as "Nov 2026 (expected)", hence "I will join".
const nov2026: BilingualText = { en: 'Nov. 2026', vi: '11/2026' };
const oct2026: BilingualText = { en: 'Oct. 2026', vi: '10/2026' };

export const news: NewsItem[] = [
  {
    // Posted on bioRxiv on 3 November 2026 (doi:10.64898/2026.11.01.761587).
    id: 'receptor-biorxiv-preprint',
    date: '2026-11',
    dateLabel: nov2026,
    before: { en: 'Our preprint on ', vi: 'Bản tiền ấn phẩm về ' },
    link: { href: 'https://doi.org/10.64898/2026.11.01.761587', label: { en: 'ER, PR and HER2 classification', vi: 'phân loại ER, PR và HER2' } },
    after: { en: ' is now on bioRxiv.', vi: ' đã có trên bioRxiv.' },
  },
  {
    id: 'youth-science-national-prize',
    date: '2026-11',
    dateLabel: nov2026,
    before: { en: 'Our breast cancer receptor-status research won a national ', vi: 'Nghiên cứu về tình trạng biểu hiện thụ thể trong ung thư vú đạt ' },
    link: { href: '/#awards', label: { en: 'Fourth Prize', vi: 'giải Khuyến khích' } },
    after: { en: '.', vi: ' toàn quốc.' },
  },
  {
    id: 'ultrasound-jmr-accepted',
    date: '2026-11',
    dateLabel: nov2026,
    before: { en: 'Our ', vi: 'Bài báo về ' },
    link: { href: '/publications/#paper-J1', label: { en: 'breast ultrasound paper', vi: 'siêu âm tổn thương u vú' } },
    after: { en: ' is accepted to the Journal of Medical Research.', vi: ' được chấp nhận đăng tại Tạp chí Nghiên cứu Y học.' },
  },
  {
    id: 'vinbigdata-internship',
    date: '2026-11',
    dateLabel: nov2026,
    before: { en: 'I will join ', vi: 'Tôi sẽ thực tập nghiên cứu về tin học y sinh tại ' },
    link: { href: 'https://vingen.vinbigdata.org/en/', label: { en: 'VinBigdata', vi: 'VinBigdata' } },
    after: { en: ' in Hanoi as a Research Intern in biomedical informatics.', vi: ', Hà Nội.' },
  },
  {
    id: 'hintsurv-ssci-accepted',
    date: '2026-11',
    dateLabel: nov2026,
    before: { en: 'Our paper ', vi: 'Bài báo ' },
    link: { href: '/publications/#paper-C4', label: { en: 'HiNT-Surv', vi: 'HiNT-Surv' } },
    after: { en: ' is accepted to CIHM, IEEE SSCI 2027.', vi: ' được chấp nhận tại CIHM, IEEE SSCI 2027.' },
  },
  {
    id: 'anu-visiting-research',
    date: '2026-10',
    dateLabel: oct2026,
    before: { en: 'I joined ', vi: 'Tôi làm nghiên cứu viên khách mời trong ' },
    link: { href: 'https://researchportalplus.anu.edu.au/en/persons/eduardo-eyras/', label: { en: "Prof. Eduardo Eyras's group", vi: 'nhóm GS. Eduardo Eyras' } },
    after: { en: ' at ANU as a Visiting Researcher.', vi: ', ANU.' },
  },
  {
    // Funding supported by the review council on 8 October 2026; the study is
    // scheduled for December 2026 to November 2027 (profile.ts, NIPT project).
    id: 'nipt-funding',
    date: '2026-10',
    dateLabel: oct2026,
    before: { en: 'Our ', vi: 'Đề tài ' },
    link: { href: '/research/nipt-probability/', label: { en: 'NIPT probability project', vi: 'mô hình xác suất sau NIPT' } },
    after: { en: ' received funding from Hanoi Medical University.', vi: ' được Trường Đại học Y Hà Nội cấp kinh phí.' },
  },
  {
    id: 'sydney-honours-research',
    date: '2026-02',
    dateLabel: { en: 'Feb. 2026', vi: '02/2026' },
    before: { en: 'I started honours research on ', vi: 'Tôi bắt đầu nghiên cứu tốt nghiệp về ' },
    link: { href: '/research/nimsurv/', label: { en: 'NIMSurv', vi: 'NIMSurv' } },
    after: { en: ' at the University of Sydney.', vi: ' tại Đại học Sydney.' },
  },
  {
    id: 'hmu-research-collaboration',
    date: '2025-12',
    dateLabel: { en: 'Dec. 2025', vi: '12/2025' },
    before: { en: 'I started a ', vi: 'Tôi bắt đầu ' },
    link: { href: '/research/receptor-prediction/', label: { en: 'breast cancer receptor project', vi: 'dự án về thụ thể trong ung thư vú' } },
    after: { en: ' with Hanoi Medical University.', vi: ' cùng Trường Đại học Y Hà Nội.' },
  },
];
