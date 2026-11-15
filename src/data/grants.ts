type BilingualText = { en: string; vi: string };

interface Grant {
  id: string;
  /** Funding scheme, shown in bold. */
  scheme: BilingualText;
  /** Funding body, after the scheme. */
  funder: BilingualText;
  /** Optional funding period, at the right of the line. */
  period?: BilingualText;
  /** Optional project title, in italics on the second line. */
  project?: BilingualText;
  /** Optional role and amount, after the project title. */
  detail?: BilingualText;
}

// Research grants, newest first. Most academic homepages and CV guides lead
// with the funding scheme and funder, then give the project title, role,
// amount and years. Here the scheme is bold, the funder follows it, the period
// sits at the right of the line, and a second line gives the project title,
// role and amount.
// The NIPT grant is the one in the November 2026 CV (Research Grants).
// The seed fund is named in the acknowledgments of a 2026 manuscript on breast
// cancer survival prediction, which gives no year, project, role or amount;
// add them when the author supplies them. No official Vietnamese name for the
// fund was found, so the Vietnamese name is a translation.
export const grants: Grant[] = [
  {
    id: 'grant-nipt-hmu-2026',
    scheme: { en: 'Student Research Grant', vi: 'Đề tài nghiên cứu khoa học sinh viên' },
    funder: { en: 'Hanoi Medical University', vi: 'Trường Đại học Y Hà Nội' },
    period: { en: 'Dec 2026 – Nov 2027', vi: '12/2026 – 11/2027' },
    project: {
      en: 'AI Model for Individualised Post-Test Probability after High-Risk NIPT',
      vi: 'Mô hình AI ước tính xác suất cá thể hóa sau kết quả NIPT nguy cơ cao',
    },
    // A no-break space keeps the amount and currency on one line.
    detail: {
      en: 'Co-principal investigator · VND 10,000,000',
      vi: 'Đồng chủ nhiệm · 10.000.000 đồng',
    },
  },
  {
    id: 'grant-hmu-australia-seed-fund',
    scheme: { en: 'Young Researchers Seed Fund', vi: 'Quỹ hạt giống dành cho nhà nghiên cứu trẻ' },
    funder: { en: 'Hanoi Medical University–Australia', vi: 'Đại học Y Hà Nội–Australia' },
  },
];
