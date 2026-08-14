const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    let filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(filePath));
    } else { 
      results.push(filePath);
    }
  });
  return results;
}

const files = walk('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css'));
files.push('index.html');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // 1. Update Logo URL
  content = content.replace(
    /https:\/\/zpglxnmha3d0eovf\.public\.blob\.vercel-storage\.com\/WhatsApp%20Image%202026-08-10%20at%202\.18\.23%20PM\.jpeg/g,
    'https://zpglxnmha3d0eovf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-10%20at%202.18.23%20PM.png'
  );

  // 2. Mark target colors
  content = content.replace(/#0A0A0B/g, 'TEMP_DARK');
  content = content.replace(/#EBE6E0/g, 'TEMP_LIGHT');
  
  // 3. Adjust literal white/black classes
  content = content.replace(/bg-white\/10/g, 'bg-black/5');
  content = content.replace(/bg-white\/20/g, 'bg-black/10');
  content = content.replace(/bg-white\/30/g, 'bg-black/20');
  content = content.replace(/bg-white\/5/g, 'bg-black/5');
  
  content = content.replace(/border-white\/10/g, 'border-black/10');
  content = content.replace(/border-white\/20/g, 'border-black/20');
  content = content.replace(/border-white\/30/g, 'border-black/30');
  content = content.replace(/border-white\/5/g, 'border-black/5');
  
  content = content.replace(/text-white\/20/g, 'text-black/20');
  content = content.replace(/text-white\/10/g, 'text-black/10');

  content = content.replace(/hover:bg-white\/10/g, 'hover:bg-black/5');
  content = content.replace(/hover:border-white\/30/g, 'hover:border-black/30');
  
  // Literal hover:bg-white on buttons that are now black should be hover:bg-zinc-800
  content = content.replace(/hover:bg-white/g, 'hover:bg-zinc-800');
  content = content.replace(/hover:text-white/g, 'hover:text-black');

  // Specific BG tweaks
  content = content.replace(/bg-\[#1A1A1C\]/g, 'bg-[#F5F5F0]');
  
  // Blend modes for dark->light transition
  content = content.replace(/mix-blend-multiply/g, 'mix-blend-normal');
  
  // 4. Swap markers
  content = content.replace(/TEMP_DARK/g, '#FFFFFF'); // The old dark background becomes white
  content = content.replace(/TEMP_LIGHT/g, '#0A0A0B'); // The old light text becomes dark

  fs.writeFileSync(f, content);
});

console.log("Inversion complete.");
