type BilingualText = { en: string; vi: string };

interface Experience {
  id: string;
  /** Position, shown in bold. */
  role: BilingualText;
  /** Department, school or centre, when the CV names one. */
  unit?: BilingualText;
  /** Institution. */
  organisation: BilingualText;
  /** City and country, or the country alone, as the CV gives it. */
  location: BilingualText;
  /** Dates, shown in the left column. */
  period: BilingualText;
  /** Optional second line: supervisor or host. */
  detail?: BilingualText;
}

// Research experience from the CV of 16 November 2026, newest first, set like
// an academic CV and like the CV itself: the dates in a left column, then the
// position (bold), department, institution and location, with the supervisor
// or host on a second line. University CV guides give the same fields in the
// same order: position, department or lab, institution, location, dates.
// At the author's request the entries say where the work was done, not what it
// was; the CV and research pages describe the work. Units and locations are
// from the CV. The VinBigdata internship is no longer listed, at the author's
// request and as in the CV.
export const researchExperience: Experience[] = [
  {
    id: 'anu-visiting',
    role: { en: 'Visiting Researcher', vi: 'Nghiên cứu viên khách mời' },
    unit: { en: 'John Curtin School of Medical Research', vi: 'Trường Nghiên cứu Y khoa John Curtin' },
    organisation: { en: 'Australian National University', vi: 'Đại học Quốc gia Australia' },
    location: { en: 'Canberra, Australia', vi: 'Canberra, Australia' },
    period: { en: 'Oct 2026 – present', vi: '10/2026 – nay' },
    detail: { en: 'Host: Prof. Eduardo Eyras', vi: 'Người hướng dẫn: GS. Eduardo Eyras' },
  },
  {
    id: 'sydney-honours',
    role: { en: 'Honours Research Student', vi: 'Sinh viên nghiên cứu chương trình cử nhân danh dự' },
    unit: { en: 'School of Computer Science', vi: 'Khoa Khoa học Máy tính' },
    organisation: { en: 'The University of Sydney', vi: 'Đại học Sydney' },
    location: { en: 'Australia', vi: 'Australia' },
    period: { en: 'Feb – Oct 2026', vi: '02/2026 – 10/2026' },
    detail: { en: 'Supervisor: A/Prof. Xiuying Wang', vi: 'Người hướng dẫn: PGS. Xiuying Wang' },
  },
  {
    id: 'hmu-collaborator',
    role: { en: 'Research Collaborator', vi: 'Cộng tác viên nghiên cứu' },
    unit: { en: 'Department of Obstetrics & Gynaecology', vi: 'Bộ môn Phụ sản' },
    organisation: { en: 'Hanoi Medical University', vi: 'Trường Đại học Y Hà Nội' },
    location: { en: 'Vietnam', vi: 'Việt Nam' },
    period: { en: 'Dec 2025 – present', vi: '12/2025 – nay' },
  },
  {
    id: 'vast-assistant',
    role: { en: 'Research Assistant', vi: 'Trợ lý nghiên cứu' },
    // No official Vietnamese name for this centre was found; the Vietnamese text
    // gives a translation followed by the English name.
    unit: {
      en: 'Center for Biomedical and Pharmaceutical Research',
      vi: 'Trung tâm Nghiên cứu Y sinh và Dược học (Center for Biomedical and Pharmaceutical Research)',
    },
    organisation: { en: 'Vietnam Academy of Science and Technology', vi: 'Viện Hàn lâm Khoa học và Công nghệ Việt Nam' },
    location: { en: 'Vietnam', vi: 'Việt Nam' },
    period: { en: 'Dec 2025 – Mar 2026', vi: '12/2025 – 03/2026' },
  },
  {
    id: 'haui-collaborator',
    role: { en: 'Research Collaborator', vi: 'Cộng tác viên nghiên cứu' },
    organisation: { en: 'Hanoi University of Industry', vi: 'Trường Đại học Công nghiệp Hà Nội' },
    location: { en: 'Vietnam', vi: 'Việt Nam' },
    period: { en: 'Dec 2024 – Dec 2025', vi: '12/2024 – 12/2025' },
    detail: { en: 'Supervisor: A/Prof. Dang Hung Tran', vi: 'Người hướng dẫn: PGS. Dang Hung Tran' },
  },
];
