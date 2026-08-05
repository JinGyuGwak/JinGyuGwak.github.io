/* =============================================================
 *  렌더링 로직 — content.js(SITE)의 데이터를 화면에 그립니다.
 *  내용을 바꿀 땐 content.js만 수정하세요. 이 파일은 보통 그대로 둡니다.
 * ============================================================= */

(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const text = (sel, value) => {
    const el = $(sel);
    if (el) el.textContent = value;
  };

  /* 안전한 요소 생성 헬퍼 (textContent 사용 → XSS 걱정 없음) */
  function el(tag, className, textContent) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (textContent != null) node.textContent = textContent;
    return node;
  }

  /* 아이콘 SVG (고정 상수 — currentColor로 버튼 글자색을 따라감) */
  const ICONS = {
    github:
      '<svg class="cta-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    qiita:
      '<svg class="cta-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.3726 0 0 5.3726 0 12s5.3726 12 12 12c3.3984 0 6.4665-1.413 8.6498-3.6832-.383-.0574-.7746-.2062-1.1466-.4542-.7145-.4763-1.3486-.9263-1.6817-1.674-1.2945 1.3807-3.0532 1.835-5.1822 2.0503-4.311.4359-8.0456-1.4893-8.4979-6.2996-.1922-2.045.2628-3.989 1.1804-5.582l-.5342-2.1009c-.0862-.3652.2498-.7126.6057-.6262l1.8456.448c1.0974-.9012 2.4249-1.49 3.8892-1.638 1.2526-.1267 2.467.0834 3.571.5624l1.7348-1.0494c.3265-.1974.7399.0257.7711.4164l.1 2.4747v.0002c1.334 1.4084 2.2424 3.3319 2.4478 5.516.116 1.2339-.012 2.1776-.339 3.078-.1531.4215-.1992.7778.0776 1.1305.2674.3408.6915 1.0026 1.1644.8917.7107-.1666 1.4718-.1223 1.9422.1715C23.4925 15.9525 24 14.0358 24 12c0-6.6274-5.3726-12-12-12Zm-.0727 5.727a5.2731 5.2731 0 0 0-.6146.0273c-2.2084.2233-3.9572 1.8135-4.4937 3.8484l-1.3176-.1996-.014.2589 1.2972.1407c-.0352.1497-.0643.2384-.086.3923l-1.1319.0902.0103.2025 1.1032-.088c-.0194.1713-.031.2814-.0332.4565l-1.0078.412.0495.2499.9598-.4492c.002.1339.008.2053.0207.3407.2667 2.8371 2.6364 3.3981 5.4677 3.1118 2.8312-.2863 5.0517-1.3114 4.785-4.1486-.013-.1361-.0324-.2068-.0553-.3392l1.0397.2257.0242-.229-1.0906-.207c-.0342-.1687-.0765-.271-.1264-.4327l1.1208-.1374-.0158-.2019-1.1499.1409a5.1093 5.1093 0 0 0-.1665-.4259l1.2665-.4042-.0397-.2536-1.3471.4667c-.819-1.7168-2.5002-2.8224-4.4546-2.8482Z"/></svg>',
    email:
      '<svg class="cta-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  };

  /* ---- 테마 ---- */
  if (SITE.accentColor) {
    document.documentElement.style.setProperty("--accent", SITE.accentColor);
  }

  /* <br> 또는 줄바꿈(\n)을 포함할 수 있는 텍스트를 안전하게 줄바꿈 노드로 변환 */
  function linesInto(node, value) {
    const parts = String(value || "").split(/<br\s*\/?>|\n/i);
    parts.forEach((part, i) => {
      if (i > 0) node.appendChild(document.createElement("br"));
      node.appendChild(document.createTextNode(part));
    });
  }

  /* ---- 헤더 / 히어로 ---- */
  text("[data-logo]", SITE.logo);
  text("[data-hero-eyebrow]", SITE.hero.eyebrow);
  text("[data-hero-name]", SITE.hero.name);
  text("[data-hero-role]", SITE.hero.role);
  linesInto($("[data-hero-intro]"), SITE.hero.intro); // <br> / \n 줄바꿈 지원

  /* 대표 이미지 (없으면 이니셜 플레이스홀더) */
  const avatar = $("[data-hero-avatar]");
  if (avatar) {
    if (SITE.hero.image) {
      const img = el("img");
      img.src = SITE.hero.image;
      img.alt = SITE.hero.name || "";
      avatar.appendChild(img);
    } else {
      avatar.classList.add("is-placeholder");
      avatar.appendChild(el("span", null, (SITE.hero.name || "").slice(0, 2)));
    }
  }

  /* 히어로 CTA (아이콘 + 라벨, 항목 사이 구분선) */
  const heroCta = $("[data-hero-cta]");
  const showCtaLabel = SITE.hero.showCtaLabel !== false;
  (SITE.hero.cta || []).forEach((link, i) => {
    if (i > 0) heroCta.appendChild(el("span", "cta-sep")); // 마크 사이 구분선

    // url 이 있으면 링크(a), 없으면 클릭 불가 텍스트(span)
    const hasLink = link.url && link.url !== "#";
    const item = hasLink ? el("a", "cta-btn") : el("span", "cta-btn cta-static");
    if (hasLink) {
      item.href = link.url;
      if (!link.url.startsWith("mailto:")) {
        item.target = "_blank";
        item.rel = "noopener";
      }
    }
    item.setAttribute("aria-label", link.label);

    const svg = ICONS[link.icon];
    if (svg) {
      const wrap = el("span", "cta-ico-wrap" + (link.icon ? " is-" + link.icon : ""));
      wrap.innerHTML = svg; // 고정 상수 SVG (사용자 입력 아님 → 안전)
      item.appendChild(wrap);
      if (!showCtaLabel) item.classList.add("icon-only");
    }
    if (showCtaLabel || !svg) item.appendChild(el("span", null, link.label));
    heroCta.appendChild(item);
  });

  const availability = $("[data-availability]");
  if (SITE.showAvailability && availability) {
    text("[data-availability-text]", SITE.availabilityText);
    availability.hidden = false;
  }

  /* ---- Tech Stack ---- */
  text("[data-tech-heading]", SITE.techStack.heading);
  const techHost = $("[data-tech-groups]");
  (SITE.techStack.categories || []).forEach((cat) => {
    const block = el("div", "tech-cat");
    block.appendChild(el("h3", "tech-cat-name", cat.name));
    (cat.groups || []).forEach((g) => {
      const row = el("div", "tech-level");
      row.appendChild(el("p", "tech-level-label", g.level));
      row.appendChild(stackNode(g.items));
      block.appendChild(row);
    });
    techHost.appendChild(block);
  });

  /* ---- 経歴 (타임라인) ---- */
  const timeline = $("[data-timeline]");
  SITE.career.forEach((item) => {
    const row = el("div", "timeline-row");

    row.appendChild(el("div", "timeline-period", item.period));

    const marker = el("div", "timeline-marker");
    marker.appendChild(el("span", "dot"));
    marker.appendChild(el("span", "line"));
    row.appendChild(marker);

    const body = el("div", "timeline-body");
    body.appendChild(el("p", "timeline-tag", item.tag));
    body.appendChild(el("h3", "timeline-title", item.title));
    const desc = el("p", "timeline-desc");
    linesInto(desc, item.desc); // <br> 줄바꿈 지원
    body.appendChild(desc);
    row.appendChild(body);

    timeline.appendChild(row);
  });

  /* ---- 스택 칩 리스트 헬퍼 ---- */
  function stackNode(list) {
    const wrap = el("div", "stack");
    (list || []).forEach((tech) => wrap.appendChild(el("span", "chip", tech)));
    return wrap;
  }

  /* ---- プロジェクト (카드) ---- */
  const grid = $("[data-project-grid]");
  SITE.projects.forEach((project, index) => {
    const card = el("button", "project-card");
    card.type = "button";
    card.appendChild(el("p", "period", project.period));
    card.appendChild(el("h3", "title", project.title));
    card.appendChild(el("p", "summary", project.summary));
    card.appendChild(stackNode(project.stack));
    card.appendChild(el("span", "more", "詳細を見る →"));
    card.addEventListener("click", () => openModal(index));
    grid.appendChild(card);
  });

  /* ---- ブログ ---- */
  const blogList = $("[data-blog-list]");
  SITE.blog.forEach((post) => {
    const a = el("a", "blog-item");
    a.href = post.url;
    if (post.url && post.url !== "#") {
      a.target = "_blank";
      a.rel = "noopener";
    }
    a.appendChild(el("span", "b-title", post.title));
    a.appendChild(el("span", "b-date", post.date));
    blogList.appendChild(a);
  });

  /* ---- お問い合わせ ---- */
  text("[data-contact-heading]", SITE.contact.heading);
  text("[data-contact-body]", SITE.contact.body);
  text("[data-copyright]", SITE.contact.copyright);

  const contactLinks = $("[data-contact-links]");
  if (SITE.contact.email) {
    const mail = el("a", null, SITE.contact.email);
    mail.href = "mailto:" + SITE.contact.email;
    contactLinks.appendChild(mail);
  }
  (SITE.contact.links || []).forEach((link) => {
    const a = el("a", null, link.label);
    a.href = link.url;
    if (link.url && link.url !== "#") {
      a.target = "_blank";
      a.rel = "noopener";
    }
    contactLinks.appendChild(a);
  });

  /* ---- 프로젝트 모달 ---- */
  const overlay = $("[data-modal-overlay]");

  function openModal(index) {
    const p = SITE.projects[index];
    if (!p) return;

    text("[data-modal-period]", p.period);
    text("[data-modal-title]", p.title);
    text("[data-modal-overview]", p.overview);
    text("[data-modal-role]", p.role);

    const stackHost = $("[data-modal-stack]");
    stackHost.replaceChildren(...Array.from(stackNode(p.stack).children));

    const highlights = $("[data-modal-highlights]");
    highlights.replaceChildren(
      ...(p.highlights || []).map((h) => el("li", null, h))
    );

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  $("[data-modal-close]").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal(); // 바깥 클릭 시 닫기
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.hidden) closeModal();
  });
})();
