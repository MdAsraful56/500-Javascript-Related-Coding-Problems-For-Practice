//তুই একটা পেন্সিলের লিস্ট বানাইছিস: 'ব্লু পেন', 'রেড পেন', 'গ্রিন পেন', 'কালো পেন'। এবার লুপ ব্যবহার করে সব পেন্সিলের নাম প্রিন্ট করবি। প্রোগ্রাম লিখে দেখ।
const pencils = ["ব্লু পেন", "রেড পেন", "গ্রিন পেন", "কালো পেন"];
for (const pen of pencils) {
  console.log(pen);
}

console.log('for loop');

for (let i = 0; i < pencils.length; i++) {
  const element = pencils[i];
  console.log(element);
  
}