type BilingualText = { en: string; vi: string };

interface Presentation {
  id: string;
  /** Month as YYYY-MM; the homepage shows "Sep 2026" or "09/2026". */
  date: string;
  /** Kind of presentation, shown in bold. */
  type: BilingualText;
  /** Language of the talk, when the CV notes it. */
  language?: BilingualText;
  /** Meeting or event. */
  event: BilingualText;
  /** Second line: the venue or organiser where the CV names one, and the place. */
  venue: BilingualText;
  /** Title of the talk, shown in italics. */
  title: BilingualText;
  /** Optional link on the title: the paper or the project page. */
  href?: string;
}

// Newest first, from the CV of 17 November 2026, and placed after Honours and
// Awards as in the CV. The homepage sets them like its other CV sections: the
// month in the left column, then the bold kind of presentation and the
// meeting, a line for the venue or organiser and the place (split at the comma
// as in the CV and in Research Experience), and the title in italics.
// Vietnamese titles: the IUKM talk uses the paper's title from the publication
// list; the 2025 talk was given in Vietnamese, so its Vietnamese title is the
// original. International meetings keep their English names.
export const presentations: Presentation[] = [
  {
    id: 'iukm-2026-oral',
    date: '2026-09',
    type: { en: 'Oral presentation', vi: 'Báo cáo miệng' },
    event: {
      en: '12th International Symposium on Integrated Uncertainty in Knowledge Modelling and Decision Making (IUKM 2026)',
      vi: 'Hội nghị quốc tế IUKM 2026 (12th International Symposium on Integrated Uncertainty in Knowledge Modelling and Decision Making)',
    },
    venue: { en: 'Quy Nhon, Vietnam', vi: 'Quy Nhơn, Việt Nam' },
    title: {
      en: 'A Multimodal Deep Learning Framework for Breast Cancer Receptor Status Prediction',
      vi: 'Mô hình học sâu đa phương thức để dự đoán tình trạng biểu hiện thụ thể trong ung thư vú',
    },
    href: '#paper-C3',
  },
  {
    id: 'young-intellectuals-forum-2026-oral',
    date: '2026-06',
    type: { en: 'Oral presentation', vi: 'Báo cáo miệng' },
    event: { en: 'Vietnamese Young Intellectuals Forum in Australia', vi: 'Diễn đàn Trí thức trẻ Việt Nam tại Australia' },
    venue: { en: 'University of Technology Sydney, Australia', vi: 'Đại học Công nghệ Sydney, Australia' },
    title: {
      en: 'An Interpretable Multimodal Deep Learning Framework for Breast Cancer Receptor Status Prediction',
      vi: 'Mô hình học sâu đa phương thức có khả năng diễn giải để dự đoán tình trạng biểu hiện thụ thể trong ung thư vú',
    },
    href: '/research/receptor-prediction/',
  },
  {
    // Vietnamese title and workshop name as on the earlier site.
    id: 'vnus-cloud-workshop-2025-invited',
    date: '2025-10',
    type: { en: 'Invited talk', vi: 'Báo cáo mời' },
    language: { en: 'in Vietnamese', vi: 'bằng tiếng Việt' },
    event: {
      en: 'National Student Science Workshop on Cloud Computing, Quantum Computing and Big Data',
      vi: 'Hội thảo khoa học sinh viên toàn quốc lĩnh vực điện toán đám mây, điện toán lượng tử và dữ liệu lớn',
    },
    venue: {
      en: 'Vietnam National Union of Students, Ho Chi Minh City, Vietnam',
      vi: 'Trung ương Hội Sinh viên Việt Nam, TP. Hồ Chí Minh, Việt Nam',
    },
    title: {
      en: 'The Power of Connecting Vietnamese Knowledge: Young People’s Aspirations in the Student Network for Cloud Computing, Big Data and Quantum Computing',
      vi: 'Sức mạnh kết nối tri thức Việt Nam — Khát vọng của người trẻ trong Mạng lưới sinh viên điện toán đám mây, dữ liệu lớn và lượng tử',
    },
  },
];
