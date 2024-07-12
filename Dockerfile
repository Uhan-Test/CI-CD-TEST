# syntax=docker/dockerfile:1

# 기본 이미지는 LTS 버전을 따릅니다.
FROM node:lts

# 컨테이너의 작업 디렉토리 지정
WORKDIR /app

# 패키지 설정을 위한 packge.json, package-lock.json 복사
COPY package*.json ./

# 패키지 설치
RUN npm install

# dockerignore에 지정된 파일 또는 디렉토리 이외 컨테이너의 파일시스템으로 복사
COPY . .

# NestJS 빌드(dist 생성)
RUN npm run build

# 서버 프로세스 시작
CMD ["npm", "run", "start:prod"]
