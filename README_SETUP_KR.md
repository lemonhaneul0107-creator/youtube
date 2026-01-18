# 배포 및 설정 가이드 (초보용)

이 프로젝트는 **Next.js + Supabase**로 구성되어 있어요.

## 1) Vercel 배포(클릭 몇 번)
1. GitHub에 이 프로젝트를 업로드
2. Vercel → Add New → Project → GitHub repo Import
3. Deploy 클릭

## 2) Supabase 설정(저장소 역할)
레벨 테스트 신청서 제출 데이터를 저장하려면 Supabase가 필요해요.

### (1) Supabase 프로젝트 생성
1. Supabase 가입/로그인
2. New project 생성
3. Project settings → API에서 아래 2개 값을 복사
   - `Project URL`
   - `anon public key`

### (2) DB 테이블 만들기
Supabase 대시보드 → **SQL Editor**에서 아래 파일을 실행하세요.

- `supabase/level_test_applications.sql`

### (3) Vercel 환경변수 넣기
Vercel 프로젝트 → Settings → Environment Variables에 아래 2개를 추가하세요.

- `NEXT_PUBLIC_SUPABASE_URL` = (Supabase Project URL)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (Supabase anon public key)

저장 후, Vercel에서 Redeploy하면 끝.

## 3) 제출된 신청서 보는 곳
Supabase 대시보드 → Table editor → `level_test_applications`에서 확인할 수 있어요.

비밀번호는 **해시값(password_hash)** 으로만 저장되어서 원문은 볼 수 없고,
필요하면 “아이디/생년월일”로 본인 확인 후 재설정 흐름을 추가하면 돼요.
