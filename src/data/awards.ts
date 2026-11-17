type BilingualText = { en: string; vi: string };

interface Award {
  id: string;
  year: string;
  /** The prize or award itself, shown in bold. */
  title: BilingualText;
  /** Awarding body or event. */
  organisation: BilingualText;
  /** Optional shorter organisation for the one-line homepage entry. */
  organisationShort?: BilingualText;
}

// Newest year first. Within a year: research prizes first, from the national
// level down (the national health-sector conference, then the two
// Vietnam–Australia awards, then the university conference); then the
// Embassy's award for academic and research achievement; then the
// certificates of merit. The CV of 16 November 2026 lists the 2026 awards in
// a different order. The homepage sets them like its other CV sections: the
// year in the left column, then the bold title and the organisation.
// Preserve the distinctions between prizes, finalist recognition, and the
// national versus university level of the two Youth Science conferences.
export const awards: Award[] = [
  {
    id: 'award-youth-science-national-2026',
    year: '2026',
    title: { en: 'Fourth Prize', vi: 'Giải Khuyến khích' },
    organisation: {
      en: '23rd Youth Science and Technology Conference of the Vietnamese Health Sector',
      vi: 'Hội nghị Khoa học và Công nghệ tuổi trẻ ngành Y tế lần thứ 23',
    },
  },
  {
    id: 'award-aurora-2026',
    year: '2026',
    title: { en: 'Top 10 Finalist', vi: 'Nhóm 10 xuất sắc nhất' },
    organisation: {
      en: 'AURORA Scientific Research Awards, Vietnam–Australia Innovation Network (NIC-AU)',
      vi: 'Giải thưởng Nghiên cứu Khoa học AURORA, Mạng lưới Đổi mới sáng tạo Việt Nam–Australia (NIC-AU)',
    },
    organisationShort: {
      en: 'AURORA Scientific Research Awards (NIC-AU)',
      vi: 'Giải thưởng Nghiên cứu Khoa học AURORA (NIC-AU)',
    },
  },
  {
    id: 'award-young-intellectuals-2026',
    year: '2026',
    title: { en: 'Second Prize', vi: 'Giải Nhì' },
    organisation: { en: 'Vietnamese Young Intellectuals Forum in Australia', vi: 'Diễn đàn Trí thức trẻ Việt Nam tại Australia' },
  },
  {
    id: 'award-youth-science-2026',
    year: '2026',
    title: { en: 'Third Prize', vi: 'Giải Ba' },
    organisation: {
      en: 'Youth Science and Technology Conference, Hanoi Medical University',
      vi: 'Hội nghị Khoa học và Công nghệ tuổi trẻ, Trường Đại học Y Hà Nội',
    },
  },
  {
    // Vietnamese title as given by the author.
    id: 'award-outstanding-student-2026',
    year: '2026',
    title: { en: 'Outstanding Student Award', vi: 'Sinh viên tiêu biểu' },
    organisation: { en: 'Embassy of Vietnam in Australia', vi: 'Đại sứ quán Việt Nam tại Australia' },
  },
  {
    // Added at the author's request and listed in the CV of 16 November 2026.
    // The English name omits "Communist" at the author's request.
    id: 'award-youth-union-merit-2026',
    year: '2026',
    title: { en: 'Certificate of Merit', vi: 'Bằng khen' },
    organisation: { en: 'Central Committee of the Ho Chi Minh Youth Union', vi: 'Trung ương Đoàn Thanh niên Cộng sản Hồ Chí Minh' },
  },
  {
    // Added at the author's request and listed in the CV of 16 November 2026.
    id: 'award-vnus-merit-2026',
    year: '2026',
    title: { en: 'Certificate of Merit', vi: 'Bằng khen' },
    organisation: { en: 'Vietnam National Union of Students', vi: 'Trung ương Hội Sinh viên Việt Nam' },
  },
  {
    id: 'award-january-star-2025',
    year: '2025',
    title: { en: 'January Star Award', vi: 'Giải thưởng Sao Tháng Giêng' },
    organisation: { en: 'Vietnam National Union of Students', vi: 'Trung ương Hội Sinh viên Việt Nam' },
  },
  {
    id: 'award-sydney-international-2023',
    year: '2023',
    title: { en: 'Sydney International Student Award', vi: 'Học bổng Sydney International Student Award' },
    organisation: { en: 'The University of Sydney', vi: 'Đại học Sydney' },
  },
];
