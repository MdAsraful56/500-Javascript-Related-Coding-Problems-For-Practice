//তুই 1 থেকে 100 পর্যন্ত সংখ্যার মধ্যে যে সব সংখ্যা 5 দিয়ে বিভাজ্য, সেগুলো প্রিন্ট করবি। একটি while লুপ দিয়ে এই কাজটা কর।
let num = 1;

while (num <= 100) {
  if (num % 5 === 0) {
    console.log("৫ দিয়ে বিভাজ্য সংখ্যা:", num);
  }
  num++;
}
