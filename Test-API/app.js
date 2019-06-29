const express = require("express");
const app = express();
const BASE_URL = 'http://localhost:5257';

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.get('/feed', (_, res) => {
  res.json({
    next: `${BASE_URL}/feed/2/`,
    previous: null,
    results: [
      {
        id: 1,
        title: 'A1 Title',
        name: '김길동',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 2,
        title: 'A2 Title',
        name: '김길수',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 3,
        title: 'A3 Title',
        name: '김길자',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 4,
        title: 'A4 Title',
        name: '김가네',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 5,
        title: 'A5 Title',
        name: '김밥임',
        contents: '안녕하세요!\n반갑습니다~~'
      },
    ]
  });
});

app.get('/feed/2', (_, res) => {
  res.json({
    next: `${BASE_URL}/feed/3/`,
    previous: `${BASE_URL}/feed/1/`,
    results: [
      {
        id: 6,
        title: 'A6 Title',
        name: '김알리',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 7,
        title: 'A7 Title',
        name: '김루알',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 8,
        title: 'A8 Title',
        name: '김말이',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 9,
        title: 'A9 Title',
        name: '김삿갓',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 10,
        title: 'A10 Title',
        name: '김국수',
        contents: '안녕하세요!\n반갑습니다~~'
      },
    ]
  });
});

app.get('/feed/3', (_, res) => {
  res.json({
    next: null,
    previous: `${BASE_URL}/feed/2/`,
    results: [
      {
        id: 11,
        title: 'A11 Title',
        name: '김감곰',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 12,
        title: 'A12 Title',
        name: '김구감',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 13,
        title: 'A13 Title',
        name: '김간아',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 14,
        title: 'A14 Title',
        name: '김기기',
        contents: '안녕하세요!\n반갑습니다~~'
      },
      {
        id: 15,
        title: 'A15 Title',
        name: '김그만',
        contents: '안녕하세요!\n반갑습니다~~'
      },
    ]
  });
});

app.listen(5257, () => {
  console.log('Server running on port 5257');
});