type BilingualText = { en: string; vi: string };

interface NewsItem {
  id: string;
  /** Year and month, YYYY-MM; the homepage formats it for each language. */
  date: string;
  before: BilingualText;
  link: { href: string; label: BilingualText };
  after: BilingualText;
}

// Newest first. The homepage shows the news in a scrollable box, with the month
// in a left column like its CV sections. At the author's request each item is
// written to convey as much as it can in two or three lines: first what
// happened (accepted, published, awarded, joined), then what the work is, in
// the words of the publication list and project pages. One link per item, on
// the key term.
// Papers are "accepted to" a conference, "accepted by" a journal and
// "published in" proceedings; keep status and venue names as in the
// publication list.
//
// Dating of the November 2026 items: the CV of 28 October 2026 still listed
// HiNT-Surv and the ultrasound paper as under review and did not list the
// Fourth Prize; the CV of 13 November 2026 lists all three. The VinBigdata
// internship item was removed at the author's request, as in the CV of
// 16 November 2026.
export const news: NewsItem[] = [
  {
    // Posted on medRxiv on 17 November 2026 (doi:10.64898/2026.11.14.26368121);
    // the preprint of M3, under review at ACIIDS 2027. Wording from its abstract.
    id: 'heal-surv-medrxiv-preprint',
    date: '2026-11',
    before: { en: 'Our new preprint is on ', vi: 'Bản tiền ấn phẩm mới của chúng tôi đã được đăng trên ' },
    link: { href: 'https://doi.org/10.64898/2026.11.14.26368121', label: { en: 'medRxiv', vi: 'medRxiv' } },
    after: {
      en: ': HEAL-Surv, a breast cancer survival model that learns from imaging mass cytometry and DNA methylation during training, then predicts survival from clinical and molecular data alone.',
      vi: ': HEAL-Surv, mô hình dự đoán sống còn ở bệnh nhân ung thư vú, học từ dữ liệu đo tế bào khối phổ tạo ảnh (IMC) và methyl hóa DNA trong quá trình huấn luyện, sau đó chỉ cần dữ liệu lâm sàng và phân tử để dự đoán.',
    },
  },
  {
    // Posted on bioRxiv on 3 November 2026 (doi:10.64898/2026.11.01.761587).
    id: 'receptor-biorxiv-preprint',
    date: '2026-11',
    before: { en: 'Our new preprint is on ', vi: 'Bản tiền ấn phẩm mới của chúng tôi đã được đăng trên ' },
    link: { href: 'https://doi.org/10.64898/2026.11.01.761587', label: { en: 'bioRxiv', vi: 'bioRxiv' } },
    after: {
      en: ': a multimodal deep-learning model that classifies ER, PR and HER2 status in breast cancer, evaluated across independent cohorts.',
      vi: ': mô hình học sâu đa phương thức phân loại tình trạng biểu hiện ER, PR và HER2 trong ung thư vú, được đánh giá trên các đoàn hệ độc lập.',
    },
  },
  {
    id: 'youth-science-national-prize',
    date: '2026-11',
    before: {
      en: 'Our breast cancer receptor-status research won a ',
      vi: 'Nghiên cứu về tình trạng biểu hiện thụ thể trong ung thư vú đạt ',
    },
    link: { href: '/#awards', label: { en: 'Fourth Prize', vi: 'giải Khuyến khích' } },
    after: {
      en: ' at the national 23rd Youth Science and Technology Conference of the Vietnamese Health Sector.',
      vi: ' tại Hội nghị Khoa học và Công nghệ tuổi trẻ ngành Y tế lần thứ 23, cấp toàn quốc.',
    },
  },
  {
    id: 'ultrasound-jmr-accepted',
    date: '2026-11',
    before: { en: 'Our ', vi: 'Bài báo về ' },
    link: { href: '/publications/#paper-J1', label: { en: 'breast ultrasound paper', vi: 'siêu âm tổn thương u vú' } },
    after: {
      en: ' was accepted by the Journal of Medical Research. Its deep learning model classifies benign and malignant breast lesions and points to the lesion region.',
      vi: ' được Tạp chí Nghiên cứu Y học chấp nhận đăng. Mô hình học sâu trong bài phân loại u vú lành tính – ác tính và định hướng vùng tổn thương trên ảnh siêu âm.',
    },
  },
  {
    id: 'hintsurv-ssci-accepted',
    date: '2026-11',
    before: { en: '', vi: 'Bài báo ' },
    link: { href: '/publications/#paper-C4', label: { en: 'HiNT-Surv', vi: 'HiNT-Surv' } },
    after: {
      en: ' was accepted as a full paper at CIHM, IEEE SSCI 2027. It combines imaging mass cytometry with clinical and genomic data to predict breast cancer survival.',
      vi: ' được chấp nhận đăng toàn văn tại CIHM, IEEE SSCI 2027. Mô hình kết hợp dữ liệu đo tế bào khối phổ tạo ảnh (IMC), lâm sàng và hệ gen để dự đoán sống còn ở bệnh nhân ung thư vú.',
    },
  },
  {
    // The project is described as the host suggested and as the CV does; the
    // Vietnamese follows the author's own translation in About Me. At the
    // author's request the item names the centre, not the supervisor.
    id: 'anu-visiting-research',
    date: '2026-10',
    before: { en: 'I joined the ', vi: 'Tôi bắt đầu làm nghiên cứu viên khách mời tại ' },
    link: { href: 'https://jcsmr.anu.edu.au/research/centres/ccbs', label: { en: 'Centre for Computational Biomedical Sciences', vi: 'Trung tâm Khoa học Y sinh Tính toán' } },
    after: {
      en: ' at ANU as a Visiting Researcher, investigating how multimodal deep learning can incorporate epitranscriptomic evidence into genetic variant interpretation.',
      vi: ' của ANU, nghiên cứu cách ứng dụng học sâu đa phương thức để tích hợp bằng chứng về các biến đổi hóa học trên RNA vào quá trình diễn giải ý nghĩa của các biến thể di truyền.',
    },
  },
  {
    // Funding supported by the review council on 8 October 2026; the study is
    // scheduled for December 2026 to November 2027 (profile.ts, NIPT project).
    id: 'nipt-funding',
    date: '2026-10',
    before: { en: 'Our ', vi: 'Đề tài ' },
    link: { href: '/research/nipt-probability/', label: { en: 'NIPT probability project', vi: 'mô hình xác suất sau NIPT' } },
    after: {
      en: ' received student research funding from Hanoi Medical University. It will develop individualised probabilities of a confirmed trisomy after a high-risk NIPT result.',
      vi: ' được Trường Đại học Y Hà Nội cấp kinh phí nghiên cứu khoa học sinh viên. Đề tài dự kiến xây dựng mô hình ước tính xác suất thai mắc tam nhiễm sắc thể cho từng trường hợp có kết quả NIPT nguy cơ cao.',
    },
  },
  {
    // Added at the author's request, dated June 2026 by the author: the Third
    // Prize under Honours and Awards (awards.ts). No source names the research
    // it was awarded for, so the item does not either.
    id: 'youth-science-university-prize',
    date: '2026-06',
    before: { en: 'Our research won a ', vi: 'Nghiên cứu của chúng tôi đạt ' },
    link: { href: '/#awards', label: { en: 'Third Prize', vi: 'giải Ba' } },
    after: {
      en: ' at the university-level Youth Science and Technology Conference of Hanoi Medical University.',
      vi: ' tại Hội nghị Khoa học và Công nghệ tuổi trẻ Trường Đại học Y Hà Nội, cấp trường.',
    },
  },
  {
    // Dated June 2026 in the news of the author's first homepage (August 2026),
    // as accepted to IUKM 2026; Crossref gives 11 October 2026 for the chapter.
    id: 'receptor-iukm-accepted',
    date: '2026-06',
    before: { en: 'Our ', vi: 'Bài báo về ' },
    link: { href: '/publications/#paper-C3', label: { en: 'breast cancer receptor-status paper', vi: 'dự đoán tình trạng biểu hiện thụ thể trong ung thư vú' } },
    after: {
      en: ' was accepted to IUKM 2026 (Springer LNAI). It fuses clinical variables, H&E whole-slide images and tumour RNA-seq to predict ER, PR and HER2 status jointly.',
      vi: ' được chấp nhận tại IUKM 2026 (Springer LNAI). Mô hình kết hợp các biến lâm sàng, ảnh toàn tiêu bản nhuộm H&E và dữ liệu giải trình tự RNA của khối u để dự đoán đồng thời ER, PR và HER2.',
    },
  },
  {
    // Crossref gives 1 June 2026 as the online date of the ACIIDS 2026 chapter
    // (Springer CCIS 2964); the first homepage dated it June 2026.
    id: 'lncrna-aciids-published',
    date: '2026-06',
    before: { en: 'Our ', vi: 'Bài báo về ' },
    link: { href: '/publications/#paper-C2', label: { en: 'variational graph neural network paper', vi: 'mạng nơ-ron đồ thị biến phân' } },
    after: {
      en: ' was published in the ACIIDS 2026 proceedings (Springer CCIS). It integrates multiple views of lncRNA and disease data to predict lncRNA–disease associations.',
      vi: ' được xuất bản trong kỷ yếu ACIIDS 2026 (Springer CCIS). Mô hình tích hợp đa góc nhìn để dự đoán mối liên hệ giữa RNA dài không mã hóa (lncRNA) và bệnh.',
    },
  },
  {
    // Dated March 2026 in the news of the author's first homepage.
    id: 'lncrna-fjcai-published',
    date: '2026-03',
    before: { en: 'Our ', vi: 'Bài báo về ' },
    link: { href: '/publications/#paper-C1', label: { en: 'dual-stream contrastive graph learning paper', vi: 'học biểu diễn đồ thị tương phản hai luồng' } },
    after: {
      en: ' was published in the FJCAI 2026 proceedings. It predicts lncRNA–disease associations with contrastive graph representation learning.',
      vi: ' được xuất bản trong kỷ yếu FJCAI 2026. Phương pháp dự đoán mối liên hệ giữa lncRNA và bệnh bằng học tương phản trên đồ thị.',
    },
  },
  {
    id: 'sydney-honours-research',
    date: '2026-02',
    before: {
      en: 'I started my honours research at the University of Sydney, developing ',
      vi: 'Tôi bắt đầu nghiên cứu tốt nghiệp (Honours) tại Đại học Sydney, phát triển ',
    },
    link: { href: '/research/nimsurv/', label: { en: 'NIMSurv', vi: 'NIMSurv' } },
    after: {
      en: ', a hierarchical graph model that predicts breast cancer survival from tissue niches and clinical data.',
      vi: ', mô hình học trên đồ thị phân cấp kết hợp thông tin về các vi vùng mô và dữ liệu lâm sàng để dự đoán sống còn ở bệnh nhân ung thư vú.',
    },
  },
  {
    id: 'hmu-research-collaboration',
    date: '2025-12',
    before: { en: 'I started collaborating with Hanoi Medical University on a ', vi: 'Tôi bắt đầu cộng tác với Trường Đại học Y Hà Nội trong ' },
    link: { href: '/research/receptor-prediction/', label: { en: 'breast cancer receptor project', vi: 'dự án về thụ thể trong ung thư vú' } },
    after: {
      en: ': predicting ER, PR and HER2 status from clinical, histopathology and RNA-seq data.',
      vi: ': dự đoán tình trạng biểu hiện ER, PR và HER2 từ dữ liệu lâm sàng, mô bệnh học và giải trình tự RNA.',
    },
  },
];
