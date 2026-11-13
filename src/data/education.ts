type BilingualText = { en: string; vi: string };

interface Education {
  id: string;
  /** Degree or programme, shown in bold. */
  degree: BilingualText;
  institution: BilingualText;
  period: BilingualText;
  /** Optional second line: field and supervisor. */
  detail?: BilingualText;
}

// Newest first, in the usual academic-homepage format ("Degree, institution,
// years"), from the November 2026 CV. The doctoral study starts in 2027, so it
// stays marked as incoming. Keep the official English degree names.
export const education: Education[] = [
  {
    id: 'phd-anu',
    degree: { en: 'Ph.D. in Medical Science', vi: 'Tiến sĩ ngành Khoa học y học' },
    institution: { en: 'Australian National University', vi: 'Đại học Quốc gia Australia' },
    period: { en: '2027 – 2031 (incoming)', vi: '2027 – 2031 (dự kiến)' },
    detail: {
      en: 'Computational RNA biology, John Curtin School of Medical Research · Supervisor: Prof. Eduardo Eyras',
      vi: 'Sinh học RNA tính toán, Trường Nghiên cứu Y khoa John Curtin · Người hướng dẫn: GS. Eduardo Eyras',
    },
  },
  {
    id: 'bachelor-sydney',
    degree: { en: 'Bachelor of Advanced Computing (Honours)', vi: 'Cử nhân Khoa học Máy tính nâng cao (danh dự)' },
    institution: { en: 'The University of Sydney', vi: 'Đại học Sydney' },
    period: { en: '2023 – 2026 (expected)', vi: '2023 – 2026 (dự kiến)' },
    detail: {
      en: 'Computational Data Science · Honours supervisor: A/Prof. Xiuying Wang',
      vi: 'Chuyên ngành Khoa học dữ liệu tính toán · Người hướng dẫn luận văn: PGS. Xiuying Wang',
    },
  },
  {
    id: 'high-school-hus',
    degree: { en: 'Specialised Physics Programme', vi: 'Chuyên Vật lý' },
    institution: { en: 'HUS High School for Gifted Students', vi: 'Trường THPT Chuyên Khoa học Tự nhiên' },
    period: { en: '2019 – 2022', vi: '2019 – 2022' },
    detail: {
      en: 'VNU University of Science, Vietnam National University, Hanoi',
      vi: 'Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Hà Nội',
    },
  },
];
