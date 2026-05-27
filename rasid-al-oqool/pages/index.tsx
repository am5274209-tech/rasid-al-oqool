/* eslint-disable */
import { useState, useEffect, useCallback } from 'react';

const questionsBank = [
  { question: "عاصمة مصر؟", answer: "القاهرة", options: ["القاهرة", "الإسكندرية", "الجيزة"] },
  { question: "عاصمة السعودية؟", answer: "الرياض", options: ["جدة", "الرياض", "الدمام"] },
  { question: "أكبر محيط؟", answer: "الهادئ", options: ["الأطلسي", "الهندي", "الهادئ"] },
  { question: "أسرع حيوان بري؟", answer: "الفهد", options: ["الأسد", "الفهد", "النمر"] },
  { question: "عدد كواكب المجموعة الشمسية؟", answer: "8", options: ["7", "8", "9"] },
  { question: "مخترع المصباح الكهربائي؟", answer: "توماس إديسون", options: ["نيكولا تسلا", "توماس إديسون", "ألكسندر غراهام بيل"] },
  { question: "في أي قارة تقع مصر؟", answer: "أفريقيا", options: ["آسيا", "أفريقيا", "أوروبا"] },
  { question: "ما هو الكوكب الأحمر؟", answer: "المريخ", options: ["المشتري", "زحل", "المريخ"] },
  { question: "عدد أيام السنة الكبيسة؟", answer: "366", options: ["365", "366", "364"] },
  { question: "ما هو أكبر كوكب؟", answer: "المشتري", options: ["المريخ", "المشتري", "الأرض"] },
  { question: "مؤلف رحلة ابن بطوطة؟", answer: "ابن بطوطة", options: ["ابن خلدون", "ابن بطوطة", "المقريزي"] },
  { question: "ما هي لغة البرازيل؟", answer: "البرتغالية", options: ["الإسبانية", "البرتغالية", "الإنجليزية"] },
  { question: "أطول نهر في العالم؟", answer: "النيل", options: ["الأمازون", "النيل", "الميسيسيبي"] },
  { question: "كم قلب للأخطبوط؟", answer: "3", options: ["1", "2", "3"] },
  { question: "رمز الماء الكيميائي؟", answer: "H2O", options: ["CO2", "H2O", "O2"] },
  { question: "أضخم حيوان؟", answer: "الحوت الأزرق", options: ["الفيل", "الحوت الأزرق", "الزرافة"] },
  { question: "أصلب مادة؟", answer: "الألماس", options: ["الحديد", "الألماس", "الذهب"] },
  { question: "أول إنسان صعد للقمر؟", answer: "نيل أرمسترونج", options: ["يوري غاغارين", "نيل أرمسترونج", "باز ألدرين"] },
  { question: "عاصمة اليابان؟", answer: "طوكيو", options: ["كيوتو", "طوكيو", "أوساكا"] },
  { question: "عدد عظام جسم الإنسان؟", answer: "206", options: ["200", "206", "210"] },
  { question: "الغاز الذي نتنفسه؟", answer: "الأكسجين", options: ["النيتروجين", "الأكسجين", "ثاني أكسيد الكربون"] },
  { question: "عدد فصول السنة؟", answer: "4", options: ["3", "4", "5"] },
  { question: "الدولة الأكثر سكاناً؟", answer: "الهند", options: ["الصين", "الهند", "أمريكا"] },
  { question: "أكبر قارة؟", answer: "آسيا", options: ["أفريقيا", "آسيا", "أوروبا"] },
  { question: "رسام الموناليزا؟", answer: "ليوناردو دا فينشي", options: ["بيكاسو", "دا فينشي", "فان جوخ"] },
  { question: "أبرد قارة؟", answer: "القارة القطبية الجنوبية", options: ["روسيا", "القارة القطبية الجنوبية", "كندا"] },
  { question: "الأسرع في الكون؟", answer: "الضوء", options: ["الصوت", "الضوء", "الرعد"] },
  { question: "عملة أمريكا؟", answer: "الدولار", options: ["اليورو", "الدولار", "الين"] },
  { question: "عدد أصابع اليد؟", answer: "5", options: ["4", "5", "6"] },
  { question: "هل الخفاش طائر؟", answer: "لا", options: ["نعم", "لا", "أحياناً"] },
  { question: "ما هي عاصمة فرنسا؟", answer: "باريس", options: ["باريس", "لندن", "برلين"] },
  { question: "مؤلف كتاب المقدمة؟", answer: "ابن خلدون", options: ["ابن خلدون", "المتنبي", "الرازي"] },
  { question: "ما هو الذهب السائل؟", answer: "النفط", options: ["الماء", "النفط", "الزئبق"] },
  { question: "كم ساعة في اليوم؟", answer: "24", options: ["24", "12", "48"] },
  { question: "ما هو أطول حيوان؟", answer: "الزرافة", options: ["الفيل", "الزرافة", "الجمل"] },
  { question: "عاصمة إيطاليا؟", answer: "روما", options: ["ميلانو", "روما", "البندقية"] },
  { question: "ماذا يسمى صغير الأسد؟", answer: "شبل", options: ["جرو", "شبل", "مهر"] },
  { question: "ما هو أسرع كوكب دورانًا؟", answer: "المشتري", options: ["المريخ", "الأرض", "المشتري"] },
  { question: "من هو مؤسس علم الجبر؟", answer: "الخوارزمي", options: ["ابن سينا", "الخوارزمي", "الفارابي"] },
  { question: "أين يوجد أكبر هرم في العالم؟", answer: "المكسيك", options: ["مصر", "المكسيك", "الصين"] },
  { question: "ما هو لون الزمرد؟", answer: "أخضر", options: ["أزرق", "أحمر", "أخضر"] },
  { question: "ما هو المعدن الذي يوجد في الحالة السائلة؟", answer: "الزئبق", options: ["الزئبق", "الحديد", "الذهب"] },
  { question: "كم عدد كرات المضرب في المباراة؟", answer: "1", options: ["1", "3", "5"] },
  { question: "ما هي عاصمة روسيا؟", answer: "موسكو", options: ["سانت بطرسبرغ", "موسكو", "كييف"] },
  { question: "من هو مخترع الهاتف؟", answer: "غراهام بيل", options: ["إديسون", "غراهام بيل", "تسلا"] },
  { question: "ما هو أثقل غاز؟", answer: "الرادون", options: ["الهيدروجين", "الأكسجين", "الرادون"] },
  { question: "ما هو الكوكب الذي يمتلك حلقات؟", answer: "زحل", options: ["المشتري", "زحل", "أورانوس"] },
  { question: "ما هو الحيوان الذي لا يمتلك حبالاً صوتية؟", answer: "الزرافة", options: ["الزرافة", "الفيل", "الكنغر"] },
  { question: "أين تقع قلعة صلاح الدين؟", answer: "القاهرة", options: ["دمشق", "القاهرة", "عمان"] },
  { question: "ما هي أكبر دولة في العالم مساحةً؟", answer: "روسيا", options: ["كندا", "الصين", "روسيا"] },
];

