(function () {
  var root = document.getElementById("item-list");
  if (!root) return;

  var items = Array.isArray(window.HOMEWORK_ITEMS) ? window.HOMEWORK_ITEMS : [];
  var labels = { live: "외부 접속 가능", wip: "진행 중", done: "완료" };

  if (!items.length) {
    root.innerHTML = '<p class="empty">등록된 숙제가 없습니다. <code>js/items.js</code>에 항목을 추가하세요.</p>';
    return;
  }

  root.innerHTML = items.map(function (item) {
    var status = item.status || "wip";
    var label = labels[status] || status;
    var links = [];
    if (item.href) {
      links.push('<a href="' + item.href + '" target="_blank" rel="noopener">바로가기</a>');
    }
    if (item.repo) {
      links.push('<a href="' + item.repo + '" target="_blank" rel="noopener">GitHub</a>');
    }
    return (
      '<article class="card">' +
        '<div class="card-top">' +
          '<h2>' + escapeHtml(item.title || "제목 없음") + '</h2>' +
          '<span class="badge badge-' + escapeHtml(status) + '">' + escapeHtml(label) + '</span>' +
        '</div>' +
        '<p class="summary">' + escapeHtml(item.summary || "") + '</p>' +
        '<div class="card-meta">' +
          '<time>' + escapeHtml(item.date || "") + '</time>' +
          '<span class="links">' + links.join(" · ") + '</span>' +
        '</div>' +
      '</article>'
    );
  }).join("");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
