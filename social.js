(function (w, d) {
  var s, e = d.getElementsByTagName("script")[0];
  var a = function (u, i) {
    if (!d.getElementById(i)) {
      s = d.createElement("script");
      s.src = u;
      if (i) {s.id = i;}
      e.parentNode.insertBefore(s, e);
    }
  };
  a("//platform.twitter.com/widgets.js", "twitter-wjs");
  a("//connect.facebook.net/ja_JP/all.js#xfbml=1", "facebook-jssdk");
})(this, document);
