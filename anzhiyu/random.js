var posts=["/leetcode/lc_day2.html","/etc/games/speedrun_ext.html","/leetcode/记录力扣刷题day1.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };