type BilingualText = { en: string; vi: string };

interface Education {
  id: string;
  /** Degree or programme, shown in bold. */
  degree: BilingualText;
  institution: BilingualText;
  /** Years, shown in the left column. */
  period: BilingualText;
  /** Field of study, with the school where the CV names one. */
  field?: BilingualText;
  /** Thesis title, in its original language, and its public PDF. */
  thesis?: { title: string; href: string };
  /** Supervisor line. */
  supervisor?: BilingualText;
}

// Newest first, from the November 2026 CV, set like an academic CV: the years
// in a left column, then a bold degree and the institution, followed by the
// field, the thesis title and the supervisor on their own lines, as the CV
// gives them.
// The doctoral study starts in 2027, so it stays marked as incoming. The
// bachelor's degree is complete, as in the CV of 17 November 2026. Keep the
// official English degree names.
export const education: Education[] = [
  {
    id: 'phd-anu',
    degree: { en: 'Ph.D. in Medical Science', vi: 'Tiến sĩ ngành Khoa học y học' },
    institution: { en: 'Australian National University', vi: 'Đại học Quốc gia Australia' },
    period: { en: '2027 – 2031 (incoming)', vi: '2027 – 2031 (dự kiến)' },
    field: {
      en: 'Computational RNA biology, John Curtin School of Medical Research',
      vi: 'Sinh học RNA tính toán, Trường Nghiên cứu Y khoa John Curtin',
    },
    supervisor: { en: 'Supervisor: Prof. Eduardo Eyras', vi: 'Người hướng dẫn: GS. Eduardo Eyras' },
  },
  {
    id: 'bachelor-sydney',
    degree: { en: 'Bachelor of Advanced Computing (Honours)', vi: 'Cử nhân Khoa học Máy tính nâng cao (Honours)' },
    institution: { en: 'The University of Sydney', vi: 'Đại học Sydney' },
    period: { en: '2023 – 2026', vi: '2023 – 2026' },
    field: { en: 'Computational Data Science', vi: 'Khoa học dữ liệu tính toán' },
    // Public copy of the honours thesis (6 November 2026): the student ID and the
    // signed plagiarism statement page are removed; all other pages are unchanged.
    thesis: {
      title: 'Multimodal Graph Learning for Breast Cancer Survival Prediction',
      href: '/assets/papers/tran-honours-thesis-2026.pdf',
    },
    supervisor: { en: 'Supervisor: A/Prof. Xiuying Wang', vi: 'Người hướng dẫn: PGS. Xiuying Wang' },
  },
  {
    id: 'high-school-hus',
    degree: { en: 'Specialised Physics Programme', vi: 'Chuyên Vật lý' },
    institution: { en: 'HUS High School for Gifted Students', vi: 'Trường THPT Chuyên Khoa học Tự nhiên' },
    period: { en: '2019 – 2022', vi: '2019 – 2022' },
    field: {
      en: 'VNU University of Science, Vietnam National University, Hanoi',
      vi: 'Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Hà Nội',
    },
  },
];
