/* =============================================================
 *  사이트 내용 데이터 — 여기만 수정하면 됩니다.
 *  마크업(index.html)이나 스타일(styles.css)은 건드릴 필요 없음.
 *  배열 항목은 자유롭게 추가/삭제/순서변경 가능합니다.
 * ============================================================= */

const SITE = {
  /* ---- 테마 ---- */
  accentColor: "#b5451b",          // 포인트 컬러
  showAvailability: true,          // 히어로의 "転職活動" 배지 표시 여부
  availabilityText: "Email : wlsrb2695@gmail.com",

  /* ---- 헤더 ---- */
  logo: "portfolio",

  /* ---- 히어로 ---- */
  hero: {
    eyebrow: "Backend Engineer",
    name: "クァク・ジンギュ",
    // 대표 이미지. 이미지 파일을 프로젝트 폴더에 넣고 파일명을 적으세요. (예: "profile.jpg")
    // 비워두면 이니셜 플레이스홀더가 표시됩니다.
    image: "",
    // 경력 한 줄
    role: "エンジニア 4年目（実務経験3年1ヶ月）",
    intro:
      "はじめまして。韓国で2年間バックエンドエンジニアとして勤務した後、2026年2月より日本でシステムエンジニアとして働いております、クァク・ジンギュと申します。" +
      "\n" +
      "MSA構造における認証機能の実装や、月間約30万件の決済が発生するサービスにおけるSpring Batchを用いた集計機能の実装など、実務経験があります。",
    // CTA 버튼 (icon: "github" | "qiita" | "email")
    // showCtaLabel: false 로 하면 아이콘만 표시됩니다.
    showCtaLabel: true,
    cta: [
      { label: "GitHub", url: "https://github.com/JinGyuGwak", icon: "github" },
      { label: "Qiita", url: "https://qiita.com/wlsrb2695", icon: "qiita" },
      // url 없이 두면 클릭 링크가 아니라 주소 텍스트로 그대로 표시됩니다.
      { label: "wlsrb2695@gmail.com", icon: "email" },
    ],
  },

  /* ---- Tech Stack (概要 대체) ---- */
  techStack: {
    heading: "Tech Stack",
    categories: [
      {
        name: "Language & Framework",
        groups: [
          { level: "実務で使用可能", items: ["Java", "Spring Boot", "Spring Security", "JPA", "MyBatis"] },
          { level: "実務で使用可能（要調査）", items: ["C#", ".NET", "Python", "Flask"] },
        ],
      },
      {
        name: "Data & Messaging",
        groups: [
          { level: "実務で使用可能", items: ["MySQL", "Redis"] },
          { level: "実務で使用可能（要調査）", items: ["Apache Kafka"] },
        ],
      },
      {
        name: "Infra & DevOps",
        groups: [
          { level: "学習経験あり", items: ["Docker", "GitHub Actions", "Jenkins", "AWS (EC2/RDS/S3)"] },
        ],
      },
      {
        name: "Frontend",
        groups: [
          { level: "学習経験あり", items: ["React", "TypeScript"] },
        ],
      },
    ],
  },

  /* ---- 経歴（타임라인） ---- */
  career: [
    {
      period: "2023.05 - 2023.10",
      tag: "Internship",
      title: "バックエンドエンジニア インターン（韓国・インターン 6ヶ月）",
      desc: "Kubernetesを用いたGPUサーバー資源配分ソリューションの運用・保守に従事。<br>Java 11・Spring Bootを用いた新機能のテストコードおよびAPI仕様書（Spring REST Docs）の作成、顧客先での稼働中に発生したエラー対応を担当しました。",
    },
    {
      period: "2024.01 - 2026.01",
      tag: "Full-time / Korea",
      title: "バックエンドエンジニア（韓国・正社員 2年）",
      desc: "POS/セルフレジシステムにおいて、MSA構造のもと認証・機器管理・売上管理・QRコード注文システムなど複数ドメインサーバーの設計から運用まで一貫して担当。<br>バッチ処理の高度化（30秒→3秒）やQRコード注文システムの新規構築を主導しました。",
    },
    {
      period: "2026.02 - 現在",
      tag: "SES / Japan",
      title: "システムエンジニア（日本・SES企業）",
      desc: "POS/セルフレジシステムにおいて、MSA構造のもと認証・機器管理・売上管理・QR決済システムなど複数ドメインサーバーの設計から運用まで一貫して担当。<br>バッチ処理の高度化（30秒→3秒）やQR決済システムの新規構築を主導しました。",
    },
  ],

  /* ---- プロジェクト（카드 클릭 → 모달） ---- */
  projects: [
    {
      title: "GPUサーバー資源配分ソリューション",
      period: "2023.05 - 2023.10",
      summary:
        "Kubernetesを使用したGPUサーバー資源配分ソリューション運用保守",
      stack: ["Java", "Spring Boot", "JUnit", "MySQL", "JPA", "Kubernetes",],
      overview: "プロジェクトの背景・目的・チーム構成などをここに記載します。",
      role: "担当した役割や責任範囲をここに記載します。",
      highlights: [
        "取り組んだ課題や工夫した点をここに記載します。",
        "成果や数値があれば記載します。",
      ],
    },
    {
      title: "POS／セルフレジソリューション",
      period: "2024.01 - 2026.01",
      summary:
        "MSA環境において4つのサーバを単独で設計・開発・運用まで担当",
      stack: ["MSA", "Java", "Spring boot", "Spring Security",
        "MyBatis", "Redis", "Apache Kafka"],
      overview: "개요",
      role: "要件定義から基本設計（DBスキーマ・API設計）" +
        "Java(Spring Boot)・MySQLによる開発、リリース後の運用（障害対応・性能チューニング）まで一貫して対応しました。",
      highlights: [
        "取り組んだ課題や工夫した点をここに記載します。",
        "成果や数値があれば記載します。",
      ],
    },
    {
      title: "QRコード注文システム",
      period: "2025.07 - 2026.01",
      summary:
        "プロジェクトの概要を一文で記載します。どのような課題を解決したかを簡潔に。",
      stack: ["MSA", "Java", "Spring boot", "Redis", "MyBatis",],
      overview: "プロジェクトの背景・目的・チーム構成などをここに記載します。",
      role: "担当した役割や責任範囲をここに記載します。",
      highlights: [
        "取り組んだ課題や工夫した点をここに記載します。",
        "成果や数値があれば記載します。",
      ],
    },
    {
      title: "交通管制レガシーシステムStrutsからSpringへの移行",
      period: "2026.03 - 現在",
      summary:
        "プロジェクトの概要を一文で記載します。どのような課題を解決したかを簡潔に。",
      stack: ["Java", "JSP", "Spring Boot", "Strutus", "SQLite",],
      overview: "プロジェクトの背景・目的・チーム構成などをここに記載します。",
      role: "担当した役割や責任範囲をここに記載します。",
      highlights: [
        "取り組んだ課題や工夫した点をここに記載します。",
        "成果や数値があれば記載します。",
      ],
    },
  ],

  /* ---- ブログ ---- */
  blog: [
    { title: "私がサーバーのパフォーマンス向上のために使ったもの - ② ネットワークI/Oの最小化", date: "2026.01", url: "https://qiita.com/wlsrb2695/items/1008f26534dbf3048081" },
    { title: "私がサーバーのパフォーマンス向上のために使ったもの - ① インデックス", date: "2026.01", url: "https://qiita.com/wlsrb2695/items/0fef621e4c1881372cca" },
    { title: "MSA について感じたメリットとデメリット", date: "2026.01", url: "https://qiita.com/wlsrb2695/items/c51c4ee1e6da4bdb6407" },
  ],

  /* ---- お問い合わせ ---- */
  contact: {
    heading: "お問い合わせ",
    body: "ご興味をお持ちいただけましたら、下記よりお気軽にご連絡ください。",
    email: "wlsrb2695@gmail.com",
    links: [
      { label: "GitHub", url: "https://github.com/JinGyuGwak" },
      { label: "Qiita", url: "https://qiita.com/wlsrb2695" }
    ],
    copyright: "© 2026",
  },
};
