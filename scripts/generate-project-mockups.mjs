import { writeFile } from 'node:fs/promises';

// Original vector interfaces. Values and conversations are demonstration content.
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const rect = (x,y,w,h,fill,r=12,stroke='none') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const text = (x,y,s,size=22,fill='#1c2825',weight=400) => `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" font-weight="${weight}">${esc(s)}</text>`;
const line = (x,y,x2,y2,c='#e2e5df') => `<path d="M${x} ${y}H${x2}" stroke="${c}"/>`;
const pill = (x,y,s,fill='#e8eee7',ink='#315546',w=150) => rect(x,y-24,w,36,fill,18)+text(x+16,y,s,17,ink,600);
function svg(title,body,bg='#f5f6f1') {return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="960" viewBox="0 0 1600 960"><title>${esc(title)}</title><desc>Original interface preview with illustrative data.</desc><g font-family="Arial, sans-serif">${rect(0,0,1600,960,bg,0)}${body}</g></svg>`;}
function sidebar(brand,items,accent='#b8a5ed',bg='#14231e') {
 let s=rect(0,0,240,960,bg,0)+rect(30,35,35,35,accent,9)+text(80,61,brand,brand.length>12?17:23,'#fff',700)+text(30,113,'DEMO WORKSPACE',13,'#99afa2',600);
 items.forEach((label,i)=>{if(!i)s+=rect(18,148+i*67,204,50,'#ffffff16',9);s+=rect(34,166+i*67,14,14,i? '#688174':accent,3)+text(65,181+i*67,label,19,i?'#b8c8bf':'#fff',i?400:600)});
 return s+text(30,908,'Seltiv / Product studio',16,'#9cb2a5');
}
const header=(section,accent='#e5ebe2')=>rect(240,0,1360,86,'#fff',0)+text(280,53,section,20,'#6d7871')+rect(1215,24,200,40,'#f5f6f1',8)+text(1232,51,'Search workspace',17,'#8a918c')+rect(1500,24,40,40,accent,20)+text(1510,51,'ST',15,'#274837',700);

let erp=sidebar('WORKSPACE',['Overview','Pipeline','Projects','People','Finance','Reports'])+header('Workspace / Overview');
erp+=text(285,153,'Business, at a glance.',39,'#1d2b25',600)+text(285,191,'From first conversation to final invoice.',20,'#77817a')+pill(1330,157,'This month','#e9e5f6','#66538d',180);
[['Open pipeline','৳ 24.8L','12 active opportunities'],['Active projects','18','Across 5 delivery teams'],['Team capacity','76%','Room for the next brief'],['Outstanding','৳ 6.2L','Invoices to follow up']].forEach((a,i)=>{let x=285+i*317;erp+=rect(x,225,298,151,'#fff',14,'#e0e6df')+text(x+22,260,a[0],17,'#738077')+text(x+22,311,a[1],36,'#26372e',600)+text(x+22,346,a[2],16,'#7c887f')});
erp+=rect(285,402,800,290,'#fff',14,'#e0e6df')+text(310,445,'Delivery outlook',24,'#28372f',600)+text(310,476,'Project workload across the next six weeks',16,'#7a877e');
[120,160,135,180,145,195].forEach((h,i)=>{let x=345+i*114;erp+=rect(x,650-h,49,h,i===5?'#8a79bc':'#d8d0eb',7)+text(x,679,['W1','W2','W3','W4','W5','W6'][i],15,'#7b827c')});
erp+=rect(1110,402,428,290,'#fff',14,'#e0e6df')+text(1135,445,'Sales pipeline',24,'#28372f',600);
[['New enquiries','06',280],['Qualified','04',225],['Proposal sent','03',170],['Ready to start','02',115]].forEach((a,i)=>{let y=487+i*46;erp+=text(1135,y,a[0],17,'#69776d')+rect(1290,y-17,a[2]*.55,20,['#c7bcdf','#b6a6d3','#9781bd','#6e559b'][i],5)+text(1485,y,a[1],17,'#4c5d50',600)});
erp+=rect(285,720,1253,206,'#fff',14,'#e0e6df')+text(310,764,'Projects in motion',24,'#28372f',600)+text(1030,764,'OWNER',13,'#8c948d')+text(1290,764,'STATUS',13,'#8c948d');
[['Brand platform','Design team','In review'],['Commerce release','Engineering','In progress']].forEach((a,i)=>{let y=818+i*60;erp+=line(310,y-32,1510,y-32)+text(310,y,a[0],20)+text(1030,y,a[1],17,'#6c796e')+pill(1275,y,a[2],'#eee8f7','#766093',190)});

let ai=sidebar('SUPPORT',['Inbox','Voice','Knowledge','Workflows','Activity'],'#79d4a1','#101b17')+rect(240,0,1360,960,'#17231e',0)+rect(240,0,1360,86,'#1b2b23',0)+text(275,53,'Customer support / Agent workspace',21,'#d7e4dc')+pill(1320,52,'Demo mode','#294233','#9ee6b7',210);
ai+=text(280,150,'Every conversation. One clear next step.',35,'#eff7f1',600)+text(280,192,'Reply with context. Escalate with confidence.',20,'#9bb2a3');
ai+=rect(280,230,350,660,'#1c2d24',16,'#34483b')+text(305,277,'Conversations',23,'#eff6f0',600)+pill(305,322,'All channels','#2b4233','#a8d6b7',180);
[['Order enquiry','Can you check my order?','WEB CHAT'],['Delivery question','Do you deliver outside Dhaka?','WHATSAPP'],['Account help','I need to update my details.','VOICE']].forEach((a,i)=>{let y=370+i*140;ai+=rect(295,y,320,118,i?'#203229':'#2c4836',10)+text(315,y+34,a[0],20,'#e5eee7',600)+text(315,y+66,a[1],15,'#a6b9ac')+text(315,y+96,a[2],12,'#8ebc9c',600)});
ai+=rect(650,230,560,660,'#1c2d24',16,'#34483b')+text(680,276,'Order enquiry',24,'#f1f6f1',600)+text(680,309,'Scripted demonstration conversation',15,'#9db4a3')+line(675,332,1185,332,'#34483b');
ai+=rect(680,365,420,90,'#2b3b31',14)+text(700,400,'Hi, can you check the status of',20,'#e8f0e9')+text(700,430,'my order?',20,'#e8f0e9');
ai+=pill(680,511,'ORDER LOOKUP','#243c2c','#8dd5a5',225)+text(680,555,'Found the order in the connected store.',17,'#a8bbad');
ai+=rect(720,592,460,150,'#a4e2b6',14)+text(744,632,'Your order is being prepared.',21,'#193421',600)+text(744,669,'I can share the tracking link once',20,'#24482f')+text(744,704,'the courier has collected it.',20,'#24482f');
ai+=rect(680,800,500,58,'#142219',12,'#435c49')+text(702,836,'Write a reply or hand off to a teammate…',17,'#8aa391');
ai+=rect(1230,230,330,310,'#1c2d24',16,'#34483b')+text(1255,278,'Voice support',23,'#f2f7f2',600)+pill(1255,321,'Call preview','#2d4635','#9bddaf',180);
for(let i=0;i<29;i++){let h=12+Math.sin(i*1.7)**2*80;ai+=rect(1258+i*9,405-h/2,5,h,'#80c89b',3)}
ai+=text(1255,484,'Transcript → Summary → Handoff',16,'#aec8b7')+rect(1230,560,330,330,'#1c2d24',16,'#34483b')+text(1255,606,'Agent context',23,'#f2f7f2',600);
[['Knowledge source','Store help centre'],['Available action','Order lookup'],['Escalation','Human support queue']].forEach((a,i)=>{let y=650+i*80;ai+=text(1255,y,a[0],14,'#8ca997')+text(1255,y+29,a[1],18,'#e2eee5')});

let cinema=sidebar('ANANDO CINEMA',['Screenings','Bookings','Movies','Auditoriums','Reports'],'#f6ad67','#191a22')+rect(240,0,1360,960,'#23242d',0)+rect(240,0,1360,86,'#2b2c36',0)+text(280,53,'Cinema operations / Screening preview',21,'#d7d8e1')+pill(1320,53,'Interface study','#44392f','#f7bd88',220);
cinema+=text(285,153,'A better seat. A smoother show.',37,'#fff',600)+text(285,193,'Screenings, seats and bookings in one workspace.',21,'#aaaab8');
cinema+=rect(285,230,1225,113,'#2d2e3a',14)+text(310,270,'EVENING SCREENING',15,'#ecad79',600)+text(310,310,'Auditorium 01',29,'#fff',600)+pill(775,290,'Today · 7:30 PM','#41372f','#ffc48f',235)+pill(1040,290,'2 seats selected','#365344','#b2ecc5',230);
cinema+=rect(285,368,790,542,'#2b2c37',16)+text(315,413,'Choose your seats',25,'#fff',600)+text(315,449,'Illustrative seating plan',16,'#9c9eae')+`<path d="M410 490Q680 445 950 490" stroke="#d4a87d" stroke-width="7" fill="none"/>`+text(625,486,'SCREEN',14,'#c7aa91');
for(let r=0;r<8;r++){cinema+=text(325,555+r*39,String.fromCharCode(65+r),15,'#7c8191');for(let c=0;c<14;c++){let x=375+c*43+(c>6?30:0), y=535+r*39,sel=r===3&&(c===7||c===8),booked=(r+c)%7===0;cinema+=rect(x,y,28,25,sel?'#f5b477':booked?'#50525f':'#354238',6,sel?'none':'#566258')}}
cinema+=pill(355,881,'Available','#354238','#b7c9ba',165)+pill(545,881,'Booked','#50525f','#d4d5dc',155)+pill(725,881,'Selected','#f5b477','#38291b',175);
cinema+=rect(1100,368,410,542,'#302f39',16)+text(1130,416,'Booking summary',25,'#fff',600);
[['Screening','Evening show'],['Auditorium','Hall 01'],['Seats','D8, D9'],['Ticket type','Standard'],['Quantity','2 tickets']].forEach((a,i)=>{let y=475+i*65;cinema+=text(1130,y,a[0],16,'#a4a1ad')+text(1310,y,a[1],19,'#ece9ed')});
cinema+=rect(1130,812,350,58,'#f5b477',10)+text(1212,850,'Continue booking',21,'#392718',600);

for(const [name,title,body,bg] of [['agency-erp','Agency and corporate ERP / CRM concept',erp],['ai-support','AI customer support concept',ai,'#17231e'],['cinema-ticketing','Cinema management and ticketing interface preview',cinema,'#23242d']]) {
 await writeFile(new URL(`../public/projects/${name}.svg`,import.meta.url),svg(title,body,bg));
}
