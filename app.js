// ========== DATA ==========

const defaultNewsArticles = [
  { id: 1, title: 'לנובו מרעננת את סדרת ניידי ה-ThinkPad עם חמישה דגמים חדשים', image: 'https://images.unsplash.com/photo-1531297122539-5692f69f1092?auto=format&fit=crop&q=80&w=800', category: 'מחשבים', isTop: 1, author: 'מערכת החדשות', time: 'היום, 18:30' },
  { id: 2, title: 'גוגל מציגה: תהליך אבטחה חדש להתקנת אפליקציות באנדרואיד', image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800', category: 'אבטחה', isTop: 2, author: 'מערכת החדשות', time: 'היום, 17:00' },
  { id: 3, title: 'הוכרז: Xiaomi Watch S5 - מסך גדול יותר, ועד 21 ימי סוללה', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800', category: 'שעונים חכמים', isTop: 3, author: 'מערכת החדשות', time: 'היום, 16:00' },
  { id: 4, title: 'גוגל משדרגת את מנוי ה-Google AI Pro ל-5TB, ללא תוספת תשלום', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800', author: 'מערכת החדשות', time: 'היום, 16:45', snippet: 'נקודת עיקריות גוגל משדרגת את נפח אחסון מ-2TB ל-5TB. הגדלת הנפח מתבצעת ללא שינוי במחיר, שעומד על 74.90 שקלים בישראל. המהלך נועד להפוך את התוכנית לאטרקטיבית יותר עבור משתמשים הדורשים שטח רב עבור תוצרי בינה מלאכותית...', category: 'גוגל' },
  { id: 5, title: 'וואטסאפ מזהירה: כ-200 משתמשים הורידו גרסה מזויפת עם תוכנת ריגול', image: 'https://images.unsplash.com/photo-1614064641913-6b7140414f70?auto=format&fit=crop&q=80&w=800', author: 'מערכת החדשות', time: 'היום, 15:45', snippet: 'חוקרי אבטחה מזהירים כי גרסה מזויפת של וואטסאפ עוקפת את מנגנוני ההגנה של חנות האפליקציות, במטרה לאסוף מידע אישי על המשתמשים...', category: 'אבטחה' },
  { id: 6, title: 'גוגל מכריזה על Wear OS 6.1: זיהוי מיקום עצמאי ושדרוג חשבונות ילדים', image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800', author: 'מערכת החדשות', time: 'היום, 12:12', snippet: 'העדכון משפר את יכולות השעונים החכמים, במטרה להתחרות ראש בראש עם שעוני אפל בגרסאותיהם החדשות.', category: 'גוגל' },
  { id: 7, title: 'אנבידיה מציגה את טכנולוגיית ה-Auto Shader Compilation לקיצור זמני טעינה במשחקים', image: 'https://images.unsplash.com/photo-1598550487031-0898b4852123?auto=format&fit=crop&q=80&w=800', author: 'מערכת החדשות', time: 'היום, 10:40', snippet: 'הטכנולוגיה החדשה צפויה לחסוך שניות יקרות בעת טעינת המשחק הראשונית, ומונעת כליל את צורך בדימוי גרפי מיותר מראש.', category: 'חומרה' },
  { id: 8, title: 'טלגרם מציגה: עורך טקסט מבוסס AI, שדרוג לסקרים ותמיכה בתמונות חיים', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800', author: 'מערכת החדשות', time: 'היום, 09:19', snippet: 'גרסת טלגרם החדשה כוללת חידושים בולטים הנוגעים לכלי הבינה המלאכותית ולנוחות השיתוף בפלטפורמה.', category: 'אפליקציות' }
];

const defaultPdfStoreItems = [
  {
    title: 'טרק שקיעות מרהיב בדולומיטים - איטליה',
    contact: 'Guy_Dolomiti',
    desc: 'סיפור דרך מלא ומסלול של 4 ימים בדולומיטים. נופים עוצרי נשימה, בקתות הרים מומלצות וטיפים לצילום שקיעה מושלמת!',
    age: '26',
    location: 'איטליה',
    type: 'תוכן גולשים',
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'],
    price: 'חינם',
    date: '29.05.2026'
  },
  {
    title: 'סיור קולינרי חלומי בסמטאות טראסטוורה - רומא',
    contact: 'Maya_Foodie',
    desc: 'המדריך הסודי לפיצות הכי טובות ברומא, פסטה קרבונרה אמיתית, וגלידריות שאסור לפספס. שיתוף חוויות ותמונות מעוררות תיאבון!',
    age: '23',
    location: 'רומא',
    type: 'תוכן גולשים',
    images: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800'],
    price: 'חינם',
    date: '29.05.2026'
  },
  {
    title: 'חופים סודיים ושקיעות מוזהבות בסנטוריני - יוון',
    contact: 'Dan_Explorer',
    desc: 'התרחקות מהמלכודות התיירותיות: גישה למפרצים מבודדים, שבילי הליכה נסתרים ונקודות התצפית הכי יפות לשקיעה ללא קהל.',
    age: '28',
    location: 'יוון',
    type: 'תוכן גולשים',
    images: ['https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800'],
    price: 'חינם',
    date: '29.05.2026'
  },
  {
    title: 'סופשבוע מושלם בנואבה דה צ\'יאפה - מקסיקו',
    contact: 'Ronnie_M',
    desc: 'שיתוף של תמונות ומסמכי מסלול מטיול המקסיקו המטורף שלי! נופים, מחירים והמלצות חמות.',
    age: '24',
    location: 'מקסיקו סיטי',
    type: 'תוכן גולשים',
    images: ['https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800'],
    price: 'חינם',
    date: '29.05.2026'
  },
  {
    title: 'מדריך צילום בטלפון הנייד - גרסה מלאה',
    contact: 'Alon_Visuals',
    desc: 'איך להוציא תמונות קולנועיות מהטלפון שלך. כולל הגדרות תאורה וצבע.',
    age: '29',
    location: 'תל אביב',
    type: 'מדריך',
    images: ['https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800'],
    price: '15',
    date: '28.05.2026'
  },
  {
    title: '4K Cute Pajama Haul + Hello Kitty Bikini Try-On',
    contact: 'baby_carrie',
    desc: 'סרטון פרימיום קצר של מדידות והמלצות אופנה.',
    age: '21',
    location: 'לוס אנג\'לס',
    type: 'סרטון',
    images: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800'],
    price: 'חינם',
    date: '27.05.2026'
  },
  {
    title: 'אוסף פילטרים מקצועיים ל-Lightroom Mobile',
    contact: 'Lior_Presets',
    desc: 'חבילה של 5 פילטרים בעיצוב Apple כהה ויוקרתי לעריכה מהירה.',
    age: '26',
    location: 'חיפה',
    type: 'תוכנה',
    images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'],
    price: '25',
    date: '26.05.2026'
  },
  {
    title: 'ספר מסע: הרפתקה בטרק האנאפורנה - נפאל',
    contact: 'Amit_Trek',
    desc: 'יומן מסע מפורט עם טיפים על הוצאות, ציוד, ומפות לאופליין.',
    age: '25',
    location: 'נפאל',
    type: 'PDF',
    images: ['https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800'],
    price: 'חינם',
    date: '25.05.2026'
  },
  {
    title: 'קובץ תרשימים וארכיטקטורה למערכות מידע',
    contact: 'TechBlueprint',
    desc: 'תרשימי זרימה מקצועיים ותבניות עבודה מוכנות לשימוש.',
    age: '32',
    location: 'הרצליה',
    type: 'קובץ',
    images: ['https://images.unsplash.com/photo-1544391490-01c6db9f5a70?auto=format&fit=crop&q=80&w=800'],
    price: '49',
    date: '24.05.2026'
  }
];





let storedPdfItems = localStorage.getItem('pdfStoreItems');
if (!storedPdfItems || JSON.parse(storedPdfItems).length === 0 || !storedPdfItems.includes('טרק שקיעות מרהיב')) {
  localStorage.setItem('pdfStoreItems', JSON.stringify(defaultPdfStoreItems));
}

const SERVER_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? 'http://localhost:4242' 
  : window.location.origin;

let storedArticles = localStorage.getItem('newsArticles');
let newsArticles = storedArticles ? JSON.parse(storedArticles) : [...defaultNewsArticles];
if (!storedArticles) {
  localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
}
// Force first slide to show high-end looping video
const art1 = newsArticles.find(a => a.id === 1);
if (art1) {
  art1.image = 'https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41859-large.mp4';
  localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
}

let nextId = newsArticles.length ? Math.max(...newsArticles.map(a => a.id)) + 1 : 1;
let isAdmin = localStorage.getItem('isAdmin') === 'true';
// Cleanup obsolete data
if (localStorage.getItem('viewerPhotos')) localStorage.removeItem('viewerPhotos');
if (localStorage.getItem('comicsStore')) localStorage.removeItem('comicsStore');

let previousPage = 'home';

// ========== CATEGORY FILTER BAR SYSTEM ==========
let selectedCategory = 'all';

const categoryNameMap = {
  he: {
    'all': 'הכל',
    'מחשבים': '💻 מחשבים',
    'אבטחה': '🛡️ אבטחה',
    'שעונים חכמים': '⌚ שעונים חכמים',
    'גוגל': '🤖 גוגל',
    'חומרה': '🔌 חומרה',
    'אפליקציות': '📱 אפליקציות'
  },
  en: {
    'all': 'All',
    'מחשבים': '💻 Computers',
    'אבטחה': '🛡️ Security',
    'שעונים חכמים': '⌚ Smart Watches',
    'גוגל': '🤖 Google',
    'חומרה': '🔌 Hardware',
    'אפליקציות': '📱 Apps'
  }
};

function renderCategoryBar() {
  const bar = document.getElementById('category-filter-bar');
  if (!bar) return;
  
  // Extract all categories from newsArticles (except top articles)
  const dbCategories = [...new Set(newsArticles.map(a => a.category).filter(Boolean))];
  const allCategories = ['all', ...dbCategories];
  
  const map = categoryNameMap[currentLang] || categoryNameMap['he'];
  
  bar.innerHTML = allCategories.map(cat => {
    let label = map[cat] || cat;
    if (!map[cat]) {
      if (cat === 'all') {
        label = currentLang === 'en' ? 'All' : 'הכל';
      } else {
        label = `📰 ${cat.charAt(0).toUpperCase() + cat.slice(1)}`;
      }
    }
    
    const activeClass = (cat === selectedCategory) ? 'active' : '';
    return `
      <button class="category-chip ${activeClass}" onclick="selectCategory('${cat}')">
        ${escHtml(label)}
      </button>
    `;
  }).join('');
}

function selectCategory(cat) {
  selectedCategory = cat;
  renderCategoryBar();
  renderNewsLayout(1);
}

// ================================================

// ========== SOCIAL LINKS LOGIC ==========
const defaultSocialLinks = {
  x: 'https://x.com',
  fb: 'https://facebook.com',
  ig: 'https://instagram.com',
  yt: 'https://youtube.com'
};

function loadSocialLinks() {
  const links = JSON.parse(localStorage.getItem('siteSocialLinks') || JSON.stringify(defaultSocialLinks));
  applySocialLinksToUI(links);
  return links;
}

function applySocialLinksToUI(links) {
  const ids = { x: 'footer-link-x', fb: 'footer-link-fb', ig: 'footer-link-ig', yt: 'footer-link-yt' };
  for (const [key, id] of Object.entries(ids)) {
    const el = document.getElementById(id);
    if (el) el.href = links[key] || '#';
  }
}

function saveSocialLinks() {
  if (!isAdmin) {
    showToast('❌ אין לך הרשאות לבצע פעולה זו');
    return;
  }
  const links = {
    x: document.getElementById('admin-social-x').value,
    fb: document.getElementById('admin-social-fb').value,
    ig: document.getElementById('admin-social-ig').value,
    yt: document.getElementById('admin-social-yt').value
  };
  localStorage.setItem('siteSocialLinks', JSON.stringify(links));
  applySocialLinksToUI(links);
  showToast('✅ הקישורים עודכנו בהצלחה');
}

function openCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('active');
    showToast('טוען מערכת תשלום מאובטחת...');
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('active');
}

// ========== NAVIGATION ==========
function showPage(page) {
  if (page === 'checkout') {
    openCheckoutModal();
    return;
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) targetPage.classList.add('active');

  // Update active navigation link styles in PromptHero header
  const btnPdf = document.getElementById('nav-btn-pdf');
  const btnHome = document.getElementById('nav-btn-home');
  if (btnPdf) btnPdf.classList.remove('active-page');
  if (btnHome) btnHome.classList.remove('active-page');
  if (page === 'pdf-store' && btnPdf) btnPdf.classList.add('active-page');
  if (page === 'home' && btnHome) btnHome.classList.add('active-page');

  if (page === 'home') renderNewsLayout();
  if (page === 'pdf-store') {
    renderStoreCarousel();
    renderPdfStoreGrid();
    renderStoreCategoryBar();
  }
  if (page === 'subscription') window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'join') {
    if (currentUser) {
      document.getElementById('join-name').value = currentUser.name;
      document.getElementById('join-password').value = '';
      document.getElementById('btn-logout').style.display = 'block';
    } else {
      document.getElementById('join-name').value = '';
      document.getElementById('join-password').value = '';
      document.getElementById('btn-logout').style.display = 'none';
    }
  }
  if (page === 'admin') {
    if (!isAdmin) {
      showPage('admin-login');
      return;
    }
    initAdminDashboard();
  }
}




function openCheckoutModal() {
  console.log('Opening checkout modal...');
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('active');
    showToast('טוען מערכת תשלום מאובטחת...');
  } else {
    console.error('Checkout modal not found!');
  }
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal').classList.remove('active');
}




// ========== ADMIN CALENDAR ==========


function goBack() {
  showPage(previousPage);
}

// ========== RENDER NEWS ==========
let currentPage = 1;
const ARTICLES_PER_PAGE = 10;

let currentSlideIndex = 0;
let carouselInterval = null;

function startCarouselAutoCycle() {
  if (carouselInterval) clearInterval(carouselInterval);
  carouselInterval = setInterval(() => {
    slideCarouselNext();
  }, 10000); // 10 seconds auto-rotation
}

function slideCarouselNext() {
  const topArticles = newsArticles.filter(x => x.isTop);
  if (topArticles.length <= 3) return;
  const maxIndex = topArticles.length - 3;
  currentSlideIndex = (currentSlideIndex + 1) > maxIndex ? 0 : (currentSlideIndex + 1);
  updateCarouselPosition();
  startCarouselAutoCycle();
}

function slideCarouselPrev() {
  const topArticles = newsArticles.filter(x => x.isTop);
  if (topArticles.length <= 3) return;
  const maxIndex = topArticles.length - 3;
  currentSlideIndex = (currentSlideIndex - 1) < 0 ? maxIndex : (currentSlideIndex - 1);
  updateCarouselPosition();
  startCarouselAutoCycle();
}

function updateCarouselPosition() {
  const track = document.getElementById('top-news-track');
  if (!track) return;
  
  const dir = document.documentElement.dir || 'rtl';
  const step = `calc(${currentSlideIndex} * (33.333% + 7px))`;
  
  if (dir === 'rtl') {
    track.style.transform = `translateX(${step})`;
  } else {
    track.style.transform = `translateX(-${step})`;
  }
}

function renderNewsLayout(page = 1) {
  currentPage = page;
  renderCategoryBar();
  const track = document.getElementById('top-news-track');
  const feedList = document.getElementById('news-feed-list');
  const paginationEl = document.getElementById('news-pagination');
  if(!track || !feedList) return;

  const topArticles = newsArticles.filter(x => x.isTop).sort((a,b) => a.isTop - b.isTop);
  
  const container = document.getElementById('top-news-carousel-container');
  if (container) {
    if (page === 1) {
      container.style.display = 'block';
      
      // Control arrows visibility dynamically
      const prevArrow = container.querySelector('.carousel-arrow.prev');
      const nextArrow = container.querySelector('.carousel-arrow.next');
      if (prevArrow && nextArrow) {
        if (topArticles.length <= 3) {
          prevArrow.style.display = 'none';
          nextArrow.style.display = 'none';
        } else {
          prevArrow.style.display = 'flex';
          nextArrow.style.display = 'flex';
        }
      }

      track.innerHTML = topArticles.map(a => {
        const trans = (currentLang === 'en' && articleTranslations[a.id]) ? articleTranslations[a.id] : {};
        const title = trans.title || a.title;
        const category = trans.category || a.category;
        
        const isVideo = a.image && (a.image.endsWith('.mp4') || a.image.includes('mixkit') || a.image.includes('video'));
        const bgContent = isVideo 
          ? `<video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
               <source src="${a.image}" type="video/mp4">
             </video>`
          : `<div class="slide-bg" style="background-image: url('${a.image}'); width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform 0.8s ease;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'"></div>`;
          
        return `
          <div class="carousel-slide" onclick="showArticle(${a.id})" style="flex: 0 0 calc(33.333% - 14px); max-width: calc(33.333% - 14px); position: relative; aspect-ratio: 16/10; min-height: 280px; cursor: pointer; overflow: hidden; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
            ${bgContent}
            <div class="slide-overlay" style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 24px; text-align: inherit; box-sizing: border-box;">
              <div style="align-self: flex-start; background: #0071e3; color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; z-index: 2;">
                ${escHtml(category)}
              </div>
              <h3 style="color: #fff; font-size: 1.25rem; font-weight: 800; line-height: 1.4; margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; max-height: 5.8em; text-overflow: ellipsis; text-shadow: 0 2px 4px rgba(0,0,0,0.3); z-index: 2;">
                ${escHtml(title)}
              </h3>
            </div>
          </div>
        `;
      }).join('');
      
      updateCarouselPosition();
      
      if (topArticles.length > 3) {
        startCarouselAutoCycle();
      } else {
        if (carouselInterval) clearInterval(carouselInterval);
      }
    } else {
      container.style.display = 'none';
      if (carouselInterval) clearInterval(carouselInterval);
    }
  }

  const feedArticles = newsArticles.filter(x => {
    if (x.isTop) return false;
    if (selectedCategory && selectedCategory !== 'all') {
      return x.category === selectedCategory;
    }
    return true;
  });
  const totalPages = Math.max(1, Math.ceil(feedArticles.length / ARTICLES_PER_PAGE));
  const start = (page - 1) * ARTICLES_PER_PAGE;
  const pageArticles = feedArticles.slice(start, start + ARTICLES_PER_PAGE);

  feedList.innerHTML = pageArticles.map(a => {
    const trans = (currentLang === 'en' && articleTranslations[a.id]) ? articleTranslations[a.id] : {};
    const title = trans.title || a.title;
    const author = trans.author || a.author;
    const time = trans.time || a.time;
    const snippet = trans.snippet || a.snippet;
    
    return `
      <div class="feed-item" onclick="showArticle(${a.id})">
        <div class="feed-image" style="background-image: url('${a.image}')"></div>
        <div class="feed-content">
          <h2 class="feed-title">${escHtml(title)}</h2>
          <div class="feed-meta"><span class="author-name">${escHtml(author)}</span> <span class="meta-sep">|</span> <span class="meta-date">${escHtml(time)}</span></div>
          ${snippet ? `<p class="feed-snippet">${escHtml(snippet)}</p>` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Render pagination buttons
  if (paginationEl) {
    if (totalPages <= 1) {
      paginationEl.innerHTML = '';
    } else {
      paginationEl.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1).map(p => `
        <button onclick="renderNewsLayout(${p}); window.scrollTo({top:0,behavior:'smooth'});"
          style="padding: 8px 16px; border-radius: 980px; border: 1px solid ${p === page ? '#0071e3' : '#ccc'};
          background: ${p === page ? '#0071e3' : '#fff'}; color: ${p === page ? '#fff' : '#1d1d1f'};
          font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: all 0.2s;">
          ${p}
        </button>
      `).join('');
    }
  }
}

function filterCategory(cat) {
  // Logic not fully implemented since this is a UI prototype
  alert('Filtering by: ' + cat);
}

function showArticle(id) {
  currentArticleId = id;
  previousPage = document.querySelector('.page.active')?.id?.replace('page-', '') || 'home';
  const a = newsArticles.find(x => x.id === id);
  if (!a) return;

  const trans = (currentLang === 'en' && articleTranslations[a.id]) ? articleTranslations[a.id] : {};
  const title = trans.title || a.title;
  const category = trans.category || a.category;
  const author = trans.author || a.author;
  const time = trans.time || a.time;
  const content = trans.content || a.content;

  document.getElementById('article-content').innerHTML = `
    <header class="article-header">
      <div class="article-category">${escHtml(category)}</div>
      <h1 class="article-title-main" id="inline-title">${escHtml(title)}</h1>
      <div class="article-meta-main">
        ${currentLang === 'en' ? 'By' : 'מאת'} <span id="inline-author" class="author-name" style="font-weight:700;">${escHtml(author)}</span>
        <span class="meta-sep">|</span> 
        <span id="inline-time" class="meta-date">${escHtml(time)}</span>
      </div>
    </header>
    <div class="article-hero-img" id="inline-hero-img" style="background-image: url('${a.image}'); position: relative;">
    </div>
      <div class="article-body" style="position:relative;">
        ${(a.isPremium && !isAdmin) ? `
        <div id="inline-content" style="filter: blur(6px); user-select: none; pointer-events: none; opacity: 0.5;">
          ${content ? content.substring(0, 300) + '... (המשך הכתבה חסומה)' : `<p>זהו טקסט דמה להמחשת הכתבה. במערכת החדשות המלאה...</p>`}
        </div>
        <div style="position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%); text-align: center; background: rgba(255,255,255,0.9); padding: 40px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); width: 85%; max-width: 400px; border: 1px solid var(--border-subtle); backdrop-filter: blur(10px);">
          <div style="font-size: 3.5rem; margin-bottom: 16px;">💎</div>
          <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 8px; color: #1d1d1f;">${currentLang === 'en' ? 'Premium Content' : 'תוכן פרימיום'}</h3>
          <p style="color: #86868b; margin-bottom: 24px; font-size: 1.05rem;">${currentLang === 'en' ? 'This story is available to subscribers only. Join now for full access.' : 'סיפור זה זמין למנויים בלבד. הצטרף עכשיו כדי לקבל גישה מלאה לכל הכתבות שלנו.'}</p>
          <button class="btn-primary" onclick="showPage('subscription')" style="width: 100%; font-size: 1.1rem; padding: 14px;">${currentLang === 'en' ? 'Get Premium Access' : 'לרכישת מנוי שבועי/חודשי'}</button>
        </div>
        ` : `
        <div id="inline-content">
          ${content ? content : `
          <p>זהו טקסט דמה להמחשת הכתבה. במערכת החדשות המלאה, אזור זה יישאב ממסד הנתונים ויכיל פסקאות, ציטוטים מורחבים, גלריות תמונות ואפשרויות לשיתוף ברשתות חברתיות.</p>
          <p>חברת הטכנולוגיה המובילה חשפה לאחרונה את כל העדכונים של המערכת המיוחלת החדשה. באירוע שערכה, השתתפו אלפי עיתונאי טכנולוגיה מכל העולם, שזכו לראות את כלי התוכנה המתקדמים ואת החומרה.</p>
          <p>בנוסף, הושם דגש מיוחד על יכולות בינה מלאכותית, פרטיות ואבטחת מידע, עם שיפורים שיהפכו כל פעולה ליעילה, נוחה ומאובטחת יותר מתמיד.</p>
          `}
        </div>
        `}
      </div>
      
      <!-- Recommended Articles Section -->
      <div class="recommendations-wrapper">
        <h3 class="recommendations-title">אולי יעניין אותך גם</h3>
        <div class="recommendations-grid">
          ${renderRecommendations(a.id, a.category)}
        </div>
      </div>
    </div>
  `;

  showPage('article');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



function renderRecommendations(currentId, category) {
  // Find articles in the same category, excluding current
  let recs = newsArticles.filter(art => art.id !== currentId && art.category === category);
  
  // If not enough, fill with others
  if (recs.length < 4) {
    const others = newsArticles.filter(art => art.id !== currentId && art.category !== category);
    recs = [...recs, ...others].slice(0, 4);
  } else {
    recs = recs.slice(0, 4);
  }

  return recs.map(r => `
    <div class="rec-card" onclick="showArticle(${r.id})">
      <div class="rec-image" style="background-image: url('${r.image}')"></div>
      <div class="rec-meta">${escHtml(r.category)}</div>
      <div class="rec-title">${escHtml(r.title)}</div>
    </div>
  `).join('');
}

// ========== ADMIN DASHBOARD ==========
function adminLogin() {
  const user = document.getElementById('admin-user')?.value;
  const pass = document.getElementById('admin-pass')?.value;
  if (user === '1' && pass === '1') {
    localStorage.setItem('isAdmin', 'true');
    isAdmin = true;
    showToast('✅ מנהל התחבר בהצלחה');
    showPage('admin');
  } else {
    showToast('❌ שם משתמש או סיסמה שגויים');
  }
}

function initAdminDashboard() {
  // Populate stats
  const statTotal = document.getElementById('stat-total');
  const statToday = document.getElementById('stat-today');
  const statArticles = document.getElementById('stat-articles');
  const statMessages = document.getElementById('stat-messages');

  let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  if (statTotal) statTotal.textContent = localStorage.getItem('visitTotal') || '0';
  if (statToday) statToday.textContent = localStorage.getItem('visitToday') || '0';
  if (statArticles) statArticles.textContent = newsArticles.length;
  if (statMessages) statMessages.textContent = msgs.length;

  const msgList = document.getElementById('admin-messages-list');
  const navMsgCount = document.getElementById('nav-msg-count');
  if (navMsgCount) navMsgCount.textContent = msgs.length;

  if (msgList) {
    if (msgs.length === 0) {
      msgList.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 20px; color:#86868b;">אין הודעות חדשות</td></tr>';
    } else {
      msgList.innerHTML = msgs.map((m, i) => `
        <tr class="hover-row" style="transition: background 0.2s; cursor: pointer;" onclick="viewMessage(${i})" onmouseover="this.style.background='#f5f5f7'" onmouseout="this.style.background='transparent'">
          <td style="white-space: nowrap;">${escHtml(m.date)}</td>
          <td><strong>${escHtml(m.name)}</strong></td>
          <td style="white-space: pre-wrap;">${escHtml(m.body).substring(0, 60)}${m.body.length > 60 ? '...' : ''}</td>
          <td onclick="event.stopPropagation()">
            <button class="remove-btn" style="padding: 4px 12px; font-size: 0.85rem; border: none; background: transparent;" onclick="deleteMessage(${i})">מחק</button>
          </td>
        </tr>
      `).join('');
    }
  }


  const list = document.getElementById('admin-articles-list');
  if (!list) return;

  list.innerHTML = newsArticles.map(a => `
    <tr>
      <td>${a.id}</td>
      <td><strong>${escHtml(a.title)}</strong> ${a.isTop ? '🌟' : ''} ${a.isPremium ? '💎' : ''}</td>
      <td>${escHtml(a.category)}</td>
      <td>${escHtml(a.author)}</td>
      <td style="display:flex; gap:8px;">
        <button class="remove-btn" style="padding: 4px 12px; font-size: 0.85rem; border: none; background: #0071e3; color: white; border-radius: 6px; cursor: pointer;" onclick="editArticle(${a.id})">ערוך</button>
        <button class="remove-btn" style="padding: 4px 12px; font-size: 0.85rem; border: none; background: transparent;" onclick="deleteArticle(${a.id})">מחק</button>
      </td>
    </tr>
  `).join('');


  // Populate Social Links inside Admin
  const sl = loadSocialLinks();
  if (document.getElementById('admin-social-x')) {
    document.getElementById('admin-social-x').value = sl.x || '';
    document.getElementById('admin-social-fb').value = sl.fb || '';
    document.getElementById('admin-social-ig').value = sl.ig || '';
    document.getElementById('admin-social-yt').value = sl.yt || '';
  }
}

function switchAdminTab(tabId, btnEl) {
  document.querySelectorAll('.admin-section').forEach(el => el.style.display = 'none');
  const target = document.getElementById('admin-section-' + tabId);
  if (target) target.style.display = 'block';
  
  if (btnEl) {
    document.querySelectorAll('.admin-nav-btn').forEach(btn => btn.classList.remove('active'));
    btnEl.classList.add('active');
  }
  if (tabId === 'pdfstore') renderPdfAdminList();
  if (tabId === 'users') renderAdminUsersPage(1);

}

let currentUsersPage = 1;

function renderAdminUsersPage(page = 1) {
  currentUsersPage = page;
  const listEl = document.getElementById('admin-users-list');
  const paginationEl = document.getElementById('admin-users-pagination');
  if(!listEl || !paginationEl) return;
  
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
  const usersArray = Object.keys(registeredUsers).map(name => ({
    name,
    password: registeredUsers[name].password,
    gender: registeredUsers[name].gender || 'לא ידוע',
    age: registeredUsers[name].age || 'לא הוזן',
    date: registeredUsers[name].registrationDate || 'לא ידוע'
  }));
  
  const limit = 20;
  const totalPages = Math.max(1, Math.ceil(usersArray.length / limit));
  const start = (page - 1) * limit;
  const pageUsers = usersArray.slice(start, start + limit);
  
  if (usersArray.length === 0) {
    listEl.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 20px; color:#86868b;">אין משתמשים במערכת</td></tr>';
  } else {
    listEl.innerHTML = pageUsers.map((u, i) => `
      <tr>
        <td>${start + i + 1}</td>
        <td><strong>${escHtml(u.name)}</strong></td>
        <td>${escHtml(u.password)}</td>
        <td>${escHtml(u.age)}</td>
        <td>${escHtml(u.gender)}</td>
        <td>${escHtml(u.date)}</td>
      </tr>
    `).join('');
  }
  
  // Pagination
  if (totalPages <= 1) {
    paginationEl.innerHTML = '';
  } else {
    let btnHtml = '';
    if (page > 1) btnHtml += `<button onclick="renderAdminUsersPage(${page - 1})" class="btn-secondary" style="padding: 6px 16px; border-radius:8px; font-size:0.9rem; border:1px solid #d2d2d7;">&rarr; הקודם</button>`;
    btnHtml += `<span style="padding: 6px 16px; font-size:0.9rem; font-weight:700;">עמוד ${page} מתוך ${totalPages}</span>`;
    if (page < totalPages) btnHtml += `<button onclick="renderAdminUsersPage(${page + 1})" class="btn-secondary" style="padding: 6px 16px; border-radius:8px; font-size:0.9rem; border:1px solid #d2d2d7;">הבא &larr;</button>`;
    
    paginationEl.innerHTML = btnHtml;
  }
}



function deleteMessage(index) {
  if (confirm('האם אתה בטוח שברצונך למחוק הודעה זו?')) {
    let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    msgs.splice(index, 1);
    localStorage.setItem('contactMessages', JSON.stringify(msgs));
    initAdminDashboard();
    showToast('ההודעה נמחקה');
  }
}

let currentViewMessageIndex = -1;

function viewMessage(index) {
  let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  const m = msgs[index];
  if (!m) return;
  currentViewMessageIndex = index;
  document.getElementById('view-msg-name').textContent = m.name;
  document.getElementById('view-msg-phone').textContent = 'טלפון: ' + (m.phone || 'לא הוזן');
  document.getElementById('view-msg-date').textContent = m.date;
  document.getElementById('view-msg-body').textContent = m.body;
  document.getElementById('message-view-modal').classList.add('active');
}

function closeMessageViewModal() {
  document.getElementById('message-view-modal').classList.remove('show');
  currentViewMessageIndex = -1;
}

function deleteMessageFromModal() {
  if (currentViewMessageIndex >= 0) {
    if (confirm('האם אתה בטוח שברצונך למחוק הודעה זו?')) {
      let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      msgs.splice(currentViewMessageIndex, 1);
      localStorage.setItem('contactMessages', JSON.stringify(msgs));
      initAdminDashboard();
      closeMessageViewModal();
      showToast('ההודעה נמחקה');
    }
  }
}

function deleteArticle(id) {
  if (confirm('האם אתה בטוח שברצונך למחוק כתבה זו?')) {
    newsArticles = newsArticles.filter(a => a.id !== id);
    localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
    initAdminDashboard();
    renderNewsLayout();
    showToast('נמחק בהצלחה');
  }
}

function editArticle(id) {
  const article = newsArticles.find(a => a.id === id);
  if (!article) return;
  document.getElementById('admin-editor').classList.remove('hidden');
  const editorTitle = document.getElementById('admin-editor').querySelector('h3');
  
  editorTitle.textContent = 'עריכת כתבה';
  document.getElementById('edit-id').value = article.id;
  document.getElementById('edit-title').value = article.title;
  document.getElementById('edit-category').value = article.category;
  document.getElementById('edit-author').value = article.author;
  document.getElementById('edit-time').value = article.time;
  document.getElementById('edit-image').value = article.image;
  document.getElementById('edit-snippet').value = article.snippet;
  document.getElementById('edit-content').value = article.content;
  document.getElementById('edit-isTop').checked = !!article.isTop;
  document.getElementById('edit-isPremium').checked = !!article.isPremium;
  
  document.getElementById('admin-editor').scrollIntoView({ behavior: 'smooth' });
}

function openArticleEditor() {
  document.getElementById('admin-editor').classList.remove('hidden');
  const editorTitle = document.getElementById('admin-editor').querySelector('h3');
  
  editorTitle.textContent = 'יצירת כתבה חדשה';
  document.getElementById('edit-id').value = '';
  document.getElementById('edit-title').value = '';
  document.getElementById('edit-category').value = '';
  document.getElementById('edit-author').value = 'מערכת החדשות';
  document.getElementById('edit-time').value = 'היום, 12:00';
  document.getElementById('edit-image').value = 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format\u0026fit=crop\u0026q=80\u0026w=800';
  document.getElementById('edit-snippet').value = '';
  document.getElementById('edit-content').value = '';
  document.getElementById('edit-isTop').checked = false;
  document.getElementById('edit-isPremium').checked = false;
  
  document.getElementById('admin-editor').scrollIntoView({ behavior: 'smooth' });
}

function saveAdminArticle() {
  const idValue = document.getElementById('edit-id').value;
  const isTop = document.getElementById('edit-isTop').checked;
  const isPremium = document.getElementById('edit-isPremium').checked;
  
  const articleObj = {
    id: idValue ? Number(idValue) : nextId++,
    title: document.getElementById('edit-title').value,
    category: document.getElementById('edit-category').value,
    author: document.getElementById('edit-author').value,
    time: document.getElementById('edit-time').value,
    image: document.getElementById('edit-image').value,
    snippet: document.getElementById('edit-snippet').value,
    content: document.getElementById('edit-content').value,
    isTop: isTop ? (newsArticles.filter(a => a.isTop).length + 1) : false,
    isPremium: isPremium
  };

  if(!articleObj.title) {
    showToast('יש למלא כותרת');
    return;
  }

  if (idValue) {
    const idx = newsArticles.findIndex(a => a.id == idValue);
    if (idx !== -1) newsArticles[idx] = articleObj;
    else newsArticles.unshift(articleObj);
    showToast('עודכן בהצלחה');
  } else {
    newsArticles.unshift(articleObj);
    showToast('נוצר בהצלחה');
  }

  if (isTop) {
     const topArts = newsArticles.filter(a => a.isTop).sort((a,b) => a.isTop - b.isTop);
     if(topArts.length > 3) {
        topArts[topArts.length-1].isTop = false; 
     }
  }

  localStorage.setItem('newsArticles', JSON.stringify(newsArticles));
  document.getElementById('admin-editor').classList.add('hidden');
  initAdminDashboard();
  renderNewsLayout();
}

// ========== UTILS ==========
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  if (!toast) {
    alert(msg);
    return;
  }
  toast.textContent = msg;
  toast.className = 'toast show'; // Reset and show
  if (type) toast.classList.add(type);
  
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Show a loading toast
  showToast('מעבד תמונה...');

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800; // compress dimension
      let width = img.width;
      let height = img.height;

      if (width > MAX_WIDTH) {
        height = Math.round(height * (MAX_WIDTH / width));
        width = MAX_WIDTH;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      // Compress to 70% quality JPEG => Greatly saves LocalStorage space
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
      document.getElementById('edit-image').value = compressedDataUrl;
      showToast('התמונה מוכנה! ✅');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ========== STORE MANAGEMENT ==========






// ========== PDF STORE ==========
const typeEmoji = { 'PDF': '📄', 'תוכנה': '🖥️', 'סרטון': '📹', 'קובץ': '📁', 'מדריך': '📚' };

function getPdfItems() {
  return JSON.parse(localStorage.getItem('pdfStoreItems') || '[]');
}

function savePdfItems(items) {
  localStorage.setItem('pdfStoreItems', JSON.stringify(items));
}

// ========== STORE 3-CARD CAROUSEL ==========
let storeSlideIndex = 0;
let storeCarouselInterval = null;

function renderStoreCarousel() {
  const track = document.getElementById('store-carousel-track');
  const container = document.getElementById('store-carousel-container');
  if (!track || !container) return;
  
  const items = getPdfItems();
  if (items.length === 0) {
    container.style.display = 'none';
    return;
  }
  
  container.style.display = 'block';
  
  // Control arrows visibility
  const prevArrow = container.querySelector('.carousel-arrow.prev');
  const nextArrow = container.querySelector('.carousel-arrow.next');
  if (prevArrow && nextArrow) {
    if (items.length <= 3) {
      prevArrow.style.display = 'none';
      nextArrow.style.display = 'none';
    } else {
      prevArrow.style.display = 'flex';
      nextArrow.style.display = 'flex';
    }
  }
  
  const cidMap = { 'PDF': '1544716278-ca5e3f4abd8c', 'תוכנה': '1517694712202-14dd9538aa97', 'סרטון': '1492724441997-5dc865305da7', 'קובץ': '1544391490-01c6db9f5a70', 'מדריך': '1497633762265-9d179a990aa6' };
  
  track.innerHTML = items.map((item, i) => {
    const cid = cidMap[item.type] || cidMap['PDF'];
    const fallback = `https://images.unsplash.com/photo-${cid}?auto=format&fit=crop&q=80&w=800`;
    const mainImg = (item.images && item.images.length > 0) ? item.images[0] : fallback;
    
    return `
      <div class="carousel-slide" onclick="showProductDetail(${i})" style="flex: 0 0 calc(33.333% - 14px); max-width: calc(33.333% - 14px); position: relative; aspect-ratio: 16/10; min-height: 280px; cursor: pointer; overflow: hidden; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
        <div class="slide-bg" style="background-image: url('${mainImg}'); width: 100%; height: 100%; background-size: cover; background-position: center; transition: transform 0.8s ease;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'"></div>
        <div class="slide-overlay" style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 24px; box-sizing: border-box;">
          <div style="align-self: flex-start; background: #0071e3; color: #fff; padding: 6px 12px; border-radius: 6px; font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; z-index: 2;">
            ${escHtml(item.type || 'קובץ')}
          </div>
          <h3 style="color: #fff; font-size: 1.25rem; font-weight: 800; line-height: 1.4; margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; max-height: 5.8em; text-overflow: ellipsis; text-shadow: 0 2px 4px rgba(0,0,0,0.3); z-index: 2;">
            ${escHtml(item.title)}
          </h3>
        </div>
      </div>
    `;
  }).join('');
  
  storeSlideIndex = 0;
  updateStoreCarouselPosition();
  
  if (items.length > 3) {
    startStoreCarouselAutoCycle();
  } else {
    if (storeCarouselInterval) clearInterval(storeCarouselInterval);
  }
}

function startStoreCarouselAutoCycle() {
  if (storeCarouselInterval) clearInterval(storeCarouselInterval);
  storeCarouselInterval = setInterval(() => {
    slideStoreCarouselNext();
  }, 10000); // 10 seconds
}

function slideStoreCarouselNext() {
  const items = getPdfItems();
  if (items.length <= 3) return;
  const maxIndex = items.length - 3;
  storeSlideIndex = (storeSlideIndex + 1) > maxIndex ? 0 : (storeSlideIndex + 1);
  updateStoreCarouselPosition();
  startStoreCarouselAutoCycle();
}

function slideStoreCarouselPrev() {
  const items = getPdfItems();
  if (items.length <= 3) return;
  const maxIndex = items.length - 3;
  storeSlideIndex = (storeSlideIndex - 1) < 0 ? maxIndex : (storeSlideIndex - 1);
  updateStoreCarouselPosition();
  startStoreCarouselAutoCycle();
}

function updateStoreCarouselPosition() {
  const track = document.getElementById('store-carousel-track');
  if (!track) return;
  
  const dir = document.documentElement.dir || 'rtl';
  const step = `calc(${storeSlideIndex} * (33.333% + 7px))`;
  
  if (dir === 'rtl') {
    track.style.transform = `translateX(${step})`;
  } else {
    track.style.transform = `translateX(-${step})`;
  }
}

function renderPdfStoreGrid() {
  const grid = document.getElementById('pdf-store-grid');
  if (!grid) return;
  let items = getPdfItems();
  if (selectedStoreCategory !== 'all') {
    items = items.filter(item => {
      if (selectedStoreCategory === 'video') return item.type === 'סרטון';
      if (selectedStoreCategory === 'photo') return item.type === 'תוכן גולשים' || item.type === 'קובץ';
      if (selectedStoreCategory === 'pdf') return item.type === 'PDF';
      if (selectedStoreCategory === 'guide') return item.type === 'מדריך';
      if (selectedStoreCategory === 'software') return item.type === 'תוכנה';
      return true;
    });
  }
  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:80px; color:#86868b; font-size:1.1rem;">${currentLang === 'en' ? 'No items in this category yet.' : 'אין פריטים בקטגוריה זו עדיין.'}</div>`;
    return;
  }
  
  const userColors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
  const viewsArray = ['97K', '74K', '13K', '8.5K', '25K', '4.2K', '110K', '6.8K'];
  const durationArray = ['03:51', '05:59', '08:14', '04:22', '06:45', '10:05'];
  
  grid.innerHTML = items.map((item, i) => {
    const contactName = item.contact || 'User';
    
    // Set fallback image
    const cidMap = { 'PDF': '1544716278-ca5e3f4abd8c', 'תוכנה': '1517694712202-14dd9538aa97', 'סרטון': '1492724441997-5dc865305da7', 'קובץ': '1544391490-01c6db9f5a70', 'מדריך': '1497633762265-9d179a990aa6' };
    const cid = cidMap[item.type] || cidMap['PDF'];
    const fallback = `https://images.unsplash.com/photo-${cid}?auto=format&fit=crop&q=80&w=800`;
    const mainImg = (item.images && item.images.length > 0) ? item.images[0] : fallback;
    const desc = item.desc || '';
    const timeStr = item.date || 'היום';
    
    return `
      <div class="pdf-card" style="display:flex; flex-direction:column; gap:0; overflow:hidden; border-radius:16px; transition:all 0.3s cubic-bezier(0.16, 1, 0.3, 1); cursor:pointer;">
        
        <!-- Image -->
        <div onclick="showProductDetail(${i})" class="pdf-card-media-wrapper" style="width:100%; height:180px; overflow:hidden; background:#000; border-radius:14px;">
          <img src="${mainImg}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.5s ease;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'" />
        </div>
        
        <!-- Title -->
        <h3 onclick="showProductDetail(${i})" style="font-size:1rem; font-weight:800; color:var(--text-main); margin:0; padding:12px 2px 0; line-height:1.35; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; text-overflow:ellipsis; text-align:right;">
          ${escHtml(item.title)}
        </h3>

        <!-- Author + Time -->
        <div style="padding:6px 2px 0; display:flex; align-items:center; gap:6px; justify-content:flex-end; direction:rtl;">
          <span style="font-weight:700; font-size:0.8rem; color:#0071e3;">${escHtml(contactName)}</span>
          <span style="color:var(--text-muted); font-size:0.78rem;">|</span>
          <span style="color:var(--text-muted); font-size:0.78rem;">${escHtml(timeStr)}</span>
        </div>

        <!-- Description -->
        <p onclick="showProductDetail(${i})" style="font-size:0.85rem; line-height:1.5; color:var(--text-muted); margin:0; padding:6px 2px 0; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; text-overflow:ellipsis; text-align:right;">
          ${escHtml(desc)}
        </p>

        <!-- Send Message -->
        <div style="padding:10px 2px 2px; display:flex; justify-content:flex-end;">
          <button onclick="event.stopPropagation(); openChatWith('${escHtml(contactName)}')" style="padding:6px 14px; border-radius:980px; background:#1d1d1f; color:#fff; border:none; font-weight:700; font-size:0.75rem; cursor:pointer; display:inline-flex; align-items:center; gap:5px; transition:all 0.2s; font-family:inherit;" onmouseover="this.style.background='#333'" onmouseout="this.style.background='#1d1d1f'">
            <i class="fa-solid fa-message" style="font-size:0.65rem;"></i>
            שלח הודעה
          </button>
        </div>
        
      </div>
    `;
  }).join('');
}


function showProductDetail(index) {
  const items = getPdfItems();
  const item = items[index];
  if (!item) return;
  
  document.getElementById('pdp-title').textContent = item.title;
  let metadataHtml = '';
  if (item.age) metadataHtml += `<span style="background:#f5f5f7; padding:4px 12px; border-radius:980px; font-size:0.85rem;">גיל: ${escHtml(item.age)}</span>`;
  if (item.location) metadataHtml += `<span style="background:#f5f5f7; padding:4px 12px; border-radius:980px; font-size:0.85rem;">מיקום: ${escHtml(item.location)}</span>`;
  if (item.contact) {
    metadataHtml += `<div style="margin-top:8px; color:var(--primary); font-weight:600; cursor:pointer;" onclick="showUserProfile('${escHtml(item.contact)}')">איש קשר: <span style="text-decoration:underline;">${escHtml(item.contact)}</span></div>`;
    metadataHtml += `<div style="margin-top:8px;"><button onclick="openChatWith('${escHtml(item.contact)}')" style="background:none; border:1px solid var(--primary); color:var(--primary); border-radius:980px; padding:4px 12px; cursor:pointer; font-size:0.85rem; font-weight:600; display:inline-flex; align-items:center; gap:6px;"><i class="fa-regular fa-comment"></i> שלח הודעה לאיש קשר</button></div>`;
  }
  
  const descEl = document.getElementById('pdp-desc');
  descEl.innerHTML = metadataHtml + `<div style="margin-top:16px;">${escHtml(item.desc || '')}</div>`;
  
  // Gallery Logic
  const images = item.images || [];
  const mainImg = document.getElementById('pdp-main-image');
  const thumbList = document.getElementById('pdp-thumbnails');
  
  if (images.length > 0) {
    mainImg.src = images[0];
    thumbList.innerHTML = images.map((img, i) => `
      <div class="pdp-thumb ${i === 0 ? 'active' : ''}" onclick="changePdpImage(this, '${img}')">
        <img src="${img}" alt="Thumbnail ${i+1}">
      </div>
    `).join('');
  } else {
    const cidMap = { 'PDF': '1544716278-ca5e3f4abd8c', 'תוכנה': '1517694712202-14dd9538aa97', 'סרטון': '1492724441997-5dc865305da7', 'קובץ': '1544391490-01c6db9f5a70', 'מדריך': '1497633762265-9d179a990aa6' };
    const cid = cidMap[item.type] || cidMap['PDF'];
    const fallback = `https://images.unsplash.com/photo-${cid}?auto=format&fit=crop&q=80&w=800`;
    mainImg.src = fallback;
    thumbList.innerHTML = `<div class="pdp-thumb active"><img src="${fallback}"></div>`;
  }
  

  
  renderProductRecommendations(index);
  showPage('product-detail');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProductRecommendations(currentIndex) {
  const grid = document.getElementById('product-recommendations-grid');
  if (!grid) return;
  
  const allItems = getPdfItems();
  // Filter out the current product and show up to 6 others randomly
  const recommendations = allItems
    .map((item, originalIndex) => ({ ...item, originalIndex }))
    .filter(item => item.originalIndex !== currentIndex)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);
    
  if (recommendations.length === 0) {
    document.getElementById('product-recommendations-wrapper').style.display = 'none';
    return;
  }
  
  document.getElementById('product-recommendations-wrapper').style.display = 'block';
  
  grid.innerHTML = recommendations.map(item => {
    const mainImg = (item.images && item.images.length > 0) ? item.images[0] : '';
    const icon = typeEmoji[item.type] || '📄';
    
    return `
      <div class="rec-card" onclick="showProductDetail(${item.originalIndex})">
        ${mainImg ? `<div class="rec-image" style="background-image: url('${mainImg}')"></div>` : 
                    `<div class="rec-image" style="display:flex; align-items:center; justify-content:center; font-size:3rem; background:#f5f5f7;">${icon}</div>`}
        <div class="rec-meta">${escHtml(item.type)}</div>
        <div class="rec-title">${escHtml(item.title)}</div>
      </div>
    `;
  }).join('');
}


function changePdpImage(el, src) {
  document.getElementById('pdp-main-image').src = src;
  document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}



function renderPdfAdminList() {
  const list = document.getElementById('pdf-admin-list');
  if (!list) return;
  const items = getPdfItems();
  if (items.length === 0) {
    list.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:32px; color:#86868b;">אין פריטים עדיין. לחץ "הוסף פריט".</div>';
    return;
  }
  list.innerHTML = items.map((item, i) => `
    <div style="background:#f5f5f7; border-radius:12px; padding:16px; display:flex; flex-direction:column; gap:8px; position:relative;">
      <div style="font-size:2rem; text-align:center;">${typeEmoji[item.type] || '📄'}</div>
      <div style="font-weight:700; font-size:0.9rem; text-align:center; color:#1d1d1f;">${escHtml(item.title)}</div>
      <div style="font-size:0.8rem; color:#86868b; text-align:center;">${escHtml(item.type)} · ${escHtml(item.price || 'חינם')}</div>
      <div style="display:flex; gap:6px; justify-content:center; margin-top:4px;">
        <button class="btn-primary" style="padding:4px 10px; font-size:0.78rem;" onclick="editPdfItem(${i})">ערוך</button>
        <button class="remove-btn" style="padding:4px 10px; font-size:0.78rem; border:none; background:transparent;" onclick="deletePdfItem(${i})">מחק</button>
      </div>
    </div>
  `).join('');
}

function openPdfItemEditor(index = null) {
  document.getElementById('pdf-item-editor').classList.remove('hidden');
  if (index !== null) {
    const items = getPdfItems();
    const item = items[index];
    document.getElementById('pdf-edit-id').value = index;
    document.getElementById('pdf-edit-title').value = item.title || '';
    document.getElementById('pdf-edit-desc').value = item.desc || '';
    document.getElementById('pdf-edit-type').value = item.type || 'PDF';
    document.getElementById('pdf-edit-price').value = item.price || '';
    document.getElementById('pdf-edit-link').value = item.link || '';
    
    // Load images
    for (let i = 1; i <= 4; i++) {
       const img = (item.images && item.images[i-1]) ? item.images[i-1] : '';
       document.getElementById(`pdf-edit-img${i}`).value = img;
    }
  } else {
    document.getElementById('pdf-edit-id').value = '';
    document.getElementById('pdf-edit-title').value = '';
    document.getElementById('pdf-edit-desc').value = '';
    document.getElementById('pdf-edit-type').value = 'PDF';
    document.getElementById('pdf-edit-price').value = '';
    document.getElementById('pdf-edit-link').value = '';
    for (let i = 1; i <= 4; i++) {
       document.getElementById(`pdf-edit-img${i}`).value = '';
    }
  }
  const statusEl = document.getElementById('pdf-upload-status');
  if (statusEl) statusEl.style.display = 'none';
  document.getElementById('pdf-item-editor').scrollIntoView({ behavior: 'smooth' });
}

function handlePdfFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const MAX_SIZE_MB = 5;
  const statusEl = document.getElementById('pdf-upload-status');

  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    statusEl.textContent = `❌ הקובץ גדול מדי (${(file.size / 1024 / 1024).toFixed(1)}MB). יש להשתמש בקישור חיצוני לקבצים מעל 5MB.`;
    statusEl.style.color = '#ef4444';
    statusEl.style.display = 'block';
    return;
  }

  statusEl.textContent = '⏳ טוען קובץ...';
  statusEl.style.color = '#0071e3';
  statusEl.style.display = 'block';

  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('pdf-edit-link').value = e.target.result;
    statusEl.textContent = `✅ הקובץ "${file.name}" הועלה בהצלחה! (${(file.size / 1024).toFixed(0)}KB)`;
    statusEl.style.color = '#22c55e';
    showToast('הקובץ מוכן! אל תשכח לשמור.');
  };
  reader.onerror = function() {
    statusEl.textContent = '❌ שגיאה בטעינת הקובץ. נסה שוב.';
    statusEl.style.color = '#ef4444';
  };
  reader.readAsDataURL(file);
}

function editPdfItem(index) { openPdfItemEditor(index); }

function savePdfItem() {
  const title = document.getElementById('pdf-edit-title').value.trim();
  if (!title) { showToast('יש להזין שם פריט'); return; }
  
  const idVal = document.getElementById('pdf-edit-id').value;
  const item = {
    title,
    desc: document.getElementById('pdf-edit-desc').value,
    type: document.getElementById('pdf-edit-type').value,
    price: document.getElementById('pdf-edit-price').value,
    link: document.getElementById('pdf-edit-link').value,
    images: []
  };

  for (let i = 1; i <= 4; i++) {
    const img = document.getElementById(`pdf-edit-img${i}`).value;
    if (img) item.images.push(img);
  }

  const items = getPdfItems();
  if (idVal !== '') {
    items[parseInt(idVal)] = item;
    showToast('המוצר עודכן בהצלחה');
  } else {
    items.unshift(item);
    showToast('המוצר נוסף בהצלחה');
  }

  savePdfItems(items);
  renderPdfAdminList();
  renderPdfStoreGrid();
  document.getElementById('pdf-item-editor').classList.add('hidden');
}

let activeImgSlot = 1;
function triggerImgUpload(slot) {
  activeImgSlot = slot;
  document.getElementById('pdf-image-upload-hidden').click();
}

function handleProductImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  showToast('מעבד תמונה...');
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 800;
      let width = img.width;
      let height = img.height;
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUri = canvas.toDataURL('image/jpeg', 0.8);
      document.getElementById(`pdf-edit-img${activeImgSlot}`).value = dataUri;
      showToast(`תמונה ${activeImgSlot} עלתה בהצלחה!`);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}


function deletePdfItem(index) {
  if (confirm('למחוק פריט זה?')) {
    const items = getPdfItems();
    items.splice(index, 1);
    savePdfItems(items);
    renderPdfAdminList();
    renderPdfStoreGrid();
    showToast('הפריט נמחק');
  }
}


function trackVisit() {
  // Total visits
  const total = parseInt(localStorage.getItem('visitTotal') || '0') + 1;
  localStorage.setItem('visitTotal', total);

  // Today's visits
  const today = new Date().toDateString();
  const lastDay = localStorage.getItem('visitDay');
  let todayCount = parseInt(localStorage.getItem('visitToday') || '0');
  if (lastDay !== today) {
    todayCount = 0;
    localStorage.setItem('visitDay', today);
  }
  todayCount++;
  localStorage.setItem('visitToday', todayCount);
}

trackVisit();

// ========== CONTACT MODAL ==========
function openContactModal() {
  document.getElementById('contact-modal').classList.add('show');
}

function closeContactModal() {
  document.getElementById('contact-modal').classList.remove('show');
}

function submitContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const body = document.getElementById('contact-body').value;
  
  // Save message to localStorage
  let msgs = JSON.parse(localStorage.getItem('contactMessages') || '[]');
  const now = new Date();
  const dateStr = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  msgs.unshift({ name, phone, body, date: dateStr });
  localStorage.setItem('contactMessages', JSON.stringify(msgs));
  
  // Close modal and show toast
  closeContactModal();
  showToast('ההודעה נשלחה בהצלחה למערכת! ✅');
  
  // Clear form
  e.target.reset();
  
  // Update admin dash if it's currently open
  if (document.getElementById('page-admin').classList.contains('active')) {
    initAdminDashboard();
  }
}

function initTheme() {
  document.body.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark');
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  showToast(isDark ? '🌙 מצב כהה הופעל' : '☀️ מצב בהיר הופעל');
}

// ========== USER & COMMENTS LOGIC ==========
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');


function handleProfilePicUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  showToast('מעבד תמונה...');
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_SIZE = 200;
      let width = img.width;
      let height = img.height;
      
      if (width > height) {
        if (width > MAX_SIZE) {
          height *= MAX_SIZE / width;
          width = MAX_SIZE;
        }
      } else {
        if (height > MAX_SIZE) {
          width *= MAX_SIZE / height;
          height = MAX_SIZE;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      const b64 = canvas.toDataURL('image/jpeg', 0.8);
      document.getElementById('register-avatar-preview').src = b64;
      document.getElementById('join-profile-pic').value = b64;
      showToast('✅ התמונה עלתה בהצלחה!');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

const randomAvatars = [
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200&h=200',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
];

function setRandomProfilePic() {
  const current = document.getElementById('join-profile-pic').value;
  let next = randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
  while (next === current) {
    next = randomAvatars[Math.floor(Math.random() * randomAvatars.length)];
  }
  document.getElementById('register-avatar-preview').src = next;
  document.getElementById('join-profile-pic').value = next;
  showToast('🎲 תמונה רנדומלית נבחרה');
}

function saveUserProfile() {
  const name = document.getElementById('join-name').value.trim();
  const password = document.getElementById('join-password').value.trim();
  const profilePic = document.getElementById('join-profile-pic').value;
  const genderEl = document.getElementById('join-gender');
  const gender = genderEl ? genderEl.value : 'לא מוגדר';
  const ageEl = document.getElementById('join-age');
  const age = ageEl ? ageEl.value : '';
  
  if (!name || !password) {
    showToast('❌ נא להזין שם וסיסמה כדי להמשיך');
    return;
  }
  
  let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
  
  if (registeredUsers[name]) {
    // User exists, check password
    if (registeredUsers[name].password === password) {
      currentUser = { name, avatar: registeredUsers[name].avatar };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      updateUserUI();
      goBack();
      showToast(`👋 ברוך שובך, ${name}!`, 'success');
    } else {
      showToast('❌ סיסמה שגויה לשם משתמש זה', 'error');
    }
  } else {
    // New user, register
    const joinDate = new Date().toLocaleDateString('he-IL');
    registeredUsers[name] = { password, avatar: profilePic, gender: gender !== 'לא מוגדר' ? gender : 'לא ידוע', age: age || 'לא הוזן', registrationDate: joinDate };
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    currentUser = { name, avatar: profilePic };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserUI();
    
    showToast('✨ ההרשמה בוצעה בהצלחה!', 'success');
    
    setTimeout(() => {
      goBack();
    }, 1500); 
  }
}

function logoutUser() {
  if (confirm('בטוח שברצונך להתנתק?')) {
    currentUser = null;
    isAdmin = false;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAdmin');
    updateUserUI();
    showPage('home');
    showToast('👋 התנתקת בהצלחה');
  }
}

function updateUserUI() {
  const btnJoin = document.getElementById('btn-join');
  const profileBadge = document.getElementById('user-profile-badge');
  const btnLogoutNav = document.getElementById('btn-logout-nav');
  const btnInboxNav = document.getElementById('btn-inbox-nav');
  
  const navbarActionIcons = document.getElementById('navbar-action-icons');
  if (!btnJoin || !profileBadge || !btnLogoutNav) return;

  const isUserLoggedIn = !!currentUser;
  const isAdminLoggedIn = !!isAdmin;

  if (isUserLoggedIn || isAdminLoggedIn) {
    btnJoin.style.display = 'none';
    profileBadge.style.display = 'flex';
    btnLogoutNav.style.display = 'block';
    if(navbarActionIcons) navbarActionIcons.style.display = 'flex';
    if(btnInboxNav && isUserLoggedIn) btnInboxNav.style.display = 'flex';

    if (isAdminLoggedIn && !isUserLoggedIn) {
      document.getElementById('user-badge-avatar').style.display = 'none';
      const badgeEmoji = document.getElementById('user-badge-name').previousElementSibling; // This is the img
      if (badgeEmoji && badgeEmoji.id === 'user-badge-avatar') badgeEmoji.style.display = 'none';
      
      // Since it's admin, we can show a special icon or just the text
      document.getElementById('user-badge-name').textContent = '🛡️ מנהל מערכת';
    } else if (isUserLoggedIn) {
      const avatarImg = document.getElementById('user-badge-avatar');
      avatarImg.style.display = 'block';
      avatarImg.src = currentUser.avatar || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200&h=200';
      document.getElementById('user-badge-name').textContent = currentUser.name;
    }
    
    // Update comment inputs for users
    if (isUserLoggedIn) {
      document.querySelectorAll('[id$="-comment-input-area"]').forEach(el => el.style.display = 'block');
      document.querySelectorAll('[id$="-comment-join-prompt"]').forEach(el => el.style.display = 'none');
      document.querySelectorAll('[id$="-comment-user-name"]').forEach(el => el.textContent = currentUser.name);
    }
  } else {
    btnJoin.style.display = 'block';
    profileBadge.style.display = 'none';
    btnLogoutNav.style.display = 'none';
    if(navbarActionIcons) navbarActionIcons.style.display = 'none';
    if(btnInboxNav) btnInboxNav.style.display = 'none';
    
    document.querySelectorAll('[id$="-comment-input-area"]').forEach(el => el.style.display = 'none');
    document.querySelectorAll('[id$="-comment-join-prompt"]').forEach(el => el.style.display = 'block');
  }
}

function submitComment(type) {
  const textarea = document.getElementById(`${type}-new-comment`);
  const text = textarea.value.trim();
  
  if (!text) {
    showToast('❌ אי אפשר לפרסם תגובה ריקה');
    return;
  }
  
  const targetId = type === 'article' ? currentArticleId : activeComicIndex;
  const comments = JSON.parse(localStorage.getItem(`comments_${type}_${targetId}`) || '[]');
  
  const newComment = {
    userName: currentUser.name,
    userAvatar: currentUser.avatar,
    text: text,
    date: new Date().toLocaleString('he-IL', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
  };
  
  comments.push(newComment);
  localStorage.setItem(`comments_${type}_${targetId}`, JSON.stringify(comments));
  
  textarea.value = '';
  renderComments(type, targetId);
  showToast('✅ התגובה פורסמה!');
}

function renderComments(type, targetId) {
  const list = document.getElementById(`${type}-comments-list`);
  if (!list) return;
  
  if (targetId === null || targetId === undefined) {
    list.innerHTML = '';
    return;
  }

  const comments = JSON.parse(localStorage.getItem(`comments_${type}_${targetId}`) || '[]');
  
  if (comments.length === 0) {
    list.innerHTML = `<div style="text-align:center; color:#86868b; padding:20px;">עוד אין תגובות. תהיו הראשונים להגיב!</div>`;
    return;
  }
  
  list.innerHTML = comments.map(c => `
    <div class="comment-card">
      <div class="comment-avatar">
        <img src="${c.userAvatar || 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200&h=200'}" alt="${escHtml(c.userName)}">
      </div>
      <div class="comment-body">
        <div class="comment-header" style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
          <div>
            <span class="comment-author" style="margin-left: 8px;">${escHtml(c.userName)}</span>
            <span class="comment-date">${c.date}</span>
          </div>
          ${currentUser && currentUser.name !== c.userName ? 
            `<button onclick="openChatWith('${escHtml(c.userName)}')" style="background:none; border:none; color:var(--primary); cursor:pointer; font-size:0.9rem; font-weight:600;"><i class="fa-regular fa-comment"></i> שלח הודעה</button>` 
            : ''}
        </div>
        <div class="comment-text">${escHtml(c.text)}</div>
      </div>
    </div>
  `).join('');
}

// Global variable for current article
let currentArticleId = null;

// ========== USER PDF UPLOADS ==========
let selectedUserPdfImages = [null, null, null, null];
let activeUserSlot = 0;

function handleUserPdfFileSelectionDirect(slotIndex, event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    const b64 = e.target.result;
    selectedUserPdfImages[slotIndex] = b64;
    renderUserPdfSlots();
  };
  reader.readAsDataURL(file);
  
  event.target.value = '';
}

function removeUserSlotImage(slotIndex, event) {
  if (event) event.stopPropagation(); // Prevent opening the upload window on overlay click
  selectedUserPdfImages[slotIndex] = null;
  renderUserPdfSlots();
}

function renderUserPdfSlots() {
  for (let i = 0; i < 4; i++) {
    const slotEl = document.getElementById(`user-photo-slot-${i}`);
    if (!slotEl) continue;
    
    const imgData = selectedUserPdfImages[i];
    if (imgData) {
      slotEl.innerHTML = `
        <img src="${imgData}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 16px;" />
        <button type="button" class="remove-img-btn" onclick="removeUserSlotImage(${i}, event)" style="position: absolute; top: -6px; right: -6px; background: #ff3b30; color: #fff; border: none; width: 20px; height: 20px; border-radius: 50%; font-size: 11px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.3); z-index: 10;">✕</button>
      `;
      slotEl.style.borderStyle = 'solid';
      slotEl.style.borderColor = 'rgba(255,255,255,0.2)';
      
      // Hide the input next to the slotEl
      const inputEl = slotEl.nextElementSibling;
      if (inputEl) inputEl.style.display = 'none';
    } else {
      slotEl.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; color: #86868b; pointer-events: none;">
          <i class="fa-solid fa-camera" style="font-size: 1.2rem; color: #0071e3;"></i>
          <span style="font-size: 0.65rem; font-weight: 700;">+ תמונה ${i+1}</span>
        </div>
      `;
      slotEl.style.borderStyle = 'dashed';
      slotEl.style.borderColor = 'rgba(255,255,255,0.15)';
      
      // Show the input next to the slotEl
      const inputEl = slotEl.nextElementSibling;
      if (inputEl) inputEl.style.display = 'block';
    }
  }
}

function toggleScheduleSection() {
  const section = document.getElementById('schedule-section');
  if (section.style.display === 'none') {
    section.style.display = 'block';
    
    const now = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);
    
    const toLocalISO = (d) => {
      const tzOffset = d.getTimezoneOffset() * 60000; 
      return (new Date(d - tzOffset)).toISOString().slice(0, 16);
    };

    const scheduleInput = document.getElementById('user-pdf-schedule');
    scheduleInput.min = toLocalISO(now);
    scheduleInput.max = toLocalISO(maxDate);
    scheduleInput.value = toLocalISO(now);
  } else {
    section.style.display = 'none';
  }
}

async function submitUserPdfItem(isScheduled = false) {
  const title = document.getElementById('user-pdf-title').value.trim();
  const contact = document.getElementById('user-pdf-contact').value.trim();
  const desc = document.getElementById('user-pdf-desc').value.trim();
  const age = document.getElementById('user-pdf-age').value.trim();
  const location = document.getElementById('user-pdf-location').value.trim();
  
  if (!title) {
    showToast('❌ נא להזין שם לפריט');
    return;
  }
  
  // Image upload is now optional. If empty, the grid renderer will automatically assign a gorgeous fallback cover!

  let scheduledDateStr = '';
  if (isScheduled) {
    const scheduledVal = document.getElementById('user-pdf-schedule')?.value;
    if (!scheduledVal) {
      showToast('❌ נא לבחור תאריך ושעה לתזמון');
      return;
    }
    const scheduleDateObj = new Date(scheduledVal);
    const now = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);
    
    if (scheduleDateObj < now) {
      showToast('❌ לא ניתן לתזמן לעבר');
      return;
    }
    if (scheduleDateObj > maxDate) {
      showToast('❌ ניתן לתזמן עד חודש קדימה בלבד');
      return;
    }
    try {
      const dtFormatter = new Intl.DateTimeFormat('he-IL', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
      scheduledDateStr = dtFormatter.format(scheduleDateObj);
    } catch(e) {
      scheduledDateStr = scheduleDateObj.toLocaleString('he-IL');
    }
  }
  
  // Show loading overlay
  const loader = document.getElementById('upload-loading-overlay');
  if (loader) {
    loader.style.display = 'flex';
    loader.style.opacity = '1';
    loader.style.pointerEvents = 'auto';
  }

  // Faster upload simulation for immediate feel
  setTimeout(() => {
    const newItem = {
      title: title,
      contact: contact,
      desc: desc,
      age: age,
      location: location,
      type: 'תוכן גולשים',
      images: selectedUserPdfImages.filter(Boolean),
      link: '#',
      date: isScheduled ? `מתוזמן ל: ${scheduledDateStr}` : new Date().toLocaleDateString('he-IL'),
      author: currentUser ? currentUser.name : null
    };
    
    const items = getPdfItems();
    items.unshift(newItem);
    savePdfItems(items);
    
    // Reset form
    document.getElementById('user-pdf-title').value = '';
    document.getElementById('user-pdf-contact').value = '';
    document.getElementById('user-pdf-desc').value = '';
    document.getElementById('user-pdf-age').value = '';
    document.getElementById('user-pdf-location').value = '';
    selectedUserPdfImages = [null, null, null, null];
    if (typeof renderUserPdfSlots === 'function') renderUserPdfSlots();
    
    // Update view
    selectedStoreCategory = 'all';
    if (typeof renderStoreCategoryBar === 'function') renderStoreCategoryBar();
    renderPdfStoreGrid();
    
    // Hide loading overlay
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        loader.style.pointerEvents = 'none';
        showToast('✅ הפריט שלך פורסם בחנות בהצלחה!');
        closeUploadModal();
        // Quick scroll to the new item
        document.getElementById('pdf-store-grid').scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, 400);
}

function togglePdfExtension() {
  const section = document.getElementById('pdf-extension-section');
  const arrow = document.getElementById('pdf-extension-arrow');
  if (section.style.display === 'none') {
    section.style.display = 'flex';
    arrow.innerHTML = '▼';
  } else {
    section.style.display = 'none';
    arrow.innerHTML = '◀';
  }
}

// ========== USER PROFILE ==========
function handleProfileBadgeClick() {
  if (currentUser) {
    showUserProfile(currentUser.name);
  } else {
    showPage('join');
  }
}

function showUserProfile(targetUserName) {
  const userName = targetUserName || (currentUser ? currentUser.name : null);
  if (!userName) return;
  
  const isMe = currentUser && userName === currentUser.name;
  
  let userAvatar = 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=200&h=200';
  
  if (isMe) {
    userAvatar = currentUser.avatar || userAvatar;
  } else {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    if (registeredUsers[userName] && registeredUsers[userName].avatar) {
      userAvatar = registeredUsers[userName].avatar;
    }
  }

  document.getElementById('profile-page-name').textContent = isMe ? 'הפרופיל שלי' : `הפרופיל של ${escHtml(userName)}`;
  document.getElementById('profile-page-subtitle').textContent = isMe ? 'היסטוריית התמונות שהעליתי לאתר' : `היסטוריית ההעלאות של ${escHtml(userName)}`;
  document.getElementById('profile-page-avatar').src = userAvatar;
  
  const actionsContainer = document.getElementById('profile-page-actions');
  if (actionsContainer) {
    if (!isMe && currentUser) {
      actionsContainer.innerHTML = `<button class="btn-primary" onclick="openChatWith('${escHtml(userName)}')"><i class="fa-regular fa-comment"></i> שלח הודעה ל-${escHtml(userName)}</button>`;
    } else {
      actionsContainer.innerHTML = '';
    }
  }
  
  renderUserProfileGrid(userName);
  showPage('profile');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderUserProfileGrid(userName) {
  const grid = document.getElementById('profile-history-grid');
  if (!grid) return;
  
  const allItems = getPdfItems();
  const userItems = allItems.map((item, index) => ({ item, index }))
                            .filter(obj => obj.item.author === userName || obj.item.contact === userName);
                            
  if (userItems.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:80px; color:#86868b; font-size:1.1rem;">עדיין אין למשתמש העלאות זמינות באתר.</div>';
    return;
  }
  
  grid.innerHTML = userItems.map(obj => {
    const item = obj.item;
    const i = obj.index;
    const icon = typeEmoji[item.type] || '📄';
    const mainImg = (item.images && item.images.length > 0) ? item.images[0] : '';
    
    return `
      <div class="pdf-card" onclick="showProductDetail(${i})">
        ${mainImg ? `<img src="${mainImg}" style="width:100%; height:160px; object-fit:cover; border-radius:12px; margin-bottom:12px;" />` : 
                    `<div class="pdf-card-icon">${icon}</div>`}
        <div class="pdf-card-type">${escHtml(item.type)}</div>
        <div class="pdf-card-title">${escHtml(item.title)}</div>
        ${item.desc ? `<div class="pdf-card-desc">${escHtml(item.desc)}</div>` : ''}
        
        <div class="pdf-card-price" style="font-size: 0.85rem; color: #86868b; text-align: center; width: 100%;">
          <div style="display:flex; flex-direction:column; gap:4px;">
             <span style="color:var(--primary); font-weight:700;">${escHtml(item.date)}</span>
             <span style="font-size:0.8rem;">${escHtml(item.contact || '')}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}
function switchAuthTab(type) {
  const loginTab = document.getElementById('tab-login');
  const registerTab = document.getElementById('tab-register');
  const loginSection = document.getElementById('auth-login-section');
  const registerSection = document.getElementById('auth-register-section');
  
  if (type === 'login') {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginSection.style.display = 'block';
    registerSection.style.display = 'none';
  } else {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
  }
}

function handleAuthSubmit(type) {
  if (type === 'login') {
    const name = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    
    if (!name || !password) {
      showToast('❌ נא להזין שם משתמש וסיסמה');
      return;
    }
    
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    if (registeredUsers[name]) {
      if (registeredUsers[name].password === password) {
        currentUser = { name, emoji: registeredUsers[name].emoji };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserUI();
        goBack();
        showToast(`👋 ברוך שובך, ${name}!`);
      } else {
        showToast('❌ סיסמה שגויה');
      }
    } else {
      showToast('❌ משתמש לא קיים. אנא הירשם.');
    }
  } else {
    saveUserProfile();
  }
}

// ========== PRIVATE MESSAGING ==========
function getPrivateChats() {
  return JSON.parse(localStorage.getItem('privateChats') || '{}');
}

function savePrivateChats(chatsObj) {
  localStorage.setItem('privateChats', JSON.stringify(chatsObj));
}

let activeChatUser = null;

function showInboxPage() {
  if (!currentUser) return;
  activeChatUser = null;
  document.getElementById('chat-header').style.visibility = 'hidden';
  document.getElementById('chat-input-area').style.visibility = 'hidden';
  document.getElementById('chat-messages-area').innerHTML = '<div style="margin: auto; color: #86868b; text-align: center;">בחר שיחה כדי להתחיל או שלח הודעה למשתמשים במערכת.</div>';
  renderInboxList();
  showPage('inbox');
}

function openChatWith(userName) {
  if (!currentUser) {
    showToast('עליך להתחבר כדי לשלוח הודעות');
    return;
  }
  if (userName === currentUser.name) {
    showToast('אינך יכול לשלוח הודעה לעצמך');
    return;
  }
  activeChatUser = userName;
  renderInboxList();
  
  const header = document.getElementById('chat-header');
  const headerName = document.getElementById('chat-header-name');
  const inputArea = document.getElementById('chat-input-area');
  
  header.style.visibility = 'visible';
  headerName.textContent = userName;
  inputArea.style.visibility = 'visible';
  
  renderChatMessages();
  showPage('inbox');
}

function renderInboxList() {
  const chatListEl = document.getElementById('inbox-chat-list');
  if (!chatListEl) return;
  
  if (!currentUser) return; // Prevent errors if logged out
  
  const chats = getPrivateChats();
  const myChats = [];
  
  Object.keys(chats).forEach(key => {
    if (key.includes(currentUser.name)) {
      const names = key.split('_');
      // If a username contains an underscore, this split logic could break, but assuming names don't
      const otherUser = names[0] === currentUser.name ? names[1] : names[0];
      const msgs = chats[key];
      const lastMsg = msgs[msgs.length - 1];
      if (lastMsg) {
         myChats.push({ otherUser, lastMsg });
      }
    }
  });

  myChats.sort((a, b) => new Date(b.lastMsg.rawDate) - new Date(a.lastMsg.rawDate));

  if (myChats.length === 0) {
    chatListEl.innerHTML = '<div style="padding: 20px; color: #86868b; font-size: 0.9rem; text-align:center;">אין לך עדיין שיחות. שלח הודעה למישהו על ידי לחיצה על שמם בתגובות למטה!</div>';
    return;
  }
  
  chatListEl.innerHTML = myChats.map(c => `
    <div class="inbox-chat-item ${activeChatUser === c.otherUser ? 'active' : ''}" onclick="openChatWith('${escHtml(c.otherUser)}')">
      <div class="inbox-chat-avatar" style="background:#0071e3; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.5rem;">
        ${c.otherUser.charAt(0)}
      </div>
      <div class="inbox-chat-info">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div class="inbox-chat-name">${escHtml(c.otherUser)}</div>
          <div style="font-size:0.7rem; color:#a1a1a6;">${c.lastMsg.date}</div>
        </div>
        <div class="inbox-chat-preview">${c.lastMsg.sender === currentUser.name ? 'אתה: ' : ''}${escHtml(c.lastMsg.text)}</div>
      </div>
    </div>
  `).join('');
}

function renderChatMessages() {
  if (!activeChatUser) return;
  const msgsArea = document.getElementById('chat-messages-area');
  
  const chats = getPrivateChats();
  const key = [currentUser.name, activeChatUser].sort().join('_');
  const msgs = chats[key] || [];
  
  if (msgs.length === 0) {
    msgsArea.innerHTML = '<div style="margin: auto; color: #86868b; text-align: center;">התחל את השיחה עכשיו, שלח הודעה! 👋</div>';
    return;
  }
  
  msgsArea.innerHTML = `
    <div class="chat-bubble-container" style="gap:12px;">
      ${msgs.map(m => {
        const isMe = m.sender === currentUser.name;
        return `
          <div class="chat-bubble ${isMe ? 'sent' : 'received'}">
            <div>${escHtml(m.text)}</div>
            <div class="chat-time" style="text-align: ${isMe ? 'left' : 'right'};">${m.date}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  
  msgsArea.scrollTop = msgsArea.scrollHeight;
}

function handleSendPrivateMessage(e) {
  e.preventDefault();
  if (!activeChatUser) return;
  
  const input = document.getElementById('chat-message-input');
  const text = input.value.trim();
  if (!text) return;
  
  const chats = getPrivateChats();
  const key = [currentUser.name, activeChatUser].sort().join('_');
  
  if (!chats[key]) {
    chats[key] = [];
  }
  
  const now = new Date();
  const dateStr = now.toLocaleTimeString('he-IL', {hour: '2-digit', minute:'2-digit'});
  
  chats[key].push({
    sender: currentUser.name,
    text: text,
    date: dateStr,
    rawDate: now.toISOString()
  });
  
  savePrivateChats(chats);
  input.value = '';
  
  renderChatMessages();
  renderInboxList(); // Update sidebar latest text
}

// Initial loads
loadSocialLinks();

// ========== BILINGUAL LOCALIZATION & SYSTEM INITIALIZATION ==========

let currentLang = localStorage.getItem('siteLang') || 'he';

const translationDictionary = {
  he: {
    // Navigation
    'nav-btn-pdf': 'תמונות גולשים',
    'nav-btn-home': 'סיפורים',
    'nav-btn-sub': '💳 מנוי חודשי',
    'btn-join': '✨ הצטרף',
    'btn-inbox-text': 'הודעות',
    'btn-logout-nav': 'התנתק',
    // Sidebar ad
    'sidebar-ad-title': 'שטח פרסום',
    'sidebar-ad-text': 'הזדמנות נהדרת להגיע לאלפי קוראים ביום. פנה אלינו לקבלת הצעת מחיר משתלמת.',
    'btn-sidebar-ad': 'פרסם אצלנו למטה',
    // Sidebar drawer
    'sidebar-dashboard-title': 'לוח הבקרה שלי',
    'sidebar-text-stories': 'כתבות',
    'sidebar-text-store': 'חנות',
    'sidebar-text-graphs': 'גרפים ונתונים',
    'sidebar-text-premium': 'פרימיום',
    'sidebar-text-video': 'סרטונים',
    'sidebar-text-mygraphs': 'הגרפים שלי',
    'sidebar-text-myarticles': 'הכתבות שלי',
    'sidebar-text-mypurchases': 'הרכישות שלי',
    'sidebar-sponsored-title': 'שפר את הפרודוקטיביות עם AI',
    'sidebar-sponsored-label': 'ממומן',
    // Weather Widget
    'weather-city': 'תל אביב',
    'weather-temp': '24°C',
    // Graphs & Data Page
    'graphs-page-title': 'גרפים ונתונים',
    'graphs-page-tag': 'ניתוח מערכת בזמן אמת',
    'graph-card-1-title': '<i class="fa-solid fa-chart-line" style="color:var(--primary);"></i> תעבורת אתר יומית',
    'graph-card-1-desc': '* תנועת גולשים ייחודית בחתך ימים בשבוע האחרון.',
    'graph-card-2-title': '<i class="fa-solid fa-coins" style="color:#eab308;"></i> הכנסות ממנויים',
    'graph-card-2-desc': '* גידול חודשי יציב בהכנסות מתוכניות פרימיום.',
    // Video Page
    'video-page-title': 'סרטונים ושידורים חיים',
    'video-page-tag': 'תוכן מנויים פרימיום',
    'video-mock-title': 'סקירת דגמי ה-ThinkPad החדשים של לנובו לשנת 2026',
    'video-mock-subtitle': 'סרטון פרימיום בלעדי למנויים',
    // Customer Service Widget
    'cs-btn-text': 'שירות לקוחות',
    'cs-panel-title': 'שירות לקוחות SOKI',
    'cs-panel-status': 'פעיל עכשיו',
    'cs-welcome-msg': 'שלום! כיצד נוכל לעזור לך היום? בחר באחת מהאפשרויות הבאות או כתוב לנו הודעה.',
    'cs-quick-1': '💳 איך מצטרפים למנוי Premium?',
    'cs-quick-2': '📸 איך מעלים תמונות גולשים?',
    'cs-quick-3': '👤 שיחה עם נציג תמיכה אנושי',
    'cs-chat-input': 'הקלד הודעה כאן...',
    // Footer Headers & Links
    'footer-col-1-header': 'צור קשר',
    'footer-col-1-link-1': '⭐ מנוי חודשי',
    'footer-col-1-link-2': 'אימייל למערכת',
    'footer-col-1-link-3': 'התקשר אלינו: 050-000-0000',
    'footer-col-1-link-4': '<i class="fa-brands fa-paypal"></i> תרומה ב-PayPal',
    'footer-col-2-header': 'מידע',
    'footer-col-2-link-1': 'אודותינו',
    'footer-col-2-link-2': 'מה חדש',
    'footer-col-3-header': 'ניהול',
    'footer-col-3-link-1': 'התחברות מנהל',
    'footer-col-3-link-2': 'העלה כתבה',
    'footer-copyright-text': 'כל הזכויות שמורות © 2026 SOKI Media LLC.',
  },
  en: {
    // Navigation
    'nav-btn-pdf': 'User Photos',
    'nav-btn-home': 'Stories',
    'nav-btn-sub': '💳 Monthly Sub',
    'btn-join': '✨ Join Us',
    'btn-inbox-text': 'Messages',
    'btn-logout-nav': 'Log Out',
    // Sidebar ad
    'sidebar-ad-title': 'Ad Space',
    'sidebar-ad-text': 'Great opportunity to reach thousands of daily readers. Contact us for a quote.',
    'btn-sidebar-ad': 'Advertise with Us',
    // Sidebar drawer
    'sidebar-dashboard-title': 'My Dashboard',
    'sidebar-text-stories': 'Stories',
    'sidebar-text-store': 'Store',
    'sidebar-text-graphs': 'Graphs & Data',
    'sidebar-text-premium': 'Premium',
    'sidebar-text-video': 'Videos',
    'sidebar-text-mygraphs': 'My Graphs',
    'sidebar-text-myarticles': 'My Articles',
    'sidebar-text-mypurchases': 'My Purchases',
    'sidebar-sponsored-title': 'Boost Productivity with AI',
    'sidebar-sponsored-label': 'SPONSORED',
    // Weather Widget
    'weather-city': 'Washington',
    'weather-temp': '16°C',
    // Graphs & Data Page
    'graphs-page-title': 'Graphs & Data',
    'graphs-page-tag': 'Real-time System Analytics',
    'graph-card-1-title': '<i class="fa-solid fa-chart-line" style="color:var(--primary);"></i> Daily Traffic',
    'graph-card-1-desc': '* Unique visitor traffic by days of the past week.',
    'graph-card-2-title': '<i class="fa-solid fa-coins" style="color:#eab308;"></i> Subscription Revenue',
    'graph-card-2-desc': '* Steady monthly revenue growth from premium subscriptions.',
    // Video Page
    'video-page-title': 'Videos & Live Streams',
    'video-page-tag': 'Premium Member Content',
    'video-mock-title': 'Review of the new Lenovo ThinkPad models for 2026',
    'video-mock-subtitle': 'Exclusive premium video for subscribers',
    // Customer Service Widget
    'cs-btn-text': 'Customer Service',
    'cs-panel-title': 'SOKI Support',
    'cs-panel-status': 'Active Now',
    'cs-welcome-msg': 'Hello! How can we help you today? Please choose one of the options below or write us a message.',
    'cs-quick-1': '💳 How to subscribe to Premium?',
    'cs-quick-2': '📸 How to upload user photos?',
    'cs-quick-3': '👤 Chat with a support agent',
    'cs-chat-input': 'Type a message here...',
    // Footer Headers & Links
    'footer-col-1-header': 'Contact Us',
    'footer-col-1-link-1': '⭐ Monthly Subscription',
    'footer-col-1-link-2': 'Email Support',
    'footer-col-1-link-3': 'Call Us: +1-555-0199',
    'footer-col-1-link-4': '<i class="fa-brands fa-paypal"></i> Donate via PayPal',
    'footer-col-2-header': 'Information',
    'footer-col-2-link-1': 'About Us',
    'footer-col-2-link-2': "What's New",
    'footer-col-3-header': 'Admin',
    'footer-col-3-link-1': 'Admin Login',
    'footer-col-3-link-2': 'Upload Articles',
    'footer-copyright-text': '© 2026 SOKI Media LLC. All rights reserved.',
  }
};

const articleTranslations = {
  1: {
    title: 'Lenovo Refreshes ThinkPad Series with Five New Models',
    category: 'Laptops',
    author: 'News Team',
    time: 'Today, 18:30',
    snippet: 'Lenovo introduces major updates to its professional laptop line, optimizing cooling systems, increasing screen brightness, and enhancing performance with latest AI-accelerated processors...',
    content: `
      <p>Lenovo has officially unveiled the newest iterations of its beloved ThinkPad professional laptop family. This refreshing update encompasses five brand-new models designed from the ground up to meet the demands of modern business professionals and software engineers.</p>
      <p>The updated lineup places a major emphasis on cooling architectures, visual brilliance, and unprecedented performance capabilities. Each model integrates high-refresh-rate displays and is powered by state-of-the-art processors featuring dedicated AI processing units.</p>
      <p>Additionally, Lenovo has enhanced their carbon-footprint reduction initiatives by using recycled aluminum and magnesium materials in the chassis without compromising their legendary military-grade durability.</p>
    `
  },
  2: {
    title: 'Google Introduces New Verification Protocol for Android App Installs',
    category: 'Security',
    author: 'News Team',
    time: 'Today, 17:00',
    snippet: 'Android devices will soon receive a robust background security update introducing a mandatory real-time threat analysis during application installations...',
    content: `
      <p>In its ongoing battle against mobile malware, Google has announced a groundbreaking security feature aimed at safeguarding millions of Android users worldwide. The new verification protocol introduces a real-time deep scan during application installations.</p>
      <p>This scanning engine utilizes cloud-based heuristic machine learning models to detect suspicious behavioral patterns before any malicious code can execute on the host device.</p>
      <p>The feature will roll out transparently via Google Play Services, ensuring older Android versions benefit from the same high level of protection as the newest releases.</p>
    `
  },
  3: {
    title: 'Xiaomi Watch S5 Announced: Larger Display and Up to 21 Days Battery Life',
    category: 'Smartwatches',
    author: 'News Team',
    time: 'Today, 16:00',
    snippet: 'Xiaomi unveils its premium smart wearable, featuring a high-brightness AMOLED circular screen, comprehensive health tracking metrics, and exceptional energy efficiency...',
    content: `
      <p>Xiaomi has officially expanded its premium smart wearable family with the launch of the Xiaomi Watch S5. The new device boasts a gorgeous circular AMOLED display with peak brightness levels reaching up to 1500 nits, ensuring complete outdoor readability.</p>
      <p>Under the hood, a new custom dual-core chipset coupled with advanced battery optimization algorithms allows the smartwatch to achieve an astoundingly long battery life of up to 21 days on a single charge.</p>
      <p>It also features 24/7 cardiovascular monitoring, blood-oxygen saturation sensors, sleep quality analysis, and supports over 120 professional fitness tracking activities.</p>
    `
  },
  4: {
    title: 'Google Upgrades Google AI Pro Storage to 5TB for Free',
    category: 'Google',
    author: 'News Team',
    time: 'Today, 16:45',
    snippet: 'Google upgrades AI Pro subscription storage from 2TB to 5TB. The storage increase is applied automatically without any price changes, remaining at 74.90 NIS in Israel...',
    content: `
      <p>In a surprising competitive maneuver, Google has announced a massive storage upgrade for all subscribers of its Google AI Pro tier. All existing and new customers will see their cloud storage capacity automatically increased from 2TB to 5TB.</p>
      <p>Most importantly, Google has confirmed that this substantial capacity increase comes at absolutely no additional cost, keeping the subscription price locked at 74.90 NIS per month in Israel.</p>
      <p>This strategic move is clearly intended to position Google\'s AI Pro offering as a highly lucrative option for creative professionals, developers, and researchers who generate large datasets using generative AI tools.</p>
    `
  },
  5: {
    title: 'WhatsApp Warns: 200 Users Downloaded Malicious Clone Application',
    category: 'Security',
    author: 'News Team',
    time: 'Today, 15:45',
    snippet: 'Security researchers warn that an unauthorized, modified WhatsApp clone has bypassed user security filters, actively harvesting private communication logs...',
    content: `
      <p>WhatsApp security analysts have released an urgent advisory after identifying a malicious, highly sophisticated WhatsApp clone operating in the wild. Initial investigations reveal that approximately 200 users have downloaded and installed this fraudulent software.</p>
      <p>The cloned application masquerades as an official client offering advanced custom styles, but operates in the background as a spyware vector, capturing text history, media assets, and contacts list.</p>
      <p>Users are strongly urged to only download the official WhatsApp application from trusted sources like the Apple App Store or Google Play Store and immediately uninstall any third-party modifications.</p>
    `
  },
  6: {
    title: 'Google Announces Wear OS 6.1: Standalone GPS and Upgraded Kid Accounts',
    category: 'Google',
    author: 'News Team',
    time: 'Today, 12:12',
    snippet: 'The new wearable update enhances independent navigation features and implements advanced parental controls, competing directly against Apple Watch...',
    content: `
      <p>Google has officially rolled out Wear OS 6.1, a significant firmware update focused on improving watch autonomy and introducing highly requested child account safety features.</p>
      <p>With standalone GPS optimization, compatible smartwatch hardware will now be able to record highly precise route maps during outdoor jogs or cycling sessions without requiring a constant Bluetooth connection to a smartphone.</p>
      <p>Furthermore, Google has redesigned the kids wearable experience, giving parents powerful remote tracking and scheduling tools to establish healthy digital screen habits.</p>
    `
  },
  7: {
    title: 'Nvidia Presents Auto Shader Compilation to Minimize Game Loading Lag',
    category: 'Hardware',
    author: 'News Team',
    time: 'Today, 10:40',
    snippet: 'The new real-time technology aims to completely eliminate shader pre-compilation stuttering, saving precious seconds during game startup...',
    content: `
      <p>Nvidia has unveiled its latest innovation in graphics rendering technology: Auto Shader Compilation. This feature is set to put an end to one of the most frustrating annoyances in modern PC gaming: shader-compilation stuttering.</p>
      <p>By leveraging dedicated tensor cores and high-throughput background threads, the GPU compiles complex shader instructions in real-time right before they are displayed, preventing frames from dropping during intense gameplay sequences.</p>
      <p>Nvidia confirms that developers can integrate this technology into existing DirectX 12 and Vulkan titles with minimal code changes.</p>
    `
  },
  8: {
    title: 'Telegram Introduces AI-Powered Text Editor and Enhanced Polling Tools',
    category: 'Apps',
    author: 'News Team',
    time: 'Today, 09:19',
    snippet: 'Telegram update features powerful generative AI tools to rewrite messages, dynamic live photo support, and highly configurable group poll controls...',
    content: `
      <p>Telegram continues to solidify its reputation as a feature-rich messaging powerhouse with its latest major update. The flagship addition is an integrated, offline-capable generative AI text editor.</p>
      <p>This virtual writing assistant allows users to instantly change the tone of their draft messages, correct grammatical errors, summarize long threads, or translate text across 15 popular languages.</p>
      <p>Additionally, group administrators will enjoy enhanced polling capabilities, including quiz-mode configurations and detailed breakdown statistics for transparent community voting.</p>
    `
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'he' ? 'en' : 'he';
  localStorage.setItem('siteLang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const dict = translationDictionary[lang] || {};
  for (const [id, value] of Object.entries(dict)) {
    const el = document.getElementById(id);
    if (el) {
      if (id === 'cs-chat-input') {
        el.placeholder = value;
      } else {
        el.innerHTML = value;
      }
    }
  }

  // Update HTML structure directions dynamically
  if (lang === 'he') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'he';
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
  }

  // Update navbar language toggle label
  const toggleBtnText = document.querySelector('#lang-toggle span');
  if (toggleBtnText) {
    toggleBtnText.textContent = lang === 'he' ? 'English' : 'עברית';
  }

  // Re-render components with newly selected language strings
  const activePage = document.querySelector('.page.active')?.id?.replace('page-', '') || 'home';
  if (activePage === 'home') {
    renderNewsLayout(currentPage);
  } else if (activePage === 'article' && typeof currentArticleId !== 'undefined') {
    showArticle(currentArticleId);
  }
}

// ========== SIDEBAR CONTROL ==========

function toggleSidebarCollapse() {
  const sidebar = document.getElementById('dashboard-sidebar');
  if (!sidebar) return;
  sidebar.classList.toggle('collapsed');
  
  const icon = document.getElementById('collapse-btn-icon');
  if (icon) {
    if (sidebar.classList.contains('collapsed')) {
      icon.className = 'fa-solid fa-chevron-right';
    } else {
      icon.className = 'fa-solid fa-chevron-left';
    }
  }
}

function toggleSidebarDrawer() {
  const sidebar = document.getElementById('dashboard-sidebar');
  if (!sidebar) return;
  sidebar.classList.toggle('drawer-open');
}

function handleSidebarNavigation(page) {
  // Update sidebar active highlights
  document.querySelectorAll('.sidebar-menu-item').forEach(el => el.classList.remove('active'));
  const activeSidebarLink = document.getElementById(`sidebar-link-${page}`);
  if (activeSidebarLink) {
    activeSidebarLink.classList.add('active');
  } else if (page === 'pdf-store') {
    const storeLink = document.getElementById('sidebar-link-store');
    if (storeLink) storeLink.classList.add('active');
  } else if (page === 'subscription') {
    const premLink = document.getElementById('sidebar-link-premium');
    if (premLink) premLink.classList.add('active');
  }

  showPage(page);
  
  // Close mobile drawer
  const sidebar = document.getElementById('dashboard-sidebar');
  if (sidebar) sidebar.classList.remove('drawer-open');
}

function handleSidebarAction(action) {
  if (action === 'my-graphs') {
    handleSidebarNavigation('graphs');
    showToast(currentLang === 'en' ? 'Opening Analytics charts...' : 'פותח את גרפי הנתונים שלי...');
  } else if (action === 'my-articles') {
    handleSidebarNavigation('home');
    showToast(currentLang === 'en' ? 'Showing your custom feed...' : 'מציג את הסיפורים שפרסמתי...');
  } else if (action === 'my-purchases') {
    openCheckoutModal();
  }
  
  const sidebar = document.getElementById('dashboard-sidebar');
  if (sidebar) sidebar.classList.remove('drawer-open');
}

// ========== CUSTOMER SERVICE CHAT PANEL ==========

function toggleChatPanel() {
  const panel = document.getElementById('customer-service-panel');
  if (!panel) return;
  panel.classList.toggle('cs-panel-visible');
  panel.classList.toggle('cs-panel-hidden');
}

function hideCsWidget() {
  const widget = document.getElementById('customer-service-widget');
  const panel = document.getElementById('customer-service-panel');
  if (widget) widget.style.display = 'none';
  if (panel) {
    panel.classList.remove('cs-panel-visible');
    panel.classList.add('cs-panel-hidden');
  }
}

function sendCsQuickReply(optionId) {
  const chatBody = document.getElementById('cs-chat-body');
  if (!chatBody) return;
  
  const quickReplies = document.getElementById('cs-quick-replies');
  if (quickReplies) quickReplies.style.display = 'none';
  
  let userMsgText = '';
  let agentReplyText = '';
  
  if (optionId === 1) {
    userMsgText = currentLang === 'en' ? '💳 How to subscribe to Premium?' : '💳 איך מצטרפים למנוי Premium?';
    agentReplyText = currentLang === 'en' 
      ? 'To subscribe to our premium plan, go to the Premium page, fill out your checkout details, or click Donate via PayPal to start enjoying ad-free usage!' 
      : 'כדי להירשם לתוכנית הפרימיום שלנו, היכנס לדף "פרימיום" בסרגל הצד, מלא את פרטי התשלום או לחץ על כפתור PayPal ותוכל ליהנות מגלישה ללא פרסומות!';
  } else if (optionId === 2) {
    userMsgText = currentLang === 'en' ? '📸 How to upload user photos?' : '📸 איך מעלים תמונות גולשים?';
    agentReplyText = currentLang === 'en' 
      ? 'Navigate to the Laptops/Store page and scroll down to "Upload User Photos". Fill out the title and description, upload up to 4 images, and press Send!' 
      : 'עבור לדף "תמונות גולשים", גלול לחלק של "העלה תמונות גולשים", מלא את פרטי הנושא והתיאור, בחר עד 4 תמונות ולחץ על "שלח"!';
  } else if (optionId === 3) {
    userMsgText = currentLang === 'en' ? '👤 Chat with a support agent' : '👤 שיחה עם נציג תמיכה אנושי';
    agentReplyText = currentLang === 'en' 
      ? 'We are connecting you to an active support agent. Please type your detailed inquiry below, and we will reply shortly!' 
      : 'אנו מחברים אותך כעת לנציג תמיכה פעיל. אנא הקלד את שאלתך בתיבת הטקסט למטה ונציג יענה לך בהקדם!';
  }
  
  appendCsBubble(userMsgText, true);
  showCsTypingIndicator();
  
  setTimeout(() => {
    removeCsTypingIndicator();
    appendCsBubble(agentReplyText, false);
    
    if (optionId !== 3) {
      setTimeout(() => {
        if (quickReplies) quickReplies.style.display = 'flex';
      }, 1000);
    }
  }, 1200);
}

function sendCsCustomMessage() {
  const input = document.getElementById('cs-chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  
  input.value = '';
  appendCsBubble(text, true);
  showCsTypingIndicator();
  
  setTimeout(() => {
    removeCsTypingIndicator();
    const replyText = currentLang === 'en'
      ? 'Thank you for your message! Our representative will review your request and get back to you shortly.'
      : 'תודה על פנייתך! נציג השירות שלנו יבחן את פנייתך ויחזור אליך בהקדם האפשרי.';
    appendCsBubble(replyText, false);
  }, 1500);
}

function appendCsBubble(text, isUser) {
  const chatBody = document.getElementById('cs-chat-body');
  if (!chatBody) return;
  
  const bubble = document.createElement('div');
  bubble.style.maxWidth = '80%';
  bubble.style.padding = '14px 18px';
  bubble.style.borderRadius = isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px';
  bubble.style.fontSize = '0.95rem';
  bubble.style.lineHeight = '1.5';
  bubble.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
  
  if (isUser) {
    bubble.style.alignSelf = 'flex-end';
    bubble.style.background = '#0071e3';
    bubble.style.color = '#fff';
  } else {
    bubble.style.alignSelf = 'flex-start';
    bubble.style.background = '#fff';
    bubble.style.border = '1px solid var(--border-subtle)';
    bubble.style.color = '#1d1d1f';
  }
  
  bubble.innerHTML = text;
  chatBody.appendChild(bubble);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function showCsTypingIndicator() {
  const chatBody = document.getElementById('cs-chat-body');
  if (!chatBody) return;
  
  const indicator = document.createElement('div');
  indicator.id = 'cs-typing-indicator';
  indicator.style.alignSelf = 'flex-start';
  indicator.style.background = '#fff';
  indicator.style.border = '1px solid var(--border-subtle)';
  indicator.style.padding = '10px 18px';
  indicator.style.borderRadius = '16px 16px 16px 4px';
  indicator.style.color = '#86868b';
  indicator.style.fontSize = '0.85rem';
  indicator.style.display = 'flex';
  indicator.style.alignItems = 'center';
  indicator.style.gap = '4px';
  indicator.innerHTML = '<span class="typing-dot">.</span><span class="typing-dot">.</span><span class="typing-dot">.</span>';
  
  chatBody.appendChild(indicator);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function removeCsTypingIndicator() {
  const indicator = document.getElementById('cs-typing-indicator');
  if (indicator) indicator.remove();
}

function initBilingualAndSidebar() {
  applyLanguage(currentLang);
}

// ========== GLOBAL SEARCH SYSTEM ==========

function handleGlobalSearch(query) {
  const dropdown = document.getElementById('global-search-results');
  if (dropdown) {
    dropdown.classList.add('hidden');
    dropdown.innerHTML = '';
  }
}

function selectSearchArticle(id) {
  showArticle(id);
  clearGlobalSearch();
}

function selectSearchProduct(index) {
  showProductDetail(index);
  clearGlobalSearch();
}

function clearGlobalSearch() {
  const input = document.getElementById('global-search-input');
  const dropdown = document.getElementById('global-search-results');
  if (input) input.value = '';
  if (dropdown) {
    dropdown.classList.add('hidden');
    dropdown.innerHTML = '';
  }
}

// Close search dropdown on click outside
document.addEventListener('click', (e) => {
  const searchBox = document.querySelector('.apple-search-box');
  if (searchBox && !searchBox.contains(e.target)) {
    const dropdown = document.getElementById('global-search-results');
    if (dropdown) dropdown.classList.add('hidden');
  }
});

// Execute custom systems initialization
initBilingualAndSidebar();

// ========== UPLOAD PHOTO MODAL CONTROLLERS ==========
function openUploadModal() {
  const modal = document.getElementById('upload-photo-modal');
  if (modal) {
    modal.classList.add('active');
    if (typeof renderUserPdfSlots === 'function') renderUserPdfSlots();
  }
}

function closeUploadModal() {
  const modal = document.getElementById('upload-photo-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function closeUploadModalOnOverlay(event) {
  if (event.target.id === 'upload-photo-modal') {
    closeUploadModal();
  }
}

// ========== STORE CATEGORIES SYSTEM ==========
let selectedStoreCategory = 'all';

const storeCategoryMap = {
  'he': {
    'all': 'הכל 🌟',
    'video': 'סרטונים 🎥',
    'photo': 'תמונות 📸',
    'pdf': 'קובצי PDF 📄',
    'guide': 'מדריכים 📚',
    'software': 'תוכנות 🖥️'
  },
  'en': {
    'all': 'All 🌟',
    'video': 'Videos 🎥',
    'photo': 'Photos 📸',
    'pdf': 'PDF Files 📄',
    'guide': 'Guides 📚',
    'software': 'Software 🖥️'
  }
};

function renderStoreCategoryBar() {
  const bar = document.getElementById('store-category-filter-bar');
  if (!bar) return;
  
  const categories = ['all', 'video', 'photo', 'pdf', 'guide', 'software'];
  const map = storeCategoryMap[currentLang] || storeCategoryMap['he'];
  
  bar.innerHTML = categories.map(cat => {
    const label = map[cat] || cat;
    const activeClass = (cat === selectedStoreCategory) ? 'active' : '';
    return `
      <button class="category-chip ${activeClass}" onclick="selectStoreCategory('${cat}')">
        ${label}
      </button>
    `;
  }).join('');
}

function selectStoreCategory(cat) {
  selectedStoreCategory = cat;
  renderStoreCategoryBar();
  renderPdfStoreGrid();
}

// ========== NOTIFICATIONS ==========
function showNotifications() {
  showToast('🔔 אין התראות חדשות כרגע');
}

// ========== SAVED ITEMS ==========
function showSavedItems() {
  showToast('🔖 אין פריטים שמורים כרגע');
}

// ========== INITIALIZATION AND STARTUP ==========
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  showPage('home');
  updateUserUI();
});
