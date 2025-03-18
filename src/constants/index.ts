import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Sắp diễn ra", variant: "outline" },
  { id: "completed", title: "Hoàn thành", variant: "secondary" },
  { id: "succeeded", title: "Đạt yêu cầu", variant: "default" },
  { id: "failed", title: "Không đạt", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "Cuộc họp mới",
    description: "Bắt đầu cuộc họp mới",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Tham dự buổi phỏng vấn",
    description: "Truy cập thông qua đường liên kết",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Lên lịch trình cho buổi phỏng vấn",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recording",
    description: "Truy cập vào bản ghi các buổi phỏng vấn",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Tổng 2 số",
    description:
      "Cho một mảng số nguyên 'nums' và một số nguyên 'target', hãy tìm và trả về chỉ số (index) của hai phần tử trong mảng sao cho tổng của chúng bằng target.\n\nBạn có thể giả định rằng mỗi đầu vào luôn có đúng một cặp số thỏa mãn điều kiện này. Lưu ý, bạn không được sử dụng cùng một phần tử hai lần.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Viết cách giải quyết của bạn ở đây
  
}`,
      python: `def two_sum(nums, target):
    # Viết cách giải quyết của bạn ở đây
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Viết cách giải quyết của bạn ở đây
        
    }
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 104",
      "-109 ≤ nums[i] ≤ 109",
      "-109 ≤ target ≤ 109",
      "Chỉ có một câu trả lời hợp lệ.",
    ],
  },
  {
    id: "reverse-string",
    title: "Đảo ngược chuỗi ký tự",
    description:
      "Viết một hàm đảo ngược một chuỗi ký tự. Chuỗi đầu vào được cho dưới dạng một mảng các ký tự 's'.\n\nBạn phải thực hiện việc đảo ngược này trực tiếp trên mảng (in-place), đồng thời chỉ được sử dụng thêm O(1) bộ nhớ bổ sung (tức là không được tạo thêm mảng mới để lưu kết quả).",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Viết cách giải quyết của bạn ở đây
  
}`,
      python: `def reverse_string(s):
    # Viết cách giải quyết của bạn ở đây
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Viết cách giải quyết của bạn ở đây
        
    }
}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Số đối xứng",
    description:
      "Cho một số nguyên 'x', trả về true nếu 'x' là số đối xứng (palindrome), ngược lại trả về 'false'.\n\nMột số nguyên được gọi là đối xứng nếu khi đọc từ trái sang phải và từ phải sang trái đều giống nhau.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Viết cách giải quyết của bạn ở đây
  
}`,
      python: `def is_palindrome(x):
    # Viết cách giải quyết của bạn ở đây
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Viết cách giải quyết của bạn ở đây
        
    }
}`,
    },
  },
];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
  };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];