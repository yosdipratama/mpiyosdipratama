(function () {
  "use strict";

  /* ---------------- Mobile nav ---------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Active nav on scroll ---------------- */
  var navLinks = document.querySelectorAll(".main-nav a[href^='#']");
  var sections = Array.prototype.map.call(navLinks, function (a) {
    return document.querySelector(a.getAttribute("href"));
  }).filter(Boolean);

  function onScroll() {
    var pos = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) current = sec;
    });
    navLinks.forEach(function (a) {
      a.classList.toggle("active", current && a.getAttribute("href") === "#" + current.id);
    });

    var backTop = document.querySelector(".back-top");
    if (backTop) backTop.classList.toggle("show", window.scrollY > 500);
  }
  window.addEventListener("scroll", onScroll);
  onScroll();

  var backTopBtn = document.querySelector(".back-top");
  if (backTopBtn) {
    backTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------- Accessibility: font size + contrast ---------------- */
  var root = document.documentElement;
  var scales = ["base", "lg", "xl"];

  function applyFontScale(scale) {
    if (scale === "base") root.removeAttribute("data-fontscale");
    else root.setAttribute("data-fontscale", scale);
    localStorage.setItem("mpls_fontscale", scale);
  }
  var savedScale = localStorage.getItem("mpls_fontscale") || "base";
  applyFontScale(savedScale);

  var incBtn = document.querySelector("[data-a11y='font-inc']");
  var decBtn = document.querySelector("[data-a11y='font-dec']");
  if (incBtn) incBtn.addEventListener("click", function () {
    var i = scales.indexOf(localStorage.getItem("mpls_fontscale") || "base");
    applyFontScale(scales[Math.min(i + 1, scales.length - 1)]);
  });
  if (decBtn) decBtn.addEventListener("click", function () {
    var i = scales.indexOf(localStorage.getItem("mpls_fontscale") || "base");
    applyFontScale(scales[Math.max(i - 1, 0)]);
  });

  var contrastBtn = document.querySelector("[data-a11y='contrast']");
  function applyContrast(on) {
    root.setAttribute("data-contrast", on ? "high" : "normal");
    localStorage.setItem("mpls_contrast", on ? "1" : "0");
    if (contrastBtn) contrastBtn.classList.toggle("active", on);
  }
  applyContrast(localStorage.getItem("mpls_contrast") === "1");
  if (contrastBtn) {
    contrastBtn.addEventListener("click", function () {
      applyContrast(localStorage.getItem("mpls_contrast") !== "1");
    });
  }

  /* ---------------- Modal ---------------- */
  var modalOverlay = document.querySelector(".modal-overlay");
  var modalBox = document.querySelector(".modal-box");

  function openModal(html) {
    modalBox.innerHTML = '<button class="modal-close" aria-label="Tutup">&times;</button>' + html;
    modalOverlay.classList.add("open");
    modalBox.querySelector(".modal-close").addEventListener("click", closeModal);
  }
  function closeModal() {
    modalOverlay.classList.remove("open");
    modalBox.innerHTML = "";
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ---------------- Materi tabs + render ---------------- */
  var tabBtns = document.querySelectorAll(".tab-btn");
  var tabPanels = document.querySelectorAll(".tab-panel");
  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabBtns.forEach(function (b) { b.classList.remove("active"); });
      tabPanels.forEach(function (p) { p.classList.remove("active"); });
      btn.classList.add("active");
      document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
    });
  });

  function icon(type) {
    return { slide: "\u{1F4D1}", pdf: "\u{1F4C4}", foto: "\u{1F4F7}", video: "\u{1F3AC}" }[type] || "\u{1F4DA}";
  }

  function card(item, type) {
    var wrap = document.createElement("div");
    wrap.className = "materi-card";

    var thumb = document.createElement("div");
    thumb.className = "materi-thumb";
    thumb.innerHTML = icon(type) + (item.contoh ? '<span class="badge-contoh">CONTOH</span>' : "");
    wrap.appendChild(thumb);

    var body = document.createElement("div");
    body.className = "materi-body";

    var tags = "";
    if (item.kelas) tags += "<span>" + item.kelas + "</span>";
    if (item.tipe) tags += "<span>" + item.tipe.toUpperCase() + "</span>";

    body.innerHTML =
      '<div class="materi-tagrow">' + tags + "</div>" +
      "<h4>" + item.judul + "</h4>" +
      "<p>" + item.deskripsi + "</p>";

    var actions = document.createElement("div");
    actions.className = "materi-actions";

    var hasFile = item.url && item.url.trim() !== "";
    var openBtn = document.createElement("button");
    openBtn.type = "button";

    if (!hasFile) {
      openBtn.className = "btn btn-disabled btn-sm";
      openBtn.textContent = "Belum Ada File";
      openBtn.disabled = true;
    } else {
      openBtn.className = "btn btn-primary btn-sm";
      openBtn.textContent = "Lihat Materi";
      openBtn.addEventListener("click", function () {
        showMateri(item, type);
      });
    }
    actions.appendChild(openBtn);
    body.appendChild(actions);
    wrap.appendChild(body);
    return wrap;
  }

  function showMateri(item, type) {
    var html = "<h3>" + item.judul + "</h3>";
    if (type === "pdf") {
      html += '<iframe src="' + item.url + '" title="' + item.judul + '"></iframe>';
      html += '<p style="margin-top:12px"><a class="btn btn-secondary btn-sm" href="' + item.url + '" download>Unduh PDF</a></p>';
    } else if (type === "foto") {
      html += '<img src="' + item.url + '" alt="' + item.judul + '">';
    } else if (type === "video") {
      if (item.tipe === "youtube") {
        html += '<iframe src="https://www.youtube.com/embed/' + item.url + '" title="' + item.judul + '" allowfullscreen></iframe>';
      } else {
        html += '<video src="' + item.url + '" controls></video>';
      }
    } else if (type === "slide") {
      if (item.tipe === "gdrive") {
        html += '<iframe src="' + item.url + '" title="' + item.judul + '" allowfullscreen></iframe>';
      } else {
        html += '<img src="' + item.url + '" alt="' + item.judul + '">';
      }
    }
    openModal(html);
  }

  function renderCategory(list, type, panelId) {
    var panel = document.getElementById(panelId);
    if (!panel) return;
    var grid = panel.querySelector(".materi-grid");
    if (!list || !list.length) {
      grid.innerHTML = "";
      var empty = document.createElement("div");
      empty.className = "empty-state";
      empty.innerHTML = '<div class="big">' + icon(type) + '</div><p>Belum ada materi ' + type + '. Silakan tambahkan lewat <code>js/content-data.js</code>.</p>';
      grid.appendChild(empty);
      return;
    }
    list.forEach(function (item) {
      grid.appendChild(card(item, type));
    });
  }

  if (typeof MATERI_DATA !== "undefined") {
    renderCategory(MATERI_DATA.slide, "slide", "panel-slide");
    renderCategory(MATERI_DATA.pdf, "pdf", "panel-pdf");
    renderCategory(MATERI_DATA.foto, "foto", "panel-foto");
    renderCategory(MATERI_DATA.video, "video", "panel-video");
  }

  /* ---------------- Jadwal (schedule) render ---------------- */
  function renderJadwal() {
    var list = document.querySelector(".jadwal-list");
    if (!list || typeof JADWAL_DATA === "undefined") return;

    JADWAL_DATA.forEach(function (day, idx) {
      var details = document.createElement("details");
      details.className = "jadwal-day";
      if (idx === 0) details.open = true;

      var summary = document.createElement("summary");
      summary.innerHTML = '<span class="num">' + day.hari + "</span> " + day.label;
      details.appendChild(summary);

      if (!day.sudahAda || !day.kegiatan || !day.kegiatan.length) {
        var empty = document.createElement("div");
        empty.className = "jadwal-empty";
        empty.textContent = "Jadwal " + day.label + " belum ditambahkan. Silakan lengkapi di js/jadwal-data.js.";
        details.appendChild(empty);
      } else {
        var wrap = document.createElement("div");
        wrap.className = "jadwal-table-wrap";
        var table = document.createElement("table");
        table.className = "jadwal-table";

        var thead = document.createElement("tr");
        ["Waktu", "Kegiatan", "Materi / Uraian", "Penanggung Jawab", "Metode"].forEach(function (h) {
          var th = document.createElement("th");
          th.textContent = h;
          thead.appendChild(th);
        });
        table.appendChild(thead);

        day.kegiatan.forEach(function (item) {
          var tr = document.createElement("tr");

          var tdWaktu = document.createElement("td");
          tdWaktu.textContent = item.waktu;
          tr.appendChild(tdWaktu);

          var tdKegiatan = document.createElement("td");
          tdKegiatan.textContent = item.kegiatan;
          tr.appendChild(tdKegiatan);

          var tdMateri = document.createElement("td");
          tdMateri.textContent = item.materi || "-";
          tr.appendChild(tdMateri);

          var tdPJ = document.createElement("td");
          if (item.penanggungJawab && item.penanggungJawab.length > 1) {
            var ol = document.createElement("ol");
            item.penanggungJawab.forEach(function (nm) {
              var li = document.createElement("li");
              li.textContent = nm;
              ol.appendChild(li);
            });
            tdPJ.appendChild(ol);
          } else {
            tdPJ.textContent = (item.penanggungJawab && item.penanggungJawab[0]) || "-";
          }
          tr.appendChild(tdPJ);

          var tdMetode = document.createElement("td");
          tdMetode.textContent = item.metode || "-";
          tr.appendChild(tdMetode);

          table.appendChild(tr);
        });

        wrap.appendChild(table);
        details.appendChild(wrap);
      }

      list.appendChild(details);
    });
  }
  renderJadwal();

  /* ---------------- Gallery lightbox (static photos section) ---------------- */
  document.querySelectorAll(".galeri-item[data-full]").forEach(function (item) {
    item.addEventListener("click", function () {
      openModal('<img src="' + item.dataset.full + '" alt="' + (item.dataset.alt || "") + '">');
    });
  });

  /* ---------------- Footer year ---------------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
