var title = location.pathname.substr(0, 50);
var gitalk = new Gitalk({
  clientID: 'c0e09dde74ed2bed4c7f',
  clientSecret: 'a860d0852132a370cd0df94be84de7edb0519968',
  repo: 'WarLordYong.github.io',
  owner: 'WarLordYong',
  admin: ['WarLordYong'],
  id: title,      // 请确保你的 location 连接小于 50 个字符，否则，插件会生成失败
  distractionFreeMode: false  // 专注模式
})

gitalk.render('gitalk-container')
