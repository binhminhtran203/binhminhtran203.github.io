type BilingualText = { en: string; vi: string };

interface NewsItem {
  id: string;
  /** Year and month, YYYY-MM; the homepage formats it for each language. */
  date: string;
  before: BilingualText;
  link: { href: string; label: BilingualText };
  after: BilingualText;
}

// Newest first. The homepage sets the news like its CV sections and like the
// news tables of common academic homepages: the month in a left column, then
// one short sentence with a single link on the key term. Keep each item to
// about one line, in the past tense, and name venues the way the publication
// list does ("accepted to" a conference, "accepted by" a journal, "published
// in" proceedings).
//
// Dating of the November 2026 items: the CV of 28 October 2026 still listed
// HiNT-Surv and the ultrasound paper as under review and did not list the
// Fourth Prize; the CV of 13 November 2026 lists all three. The VinBigdata
// internship item was removed at the author's request, as in the CV of
// 16 November 2026.
export const news: NewsItem[] = [
  {
    // Posted on bioRxiv on 3 November 2026 (doi:10.64898/2026.11.01.761587).
    id: 'receptor-biorxiv-preprint',
    date: '2026-11',
    before: { en: 'Our preprint on ', vi: 'Bản tiền ấn phẩm về ' },
    link: { href: 'https://doi.org/10.64898/2026.11.01.761587', label: { en: 'ER, PR and HER2 classification', vi: 'phân loại ER, PR và HER2' } },
    after: { en: ' is now on bioRxiv.', vi: ' đã được đăng trên bioRxiv.' },
  },
  {
    id: 'youth-science-national-prize',
    date: '2026-11',
    before: { en: 'Our breast cancer receptor-status research won a national ', vi: 'Nghiên cứu về thụ thể trong ung thư vú đạt ' },
    link: { href: '/#awards', label: { en: 'Fourth Prize', vi: 'giải Khuyến khích' } },
    after: { en: '.', vi: ' toàn quốc.' },
  },
  {
    id: 'ultrasound-jmr-accepted',
    date: '2026-11',
    before: { en: 'Our ', vi: 'Bài báo về ' },
    link: { href: '/publications/#paper-J1', label: { en: 'breast ultrasound paper', vi: 'siêu âm tổn thương u vú' } },
    after: { en: ' was accepted by the Journal of Medical Research.', vi: ' được Tạp chí Nghiên cứu Y học chấp nhận.' },
  },
  {
    id: 'hintsurv-ssci-accepted',
    date: '2026-11',
    before: { en: 'Our paper ', vi: 'Bài báo ' },
    link: { href: '/publications/#paper-C4', label: { en: 'HiNT-Surv', vi: 'HiNT-Surv' } },
    after: { en: ' was accepted to CIHM, IEEE SSCI 2027.', vi: ' được chấp nhận tại CIHM, IEEE SSCI 2027.' },
  },
  {
    id: 'anu-visiting-research',
    date: '2026-10',
    before: { en: 'I joined ', vi: 'Tôi làm nghiên cứu viên khách mời tại ANU, trong ' },
    link: { href: 'https://researchportalplus.anu.edu.au/en/persons/eduardo-eyras/', label: { en: "Prof. Eduardo Eyras's group", vi: 'nhóm GS. Eduardo Eyras' } },
    after: { en: ' at ANU as a Visiting Researcher.', vi: '.' },
  },
  {
    // Funding supported by the review council on 8 October 2026; the study is
    // scheduled for December 2026 to November 2027 (profile.ts, NIPT project).
    id: 'nipt-funding',
    date: '2026-10',
    before: { en: 'Our ', vi: 'Đề tài ' },
    link: { href: '/research/nipt-probability/', label: { en: 'NIPT probability project', vi: 'mô hình xác suất sau NIPT' } },
    after: { en: ' received funding from Hanoi Medical University.', vi: ' được Trường Đại học Y Hà Nội cấp kinh phí.' },
  },
  {
    // Dated June 2026 in the news of the author's first homepage (August 2026),
    // as accepted to IUKM 2026; Crossref gives 11 October 2026 for the chapter.
    id: 'receptor-iukm-accepted',
    date: '2026-06',
    before: { en: 'Our ', vi: 'Bài báo về ' },
    link: { href: '/publications/#paper-C3', label: { en: 'breast cancer receptor-status paper', vi: 'thụ thể trong ung thư vú' } },
    after: { en: ' was accepted to IUKM 2026.', vi: ' được chấp nhận tại IUKM 2026.' },
  },
  {
    // Crossref gives 1 June 2026 as the online date of the ACIIDS 2026 chapter
    // (Springer CCIS 2964); the first homepage dated it June 2026.
    id: 'lncrna-aciids-published',
    date: '2026-06',
    before: { en: 'Our ', vi: 'Bài báo về ' },
    link: { href: '/publications/#paper-C2', label: { en: 'variational graph neural network paper', vi: 'mạng nơ-ron đồ thị biến phân' } },
    after: { en: ' was published in ACIIDS 2026.', vi: ' được đăng trong kỷ yếu ACIIDS 2026.' },
  },
  {
    // Dated March 2026 in the news of the author's first homepage.
    id: 'lncrna-fjcai-published',
    date: '2026-03',
    before: { en: 'Our ', vi: 'Bài báo về ' },
    link: { href: '/publications/#paper-C1', label: { en: 'dual-stream contrastive graph learning paper', vi: 'học tương phản trên đồ thị' } },
    after: { en: ' was published in FJCAI 2026.', vi: ' được đăng trong kỷ yếu FJCAI 2026.' },
  },
  {
    id: 'sydney-honours-research',
    date: '2026-02',
    before: { en: 'I started my honours research on ', vi: 'Tôi bắt đầu nghiên cứu tốt nghiệp về ' },
    link: { href: '/research/nimsurv/', label: { en: 'NIMSurv', vi: 'NIMSurv' } },
    after: { en: ' at the University of Sydney.', vi: ' tại Đại học Sydney.' },
  },
  {
    id: 'hmu-research-collaboration',
    date: '2025-12',
    before: { en: 'I started a ', vi: 'Tôi bắt đầu ' },
    link: { href: '/research/receptor-prediction/', label: { en: 'breast cancer receptor project', vi: 'dự án về thụ thể trong ung thư vú' } },
    after: { en: ' with Hanoi Medical University.', vi: ' cùng Trường Đại học Y Hà Nội.' },
  },
];
