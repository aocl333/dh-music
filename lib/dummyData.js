import { getRandomInt } from "./utils";

export const dummyAllSongList = [
  {
    name: "좋아해요",
    channelId: 1,
    channel: "Ballad",
    src: "/music/폴킴 - 좋아해요.mp4",
    imageSrc: "/img/폴킴 - 좋아해요.jpeg",
  },
  {
    name: "잠시라도 우리",
    channelId: 1,
    channel: "Ballad",
    src: "/music/성시경나얼 - 잠시라도 우리.mp4",
    imageSrc: "/img/성시경나얼 - 잠시라도 우리.jpg",
  },
  {
    name: "Love wins all",
    channelId: 1,
    channel: "Ballad",
    src: "/music/아이유(IU) - Love wins all.mp4",
    imageSrc: "/img/아이유(IU) - Love wins all.jpg",
  },
  {
    name: "눈",
    channelId: 1,
    channel: "Ballad",
    src: "/music/자이언티 - 눈.mp4",
    imageSrc: "/img/자이언티 - 눈.jpg",
  },
  {
    name: "밤양갱",
    channelId: 2,
    channel: "K-Pop",
    src: "/music/비비 - 밤양갱.mp4",
    imageSrc: "/img/비비 - 밤양갱.jpg",
  },
  {
    name: "Magnetic",
    channelId: 2,
    channel: "K-Pop",
    src: "/music/아일릿 - Magnetic.mp4",
    imageSrc: "/img/아일릿 - Magnetic.jpg",
  },
  {
    name: "아픈건 딱 질색이니깐",
    channelId: 2,
    channel: "K-Pop",
    src: "/music/아이들 - 아픈건 딱 질색이니깐.mp4",
    imageSrc: "/img/아이들 - 아픈건 딱 질색이니깐.jpg",
  },
  {
    name: "그대 작은 나의 세상이 되어",
    channelId: 3,
    channel: "carthegarden",
    src: "/music/카더가든 - 그대 작은 나의 세상이 되어.mp4",
    imageSrc: "/img/카더가든 - 그대 작은 나의 세상이 되어.jpg",
  },
  {
    name: "가까운 듯 먼 그대여",
    channelId: 3,
    channel: "carthegarden",
    src: "/music/카더가든 - 가까운 듯 먼 그대여.mp4",
    imageSrc: "/img/카더가든 - 가까운 듯 먼 그대여.jpg",
  },
  {
    name: "Checklist",
    channelId: 4,
    channel: "morning music",
    src: "/music/MAX - Checklist.mp4",
    imageSrc: "/img/MAX - Checklist.jpg",
  },
  {
    name: "Treasure",
    channelId: 4,
    channel: "morning music",
    src: "/music/Bruno Mars - Treasure.mp4",
    imageSrc: "/img/Bruno Mars - Treasure.jpg",
  },
];

export const getSongsBychannel = (channel) => {
  return dummyAllSongList.filter((song) => song.channel === channel);
};

// playlist
export const dummyPlaylistArray = [
  {
    id: 1,
    owner: "Ballad",
    playlistName: "Ballad",
    songList: getSongsBychannel("Ballad"),
  },
  {
    id: 2,
    owner: "K-Pop",
    playlistName: "K-Pop",
    songList: getSongsBychannel("K-Pop"),
  },
  {
    id: 3,
    owner: "카더가든",
    playlistName: "카더가든 노래모음",
    songList: getSongsBychannel("carthegarden"),
  },
  {
    id: 4,
    owner: "출근곡",
    playlistName: "출근곡",
    songList: getSongsBychannel("morning music"),
  },
  {
    id: 5,
    owner: "윤다현",
    playlistName: "dahyun's playlist music",
    songList: [
      ...getSongsBychannel("Ballad"),
      ...getSongsBychannel("K-Pop"),
      ...getSongsBychannel("morning music"),
    ],
  },
];

export const getAllPlaylist = async () => [...dummyPlaylistArray];

export const getPlaylistByOwner = (owner) => {
  return dummyPlaylistArray.filter((playlist) => playlist.owner === owner);
};

