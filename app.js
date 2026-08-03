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

  /* ---- 테마 ---- */
  if (SITE.accentColor) {
    document.documentElement.style.setProperty("--accent", SITE.accentColor);
  }

  /* ---- 헤더 / 히어로 ---- */
  text("[data-logo]", SITE.logo);
  text("[data-hero-eyebrow]", SITE.hero.eyebrow);
  text("[data-hero-name]", SITE.hero.name);
  text("[data-hero-intro]", SITE.hero.intro);

  const availability = $("[data-availability]");
  if (SITE.showAvailability && availability) {
    text("[data-availability-text]", SITE.availabilityText);
    availability.hidden = false;
  }

  /* ---- 概要 ---- */
  text("[data-about-heading]", SITE.about.heading);
  text("[data-about-body]", SITE.about.body);

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
    body.appendChild(el("p", "timeline-desc", item.desc));
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
