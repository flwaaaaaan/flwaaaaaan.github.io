var posts=["fncloud/科学上网后有哪些乐趣/","fncloud/FnCloud VPN蜂鸟云机场订阅/","fncloud/全球区苹果ID & 全球软件账号/","fncloud/常见问题汇总FAQ/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };