# 영어 플랫폼 (Next.js) — 탭 3개 + 첫 화면 무료 레벨 테스트

이 프로젝트는 **첫 진입 시 자동으로 `무료 레벨 테스트 예약` 화면**이 뜨고,
상단 탭으로 다음 3개 화면을 전환할 수 있습니다.

- 무료 레벨 테스트 예약 (`/level-test`)
- 3개월 스터디 크루 참여하기 (`/study-crew`)
- 1대 1 영어회화 참여하기 (`/one-to-one`)

## 1) Vercel로 "클릭 몇 번" 배포하기 (코드 몰라도 OK)

### 준비물
- GitHub 계정 1개
- Vercel 계정 1개 (GitHub로 로그인 가능)

### A. GitHub에 올리기(웹에서 업로드)
1. GitHub에서 **New repository** 만들기 (예: `english-platform`)
2. 방금 만든 repo로 들어가서 **Add file → Upload files**
3. 이 폴더의 파일을 모두 드래그&드롭 → **Commit changes**

### B. Vercel에서 배포하기
1. Vercel 로그인
2. **Add New… → Project**
3. GitHub 연결 후, 방금 repo 선택
4. **Deploy** 클릭

배포가 끝나면 주소가 생깁니다. 첫 화면은 자동으로 `/level-test`로 갑니다.

## 2) 로컬에서 실행(선택)
Node.js가 설치되어 있다면:

```bash
npm install
npm run dev
```

## 3) 다음 단계(원할 때 붙이는 기능)
- 예약 캘린더(시간 슬롯) + 관리자 페이지
- 로그인(Supabase)
- 결제(PortOne 통해 토스) + 웹훅

> 결제/예약은 지금 파일에 "버튼"만 있고, 실제 연결은 다음 단계에서 붙이게 되어 있습니다.