export const getPlaylistById = async (id) => {
  return dummyPlaylistArray.filter((playlist) => playlist.id === id)?.[0];
};

export const getSongListTop10 = async () =>
  dummyAllSongList.map((song, idx) => {
    return {
      rank: idx,
      prevRank: idx + getRandomInt(-3, 3),
      ...song,
    };
  });

// channel
export const dummyChannelList = [
  {
    id: 1,
    subscribers: 4200,
    name: "Ballad",
    songList: getSongsBychannel("Ballad"),
    playlistArray: getPlaylistByOwner("Ballad"),
  },
  {
    id: 2,
    subscribers: 2900,
    name: "carthegarden",
    songList: getSongsBychannel("carthegarden"),
    playlistArray: getPlaylistByOwner("carthegarden"),
  },
  {
    id: 3,
    subscribers: 3900,
    name: "morning music",
    songList: getSongsBychannel("morning music"),
    playlistArray: getPlaylistByOwner("morning music"),
  },
  {
    id: 4,
    subscribers: 3900,
    name: "K-Pop",
    songList: getSongsBychannel("K-Pop"),
    playlistArray: getPlaylistByOwner("K-Pop"),
  },
  {
    id: 5,
    subscribers: 3900,
    name: "윤다현",
    songList: [
      ...getSongsBychannel("morning music"),
      ...getSongsBychannel("K-Pop"),
    ],
    playlistArray: [
      ...getPlaylistByOwner("morning music"),
      ...getPlaylistByOwner("K-Pop"),
    ],
  },
];

export const getChannelById = async (id) => {
  return dummyChannelList.filter((channel) => channel.id === id)?.[0];
};

// home - 카테고리
export const homeCategoryList = [
  {
    label: "운동",
    src: "https://images.unsplash.com/photo-1487956382158-bb926046304a",
  },
  {
    label: "행복한 기분",
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    label: "에너지 충전",
    src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94",
  },
  {
    label: "휴식",
    src: "https://images.unsplash.com/photo-1528962862197-29c4f24ccc04",
  },
  {
    label: "집중",
    src: "https://images.unsplash.com/photo-1472745433479-4556f22e32c2",
  },
  {
    label: "출퇴근길",
    src: "https://images.unsplash.com/photo-1657073895095-b050616ab369",
  },
  {
    label: "로맨스",
    src: "https://images.unsplash.com/photo-1581700501514-95e559cff7e9",
  },
  {
    label: "파티",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    label: "슬픔",
    src: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc",
  },
  {
    label: "잠잘 때",
    src: "https://images.unsplash.com/photo-1429117237875-aa29229d99f0",
  },
];

// 분위기 및 장르
// Array.from(document.querySelectorAll("#items")[7].querySelectorAll("button")).map( el => el.textContent.replaceAll("\n","").trim())
export const dymmyGenreList = [
  "잠잘 때",
  "인디 & 얼터너티브",
  "계절 변화를 위한 테마",
  "국내 발라드",
  "국내 록/얼터너티브",
  "슬픔",
  "연말연시",
  "아프리카",
  "출퇴근 & 등하교",
  "사랑 노래",
  "한국 힙합",
  "힙합",
  "국내 R&B",
  "2010년대",
  "R&B 및 소울",
  "록",
  "국내 댄스",
  "힘이 필요할 때",
  "편안한 분위기",
  "운동할 때",
  "OST & 뮤지컬",
  "파티 음악",
  "행복한 기분",
  "트로트",
  "Reggae & Caribbean",
  "집중할 때",
  "1980년대",
  "2000년대",
  "포크/어쿠스틱",
  "크리스마스",
  "1990년대",
  "Pop",
  "블랙 라이브즈 매터",
  "재즈",
  "클래식",
  "가족",
  "1970년대 음악",
  "아랍 음악",
  "1960년대",
  "댄스 & 일렉트로닉",
  "만도팝 및 캔터팝",
  "컨트리 & 아메리카나",
  "J팝",
  "블루스",
  "라틴",
  "메탈",
  "이라크 음악",
  "발리우드 & 인도",
];
