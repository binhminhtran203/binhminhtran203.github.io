type BilingualText = { en: string; vi: string };

interface Experience {
  id: string;
  /** Role, shown in bold. */
  role: BilingualText;
  organisation: BilingualText;
  period: BilingualText;
  /** Optional second line: unit and supervisor or host. */
  detail?: BilingualText;
}

// Research experience from the November 2026 CV, newest first, in the usual
// academic-homepage format: a bold role and the organisation, the dates at the
// right of the line, and a short second line for the unit and supervisor or host.
// At the author's request the entries say where the work was done, not what it
// was; the CV and research pages describe the work. Units are from the CV.
// VinBigdata is listed in the CV as "Nov 2026 (expected)".
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
      en: 'John Curtin School of Medical Research · Host: Prof. Eduardo Eyras',
      vi: 'Trường Nghiên cứu Y khoa John Curtin · Người hướng dẫn: GS. Eduardo Eyras',
    },
  },
  {
    id: 'sydney-honours',
    role: { en: 'Honours Research Student', vi: 'Sinh viên nghiên cứu chương trình cử nhân danh dự' },
    organisation: { en: 'The University of Sydney', vi: 'Đại học Sydney' },
    period: { en: 'Feb – Oct 2026', vi: '02/2026 – 10/2026' },
    detail: {
      en: 'School of Computer Science · Supervisor: A/Prof. Xiuying Wang',
      vi: 'Khoa Khoa học Máy tính · Người hướng dẫn: PGS. Xiuying Wang',
    },
  },
  {
    id: 'hmu-collaborator',
    role: { en: 'Research Collaborator', vi: 'Cộng tác viên nghiên cứu' },
    organisation: { en: 'Hanoi Medical University', vi: 'Trường Đại học Y Hà Nội' },
    period: { en: 'Dec 2025 – present', vi: '12/2025 – nay' },
    detail: { en: 'Department of Obstetrics & Gynaecology', vi: 'Bộ môn Phụ sản' },
  },
  {
    id: 'vast-assistant',
    role: { en: 'Research Assistant', vi: 'Trợ lý nghiên cứu' },
    organisation: { en: 'Vietnam Academy of Science and Technology', vi: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam' },
    period: { en: 'Dec 2025 – Mar 2026', vi: '12/2025 – 03/2026' },
    // No official Vietnamese name for this centre was found; the Vietnamese line
    // gives a translation followed by the English name, as for VinBigdata.
    detail: {
      en: 'Center for Biomedical and Pharmaceutical Research',
      vi: 'Trung tâm Nghiên cứu Y sinh và Dược học (Center for Biomedical and Pharmaceutical Research)',
    },
  },
  {
    id: 'haui-collaborator',
    role: { en: 'Research Collaborator', vi: 'Cộng tác viên nghiên cứu' },
    organisation: { en: 'Hanoi University of Industry', vi: 'Trường Đại học Công nghiệp Hà Nội' },
    period: { en: 'Dec 2024 – Dec 2025', vi: '12/2024 – 12/2025' },
    detail: { en: 'Supervisor: A/Prof. Dang Hung Tran', vi: 'Người hướng dẫn: PGS. Dang Hung Tran' },
  },
];
