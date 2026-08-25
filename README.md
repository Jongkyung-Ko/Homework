# Homework

숙제·프로젝트 진행을 공유하는 정적 사이트입니다.

## 외부 접속 주소

저장소를 **Public**으로 바꾸고 GitHub Pages를 켜면 아래 주소로 열립니다.

**https://jongkyung-ko.github.io/Homework/**

GitHub Pages는 사이트 루트가 아니라 `/Homework/` 경로로 제공합니다. `index.html`이 이 경로를 자동으로 맞추므로, 외부에서 접속해도 CSS·목록이 깨지지 않습니다.

## 로컬에서 확인 (GitHub Pages와 동일한 경로)

```bash
python3 serve.py
```

브라우저에서 http://localhost:8080/Homework/ 를 엽니다.

## 항목 수정

`js/items.js`의 배열에 숙제를 추가하거나 고친 뒤 `main`에 올리면 페이지에 반영됩니다.

```javascript
{
  title: "과제 이름",
  status: "live", // live | wip | done
  date: "2026-08-25",
  summary: "한 줄 설명",
  href: "https://example.com",
  repo: "https://github.com/Jongkyung-Ko/Homework"
}
```

## GitHub Pages 설정

1. 저장소 **Settings → General → Danger Zone → Change repository visibility → Public**
2. **Settings → Pages**
   - Source: **GitHub Actions** (권장) 또는 **Deploy from a branch** (`main`, `/ (root)`)
3. 배포가 끝나면 https://jongkyung-ko.github.io/Homework/ 로 접속합니다.

비공개(Private) 저장소는 GitHub Free에서 Pages가 열리지 않습니다. 외부 공유가 목적이면 Public이 필요합니다.
