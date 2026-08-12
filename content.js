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
      "はじめまして。クァク・ジンギュと申します。韓国で2年間バックエンドエンジニアとして勤務した後、2026年2月より日本でシステムエンジニアとして働いております。" +
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
      desc: "Kubernetesを用いたGPUサーバー資源配分ソリューションの運用保守に従事。<br>Java 11・Spring Bootを用いた新機能のテストコードおよびAPI仕様書（Spring REST Docs）の作成、顧客先での稼働中に発生したエラー対応を担当。",
    },
    {
      period: "2024.01 - 2026.01",
      tag: "Full-time / Korea",
      title: "バックエンドエンジニア（韓国・正社員 2年）",
      desc: "POS/セルフレジシステムにおいて、MSA構造のもと認証・機器管理・売上管理・QRコード注文システムなど複数ドメインサーバーの設計から運用保守まで一貫して担当。<br>QRコード注文システムの新規構築ではWebパートのリーダーを務め、バッチ処理の高度化（30秒→3秒）を実現。",
    },
    {
      period: "2026.02 - 現在",
      tag: "Full-time / Japan",
      title: "システムエンジニア（日本・SES企業）",
      desc: "Strutsで構成されたレガシープロジェクトを最新のSpring Bootへ移行、および新入社員2名の技術指導を担当。",
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
      role: "バックエンドインターン",
      highlights: [
        "機能に対するテストコードおよびAPI仕様書の作成。",
        "顧客先で使用中に発生したエラー対応。",
      ],
    },
    {
      title: "POS／セルフレジシステム",
      period: "2024.01 - 2026.01",
      summary:
        "MSA環境において4つのサーバを単独で設計・開発・運用保守まで担当",
      stack: ["MSA", "Java", "Spring boot", "Spring Security",
        "MyBatis", "Redis", "Apache Kafka"],
      overview: "2025年2月にリリースされて現在まで約3000店舗で利用され、毎日1万件の決済データを処理するPOS／セルフレジ／QR注文システム",
      role: "要件定義から基本設計（DBスキーマ・API設計）" +
        "Java(Spring Boot)・MySQLによる開発、リリース後の運用（障害対応・性能チューニング）まで一貫して担当。",
      highlights: [
        "MSA環境において、認証・機器管理・売上管理・QRコード注文の4つのサーバの設計・開発・運用を一貫して担当。",
        "バッチプロセスを高度化し、バッチ処理時間を30秒から3秒に短縮。",
        "トラフィックが集中するAPIでは、DBではなくRedisを活用してボトルネックを回避。",
        "既存のボトルネックとなっていたAPIについて、クエリ実行計画を分析しクエリチューニングを実施。",
        "CLEAN CODE およびMSAに関する社内勉強会に参加し、業務時間外でも学習を継続して技術力を向上。",
      ],
    },
    {
      title: "QRコード注文システム",
      period: "2025.07 - 2026.01",
      summary:
        "既存のPOS／セルフレジシステムへのQRコード関連機能の新規構築において、Webパートのリーダーを担当",
      stack: ["MSA", "Java", "Spring boot", "Redis", "MyBatis",],
      overview: "既存の店舗で使用しているPOS／セルフレジシステムと連携するQRコード注文システム",
      role: "フロントエンジニア2名、新入バックエンドエンジニア1名で構成されたWebパートにおいてプロジェクトリーダーを担当",
      highlights: [
        "企画段階からデザインチーム・端末機器チームと連携し、要件定義および会議を実施",
        "Webパートのスケジュール管理およびアーキテクチャ設計",
        "要件定義から設計・実装・テストまで一貫して担当",
        "新入バックエンドエンジニアの技術指導",
      ],
    },
    {
      title: "交通管制レガシーシステムStrutsからSpringへの移行",
      period: "2026.03 - 現在",
      summary:
        "Strutsで構成された交通管制レガシーシステムをSpring Bootへ移行",
      stack: ["Java", "JSP", "Spring Boot", "Strutus", "SQLite",],
      overview: "Strutsで構成された交通管制レガシーシステムをSpring Bootへ移行",
      role: "システムエンジニア／新入エンジニア2名の技術指導",
      highlights: [
        "Strutsで構成されたコードをSpring Bootへ移行",
        "共通コードの設計・実装、コーディング規約の策定",
        "新入エンジニアの技術指導",
      ],
    },
  ],

  /* ---- ブログ ---- */
  blog: [
    { title: "私がサーバーのパフォーマンス向上のために使ったもの - ② ネットワークI/Oの最小化", date: "", url: "https://qiita.com/wlsrb2695/items/1008f26534dbf3048081" },
    { title: "私がサーバーのパフォーマンス向上のために使ったもの - ① インデックス", date: "", url: "https://qiita.com/wlsrb2695/items/0fef621e4c1881372cca" },
    { title: "MSA について感じたメリットとデメリット", date: "", url: "https://qiita.com/wlsrb2695/items/c51c4ee1e6da4bdb6407" },
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
