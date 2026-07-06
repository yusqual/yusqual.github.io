var posts=["/qt/daily.html","/notes/notes_p1_highprecision.html","/notes/notes_p2_RBTree.html","/leetcode/notes_p4_sort.html","/notes/notes_p3_mutex.html","/games/speedrun_ext.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };