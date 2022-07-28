import { StaticImageData } from 'next/image';

import isfp from '@/assets/mbti/isfp.png';
import estj from '@/assets/mbti/estj.png';
import enfp from '@/assets/mbti/enfp.png';
import infj from '@/assets/mbti/infj.png';
import estp from '@/assets/mbti/estp.png';
import entp from '@/assets/mbti/entp.png';
import istp from '@/assets/mbti/istp.png';
import intp from '@/assets/mbti/intp.png';
import istj from '@/assets/mbti/istj.png';
import isfj from '@/assets/mbti/isfj.png';
import intj from '@/assets/mbti/intj.png';
import infp from '@/assets/mbti/infp.png';
import esfj from '@/assets/mbti/esfj.png';
import enfj from '@/assets/mbti/enfj.png';
import entj from '@/assets/mbti/entj.png';
import esfp from '@/assets/mbti/esfp.png';

export const MBTI_TYPES = {
  isfp: 'isfp',
  estj: 'estj',
  enfp: 'enfp',
  infj: 'infj',
  estp: 'estp',
  entp: 'entp',
  istp: 'istp',
  intp: 'intp',
  istj: 'istj',
  isfj: 'isfj',
  intj: 'intj',
  infp: 'infp',
  esfj: 'esfj',
  enfj: 'enfj',
  entj: 'entj',
  esfp: 'esfp',
} as const;

export interface MbtiResultValue {
  summary: string;
  recommandGame: string;
  image: StaticImageData;
  badges: Readonly<[string, string, string, string]>;
  checkList: string;
  rate: number;
  ranking: number;
}

export type MbtiResult = Record<keyof typeof MBTI_TYPES, MbtiResultValue>;

export const MBTI_RESULT: MbtiResult = {
  isfp: {
    summary: '귀차니즘과 여유 만끽은 한끗차이-!',
    recommandGame: '펭귄탐험',
    image: isfp,
    badges: ['감정이입', '거절에 약함', '배려형 개인주의', '단련된 인내심'],
    checkList:
      '천천히 삶의 여유를 즐기자 주의인 당신! 한 번 맘 먹으면 제대로지만 그 한 번 맘먹기가 힘든 타입이네요 ㅡ_ㅡ! \n 관심 받고 싶다가도 나서는게 귀찮기도하고 쑥쓰러운 마음이 공존해요 \n 따뜻하고 겸손한 마음을 지닌 당신은 분쟁을 좋아하지 않아요. 그렇다고 고집이 약하진 않아요! 자존심도 세고, 분석하고 판단하는걸 잘해요! 단지 귀찮아서 실행하지 않을 뿐이에요 \n 오늘, 세상 답답할수도 있지만 귀엽고 느긋한 매력의 “남극탐험” 어때요?',
    rate: 6.6,
    ranking: 5,
  },
  estj: {
    summary: '무기란 폭탄뿐? 목표달성을 위한 저세상 집중력',
    recommandGame: '봄버맨',
    image: estj,
    badges: ['행동력 대장', '워커홀릭', '철저한 공과 사', '결과중심적'],
    checkList:
      '딱딱 뭐든 확신한게 좋은 당신은 계획해서 조금도 틀어지는걸 굉장히 싫어해요! \n 다른 사람과 갈등이 있는 게 싫지만 일단 지는건 더 싫어요! 벌어진 이상 일단 내가 이겨야되요! \n 객관적으로 그 상황을 해석하려고 해요! 상처 받을까봐 말은 안해도 내가 누군가에게 위로도 안되는 타입인걸 이미 알고 있어요 \n 답답하게 일처리 못하는걸 두 눈으로 보느니 주도적으로 나서서 문제 해결하는걸 좋아하는 당신, 몬스터 전멸 후 탈출문을 찾아 나가는 “봄버맨” 한 판 어때요?',
    rate: 4.6,
    ranking: 11,
  },
  enfp: {
    summary: '나서는게 너무 좋은 인싸 관종',
    recommandGame: '뽀빠이',
    image: enfp,
    badges: ['분위기메이커', '풍부한 상상력', '희박한 경제관념', '마음이 약함'],
    checkList:
      '시끄럽고, 말 많고, 얘기하는거 좋아하고 사람을 좋아하는 당신! 인생이 즐거운 타입이예요 흥미 있는 거엔 세상 열정적, 적극적이지만 관심있는건 듣지도 않아요 그대로 흘려보내요! 호불호가 강하거든요! 감정이 쉽게 다 보여요 \n 새로운 사람 만나는걸 좋아하고 의리 뿜뿜인 당신은 모두에게 관심받고 싶어하는 슈퍼 관종! \n 머릿속으로는 온갖 계획으로 세상 바쁜데 그게 끝이예요 구체적인 계획이 없어서 하나를 제대로 완성 시키는게 드물어요 하나 완성하면 그걸로 평생 행복해해요 \n 오늘, 무적 인싸가 되어 올리브를 구하러 가는 “뽀빠이” 어때요?',
    rate: 12.6,
    ranking: 2,
  },
  infj: {
    summary: '각 맞춰! 조금의 어긋남도 용서못해!',
    recommandGame: '퍼즐버블',
    image: infj,
    badges: ['완벽주의', '높은 도덕관념', '자아성찰', '보수적'],
    checkList:
      '집돌이, 집순이들이 많아요! 본인에게 매우 엄격한 타입이자만 굉장히 풍부한 감성의 소유자로 이런저런 생각도 많은 타입이예요! \n 여럿이 만나기보다 일대일로 만나서 깊은 대화를 나누는걸 좋아해요! 도움을 주고 윈윈하는 관계를 원해요 다른사람에게 잘 맞춰주는 타입이예요 \n 근거없는 말을 싫어하고 딱딱 계획을 세워야 마음이 편한 당신은 조금의 어긋난 각을 허용치 않아요! \n 오늘, 집중해서 구슬을 떨어뜨려야 하는 “퍼즐버블” 한 판 어때요?',
    rate: 6.2,
    ranking: 8,
  },
  estp: {
    summary: '남이 뭐라든~ 신경안써 노웨이',
    recommandGame: '갤러그',
    image: estp,
    badges: ['뒤끝 없음', '참을성 없음', '살짝 관종', '행동파'],
    checkList:
      '혼자서도 잘 노는 당신은 뭘 안해도 진짜 혼자 잘놀아요! 해야 될 일이 있으면 내가 하고싶을 때 해요 \n 갇힌 삶을 정말 정말 싫어해요! 내가 하고픈건 다 해야 하지만 못해도 금방 까먹어요 \n 그냥 태어나서 사는것 같아요 크게 스트레스 받지도 않아요! \n 사람에 대한 선입견 따윈 없어요! 어디서나 적응력 갑으로외로움도 즐길줄 아는 개썅마이웨이 존멋탱 당신! \n 오늘은 우주에 날아다니는 적들 쏘러 "갤러그" 한 판 어때요?',
    rate: 3.0,
    ranking: 15,
  },
  entp: {
    summary: '다재다능 팔방미인',
    recommandGame: '슈퍼마리오',
    image: entp,
    badges: ['여행 좋아함', '즉흥적', '독특함', '다재다능'],
    checkList:
      '자기애 뿜뿜! 본인에 대한 확신도 뿜뿜인 당신! 남에 대한 편견도 없어요! 겉과 속이 똑같아요! \n 밖에서 진~짜 잘 노는데 집에 있어도 잘 놀아요! 혼자만의 시간도 필요하거든요! 모아니면 도! 중간이 없어요 직설적이고 솔직하고 사실 다른사람에 대해 큰 관심도 없어요! \n 가끔 생각안하고 내뱉어서 후회하기도 하지만 그 때 뿐이예요! \n 손재주 있고, 이것저것 뒷일 생각안하고 내가 하고싶은대로 사는걸 좋아하는 당신! \n 다양한 방법으로 엔딩 향해"슈퍼마리오" 한 판 어때요?',
    rate: 5.0,
    ranking: 10,
  },
  istp: {
    summary: '뛰어난 통찰력봐 분석력 대왕',
    recommandGame: '테트리스',
    image: istp,
    badges: ['개방적인 편', '황소고집', '무미건조', '실용주의'],
    checkList:
      '논리적인거 좋아하고 뛰어난 상황 적응력을 가지고 있어요! \n 한 번 해야겠다고 마음먹은것도 바로 추진하는 추진력 갑!  하지만 마무리가,, 뒷심이 조금 부족해요! \n 뚝딱뚝딱 기계 만지는 걸 좋아해요! 독립적인 성향이라 혼자놀기도 만렙이예요 \n 가끔 영혼가출했다는 얘기도 들어요 타인에 무관심하거든요 \n 최소한의 노력으로 최대의 효율을 뽑기 위해 요리조리 관찰하고 분석하는 당신! \n "테트리스" 로 쾌감 느껴보는거 어때요?',
    rate: 3.1,
    ranking: 14,
  },
  intp: {
    summary: '진지한 공상가',
    recommandGame: '서커스찰리',
    image: intp,
    badges: ['진지충', '공감력 낮음', '솔직 노빠꾸', '맞춤법집착'],
    checkList:
      '먼저 말을 하는 성격은 아니지만 논쟁이 있을땐 논리적으로 찝어서 얘기하는걸 즐겨요! \n 기면 기다! 아니면 아니다! 라고 팩폭해요 나쁜 뜻은 없어요! 솔직하고 자신만의 세계가 확고한거예요! \n 창의력이 있어서 이런저런 공상을 즐기고, 분석하는걸 좋아해요! 덕분에 진지충이라는 소리도 자주 들어요! \n 혼자 영화보고, 쇼핑하는걸 잘해서 인간관계에도 큰 흥미 없어요 몇 명의 친구로도 충분해요! \n 쉬운듯 하지만 나름 전략이 필요한 "서커스 찰리” 게임 한판 어때요?',
    rate: 6.2,
    ranking: 7,
  },
  istj: {
    summary: '귀차니즘과 여유 만끽은 한끗차이-!',
    recommandGame: '팩맨',
    image: istj,
    badges: ['올바름', '정리정돈 잘함', '낯가림 심함', '설명충'],
    checkList:
      '언제나 신중하고 책임감 있는 당신은 주변으로부터 신뢰를 얻고있네요! \n 매사 현실적인 성격으로 객관적이려고 노력하는 당신! \n 무단횡단하고 쓰레기를 길거리에 버리는 사람들 1도 이해 못해요! \n 무뚝뚝해보이지만 알고보면 누구보다 츤데레예요 \n 안정적인걸 선호하고, 새로운 변화를 받아들이는데 시간이 필요한 당신! \n 단조로울수 있지만 큰 변화 없는 맵에서 고스트 잡으러 “팩맨” 한 판 어때요? ',
    rate: 4.2,
    ranking: 12,
  },
  isfj: {
    summary: '사려깊은 프로 충성러',
    recommandGame: '너구리',
    image: isfj,
    badges: ['성실한 모범생', '끝까지 함', '이타주의', '노잼'],
    checkList:
      '조용하고 따뜻한 심성의 당신 마음의 문을 여는데 시간이 걸리지만 한번 관계를 맺으면 너무나 세심하게 잘 챙겨줘요! \n 관계를 중요시 여기기 때문에 주위사람에게 애정이 가득하죠! \n 배려심 넘치는 성격에 친구들한텐 너그럽고 가정적인 친구로 불려요 \n 언제나 도움을 주고 싶어해요! 그러다보면 잔소리도 많이 하게 되죠! \n 양심적이기 때문에 법없이도 잘 살수 있어요! 생산적으로 일을 하고 쉬고 싶어 하는 당신! \n 소소한 잔재미가 있는 “너구리” 한 판 어때요?',
    rate: 4.6,
    ranking: 11,
  },
  intj: {
    summary: '나무보다 숲을 보는 완벽주의자',
    recommandGame: '뿌요뿌요',
    image: intj,
    badges: ['체계적', '예민보스', '혼자만의 시간', '소울리스'],
    checkList:
      '감정에 휘둘리지 않고 매우 이성적이고 싶어하는 당신은 모 아니면 도 처럼 확실한 성격을 가졌어요! \n 내가 뭘 하고 어떤 계획을 세우는지가 가장 중요해요! 다른 사람이랑 어떤 주제를 놓고 얘기를 나눌때도 과연 맞는 얘기를 하는건가 계속 생각해요  \n 돌직구라는 소리도 종종 들어요! 이 때문에 다른사람에게  본의아니게 상처를 주기도 하지만 오히려 뒤에서 다른 얘기는 안해요! \n 직관력과 통찰력이 뛰어난 당신 오늘 차곡차곡 "뿌요뿌요" 한 판 어때요?',
    rate: 3.8,
    ranking: 13,
  },
  infp: {
    summary: '자기만의 이상세계를 꿈꾸는 몽상가',
    recommandGame: '보글보글',
    image: infp,
    badges: ['생각이 많음', '독특한 감수성', '거절 못함', '뛰어난 공감능력'],
    checkList:
      '섬세하고 따뜻한 마음씨를 가진 당신은 뛰어난 공감능력을 가졌어요 \n 다른 사람의 이야기에 귀기울이고 관심도 아주 많아요 감성에 살고 감성에 죽는 타입이예요! \n 관심받기 싫으면서도 관심받고 싶어해요! 처음에는 조용하다는 소리를 듣지만 친해지면 누구보다 내자신이 나도 웃겨요  \n 남을 배려하는게 몸에 익어 말한마디 한마디 신경써서 하는 당신 \n 오늘, 귀여운 캐릭터의 "보글보글" 한 판 어때요?',
    rate: 13.3,
    ranking: 1,
  },
  esfj: {
    summary: '인싸 중의 인싸!',
    recommandGame: '베이스볼',
    image: esfj,
    badges: ['사교성 갑', '오지리퍼', '의외로 철저함', '분위기메이커'],
    checkList:
      '혼자서도 잘 노는 당신은 뭘 안해도 진짜 혼자 잘놀아요! 해야 될 일이 있으면 내가 하고싶을 때 해요 \n 갇힌 삶을 정말 정말 싫어해요! 내가 하고픈건 다 해야 하지만 못해도 금방 까먹어요 \n 그냥 태어나서 사는것 같아요 크게 스트레스 받지도 않아요! \n 사람에 대한 선입견 따윈 없어요! 어디서나 적응력 갑으로외로움도 즐길줄 아는 개썅마이웨이 존멋탱 당신! \n 오늘은 우주에 날아다니는 적들 쏘러 "갤러그" 한 판 어때요?',
    rate: 8.3,
    ranking: 3,
  },
  enfj: {
    summary: '다재다능 팔방미인',
    recommandGame: '동키콩JR',
    image: enfj,
    badges: ['여행 좋아함', '즉흥적', '독특함', '다재다능'],
    checkList:
      '자기애 뿜뿜! 본인에 대한 확신도 뿜뿜인 당신! 남에 대한 편견도 없어요! 겉과 속이 똑같아요! \n 밖에서 진~짜 잘 노는데 집에 있어도 잘 놀아요! 혼자만의 시간도 필요하거든요! 모아니면 도! 중간이 없어요 직설적이고 솔직하고 사실 다른사람에 대해 큰 관심도 없어요! \n 가끔 생각안하고 내뱉어서 후회하기도 하지만 그 때 뿐이예요! \n 손재주 있고, 이것저것 뒷일 생각안하고 내가 하고싶은대로 사는걸 좋아하는 당신! \n 다양한 방법으로 엔딩 향해"슈퍼마리오" 한 판 어때요?',
    rate: 5.0,
    ranking: 10,
  },
  entj: {
    summary: '뛰어난 통찰력봐 분석력 대왕',
    recommandGame: '닌자거북이',
    image: entj,
    badges: ['개방적인 편', '황소고집', '무미건조', '실용주의'],
    checkList:
      '논리적인거 좋아하고 뛰어난 상황 적응력을 가지고 있어요! \n 한 번 해야겠다고 마음먹은것도 바로 추진하는 추진력 갑!  하지만 마무리가,, 뒷심이 조금 부족해요! \n 뚝딱뚝딱 기계 만지는 걸 좋아해요!독립적인 성향이라 혼자놀기도 만렙이예요 \n 가끔 영혼가출했다는 얘기도 들어요타인에 무관심하거든요 \n 최소한의 노력으로 최대의 효율을 뽑기 위해요리조리 관찰하고 분석하는 당신! \n "테트리스" 로 쾌감 느껴보는거 어때요?',
    rate: 3.1,
    ranking: 14,
  },
  esfp: {
    summary: '진지한 공상가',
    recommandGame: '아이스클라이머',
    image: esfp,
    badges: ['진지충', '공감력 낮음', '솔직 노빠꾸', '맞춤법집착'],
    checkList:
      '먼저 말을 하는 성격은 아니지만 논쟁이 있을땐 논리적으로 찝어서 얘기하는걸 즐겨요! \n 기면 기다! 아니면 아니다! 라고 팩폭해요 나쁜 뜻은 없어요! 솔직하고 자신만의 세계가 확고한거예요! \n 창의력이 있어서 이런저런 공상을 즐기고, 분석하는걸 좋아해요! 덕분에 진지충이라는 소리도 자주 들어요! \n 혼자 영화보고, 쇼핑하는걸 잘해서 인간관계에도 큰 흥미 없어요 몇 명의 친구로도 충분해요! \n 쉬운듯 하지만 나름 전략이 필요한 "서커스 찰리” 게임 한판 어때요?',
    rate: 6.2,
    ranking: 7,
  },
} as const;
