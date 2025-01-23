var posts=["/leetcode/lc_day3.html","/leetcode/lc_day2.html","/leetcode/lc_day4_summary.html","/leetcode/lc_day4.html","/leetcode/记录力扣刷题day1.html","/etc/games/speedrun_ext.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };