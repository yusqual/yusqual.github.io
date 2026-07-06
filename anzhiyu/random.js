var posts=["/notes/notes_p2_RBTree.html","/notes/notes_p1_highprecision.html","/qt/daily.html","/notes/notes_p3_mutex.html","/leetcode/notes_p4_sort.html","/games/speedrun_ext.html","/games/str_guide.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };