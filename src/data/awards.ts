type BilingualText = { en: string; vi: string };

interface Award {
  id: string;
  year: string;
  title: BilingualText;
  detail: BilingualText;
  summary: BilingualText;
}

// Shared by the homepage and biography. Preserve the distinctions between
// awards, finalist recognition, and selection for a later conference.
export const awards: Award[] = [
  {
    "id": "award-aurora-2026",
    "year": "2026",
    "title": {
      "en": "AURORA Scientific Research Awards",
      "vi": "Giải thưởng Nghiên cứu Khoa học AURORA"
    },
    "detail": {
      "en": "Top 10 finalist · Vietnam–Australia Innovation Network (NIC-AU). Grand Final scheduled for December 2026.",
      "vi": "Được lựa chọn vào nhóm 10 xuất sắc nhất của Giải thưởng AURORA, Mạng lưới Đổi mới sáng tạo Việt Nam–Australia (NIC-AU). Vòng chung kết dự kiến diễn ra vào tháng 12/2026."
    },
    "summary": {
      "en": "Top 10 finalist · NIC-AU. Grand Final scheduled for December 2026.",
      "vi": "Nhóm 10 xuất sắc nhất · NIC-AU. Vòng chung kết dự kiến tháng 12/2026."
    }
  },
  {
    "id": "award-outstanding-student-2026",
    "year": "2026",
    "title": {
      "en": "Outstanding Student Award",
      "vi": "Danh hiệu Sinh viên xuất sắc"
    },
    "detail": {
      "en": "Embassy of Vietnam in Australia · Academic and research achievement.",
      "vi": "Được Đại sứ quán Việt Nam tại Australia trao tặng nhằm ghi nhận thành tích trong học tập và nghiên cứu khoa học."
    },
    "summary": {
      "en": "Embassy of Vietnam in Australia.",
      "vi": "Đại sứ quán Việt Nam tại Australia trao tặng."
    }
  },
  {
    "id": "award-young-intellectuals-2026",
    "year": "2026",
    "title": {
      "en": "Vietnamese Young Intellectuals Forum in Australia",
      "vi": "Diễn đàn Trí thức trẻ Việt Nam tại Australia"
    },
    "detail": {
      "en": "Second Prize · Breast cancer receptor-status research.",
      "vi": "Đạt giải Nhì với nghiên cứu về tình trạng biểu hiện thụ thể trong ung thư vú."
    },
    "summary": {
      "en": "Second Prize · Breast cancer receptor-status research.",
      "vi": "Giải Nhì · Nghiên cứu về tình trạng biểu hiện thụ thể trong ung thư vú."
    }
  },
  {
    "id": "award-youth-science-2026",
    "year": "2026",
    "title": {
      "en": "Youth Science and Technology Conference",
      "vi": "Hội nghị Khoa học và Công nghệ tuổi trẻ"
    },
    "detail": {
      "en": "Third Prize · Hanoi Medical University; selected for the 23rd Youth Science and Technology Conference of the Vietnamese Health Sector.",
      "vi": "Đạt giải Ba tại Trường Đại học Y Hà Nội và được lựa chọn tham dự Hội nghị Khoa học và Công nghệ tuổi trẻ ngành Y tế lần thứ 23."
    },
    "summary": {
      "en": "Third Prize · Hanoi Medical University.",
      "vi": "Giải Ba tại Trường Đại học Y Hà Nội."
    }
  },
  {
    "id": "award-january-star-2025",
    "year": "2025",
    "title": {
      "en": "January Star Award",
      "vi": "Giải thưởng Sao Tháng Giêng"
    },
    "detail": {
      "en": "Vietnam National Union of Students · Academic achievement, research, and student leadership.",
      "vi": "Do Trung ương Hội Sinh viên Việt Nam trao tặng, ghi nhận thành tích học tập, nghiên cứu khoa học và đóng góp trong công tác Hội."
    },
    "summary": {
      "en": "Vietnam National Union of Students.",
      "vi": "Trung ương Hội Sinh viên Việt Nam trao tặng."
    }
  }
];