const messages = ["عاش يا بطل، حاول تاني!", "اهبد مرة تانية يا فنان!", "مترزعش في الإجابة يا خطير!", "يا عم فكك، حاول تاني!", "شكلك بتختار عشوائي؟"];
const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [gameState, setGameState] = useState('start');
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [funnyMsg, setFunnyMsg] = useState("");

  useEffect(() => {
    setIsMounted(true);
    const s = localStorage.getItem('highScore');
    if (s) setHighScore(parseInt(s));
  }, []);

  const finishGame = useCallback((fs: number) => {
    if (fs > highScore) {
      setHighScore(fs);
      localStorage.setItem('highScore', fs.toString());
    }
    setFunnyMsg(messages[Math.floor(Math.random() * messages.length)]);
    setGameState('gameover');
  }, [highScore]);

  const startGame = () => {
    setQuestions(shuffleArray(questionsBank).slice(0, 15));
    setCurrentQ(0);
    setScore(0);
    setTimeLeft(15);
    setGameState('playing');
  };

  const handleAnswer = (opt: string) => {
    if (opt === questions[currentQ].answer) {
      const ns = score + 10;
      setScore(ns);
      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
        setTimeLeft(currentQ + 1 >= 9 ? 7 : (currentQ + 1 >= 4 ? 10 : 15));
      } else {
        finishGame(ns);
      }
    } else {
      finishGame(score);
    }
  };

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(t);
    } else if (timeLeft === 0 && gameState === 'playing') {
      finishGame(score);
    }
  }, [timeLeft, gameState, score, finishGame]);

  if (!isMounted) return null;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', color: 'white', flexDirection: 'column', textAlign: 'center', padding: '20px' }}>
      {gameState === 'start' && (
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '30px', border: '1px solid #ecc94b' }}>
          <h1 style={{ fontSize: '3rem', color: '#ecc94b' }}>رصيد العقول</h1>
          <p>أعلى نتيجة: {highScore}</p>
          <button onClick={startGame} style={{ padding: '15px 30px', fontSize: '1.2rem', cursor: 'pointer', backgroundColor: '#ecc94b', border: 'none', borderRadius: '50px', fontWeight: 'bold' }}>ابدأ التحدي</button>
        </div>
      )}
      {gameState === 'playing' && (
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', marginBottom: '20px' }}>
             <span>⏳ {timeLeft}s</span>
             <span>🏆 {score}</span>
          </div>
          <h2>سؤال {currentQ + 1} من 15</h2>
          <p style={{ fontSize: '1.6rem', marginBottom: '30px', minHeight: '80px' }}>{questions[currentQ].question}</p>
          {questions[currentQ].options.map((opt: string) => (
            <button key={opt} onClick={() => handleAnswer(opt)} style={{ display: 'block', margin: '15px auto', padding: '15px 30px', cursor: 'pointer', width: '300px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '2px solid #ecc94b', borderRadius: '50px', color: 'white' }}>{opt}</button>
          ))}
        </div>
      )}
      {gameState === 'gameover' && (
        <div style={{ padding: '40px', background: 'rgba(0,0,0,0.3)', borderRadius: '30px' }}>
          <h1 style={{ color: '#ff4d4d', fontSize: '2.5rem' }}>{funnyMsg}</h1>
          <h2 style={{ fontSize: '1.5rem' }}>نقاطك: {score} | أعلى نتيجة: {highScore}</h2>
          <button onClick={startGame} style={{ padding: '15px 30px', cursor: 'pointer', borderRadius: '50px', border: '2px solid #ecc94b', backgroundColor: 'transparent', color: 'white', marginTop: '20px' }}>العب مرة تانية</button>
        </div>
      )}
    </div>
  )
}