var posts=["/leetcode/记录力扣刷题day1.html","/etc/games/speedrun_ext.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };