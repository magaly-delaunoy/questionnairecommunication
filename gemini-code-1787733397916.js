const questionSets = {
  couple: [
    {
      text: "Quand ton/ta partenaire te dit quelque chose qui te contrarie…",
      options: [
        { t:"Tu ravales, tu n'en parles pas, tu rumines de ton côté.", p:1 },
        { t:"Tu réagis à chaud, le ton monte assez vite.", p:2 },
        { t:"Tu hausses les épaules, tu laisses filer sans vraiment réagir.", p:3 },
        { t:"Tu en parles calmement, sur le moment ou un peu après.", p:4 },
      ]
    },
    {
      text: "Dans une dispute de couple, ton regard…",
      options: [
        { t:"Fuit, tu évites de croiser le sien.", p:1 },
        { t:"Est direct, presque un défi.", p:2 },
        { t:"Se perd, tu décroches.", p:3 },
        { t:"Reste posé sur l'autre, même si le ton monte un peu.", p:4 },
      ]
    },
    {
      text: "Ta voix, dans une conversation de couple tendue…",
      options: [
        { t:"Se fait toute petite, presque inaudible.", p:1 },
        { t:"Monte plus vite que tu ne le voudrais.", p:2 },
        { t:"Reste plate, sans grand relief : « on verra ».", p:3 },
        { t:"Reste posée, même si le rythme s'accélère.", p:4 },
      ]
    },
    {
      text: "La phrase que tu te surprends à penser (ou dire) le plus souvent…",
      options: [
        { t:"« Ça n'a pas d'importance. » (tu gardes pour toi)", p:1 },
        { t:"« Tu ne m'écoutes jamais ! »", p:2 },
        { t:"« De toute façon, ça ne sert à rien d'en parler. »", p:3 },
        { t:"« Aide-moi à comprendre ce que tu ressens. »", p:4 },
      ]
    },
    {
      text: "Face à un vrai changement dans le couple (organisation, projet, désaccord de fond)…",
      options: [
        { t:"Tu redoutes, tu appréhendes en silence.", p:1 },
        { t:"Tu veux que ça se passe à ta façon, tout de suite.", p:2 },
        { t:"Tu subis, tu attends de voir ce que l'autre décide.", p:3 },
        { t:"Tu es curieux(se) de voir comment vous pouvez construire ça ensemble.", p:4 },
      ]
    },
    {
      text: "Quand ton/ta partenaire te contredit…",
      options: [
        { t:"Tu te refermes, tu évites d'aller au clash.", p:1 },
        { t:"Tu défends ta position fermement, sans lâcher.", p:2 },
        { t:"Tu acquiesces pour que ça s'arrête, même pas convaincu(e).", p:3 },
        { t:"Tu es curieux(se) d'entendre son point de vue.", p:4 },
      ]
    },
    {
      text: "Tes mains et ton corps, dans une discussion importante en couple…",
      options: [
        { t:"Se referment, bras croisés ou mains cachées.", p:1 },
        { t:"S'agitent, pointent, ponctuent chaque mot avec force.", p:2 },
        { t:"Ne font pas grand-chose, tu suis sans conviction.", p:3 },
        { t:"Restent ouvertes, tournées vers l'autre.", p:4 },
      ]
    },
    {
      text: "Ce que ton/ta partenaire te dit souvent…",
      options: [
        { t:"« Tu ne me dis jamais ce qui ne va pas. »", p:1 },
        { t:"« Dès que ça monte, tu montes aussi. »", p:2 },
        { t:"« Tu dis oui, mais je sens que tu ne le penses pas. »", p:3 },
        { t:"« Avec toi, on peut vraiment parler. »", p:4 },
      ]
    }
  ],
  famille: [
    {
      text: "Face à un désaccord avec ton enfant (devoirs, écrans, coucher)…",
      options: [
        { t:"Tu évites d'insister, tu laisses filer pour ne pas envenimer.", p:1 },
        { t:"Tu hausses le ton assez vite pour que ça s'arrête.", p:2 },
        { t:"Tu répètes la même chose sans grande conviction : « ça ne sert à rien ».", p:3 },
        { t:"Tu cherches à comprendre ce qui se passe avant de trancher.", p:4 },
      ]
    },
    {
      text: "Dans une discussion de famille qui s'échauffe, ton regard…",
      options: [
        { t:"Fuit, tu évites de croiser les regards.", p:1 },
        { t:"Est dur, direct, presque insistant.", p:2 },
        { t:"Se perd, tu décroches facilement.", p:3 },
        { t:"Reste posé, tu regardes vraiment celui ou celle qui parle.", p:4 },
      ]
    },
    {
      text: "Ta voix, dans une conversation familiale tendue…",
      options: [
        { t:"Se fait toute petite, presque inaudible.", p:1 },
        { t:"Monte plus vite que tu ne le voudrais.", p:2 },
        { t:"Reste plate, sans grand relief : « on verra ».", p:3 },
        { t:"Reste posée, même si le rythme s'accélère.", p:4 },
      ]
    },
    {
      text: "La phrase que tu te surprends à penser (ou dire) le plus souvent, à la maison…",
      options: [
        { t:"« Ça n'a pas d'importance. » (tu gardes pour toi)", p:1 },
        { t:"« Vous ne m'écoutez jamais ! »", p:2 },
        { t:"« De toute façon, ça ne sert à rien d'en parler. »", p:3 },
        { t:"« Aide-moi à comprendre ce qui se passe pour toi. »", p:4 },
      ]
    },
    {
      text: "Face à un changement dans la famille (nouveau rythme, déménagement, réorganisation)…",
      options: [
        { t:"Tu redoutes, tu appréhendes en silence.", p:1 },
        { t:"Tu veux que ça se passe à ta façon, tout de suite.", p:2 },
        { t:"Tu subis, tu attends de voir ce que les autres décident.", p:3 },
        { t:"Tu es curieux(se) de voir comment ça peut se construire ensemble.", p:4 },
      ]
    },
    {
      text: "Quand un membre de ta famille te contredit…",
      options: [
        { t:"Tu te refermes, tu évites d'aller au clash.", p:1 },
        { t:"Tu défends ta position fermement, sans lâcher.", p:2 },
        { t:"Tu acquiesces pour que ça s'arrête, même pas convaincu(e).", p:3 },
        { t:"Tu es curieux(se) d'entendre son point de vue.", p:4 },
      ]
    },
    {
      text: "Tes mains et ton corps, dans une discussion familiale importante…",
      options: [
        { t:"Se referment, bras croisés ou mains cachées.", p:1 },
        { t:"S'agitent, pointent, ponctuent chaque mot avec force.", p:2 },
        { t:"Ne font pas grand-chose, tu suis sans conviction.", p:3 },
        { t:"Restent ouvertes, tournées vers l'autre.", p:4 },
      ]
    },
    {
      text: "Ce qu'on te dit souvent, à la maison…",
      options: [
        { t:"« Tu ne dis jamais ce qui ne va pas. »", p:1 },
        { t:"« Dès que ça monte, tu montes aussi. »", p:2 },
        { t:"« Tu dis oui, mais on sent que tu ne le penses pas. »", p:3 },
        { t:"« Avec toi, on peut vraiment parler. »", p:4 },
      ]
    }
  ]
};

const profileSets = {
  couple: {
    1:{ name:"Le Silencieux", color:"var(--q1)",
      desc:"En couple, tu es celui ou celle qui encaisse en silence. Face à une contrariété, tu préfères te taire plutôt que de risquer la friction — quitte à garder les choses pour toi bien plus longtemps qu'il ne le faudrait. C'est la « zone de dissimulation » : peu d'énergie visible, une attention tournée vers soi.",
      forces:["Tu évites d'ajouter de la tension inutile au couple","Tu observes beaucoup, souvent plus que ton/ta partenaire ne le croit","Ta présence est apaisante quand tout le monde s'agite"],
      vigilance:["L'omission est ton piège n°1 : « ça n'a pas d'importance » alors que si","Ton/ta partenaire peut finir par deviner mal, faute d'avoir pu t'entendre","Le risque : accumuler en silence jusqu'à ce que ça déborde d'un coup"],
      cta:"Si tu te reconnais dans ce profil, tu portes probablement plus de choses non-dites que tu ne le penses. Un espace pour poser ta voix — avant que ça déborde — ça change une relation." },
    2:{ name:"L'Intense", color:"var(--q2)",
      desc:"Tu as de l'énergie dans le couple, et ça se sent vite. Mais quand la tension monte, cette énergie se retourne en agacement ou en besoin d'avoir raison. C'est la « zone d'affrontement » : beaucoup de tonus, mais encore centré sur soi plutôt que sur l'échange.",
      forces:["Rien ne traîne, on sait toujours où tu en es","Ta franchise évite les non-dits qui s'accumulent","Ton énergie, bien dirigée, est un vrai moteur pour le couple"],
      vigilance:["La généralisation est ton piège n°1 : « tu ne m'écoutes JAMAIS »","Le besoin d'avoir raison prend parfois toute la place dans l'échange","Le risque : gagner la dispute et laisser une vraie distance derrière"],
      cta:"Si tu te reconnais dans ce profil, ton énergie est une vraie ressource pour ton couple — encore faut-il apprendre à la tourner vers l'écoute plutôt que vers le rapport de force." },
    3:{ name:"Le Conciliant", color:"var(--q3)",
      desc:"Tu es disponible pour ton/ta partenaire, tu évites de faire des vagues. Mais cette ouverture manque de tonus : tu dis oui pour que ça s'arrête, tu suis plus que tu ne construis. C'est la « zone d'inertie » : de l'ouverture, mais peu d'énergie derrière.",
      forces:["Tu désamorces naturellement les tensions du quotidien","Ton/ta partenaire se sent rarement jugé(e) par toi","Tu es sincèrement à l'écoute, même sans le montrer fort"],
      vigilance:["La distorsion guette : tu interprètes plus que tu ne demandes","Tu dis parfois oui à des choses qui ne te conviennent pas vraiment","Le risque : t'effacer dans le couple, jusqu'à ne plus savoir ce que toi tu veux"],
      cta:"Si tu te reconnais dans ce profil, tu as sans doute plus envie d'exprimer tes besoins que tu ne l'oses aujourd'hui. C'est exactement le genre de déclic qu'un accompagnement peut débloquer." },
    4:{ name:"Le Passerelle", color:"var(--q4)",
      desc:"Dans ton couple, ce que tu dis et ce que tu fais se rejoignent, et ça se sent. Tu es à la fois énergique et tourné(e) vers l'autre. C'est la « zone de concordance », celle où l'échange coule naturally — celle vers laquelle tous les couples tendent.",
      forces:["Ta cohérence installe une vraie confiance dans le couple","Tu écoutes vraiment, pas juste pour répondre","Tu sais transformer un désaccord en vraie conversation"],
      vigilance:["Rester dans cette zone demande un entretien constant, pas un acquis définitif","Être toujours le/la « pilier » du couple peut t'épuiser en silence","Le risque : oublier de demander pour toi, à force de porter l'équilibre à deux"],
      cta:"Si tu te reconnais dans ce profil, votre couple a déjà de belles bases. Un accompagnement ne serait pas là pour « réparer », mais pour aller encore plus loin, ensemble." },
  },
  famille: {
    1:{ name:"Le Silencieux", color:"var(--q1)",
      desc:"En famille, tu es celui ou celle qui encaisse en silence. Face à une tension avec un enfant ou un proche, tu préfères te taire plutôt que de risquer le conflit — quitte à garder les choses pour toi bien plus longtemps qu'il ne le faudrait. C'est la « zone de dissimulation » : peu d'énergie visible, une attention tournée vers soi.",
      forces:["Tu évites d'ajouter de la tension inutile à la maison","Tu observes beaucoup, souvent plus qu'on ne le croit","Ta présence est apaisante quand tout le monde s'agite"],
      vigilance:["L'omission est ton piège n°1 : « ça n'a pas d'importance » alors que si","Tes proches peuvent finir par deviner mal, faute d'avoir pu t'entendre","Le risque : accumuler en silence jusqu'à ce que ça déborde d'un coup"],
      cta:"Si tu te reconnais dans ce profil, tu portes probablement plus de choses non-dites que tu ne le penses. Un espace pour poser ta voix — avant que ça déborde — ça change beaucoup à la maison." },
    2:{ name:"L'Intense", color:"var(--q2)",
      desc:"Tu as de l'énergie en famille, et ça se sent vite. Mais quand la tension monte (devoirs, écrans, désordre…), cette énergie se retourne en agacement. C'est la « zone d'affrontement » : beaucoup de tonus, mais encore centré sur soi plutôt que sur l'échange.",
      forces:["Rien ne traîne, on sait toujours où tu en es","Ta franchise évite les non-dits qui s'accumulent","Ton énergie, bien dirigée, est un vrai moteur pour toute la famille"],
      vigilance:["La généralisation est ton piège n°1 : « vous ne m'écoutes JAMAIS »","Le besoin d'avoir raison prend parfois toute la place dans l'échange","Le risque : gagner la discussion et laisser une vraie distance derrière"],
      cta:"Si tu te reconnais dans ce profil, ton énergie est une vraie ressource pour ta famille — encore faut-il apprendre à la tourner vers l'écoute plutôt que vers le rapport de force." },
    3:{ name:"Le Conciliant", color:"var(--q3)",
      desc:"Tu es disponible pour tes proches, tu évites de faire des vagues. Mais cette ouverture manque de tonus : tu dis oui pour que ça s'arrête, tu suis plus que tu ne poses de cadre. C'est la « zone d'inertie » : de l'ouverture, mais peu d'énergie derrière.",
      forces:["Tu désamorces naturellement les tensions du quotidien","Tes enfants ou tes proches se sentent rarement jugés par toi","Tu es sincèrement à l'écoute, même sans le montrer fort"],
      vigilance:["La distorsion guette : tu interprètes plus que tu ne demandes","Tu dis parfois oui à des choses qui ne te conviennent pas vraiment","Le risque : t'effacer dans la famille, jusqu'à ne plus savoir poser tes limites"],
      cta:"Si tu te reconnais dans ce profil, tu as sans doute plus envie d'affirmer un cadre que tu ne l'oses aujourd'hui. C'est exactement le genre de déclic qu'un accompagnement peut débloquer." },
    4:{ name:"Le Passerelle", color:"var(--q4)",
      desc:"Dans ta famille, ce que tu dis et ce que tu fais se rejoignent, et ça se sent. Tu es à la fois énergique et tourné(e) vers l'autre. C'est la « zone de concordance », celle où l'échange coule naturellement — celle vers laquelle toutes les familles tendent.",
      forces:["Ta cohérence installe une vraie confiance à la maison","Tu écoutes vraiment, pas juste pour répondre","Tu sais transformer un désaccord en vraie conversation"],
      vigilance:["Rester dans cette zone demande un entretien constant, pas un acquis définitif","Être toujours le/la « pilier » de la famille peut t'épuiser en silence","Le risque : oublier de demander pour toi, à force de porter l'équilibre de tous"],
      cta:"Si tu te reconnais dans ce profil, ta famille a déjà de belles bases. Un accompagnement ne serait pas là pour « réparer », mais pour aller encore plus loin, ensemble." },
  }
};

let mode = 'couple';
let current = 0;
let scores = {1:0,2:0,3:0,4:0};
let history = [];

function setMode(m){
  mode = m;
  document.getElementById('modeCouple').classList.toggle('active', m==='couple');
  document.getElementById('modeFamille').classList.toggle('active', m==='famille');
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0, behavior:'instant'});
}

function currentQuestions(){ return questionSets[mode]; }

function startQuiz(){
  current = 0;
  scores = {1:0,2:0,3:0,4:0};
  history = [];
  buildProgress();
  renderQuestion();
  showScreen('screen-quiz');
}

function resetToStart(){
  showScreen('screen-start');
}

function buildProgress(){
  const el = document.getElementById('progress');
  el.innerHTML = '';
  currentQuestions().forEach(()=>{
    const span = document.createElement('span');
    span.innerHTML = '<i></i>';
    el.appendChild(span);
  });
}

function updateProgress(){
  const bars = document.querySelectorAll('#progress i');
  bars.forEach((b,i)=>{ b.style.width = i < current ? '100%' : (i===current ? '35%' : '0%'); });
}

function renderQuestion(){
  const qs = currentQuestions();
  const q = qs[current];
  document.getElementById('qnum').textContent = `Question ${current+1} / ${qs.length}`;
  document.getElementById('qtext').textContent = q.text;
  const wrap = document.getElementById('options');
  wrap.innerHTML = '';
  q.options.forEach(opt=>{
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.textContent = opt.t;
    btn.onclick = ()=>selectOption(opt.p);
    wrap.appendChild(btn);
  });
  document.getElementById('backBtn').style.visibility = current===0 ? 'hidden' : 'visible';
  updateProgress();
}

function selectOption(p){
  scores[p] += 1;
  history.push(p);
  current++;
  if(current < currentQuestions().length){
    renderQuestion();
  } else {
    showResult();
  }
}

function goBack(){
  if(current===0) return;
  current--;
  const last = history.pop();
  if(last) scores[last] -= 1;
  renderQuestion();
}

function showResult(){
  let winner = 4, best = -1;
  [1,2,3,4].forEach(k=>{ if(scores[k] > best){ best = scores[k]; winner = k; } });

  const coords = {1:[0,0], 2:[0,1], 3:[1,0], 4:[1,1]};
  let sx=0, sy=0, total=0;
  [1,2,3,4].forEach(k=>{
    sx += coords[k][0]*scores[k];
    sy += coords[k][1]*scores[k];
    total += scores[k];
  });
  const avgX = total ? sx/total : 0.5;
  const avgY = total ? sy/total : 0.5;
  const svgX = 25 + avgX*150;
  const svgY = 175 - avgY*150;

  const profile = profileSets[mode][winner];

  document.getElementById('resultName').textContent = profile.name;
  document.getElementById('resultDesc').textContent = profile.desc;
  document.getElementById('resultTag').textContent = mode === 'couple' ? 'Ton profil en couple' : 'Ton profil en famille';
  document.getElementById('resultTag').style.background = profile.color;

  const forcesEl = document.getElementById('resultForces');
  forcesEl.innerHTML = '';
  profile.forces.forEach(f=>{ const li=document.createElement('li'); li.textContent=f; forcesEl.appendChild(li); });

  const vigEl = document.getElementById('resultVigilance');
  vigEl.innerHTML = '';
  profile.vigilance.forEach(v=>{ const li=document.createElement('li'); li.textContent=v; vigEl.appendChild(li); });

  document.getElementById('ctaText').textContent = profile.cta;

  const needle = document.getElementById('needle');
  document.getElementById('needleDot').setAttribute('fill', profile.color);
  document.getElementById('needleColorRing').setAttribute('stroke', profile.color);

  showScreen('screen-result');

  requestAnimationFrame(()=>{
    setTimeout(()=>{
      needle.style.transform = `translate(${svgX-100}px, ${svgY-100}px) scale(1)`;
    }, 80);
  });
}