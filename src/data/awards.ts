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
  /** One sentence for the About page. */
  detail: BilingualText;
}

// Newest first, in the order of the November 2026 CV. The homepage shows one
// line per award ("Title, organisation, year"); the About page adds the detail.
// Preserve the distinctions between prizes, finalist recognition, and the
// national versus university level of the two Youth Science conferences.
export const awards: Award[] = [
  {
    id: 'award-youth-science-national-2026',
    year: '2026',
    title: { en: 'Fourth Prize', vi: 'Giải Tư' },
    organisation: {
      en: '23rd Youth Science and Technology Conference of the Vietnamese Health Sector',
      vi: 'Hội nghị Khoa học và Công nghệ tuổi trẻ ngành Y tế lần thứ 23',
    },
    detail: {
      en: 'National level · Breast cancer receptor-status research.',
      vi: 'Cấp toàn quốc · Nghiên cứu về tình trạng biểu hiện thụ thể trong ung thư vú.',
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
    detail: {
      en: 'Grand Final scheduled for December 2026 in Hanoi.',
      vi: 'Vòng chung kết dự kiến diễn ra tại Hà Nội vào tháng 12/2026.',
    },
  },
  {
    id: 'award-outstanding-student-2026',
    year: '2026',
    title: { en: 'Outstanding Student Award', vi: 'Danh hiệu Sinh viên xuất sắc' },
    organisation: { en: 'Embassy of Vietnam in Australia', vi: 'Đại sứ quán Việt Nam tại Australia' },
    detail: {
      en: 'For academic and research achievement.',
      vi: 'Ghi nhận thành tích trong học tập và nghiên cứu khoa học.',
    },
  },
  {
    id: 'award-young-intellectuals-2026',
    year: '2026',
    title: { en: 'Second Prize', vi: 'Giải Nhì' },
    organisation: { en: 'Vietnamese Young Intellectuals Forum in Australia', vi: 'Diễn đàn Trí thức trẻ Việt Nam tại Australia' },
    detail: {
      en: 'Breast cancer receptor-status research.',
      vi: 'Nghiên cứu về tình trạng biểu hiện thụ thể trong ung thư vú.',
    },
  },
  {
    id: 'award-youth-science-2026',
    year: '2026',
    title: { en: 'Third Prize', vi: 'Giải Ba' },
    organisation: {
      en: 'Youth Science and Technology Conference, Hanoi Medical University',
      vi: 'Hội nghị Khoa học và Công nghệ tuổi trẻ, Trường Đại học Y Hà Nội',
    },
    detail: {
      en: 'University level · Breast cancer receptor-status research.',
      vi: 'Cấp trường · Nghiên cứu về tình trạng biểu hiện thụ thể trong ung thư vú.',
    },
  },
  {
    id: 'award-january-star-2025',
    year: '2025',
    title: { en: 'January Star Award', vi: 'Giải thưởng Sao Tháng Giêng' },
    organisation: { en: 'Vietnam National Union of Students', vi: 'Trung ương Hội Sinh viên Việt Nam' },
    detail: {
      en: 'For academic achievement, research, and student leadership; one of 117 national recipients.',
      vi: 'Ghi nhận thành tích học tập, nghiên cứu khoa học và đóng góp trong công tác Hội; là một trong 117 sinh viên được trao giải trên toàn quốc.',
    },
  },
  {
    id: 'award-sydney-international-2023',
    year: '2023',
    title: { en: 'Sydney International Student Award', vi: 'Học bổng Sydney International Student Award' },
    organisation: { en: 'The University of Sydney', vi: 'Đại học Sydney' },
    detail: {
      en: 'Tuition support awarded at admission for the duration of the degree.',
      vi: 'Hỗ trợ học phí trong suốt thời gian học, được trao khi nhập học.',
    },
  },
];
