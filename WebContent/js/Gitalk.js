var title = location.pathname.substr(0, 50);
var gitalk = new Gitalk({
  clientID: '6c101277004da299d026',
  clientSecret: '43049bab185926d4704a294d5bfff97aac69297d',
  repo: 'WarLordYong.github.io',
  owner: 'WarLordYong',
  admin: ['WarLordYong'],
  id: title,      // 请确保你的 location 连接小于 50 个字符，否则，插件会生成失败
  distractionFreeMode: false  // 专注模式
})

gitalk.render('gitalk-container')
