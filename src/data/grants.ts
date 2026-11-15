type BilingualText = { en: string; vi: string };

interface Grant {
  id: string;
  /** Grant or project title, shown in bold. */
  title: BilingualText;
  /** Optional funding period, at the right of the line. */
  period?: BilingualText;
  /** Optional second line: funder, role and amount. */
  detail?: BilingualText;
}

// Research grants, newest first, in the format of Research Experience: a bold
// title, the period at the right of the line, and a short second line for the
// funder, role and amount.
// The NIPT grant is the one in the November 2026 CV (Research Grants).
// The seed fund is named in the acknowledgments of a 2026 manuscript on breast
// cancer survival prediction, which gives no year, role or amount; add them
// when the author supplies them. No official Vietnamese name for the fund was
// found, so the Vietnamese title is a translation.
export const grants: Grant[] = [
  {
    id: 'grant-nipt-hmu-2026',
    title: {
      en: 'AI Model for Individualised Post-Test Probability after High-Risk NIPT',
      vi: 'Mô hình AI ước tính xác suất cá thể hóa sau kết quả NIPT nguy cơ cao',
    },
    period: { en: 'Dec 2026 – Nov 2027', vi: '12/2026 – 11/2027' },
    detail: {
      // A no-break space keeps the amount and currency on one line.
      en: 'Hanoi Medical University · Co-principal investigator · VND 10,000,000',
      vi: 'Trường Đại học Y Hà Nội · Đồng chủ nhiệm đề tài · 10.000.000 đồng',
    },
  },
  {
    id: 'grant-hmu-australia-seed-fund',
    title: {
      en: 'Hanoi Medical University–Australia Young Researchers Seed Fund',
      vi: 'Quỹ hạt giống dành cho nhà nghiên cứu trẻ Đại học Y Hà Nội–Australia',
    },
  },
];
