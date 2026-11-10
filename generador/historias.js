const { chromium } = require('playwright'); const fs=require('fs');
const img = n => 'data:image/jpeg;base64,'+fs.readFileSync('../fotos-productos/'+n+'.jpg').toString('base64');
const legal='Beber con moderación. Prohibida su venta a menores de 18 años.';
const base = (bg,col='#fff') => `*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;background:${bg};font-family:'Segoe UI',Arial,sans-serif;color:${col};display:flex;flex-direction:column;align-items:center;padding:120px 70px 80px;text-align:center}
.tag{font-size:38px;font-weight:800;letter-spacing:4px;background:rgba(255,255,255,.16);padding:16px 38px;border-radius:60px;margin-bottom:46px}
h1{font-size:80px;line-height:1.08;font-weight:900;margin-bottom:46px}
.card{width:100%;background:#fff;color:#111;border-radius:32px;padding:14px 34px 14px 14px;margin:12px 0;display:flex;align-items:center;gap:28px;text-align:left}
.card img{width:220px;height:220px;object-fit:contain;border-radius:22px;flex:none}
.n{flex:none;width:86px;height:86px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:48px;font-weight:900;color:#fff}
.t{font-size:54px;font-weight:800;line-height:1.08}
.sp{margin-top:auto;height:150px}.foot{font-size:52px;font-weight:800;margin:24px 0 20px}.brand{font-size:38px;font-weight:700;opacity:.9}.legal{font-size:27px;opacity:.85;margin-top:18px}`;
const list = (s,small) => s.items.map(([n,t,f,c])=>`<div class="card" style="${small?'padding-top:6px;padding-bottom:6px':''}"><img src="${img(f)}" style="${small?'width:190px;height:190px':''}"><div class="n" style="background:${c}">${n}</div><div class="t">${t}</div></div>`).join('');
const page=(s,small)=>`<!doctype html><html><head><meta charset="utf-8"><style>${base(s.bg)}</style></head><body><div class="tag">${s.tag}</div><h1>${s.title}</h1>${list(s,small)}<div class="sp"></div><div class="foot">${s.foot}</div><div class="brand">@tiendamitreba</div><div class="legal">${legal}</div></body></html>`;
const S=[
 {f:'historia-1.png',bg:'linear-gradient(160deg,#0f1b3d,#1e3a8a)',tag:'LOS MÁS VENDIDOS',title:'¿Ya trabajás los productos que más vendemos?',items:[['1','SKYY Vodka Raspberry','skyy-vodka-raspberry-700ml','#dc2626'],['2','Buhero Negro Fernet','buhero-negro-fernet-700ml','#111827'],['3','Gancia Americano','gancia-americano-950ml','#2563eb']],foot:'Sumalos a tu pedido 📩'},
 {f:'historia-2.png',small:true,bg:'linear-gradient(160deg,#111827,#374151)',tag:'VOTÁ',title:'¿Cuál es tu fernet?',items:[['A','Buhero Negro','buhero-negro-fernet-700ml','#111827'],['B','1882','1882-fernet-750ml','#92400e'],['C','Capri','capri-fernet-700ml','#1d4ed8'],['D','Branca','branca-fernet-750ml','#7c2d12']],foot:'Votá en la encuesta 👇'},
 {f:'historia-3.png',bg:'linear-gradient(160deg,#7f1d1d,#14532d)',tag:'MESA NAVIDEÑA',title:'¿Cuál de estos no te puede faltar en tu mesa navideña?',items:[['1','Sidra Del Valle','del-valle-sidra-botella-720ml','#b91c1c'],['2','Pan dulce Valente','valente-pan-dulce-con-fruta-400g','#15803d'],['3','Mantecol','mantecol-clasico-x-111gr','#a16207']],foot:'Respondé acá abajo 👇'},
];
const pb = `<!doctype html><html><head><meta charset="utf-8"><style>*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;background:linear-gradient(165deg,#fdf2f8,#fce7f3 45%,#f9a8d4);font-family:'Segoe UI',Arial,sans-serif;color:#4a044e;display:flex;flex-direction:column;align-items:center;padding:110px 70px 80px;text-align:center}
.tag{font-size:38px;font-weight:800;letter-spacing:4px;background:#be185d;color:#fff;padding:16px 38px;border-radius:60px;margin-bottom:46px}
h1{font-size:76px;line-height:1.1;font-weight:900;margin-bottom:40px}h1 b{color:#be185d}
.box{background:#fff;border-radius:40px;padding:30px;width:100%;box-shadow:0 20px 50px rgba(190,24,93,.18)}
.imgs{display:flex;justify-content:center}.imgs img{width:300px;height:300px;object-fit:contain}
.n{font-size:170px;font-weight:900;color:#be185d;line-height:1;margin-top:10px}.l{font-size:46px;font-weight:700;margin-top:8px}
.foot{margin-top:auto;font-size:52px;font-weight:800}.brand{font-size:38px;font-weight:700;margin-top:20px}</style></head><body>
<div class="tag">¿SABÍAS QUE…?</div><h1><b>4 de cada 10</b> litros de shampoo que se consumen en Argentina son Plusbelle</h1>
<div class="box"><div class="imgs"><img src="${img('plusbelle-shampoo-hidratacion-1lt')}"><img src="${img('plusbelle-shampoo-suavidad-1lt')}"><img src="${img('plusbelle-shampoo-frescura-1lt')}"></div>
<div class="n">+40%</div><div class="l">del shampoo que se consume en el país, medido en litros</div></div>
<div class="foot">¿Ya lo tenés en tu góndola? 📩</div><div class="brand">@tiendamitreba</div></body></html>`;
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
for(const s of S){await p.setContent(page(s,s.small));await p.waitForTimeout(300);await p.screenshot({path:s.f});}
await p.setContent(pb);await p.waitForTimeout(300);await p.screenshot({path:'historia-plusbelle-mercado.png'});
await b.close();})();
