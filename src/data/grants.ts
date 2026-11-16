type BilingualText = { en: string; vi: string };

interface Grant {
  id: string;
  /** Funding body, shown in bold. */
  funder: BilingualText;
  /** Funding scheme, after the funder. */
  scheme: BilingualText;
  /** Funding period, shown in the left column. */
  period?: BilingualText;
  /** Project title, in italics on the second line. */
  project?: BilingualText;
  /** Role on the grant. */
  role?: BilingualText;
  /** Amount awarded. */
  amount?: BilingualText;
}

// Research grants, newest first, set like an academic CV: the funding period
// in a left column, then the funder (bold) and scheme, the project title in
// italics, and a line for the role and the amount. Academic CV guides ask for
// these fields: the funder and scheme, the project title, your role, the
// amount and the full span of years.
// The NIPT grant is the one in the CV (Research Grants).
// The seed fund is named in the acknowledgments of a 2026 manuscript on breast
// cancer survival prediction, which gives no year, project, role or amount;
// add them when the author supplies them. No official Vietnamese name for the
// fund was found, so the Vietnamese name is a translation.
export const grants: Grant[] = [
  {
    id: 'grant-nipt-hmu-2026',
    funder: { en: 'Hanoi Medical University', vi: 'Trường Đại học Y Hà Nội' },
    scheme: { en: 'Student Research Grant', vi: 'Đề tài nghiên cứu khoa học sinh viên' },
    period: { en: 'Dec 2026 – Nov 2027', vi: '12/2026 – 11/2027' },
    project: {
      en: 'AI Model for Individualised Post-Test Probability after High-Risk NIPT',
      vi: 'Mô hình AI ước tính xác suất cá thể hóa sau kết quả NIPT nguy cơ cao',
    },
    role: { en: 'Co-principal investigator', vi: 'Đồng chủ nhiệm' },
    // A no-break space keeps the amount and currency on one line.
    amount: { en: 'VND 10,000,000', vi: '10.000.000 đồng' },
  },
  {
    id: 'grant-hmu-australia-seed-fund',
    funder: { en: 'Hanoi Medical University–Australia', vi: 'Đại học Y Hà Nội–Australia' },
    scheme: { en: 'Young Researchers Seed Fund', vi: 'Quỹ hạt giống dành cho nhà nghiên cứu trẻ' },
  },
];
