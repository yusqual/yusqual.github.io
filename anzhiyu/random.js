var posts=["/leetcode/lc_day2.html","/leetcode/lc_day3.html","/leetcode/lc_day4_summary.html","/leetcode/lc_day4.html","/leetcode/lc_day5.html","/leetcode/lc_day1.html","/games/speedrun_ext.html","/leetcode/lc_day6.html","/leetcode/lc_day7.html","/leetcode/lc_day8.html","/leetcode/lc_day9.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };