import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AlertController } from 'ionic-angular';
import * as moment from 'moment';



/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class QuotesProvider {

  constructor(private localNotifications: LocalNotifications, public alertCtrl: AlertController) {
    console.log('Hello QuotesProvider Provider');
  }


  now = moment().format('LLLL');
  today: number = moment().dayOfYear();

  notification = {
    title: 'Good Morning!',
    text: "Today's Quote is Ready",
    at: new Date("January 1, 2017 08:30:00"),
    every: "day"
  };


  quote: string;
  todaysQuote: string;
  currentID: number = 1000;
  dayOne: number = this.today - 200;
  //supposed to be the day of the year app is released

  day: number = this.today - this.dayOne;
  //so number of days between now and release date is index of todays message

  setNotifications(): void {
    // console.log(new Date());
    this.localNotifications.registerPermission();
    this.localNotifications.schedule(this.notification);

    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'You will now recieve daily notifications.',
      buttons: ['OK']
    });
    alert.present();

  }

  cancelNotifications(): void {
    // console.log(new Date());
    this.localNotifications.cancelAll();

    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Your will no longer recieve daily notifications.',
      buttons: ['OK']
    });
    alert.present();

  }


getQuotes(): string[] {
  return this.quotes;
}

getQuote(index: number) {
  this.quote = this.quotes[index];
  return this.quote;
}

getToday() {
  // console.log("Today is the " + this.today + " day");
  if (this.currentID > 366) {
    this.todaysQuote = this.quotes[this.day - 1];
  } else {
    this.todaysQuote = this.quotes[this.currentID];
  }

  return this.todaysQuote;
}

setCurrent(ID: number) {
  this.currentID = ID;
}

getCurrent(): number {
  return this.currentID;
}

getLimit() {
  return this.day;
}



quotes: string[] = [
  "A loser is a person who is habitually failing. Most people fail before they become successful.",
  "Behind every success story are several failure stories. Failing occasionally does not make you a loser but failing habitually makes you a loser.",
  "Life is like the premiership. To become a champion, you must win more than you lose. Losers lose more; winners win more.",
  "Winners do not despise small beginnings; losers do",
  "There are many today who have not achieved anything in their lives because they are waiting for a big beginning. They have forgotten that even God did not start big when He was creating the universe.",
  "Losers despise small beginnings because they focus on the beginning; but Winners foresee the end from the beginning.",
  "Losers address themselves by their current situations; Winners address themselves by their potentials.",
  "Gideon focused on his beginning, his current situation; the angel focused on Gideon’s potential and saw his end from his beginning.",
  "In choosing to be a winner, you must consistently address yourself by your potentials for that is the truth concerning you.", "When you give a winner, for instance, an orange seed, he does not see a seed. He sees a plantation. But dare give a loser the same seed and what will happen? He will throw it away because all he sees is a common seed.",
  "In that one seed a winner sees a tree. In that tree he sees fruits with millions of seeds; out of that he sees a plantation and out of that he sees acres and acres of plantations.",
  "To a winner, in an egg is a poultry farm, to a loser, a meal’s accompaniment. Winners think big but start small.",
  "Winners use more Strategy and less Effort; Losers use more Effort and less strategy.",
  "If life were to be about how one sweats, then many in life should by now have superseded the heavens in wealth.",
  "Life is more about the strategies you have than how much you sweat or the efforts you put into what you do.",
  "You should know by now that the world is no longer after the fruits of your efforts or labor; it is more after the fruits of your strategies.",
  "Life is about developing plans, scanning ones environment to identify the threats and strengths within them, and strategizing to obtain ones objectives.",
  "Do you know why you have so many unfinished projects in life? It is because you never sat down to strategize.",
  "You simply do not have any strategy with which you run your life and for this, you have suffered greatly in life yet you do not have any reward to show for your suffering.",
  "Winners are team players; Losers are lone rangers.",
  "Your weaknesses can limit you from reaching the heights you can reach in your life; your strengths determine what you can achieve with little or no support.",
  "Winners know and acknowledge their weaknesses and NOT only that, they go a step further to identify people with strengths that can cover their weaknesses to team up with.",
  "Losers on the other hand live in a fool’s paradise. They are contented in their abilities to do things all alone forgetting the essence of teamwork.",
  "Look for and befriend people who have what you do not have and who also need what you have. Do not walk alone in this world; it is too dangerous to walk through life alone.",
  "Even the strongest nations across the globe today are building strategic alliances with other nations. They have suddenly realized that the world is now infested with ‘rogue’ nations and unidentifiable terrorists and in order to survive, they need strategic alliances.",
  "Winners create winds; Losers watch the winds.",
  "If you waste time discussing events created by young men of your age, you will eventually become a loser. Don’t be the one discussing events, be the one creating events for others to discuss.",
  "Do not wait on people to do things for you to applaud; you should also do things for people to applaud you. You have been a spectator for far too long.",
  "Winners create the clouds; Losers look at the clouds.",
  "Winners however are people who under very imperfect conditions achieve major goals. And guess what, there is no perfect condition anywhere.",
  "The difference between Winners and Losers is that Losers seek for perfect conditions; Winners create their own clouds, they create the conditions they desire to live in.",
  "Winners enjoy the applause in the Mind; Losers enjoy the applause from the Audience.",
  "Losers seek the applause of the audience. They enjoy the praises of people and hate to offend others. Winners are bold in making decisions, making statements and taking steps without fear of offending others.",
  "If your life does not offend anybody, then you have become a human pleaser.",
  "If you know what you’re doing is right and for that people are offended, worry not.",
  "Winners think about tomorrow; Losers worry about tomorrow.",
  "Losers look at current situations and abound in fear of tomorrow. Winners on the other hand look at current situations but choose to use what they find as instruments for developing strategic plans for tomorrow.",
  "Winners are bold; they take the bull by the horn today and use today to create tomorrow for themselves because they do not live for today, they live for tomorrow",
  "For Winners, today is tomorrow. They are always ahead of today.",
  "Winners are Strategic thinkers; Losers are Wishful thinkers.",
  "Winners and Losers alike think, but the difference is that; one is a strategic thinker and the other, a wishful thinker. Most people in the world today struggling to make ends meet in their lives are wishful thinkers.",
  "A wishful thinker is the one who chases fantasies. They are people who have big dreams and ambitions but do not allow their dreams and ambitions to regulate their lives today.",
  "Wishful thinkers are people who see into the future but fail to allow what they see in the future to regulate their behavior today. And, unfortunately, most people in the world today are fantasy chasers.",
  "A strategic thinker is the one who works at what he or she sees in his or her future today in preparedness for the future.",
  "Winners do not wait for things to happen to them; they go out and happen to things.",
  "Winners focus on their strengths; Losers focus on their weaknesses.",
  "The stronger your strengths, the weaker your weaknesses.",
  "Winners are men of integrity; Losers are dishonest men.",
  "Men who do not mean what they say and say what they do not mean are dangerous people.",
  "Winners are men who endeavor to ensure that they mean what they say and do only that which they mean; these are men of integrity.",
  "Winners look at why they fell; Losers look at where they fell.",
  "Don’t look at where you fell; look at where you slipped.",
  "Winners are moved by their convictions; Losers are moved by the crowd",
  "Winners do not do things because they find others doing them. They do things because they are persuaded beyond any iota of doubt that what they are doing is what they have to do.",
  "Winners have the giant killer mentality; Losers have the grasshopper mentality.",
  "To a Winner, no assignment is big; to a Loser every assignment is big.",
  "What moves you? Is it worth dying for?",
  "What are you? A giant slayer or a grasshopper?",
  "Winners do not get familiar with life; Losers do",
  "Winners do not get familiar with life, they are committed to whatever they find doing.",
  "What you do not respect does not come to you.",
  "Winners choose where to sow their seeds; Losers scatter their seeds.",
  "A winner is one who strategically sows his seeds; he chooses where to plant his seeds. The loser on the contrary, chooses to scatter his seeds everywhere.",
  "Winners know where to sow their seeds.",
  "Winners understand the times; Losers miss the seasons.",
  "To win in life, you have to understand the times. You have to know the season you’re in to determine what activity is right for that time and season.",
  "You must understand one thing about life; there isn’t enough time for anything on earth to afford wasting some time.",
  "Winners know and understand the times and seasons in which they are. Like Chameleons they know when to change to suite the times and seasons of their environments.",
  "What says the time and season of your life?",
  "Winners learn, unlearn, and re-learn; Losers do not",
  "Every winner understands the essence of information and strives to obtain it. But information, no matter what it costs to obtain does not outlast its usefulness.",
  "Winners have relevant information but when that information they have becomes obsolete, they unlearn and relearn.",
  "Conformers are people who keep to the status quo of their environment whether or not it is right or wrong or producing results or not.",
  "Transformers on the other hand are bold and courageous in challenging the status quo of their environment.",
  "Winners are transformers; Losers are conformers.",
  "Learn, unlearn and relearn. Renew your mind!",
  "Winners lay aside weights; Losers carry weights.",
  "Weight is not sinful but has the capacity to retard ones velocity in life.",
  "Life is a race. To carry weight with you in the race of life is to carry a burden that retards ones speed in life.",
  "Thus anything that causes stagnation in your life and prevents you from moving forward and achieving your aims is weight.",
  "Winners are informed of weights and learn very early in their lives to lay weights aside; losers do not learn this early in life.",
  "Winners know what they must lose to get what they want; Losers want to eat their cake and still have it.",
  "Winners lay aside all weight, focus on what they want and achieve them. Losers know what they are looking for but are never ready to pay the price for it.",
  "Winners know what they want and know what to sacrifice for them. They pay the price for the things they want.",
  "Cultivate the discipline to sacrifice what you have for what you want.",
  "To Winners, another’s success is their success; To Losers, another’s success is their failure.",
  "Losers live in a competitive world where they stand in competition with everyone around them therefore, count the successes of all around them as indicative of their own failures.",
  "Winners, on the contrary, celebrate the success of all the people around them.",
  "Winners celebrate the success of others.",
  "Winners know their God; Losers know themselves.",
  "Success is not a condition but an attitude.",
  "Irrespective of where you were born and the condition(s) you find yourself in today, if you have the right attitude, you can succeed.",
  "You can never blame anybody for your failure(s). Stop the blame game, read carefully for once, and cultivate the right habits that can help you succeed.",
  "The truth is that success knocks on our doors each day of our lives, but you need the right attitude and the right approach to obtain success.",
  "The outstanding miracles recorded in the Bible did not go looking for people; people who had the right attitude for achieving success went looking for them.",
  "Many are unsuccessful in life because when they look at the magnitude of the tasks and assignments ahead of them, they get intimidated.",
  "Have the valor of the lion and gather the courage to confront anything that you fear. If you do not have the habit of confronting your fears, you will always fail in life.",
  "In fact, success is a product of failure. Thus without failure, there cannot be success.",
  "The only reason why you have not taken a step on that which is occurring to you is because you are afraid you will fail.",
  "Have the courage to confront that fear, behave like the lion, move out and you will succeed. Attempt anything that occurs to you and God will sustain you.",
  "In life, fear makes you scratch the earth like a turkey; boldness makes you fly out like an eagle.",
  "Sometimes in life, it is better to die trying than to die having done nothing at all.",
  "Most successful business personalities all over the world are people who did not go to any prestigious business schools to learn how to grow a business. It was after they had succeeded in their individual lines of business that they went to school to acquire the skills needed to run a business.",
  "You do not learn how to run a business when you do not have a business. Similarly, when you do not have money you learn how to create wealth then when you get the money, you learn how to manage wealth.",
  "Most entrepreneurs lack academic competence, but are able to start and grow their own businesses and most academically trained entrepreneurs are best at managing already grown businesses.",
  "The not academically trained entrepreneur looks not at the weather, therefore fears it not, while the academically trained manager/entrepreneur fears the uncertain nature of the weather.",
  "Sometimes we panic when we get to know that someone who is an authority in an area has already done that which we are venturing into.",
  "In life, your competitors are your ‘quality assurance managers’. They help you to ensure quality in whatever you do.",
  "Learn not to panic in the face of competition; instead turn your competitors into quality assurance managers",
  "Do not run away from competition, because everywhere you go, there will be competition. But know that the sky is too big for two birds, no matter their sizes, to clash.",
  "It is not everything that attracts the attention of the lion. Likewise, in life, when you do not have passion, you do everything in general, nothing in particular.",
  "There is a huge difference between the things you do with your mind and the things you do with your mind and heart. That which does not excite you is accomplished with the mind but that which excites you is accomplished with the mind and the heart.",
  "When pursuing your passion, your primary focus is not money; your primary focus is the meeting of a need. Money is a secondary focus.",
  "Do not enjoy before pursuing your passion and clearing obstacles. The reason why many young women are sleeping around with men is that they want to enjoy before pursuing their passion(s).",
  "As you pursue your passion, be prepared to stand out among the crowd.",
  "If you want to be successful in life, you need to possess the humility and the hard-working nature of the donkey.",
  "Dear one, in life, you are not supposed to feel inferior to anybody. Both inferiority complex and ‘superiority complex’ are negative in life. What you need is a sober reflection of yourself.",
  "To be humble is to have a sober reflection of oneself; to be proud is to think of one more highly than one ought to.",
  "Do not allow your achievements to get the better part of you.",
  "To some, their educational backgrounds have become weapons with which they terrorize others. Your educational achievements can make you think highly of yourself than you ought to. Never make that mistake.",
  "Family name, family achievement, family influence and connection can make you pompous. If what your ancestors achieved can make you arrogant, then I can imagine what your achievement can make you.",
  "Groom your personality well but do not be so enthused about your physical appearance.",
  "The irony in life is that those who are naturally endowed with beauty do not go talking about how beautiful they are; it is those who buy their beauty off the selves, i.e. ‘cosmetic beauty’ that go broadcasting their good looks.",
  "You’re not better than anyone is.",
  "It is said that many people dream but only few wake up to achieve their dreams. To succeed in life, therefore, one of the ways you must learn is the way of the ant.",
  "The ant has no commander or ruler, yet it does what is right. Every true leader knows where he/she is going; knows how he/she can get there and knows how to influence people to go with him/her.",
  "In life, when you have no place to go, every road attracts you. Not having anywhere to go in life puts your life in a mess. And if you do not know where you’re going in life, you will never witness any significant change in your life.",
  "A leader knows where he is going; he knows how to get there and is able to influence people to join him. A leader with confused followers is a leader who does not know where he/she is going.",
  "In life, if your aim is to succeed in whatever you do, people must not tell you what to do before you do it. If you lack the ability to do what you know you should do, then you’re not ready for success.",
  "The ant has no commander; it has no ruler yet it does what is right because it knows what to do and how to do it. Do not wait to be commanded or dictated in life if your aim is to succeed.",
  "There are two groups of rich people in life: those who inherited their wealth and therefore, easily waste it; and those who worked hard to become wealthy. Such individuals appreciate their wealth and use it wisely.",
  "Praying for a lazy man to become rich is like pouring water on a rock.",
  "Roast your game; add value to yourself! Your value in life is a reflection of the value you have added to yourself.",
  "Some people are so blind that even when they see things coming their way, they are unable to prepare for them. They lack strategy.",
  "The ant perceives the winter in the summer and immediately gets to work, gathering food for it. The ant is never taken by surprise by any season; it is always prepared in advance.",
  "You’re growing and cannot afford to continue to do things the way you did them when you were much younger. Be strategic. Know that as you age, your opportunities will dwindle.",
  "Do not live for today, live for tomorrow. Forecast; see what is coming ahead of you and plan ahead of it. Think ahead!",
  "Ants work in teams, and every ant belongs to a team. Note that it is not every group of people you find that can make up a team.",
  "A team is a group of friends achieving a common goal as a result of complementary effort.",
  "In life, there are some things you cannot do alone, as a result, you need to have a team, you need to network, and you need somebody to advice and support you.",
  "There are so many things you do not have the skills to accomplish and so you need the skills of others to help accomplish them.",
  "At certain age, you do not need many social friends. You need business partners, progressive partners and people that share a common vision with you. You need people you can think with and not people you can go drinking with.",
  "Cultivate strategic friendships with people whose skills complement yours. Ants are not found in the company of butterflies because the skills of the butterfly will not help the ant accomplish it tasks. ant stay with ants and butterflies with butterflies.",
  "The crisis you face in your life help you know the people in your team.",
  "Loyalists are people who stand with you irrespective of the crisis or dangers you face. They tell you the truth in love and stay with you.",
  "Disloyalists call themselves friends and swim around you when all seems to be going well with you but are nowhere to be found when you encounter crisis in your life. These are sycophants; ‘bootlickers’. Avoid them.",
  "Chancers are people who use your crisis to advance their own course.",
  "Priority management is doing first things first.",
  "To succeed, follow the footsteps of those who have successfully gone ahead of you.",
  "An ant on a move always drops hints on its path for others that are following to follow suit. That is to say to all that follow that ‘I found this place to pass so you can also do same’.",
  "Find a colony of ants and you would notice that they move in a single file.",
  "You have eyes in your head with which you can create the pictures you want to see in your tomorrow.",
  "Every problem you use your physical eyes to see today, your mind’s eye has the power to show you the solution(s) to it.",
  "Do not see the problems around you today; do not see the crisis around you today, because they all have their solution embedded in tomorrow.",
  "Every crisis you see around you today has its solution embedded in tomorrow.",
  "Do not see the problems around you today; do not see the crisis around you today. To see beyond today, have the eyes of the eagle!",
  "Do you also know that how high you can go in life (fly) depends on how low you can sink in prayer? Have you ever seen a bird about to take flight? Its sinks low on its feet; gathers momentum and takes off.",
  "When you meet challenges, problems or mountains in life, you are faced with several choices or options. You can go round the mountain, climb over it, blow it up with dynamite, or fly over it.",
  "Never exchange words with a man who knows how to pray. God fights for such men. And just so you know, it is a fearful thing to fall into the hands of the LORD.",
  "Learn to pray and wait upon Him for answers to your prayers. He is a prayer answering God.",
  "As you develop, as you grow, as your domain changes, change, learn new things. Even chameleons know when to change to suit their environments. CHANGE! Re-invent yourself!",
  "Ninety percent of the problems you’re encountering in life today are as a result of your own doings. They are the results of your actions and inactions.",
  "Do not stay under the influence of people who do not have any experience. Take charge of your life and be in control.",
  "Do the right things that you are persuaded beyond all reasonable doubts are right to you and live with the conviction that you’re doing the right things.",
  "You cannot afford to sit and be told everything to do in your life.",
  "If you do not have a sense of discretion, you blame people for the things that happen to you. People tell you what to do with your life because they note that you are indecisive. Grow up!",
  "A sense of originality is the ability to generate your own ideas and move in life being you. Develop, build yourself, be yourself and let people appreciate you for who you are.",
  "There are only two people who do not change their minds. The first is God. God does not change His mind because He is God. The second person who does not change his mind is a fool and that is because he is a fool.",
  "If you want your plans to succeed, you must learn to take advice. Listening to advice does not make you a fool. It rather means that you are so wise and yet are still looking for more wisdom to add to what you already have.",
  "The truth is that, no matter how wise you think you’re, there is still something you do not know that somebody must tell you about. If you become puffed up and do not take any advice, it is a sign of foolishness.",
  "Most of the purposes that you set for yourself but fail to realize are as a result of the fact that you fail to seek the counsel of others. All you need to do is to set the right people around you to give you advice.",
  "The world is too dangerous a place for you to walk alone in. Even presidents have special advisers how much more you. There is always something new you do not know.",
  "When you think you know everything you need to know, you are showing that you do not know anything. It is simple, the more you learn, the more you realize your ignorance.",
  "Watch out! Just one bad decision could ruin your life forever.",
  "There are two things in every environment: the things that can make you, and the things that can unmake you.",
  "Understanding is the ability to look within where you are to discover the things that can make and/or unmake you and your dreams.",
  "Success is the result of good decision-making; failure is the result of bad decision-making. If you’re experiencing any success in your life today, it is because of the decisions you made yesterday. And your life tomorrow will depend on the decisions you’re making today.",
  "God has programmed and designed your tomorrow for a success story but the decisions you make today will either make or unmake that story.",
  "It is important to know that even though every believer’s future is prophesied, those plans of God that are prophesied upon your life will need you to make the right choices and decisions in life to make them materialize.",
  "The decision as to whom to marry is a major decision. You happiness hinges on that. Note that I am not talking about your joy in life; your joy in life hinges on your relationship with the Holy Ghost.",
  "Where do you want to spend life after death? There are only two places: either you spend it in the lake of fire with the devil and his cohorts of demons or you spend it with Jesus in Heaven. This is by far the most important decision you ever will make in life.",
  "The most important decision in your life is about where you will spend eternity and God has given you the right to make that choice.",
  "God decided that man should make his own choices. So now, you cannot make decisions about whom you marry and which church you go to and later blame God for the consequences of your decisions or choices.",
  "For me, serving God is not a right, it is a privilege. We need to get serious with life and stop giving excuses. Let us stop playing the blame game. We ought to stop blaming people for the things we are going through. Wake up, and get serious with life.",
  "You do not have to make decisions under pressure. Neither should you make a decision when you are scared. The best time to make a decision is when you are yourself.",
  "Sometimes we think we are late and we make hasty decisions that get us into trouble. We make ‘fast’ decisions and jump out of the will of God when we are but a hair’s breadth away from our blessing.",
  "Life is a race; not a competition. We are all in our own tracks. Do not let anybody push you; do not let situations push you; move at your own pace and time.",
  "Do not let the devil use anybody to compel you to run faster than the speed you can handle.",
  "When your employer wrongs you and gives you the option to leave, think twice, for the doors you bang when walking out, do not open to you when you turn back.",
  "When walking out of a door, close it gently so that the next time you come back to it, it will open again.",
  "Relationships are very important. Anytime you are making a decision that affects a relationship, think twice. You might not like a person’s character or behavior but note that there is something about that person that you may need one day.",
  "In making decisions ask yourself what effect(s) it will have on your children in future. Good fathers leave inheritance; they do not leave curses, problems or complications.",
  "Whom do you call on phone when you need advice? If a naked person says, I will give you clothes, look at him properly and try to see what he is wearing.",
  "Your so-called “LITTLE DECISIONS” are the foundations for your “BIG DECISIONS”.",
  "It is important to note here that you cannot keep doing things the same way, year after year, and expect different results! If you’re satisfied with the same results, continue. If you are not, change the choices and decisions you make.",
  "Take time to examine your life and find out whether the choices you make everyday contribute to your purpose and progress in life. If the decisions you make do not produce the results you expect, why keep on making those decisions?",
  "You are joking if you think you will change everything by making one big decision. Success comes as a result of a long string of good decisions.",
  "There are some people who leave home early everyday in pursuit of a dream and by virtue of that routine; they are developing property, building houses and buying cars. Some people make the same choices but their lives have stagnated.",
  "Do not sit down and think that one day you will make a very big decision that will change your entire life. No! “Little drops of decisions make a big decision”. The decisions you make everyday contribute to one big decision.",
  "It is the everyday decisions you make that determine your success or failure in life.",
  "If you choose to get up anytime you feel like it, eat, watch TV, and go about doing everything in general but nothing in particular and in the evening you come back and sleep, expecting that things will be good. Then, you need to have a rethink. If the things you are doing do not yield the required result, change them.",
  "Hannah said to herself, ‘every year I go to Shiloh, I do not get any results, but in that special year, she did something extraordinary, something different, and got extraordinary results. It will take you changing the choices you make in life to get extraordinary results.",
  "There are times when you have to think on your feet. You have to make some choices immediately. One of the hallmarks of successful people is decisiveness; the ability to think and make decisions on their ‘feet’.",
  "The first thing you have to do to ensure your success in the making of emergency decisions is to pray for the wisdom and the direction of God. The second is to measure the motives of the people asking you to make those decisions.",
  "In emergency decision-making, there are manipulators; people who try to manipulate you because they want to influence the decision you will make so that it will benefit them.",
  "People are mostly self-centered, self-absorbed and selfish. If anyone is pressurizing you to make decision, sit back, take your time and analyze the person’s motive(s) before you make those decisions.",
  "If your accountant at the office is rushing you to sign cheques, sit back, relax and take your time because he may make you sign some cheques giving out amounts of money you have not budgeted for.",
  "Do not allow people to rush into your office and make you sign contracts you do not know about. Take your time, study those contracts, read them thoroughly before signing them.",
  "You do not make marriage decisions in one week! There are decisions that you make that possess the power to enslave you forever. There is nothing wrong if you ask for some time. The person may be compelling you to say yes, but remember, NO is a decision too.",
  "Nobody can love you more than yourself. Most of the things manipulators would ask us to do would benefit them. So, watch out when you are being asked to make an emergency decision.",
  "Every decision you make today will effect tomorrow. Do not just think about today because tomorrow is more important. It represents your future.",
  "If you’re a strategist, before people think you have thought. Strategists do not think of today, they have long-term plans. Africans have been trained to think on short-term basis.",
  "Your strategic decision may be to change your line of business. For some of you, it may be to get married; for others your strategic decision may be to cut off some friends.",
  "Your life today is dependent on the choices you made yesterday. Your life tomorrow will depend on the choices you make today.",
  "If you’re young and are making a lot of money, now is the time to invest that money. Do not wait till your old age when you can no longer make so much money.",
  "Make a strategic decision today. Your future depends on it!",
  "Wisdom is the ability to use your mind to make effective decisions. To be able to make effective decisions, you need wisdom. An effective decision is the decision that yields its desired results.",
  "If you decide that you want to set up a business next month, next month comes, and the business is not set up, you made an ineffective decision.",
  "Every decision you make is aimed at some kind of results. If you do not get the results you’re looking for, you are making ineffective decisions.",
  "Wisdom is very important to your success. Wisdom will help you make very effective decisions.",
  "The older you get, the wiser you become. Today you think better than when you were five years old. So there is a kind of wisdom that comes as you advance in age. This is called Maturity Wisdom.",
  "In effective decision-making, you need Maturity Wisdom to make effective decisions. Therefore, in decision-making you need to seek advice from the mature people around you.",
  "If you’re confused about marrying a particular person, you do not talk to your friend who is not married. He or she cannot tell you what to do simply because he or she is not married. But go to a man or woman who is married and has seen the complications in marriage and the complex nature of women and men.",
  "If you’re going to make a destiny changing decision, you do not talk to your peers. Go to that man or woman who has been married before and because of his or her experience will give you better advice.",
  "The Bible tells us to make plans by seeking advice. The proud will say I know all I need to know, therefore, I do not need the wisdom of the elderly.",
  "There are some people who are mature in business and in business sense have Maturity Wisdom. Such are the people who can best advise you on what to do in business.",
  "The more informed you are, the more psychologically endowed you are. A well-informed person makes better judgments than a less informed person does.",
  "The more you learn, the wiser you become academically. The more you stay in the classroom, the more you learn.",
  "After your first degree is your second degree, your masters, and then there is a third degree, a Ph.D. Each of these levels of education provides you higher levels of Academic Wisdom.",
  "You realize the need to go back to school. Perhaps your career requires that you go back to school at this stage in your career development. You alone stand to gain.",
  "Did you think of going back to school three years ago but thought you were too old to do that? What you probably did not consider is the fact that three years was soon going to catch up with you and if you had gone back to school you would have moved up!",
  "If you walk with the wise, you will grow wise. If you walk with a liar, you will eventually become a liar. If your closest friend is a gossip, you will ultimately become a gossip. There is transference of spirits in life.",
  "Your life is a reflection of the people you associate with. Walk with the wise and become wise! Choose your friends; do not let your friends choose you. Set a criterion for the people you want to move with.",
  "A wise man controls his temper but a fool gives full vent to his temper. Sisters, if you are courting a man who fights and beats you all the time, do not marry him; he is a fool.",
  "The Bible says a wise son brings joy to his father but a fool brings grief. If a man’s own parents ask you, ‘Are you sure you can marry our son? Can you manage him?’ You had better be careful.",
  "Some say love is blind but I say love is not blind. Infatuation is blind. Love sees into the future.",
  "God said to Moses to go to Bezaleel because He has filled him with wisdom in all manner of workmanship to devise cunning works. In that account, God referred to skills as wisdom.",
  "If you have skills in accounting, then you have wealth creation skills because your skills in accounting will bring you wealth. If you have skills in salesmanship, you have wealth creation skills in selling.",
  "When you see footballers and you watch the way they maneuver a football, such a small object, you witness their wealth creation skills. Hand an architect an old and dilapidated building. These are examples of Wealth Creation Wisdom.",
  "People are real estate developers; I am a human capital developer. Therefore, I have the skills in developing people. That is my wealth creation wisdom. What is yours? Do not despise it.",
  "One of the major causes of poverty is laziness. Some people are too lazy to get up and use their Wealth Creation Wisdom. No rich man will ever give his money to a lazy person because the rich man knows that he got his money through hard work.",
  "Show me your sweat and I will show you your wealth; Show me how dirty your hands are and I will show you how much money you can count.",
  "Creative wisdom is the ability to generate ideas that you can sell. The most expensive products in the world are ideas. The shirt, tie, cuffs and trousers we wear are other peoples’ ideas we have bought.",
  "Poverty is the buying of other peoples’ ideas without selling any of your own. If I buy other peoples’ ideas but do not sell my own ideas, I am going to be very poor. Creative wisdom helps you create your own ideas and sell them.",
  "Just one idea and now my children can tell me where they want to spend their holidays. They can even tell me which car they want to ride in to school. It is all based on one idea. What is your own?",
  "Divine wisdom is the one most important wisdom you must seek at all cost. When God touches your reasoning and thinking faculties, you receive divine wisdom. All the other types of wisdom are limited without divine wisdom. Divine wisdom enables you to make effective decisions.",
  "Great men always seek the opinion of God before they do anything. I do not do things just because there is an opportunity; I do them because I have divine approval.",
  "Sometimes when God speaks, it does not make sense. Some people try to use logic to explain what God says. Do not make decisions in life without praying. Pray and when you feel confident about what you want to do, move with your chest out and do it.",
  "Anytime you have a decision to make, remember that you have alternatives. Yes, you always have alternatives. For instance, if you desire to marry from your church, you have to make sure that you do a proper analysis of the person you want to marry. Call it potential partner analysis, if you will.",
  "Take your time. Do not rush. And study the person. Some of you suffer from overzealousness. Some men throw words around carelessly as if they were stones. You have to be careful of the number of women you propose to in your life.",
  "Before you make any decision, think of the options available to you. Do not jump into a business when you have money just because people say it is good. To enter into any kind of business, you have to study it carefully. Do not think because some are succeeding in that line of business you will succeed at it.",
  "Take time, and think through every decision, considering all your alternatives before making any conclusion in your life.",
  "Those who live for today never see tomorrow. Before you make any decision ask yourself, how would my decision turn out tomorrow? Do not let today’s pressures determine your choices. The decisions you make today determine your tomorrow.",
  "Your intuition is the still small voice you perceive all alone. It guides you. Do not make decisions because you are happy, sad, or lonely. Combine your intuition with logic. Sit down, think and analyze.",
  "When a judge sits in judgment over a case, a person crying does not move him or her. He looks at the evidence logically.",
  "Chance would happen to you, you do not have to make it happen. Do not build your life on chance. Do not tell yourself I will do this or that next week, if a particular thing happens.",
  "Your wife, your children and all your family love you. Do not make decisions as if you are the only one living.",
  "Suppose you’re a Christian caught with cocaine, how does it affect your church, your family, your children and your parents? If the newspaper puts your portrait on the cover page, what effect would it have on your children at school?",
  "Look at your life today, is someone proud of you? Or is someone disappointed in you? Is someone’s heart breaking because of the decisions that you have made?",
  "Decide to move forward and not backwards. There are people that believe in you and you cannot afford to disappoint them.",
  "Life is a puzzle with only one solution- Decisions! The more positive your decisions are, the more you enjoy life. The more negative your decisions are the more puzzling life is for you.",
  "You’re your decisions. Make right decisions! Be wise; make the right choices and decisions and live happily ever after. BE WISE!",
  "The perception that people have about a person, a service or a product is vital to how that person is received or how that product or service is appreciated.",
  "The image of a person, according to the Encarta Encyclopedia, 2008, is the actual or mental picture or likeness of somebody or something either produced or formed in the mind.",
  "Because people form opinions about the image of a product, a person or a thing, everyone ought to be concerned about his or her public image or the image of his or her products and/or services.",
  "No matter the level of exposure you enjoy in public or no matter how exposed a product or service may be, there is always the need to be concerned about the public’s perception of the image you present.",
  "Notwithstanding, it is important to know what people say about you because it matters. In your business community, as a businessman in your corporate office, who do people say you are?",
  "Building a self-image that sells is an attempt at influencing what people say you’re in a positive direction. If I am to buy a watch from someone, even though I might like the watch so much and really want to buy it, I must ask myself who is selling this watch to me? Is he credible? Am I buying the watch from a trustworthy person? Will I have issues of people coming up to me claiming that the watch I have on belongs to them?",
  "You must understand that people do not just buy what you sell, they buy you as well! Somebody might come to me with a nice business idea and say he wants to partner with me. I may appreciate the business concept, I may like it, but the image of the one in question is important and cannot be overlooked.",
  "You may have developed very wonderful skills, and as a result you apply for a job. A glance at your qualifications a lone impresses all. Perhaps you have an MBA from Yale in the United States or may be you majored in Economics so very bank would like to have you. But in your curriculum vitae, you’re required to give the names of referees because your prospective employers would also like to know the person behind the flawless curriculum vitae.",
  "I agree, you may leave a place because your expectations are not being met. But if you tell me you have a problem with all of the people you have worked for, then it makes me wonder.",
  "Everywhere you go with your curriculum vitae, people would want to know the man behind the skills. And for this, it is very important that you work on your image. You have to make sure that you create a very good perception and impression about yourself in the circles that you move and operate in.",
  "Somebody said, “charisma may take you up, (but if you’re not careful), character will bring you down”. That is why even Jesus was concerned about what people said about him. Who do people say you are?",
  "If you have worked with several people and there is always trouble and even in the circles where you work, everybody has one complaint or the other about you, then there is something terribly wrong.",
  "You may have an attitude and say “I don’t care” but I assure you, one day you will care. Somebody would like to know how you related with your business partners before they go into business with you.",
  "Who have you worked with before? Who has ever been your partner? Let them say something about you. Your reference is of utmost importance.",
  "It is very important that you strive to build an image for yourself. It is not possible for everybody to praise you; however, the whole world should not be against you.",
  "The business community, the church and your neighborhood is a very small world. When you move from one place to another, you’re likely to meet the same people and that is where your character and self-image should testify for you.",
  "There are only few things that are better than money: a good wife, a good church and a good name. You cannot prefer one to the other; all three are essential in life yet they cannot serve as replacements for your financial wellbeing.",
  "In essence, you’re more powerful if you have riches and a good name. As a growing and successful businessman, build your image on principles of honesty and trustworthiness. When people begin to question the success you have, then there is something wrong.",
  "But a pastor does not deal with God only. He deals also with man. And as the scripture points out, God looks at the heart of man, but man looks at his appearance. So while man makes his heart right to meet the expectations of God, he must make his appearance right to meet the expectations of man.",
  "When you walk out of your prayer closet to discuss business with men, know that men do not look at your heart, they look at appearance. Thus to obtain favor before men and before God, there are two things you should do. One, you must work on your heart and two, your appearance.",
  "As a corporate personality, your image is very vital to your success. Your outward appearance is a powerful influence. It can influence decisions and people both positively and/or negatively.",
  "You cannot go to an important business meeting without looking good and confident. When you are dressed well and look healthy, you have confidence.",
  "It is important to speak in tongues, fast and do the right things before God. But doing the right thing before Man is equally important.",
  "Lets suppose that someone has a bad body odor or he smells of cigarettes and alcohol always, I am sure you would not want to do business with such a person. If you have any business partner who takes alcohol, cut him off because one day he will get drunk and start revealing business secrets to anyone that will listen. Or if you have a business partner who likes women do away with him. One day he will divulge all your business secrets to a woman.",
  "There is a business dress code in the business world. It is not everything you can wear in transacting business. Your clothes, as a serious businessman, should connote dignity and honor. You cannot transact business in tracksuit.",
  "As a Christian, you are expected to exemplify your status by dressing properly and appearing decent at all times. Your hair should be neat you should be clean. Even if you do have money, you should be neat and dignified. The way you dress gives people impressions about you.",
  "Women must not expose themselves when they go to business meetings, it does not give a proper opinion about them. If you go to a meeting dressed like a ‘Jezebel, decent people will not talk to you because they will believe you have come to seduce them into making decisions they should not be making.",
  "People are losing contracts and lots of money because of the way they dress. A true Christian is always properly dressed. Christians do not go out with their unkempt and their clothes ruffled up or without a bath.",
  "Even when you don’t have money, you can dress in neat and clean clothing. It is amazing to see people say they are Christians yet go about wearing un-ironed clothing. Even if there is power failure, you ought to find a way to dress properly.",
  "How can people who do not dress properly trust God to make them big businessmen? If God deems it vital for the priest to be clad in proper clothing, then you being ‘Christ-like’ must do likewise.",
  "The Casual business dress could be a nice pair of jeans with a T-shirt you can wear when you do not want to appear over-dressed during the weekend, for instance. Perhaps you are expecting a businessman who is coming for a meeting over the week. You do not wear these clothing to transact important business.",
  "If you’re a woman and your thighs are big and you have a big figure, you should not be wearing tight jeans. People who see you should approve of your dressing.",
  "Do not go for a meeting on a weekend dressed as if you are going for a meeting on a weekday.",
  "Some of the make-ups women wear give different impressions about them. It is important that you do not copy everything you see in magazines, especially if you do not know the work those women do.",
  "The Semi-formal business dress is used during the week. Per chance you have a meeting after office hours but do not want to go clad in office wear; so you wear something that is not too formal but at the same time not casual.",
  "If you want to dress like a good businessperson, you have to buy quality fabrics. Your shirts especially should be very good and neat for semi-formal meetings. Sleeveless shirts or tops are not good for businesswomen.",
  "If you want to wear a thin strap sleeve top to a business meeting, you should also have a shawl to go with it. As a woman, you do not have to draw unnecessary attention to yourself.",
  "One of the attitudes of people who have inferiority complex is that they dress to attract unnecessary attention.",
  "The formal business gear is a suit. No matter how traditional you are the suit is a business outfit. It has stopped being a western dress.",
  "It is amazing how people argue that we should wear our native clothes to all manner of business meetings. Sometimes you build your image to a level that no matter what you wear people will accept it. If Nelson Mandela wears a shirt to a business meeting, people will look beyond the shirt to see Nelson Mandela.",
  "Normally it is not alright for a man to wear a red suit to a business meeting. A man can wear a red suit or a pink suit to church but he should not wear such a suit to a business meeting. Colors are important.",
  "A lady can wear either red or pink to a business meeting. Dark suits like blue-black and brown connote seriousness. People can tell the kind of person you are by the colors you wear. If you wear black it could mean you’re domineering or you have leadership qualities and white could mean you are calm and submissive.",
  "Colors have a way of influencing the way people relate to you. If you are meeting with a female chief executive, you should dress accordingly. Do not say because you are dealing with a female you will wear a pink suit. You could offend a woman if you dress like that.",
  "You should have nice shirts with similar colored ties to match. Single or double color ties are good for business but multiple colored ties are not really good for business meetings.",
  "You should learn how to knot your ties, whether the American style or British style, learn to knot your tie well.",
  "When choosing a pair of shoes, make sure that they match your belt. A black leather watch would go with a pair of black shoes. A chain watch is good if it is silver. Your shoes, belt and watchstrap should match. Don’t wear colors that are too gay.",
  "Make sure your hair is always kept clean. Choose your barbers; don’t let your barber choose you. You must take care of your hair. Wherever there is hair on your body you ought to take care of it.",
  "Ladies should have a good salon where they take good care of their hair. If you want to have a strong and powerful business personality, you must take care of your hair. It should always look nice.",
  "Fashion is not what everybody else is doing; it is what looks nice on you. What people are doing may not necessarily look nice on you. The shape of your head determines the style you need for your hair. Women with long faces should not wear high hairstyles.",
  "Keep your shoes clean. Make sure your shoes match with your belt. No matter how good your shoes are, if they are dirty, it does not give a good image of you. You can carry rags or brushes around in your car to make sure that they are kept clean.",
  "It is not good for a man to have long fingernails. Women do not like men who have long fingernails. It is nice for women to wear nail varnish, but they should choose their colors well. Do not be a caricature wearing colors that offend your business partners.",
  "Make sure your breath is fresh when you go for meetings. Do not go for any meeting with a smelly mouth. There are many mouth fresheners and mint gums that you can use to make sure your breath stay fresh.",
  "Make sure to check your body odor. There are lots of deodorants and perfumes you can use. But make sure that you are not offended by the perfume or deodorant that you use.",
  "Perfumes for men are usually different from those of ladies. Such products must, however be used a little. A man should not walk into a business meeting smelling like a perfume factory neither should a woman.",
  "Have high quality accessories like pens, memo pads and leather bags. Try and get good pens for important meetings. You should carry powerful leather bags; you could also carry a good brief case.",
  "If you have a good bag for business and you go for a meeting with good accessories, people will judge you based on your accessories even if they do not see your office.",
  "Stay clear of cigarettes and alcohol. Cigarettes age your skin. Your mouth and fingernails become dark and people form negative opinions about you.",
  "The strategy the devil has mastered and is using against man is the use of fear as a psychological weapon.",
  "Training and education is an integral part of our development as human beings. Those of us who want to develop our Curriculum Vitae should never stop seeking opportunities to develop ourselves.",
  "One of the reasons why Africans are poor is that like ‘Father Christmas’, they love doing things for free. David wanted to know what his reward would be if he killed Goliath. People must learn to pay for the value you have added to yourself.",
  "As a Christian beautician, if you decide to freely offer your skill to all ladies who visit your shop because they fellowship with you, you are depriving yourself of your prosperity and you are denying the church the use of your tithe for the furtherance of the gospel.",
  "Money is reward for solving problems. Each person’s attitude should be: “I have value and a CV and I want to make sure that whatever I am going to do, the reward reflects my value and my CV”.",
  "Your CV is a reflection of your worth. It is a summary of the value you have added to yourself. There are two kinds of people with CV’s. Ask one group to write theirs and they will come up with a quarter of an A4 sheet, whereas the other group would come up with a book for you to read.",
  "King Saul looked at David from the physical point of view. He made a terrible mistake. A man’s greatest asset is not always displayed in his physical appearance.",
  "If you show your CV, people who look at it would be able to tell you what you can do now. You can’t just come and say, “Sir, I want to come and play in your football team”. Of course the coach would ask, “In which team have you played before?” And then you would say you have not played in any team before, but you know you can play. How do you know?",
  "Unskilled people are those who have remained the same from birth; they have no skill. Even if their country becomes highly industrialized with oil flowing from every pipe in their houses, an unskilled person would not get a good job.",
  "The dynamics of the job market determine the mode of hiring personnel. The market demand is, however, tilted much more to engaging skilled labor than unskilled.",
  "The employment terrain has become very specialized and therefore people with professional training and skills are preferred to the unskilled.",
  "The Semi-skilled are partially trained people who usually hang in there. Things are changing and yet, you remain partially trained. A lot of technological developments are occurring on a daily basis such that it is difficult for people who are not well trained to cope in modern business.",
  "These days there are all kinds of advancements, as a result secretaries for instance, who trained, as stenographers would find it difficult to fit into this rapidly developing system. They need to update their skills and training.",
  "Anyone can be a chairman or president of a company, but to legitimize your position you should have some professional qualification. You ought to move from the minimum wage level to a higher level of value where people will chase you with job offers.",
  "The Skilled are people who have trained themselves through a first degree and beyond. You give them work to do and they achieve it with minimum supervision.",
  "If you want to have a meeting where you are going to discuss things that are highly technical, you should know the kind of people that you are going to call to such gathering. You cannot call just anybody.",
  "Peoples’ skills speak for them. For instance, if you’re interested in raising funds for a developmental project in your office or association, you do not just call everybody that is available. You look for people that understand the language of marketing, finance and investment and you bring them together.",
  "Based on their training, the skilled would be able to contribute meaningfully to your discussions and this would make sure that you get a proper strategic plan for your desired development project.",
  "There are also people that can be described as multi-talented. They know various things and if you take them on to manage companies they will do it efficiently.",
  "Politics is not a qualification. People need proper qualifications before they go into politics. You cannot expect to be appointed as a managing director of a company based on your political career. We should all try to develop ourselves.",
  "The apprenticeship Stage is the stage in which you learn and develop your skills. Sometimes when we see some of our skills being manifested while still learning we think that we know it all.",
  "If your preoccupation or desired career requires that you spend more time in the classroom or at your training position, do not be in a hurry to leave. Humble yourself and learn those things that would make you complete.",
  "Jesus spent thirty years preparing for a three-and-a half years’ ministry. These days’ young pastors want to spend one year or six months in training. It doesn’t work that way.",
  "The Skilled Employment stage is when you are employed by someone to run a business or carry out a particular job.",
  "A good employer works hard to make sure that his boss succeeds. Your boss’ success is a reflection of your commitment. If you work for someone now and your employer’s statements, actions and gestures dissuade you from carrying out your duty properly, then you’re making a great mistake.",
  "If you decide that because of the way your boss talks to you, you will not do his work well, then you will find out that not doing your work well will eventually become a habit, which would manifest when you are into your own business.",
  "Do not let people deceive you that your boss is cheating you, because perhaps you do not have a car and your boss is driving one.",
  "Do not listen to people who try to make you feel that you are being cheated. Business owners do not pay people based on the money they make; they pay people based on the value they bring to their business.",
  "The Entrepreneurial stage is the stage you attain enough training and skill and are in a position to employ people.",
  "You do not just wake up one day and say that you’re going into business; you need to have a period of training and experience, which would guide you and enable you to run a business successfully.",
  "Character development is an intentional and strategic effort to positively influence your behavior and enhance your reputation in order to earn respect. There are two kinds of behavior: Wise Behavior and Foolish Behavior.",
  "There are three things you need to take note of in your quest to grow and succeed in life. These are your personality, temperament and character.",
  "Your personality is what you show outside; what you wish people to believe you’re. People draw their conclusions about your personality from the way you carry yourself, smile and relate with people around you.",
  "The way people present themselves in public domains is quite different from what they do in private. In public, it is only the things we wish people to see that they actually see. Personality differs from character.",
  "If you’re not married, don’t judge your proposed partner by his or her personality. Seek to know what character that person has or else you could end up being married to a personality and when character emerges you would be shocked out of your very existence.",
  "Temperament is an inborn trait that you may have picked up from your relatives. Inherited behavior is temperament. There are certain things like quarrelsomeness, which you can inherit from your father or mother. You do not acquire them; they are inborn. That notwithstanding, you ought not to believe that it is right for you to keep on behaving that way because you met it in the family.",
  "Some families never had a successful business because of their temperament. If you have a father who is quick-tempered, you would find out that it would be difficult for him to go into business with people around him because of his temper.",
  "Anytime your father enters a business agreement with people he would fight with them. If you find that you do the same thing, you ought to carefully deal with it. There are definitely more attractive things to inherit.",
  "Character is the modification of your temperament as a result of education, experience and various other factors in life.",
  "Your CV can earn you a very good position in life. It can earn you business opportunities and contracts. Your personality and grooming might earn you certain business opportunities but your character can cost you all. So while you’re improving on your CV, you ought to build on your character.",
  "Your behavior today, as a grown up, is traceable to the way you were trained. And as a grown up, what you are not turning away from is a reflection of how you were trained.",
  "If you have a good or bad character today, it is traceable to the way you were brought up. To be able to cultivate a good character you ought to sit down and look at the way you were brought up.",
  "Some people are brought up in homes where there are no leaders. Their parents are irresponsible and they live a carefree life so they don’t really care about what their children do.",
  "Some people were not instructed when growing up, nobody nurtured them. That is probably why today they find it difficult taking instructions. At the sound of instructions, they feel that they’re being suppressed.",
  "If you’re in business and you’re dealing with people there will come a time when your business partner will have to instruct you. There will come a time when you will have to submit to someone else’s authority.",
  "May be you grew up in a broken home. You did not grow up with a father or mother. Perhaps you have not experienced motherly love before or it could be that your father disappointed your mother and you did not experience fatherly attention.",
  "Or may be your mother transferred the aggressive hate she had for your father onto you because you look like your father. At the slightest mistake she slaps you or beats you mercilessly. All these can influence your behavior while you grow up. You will carry it into marriage, your business and even your church.",
  "Whenever your pastor gives instructions, you find it difficult to obey, or sometimes when the usher shows you where to sit in church, you refuse. It could be because you have not lived an instructed life.",
  ];

}
