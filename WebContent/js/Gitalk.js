var gitalk = new Gitalk({
  clientID: 'c0e09dde74ed2bed4c7f',
  clientSecret: 'b264e445a3e043106103d83a106529a9b55241a2',
  repo: 'xiangyongshuo.github.io',
  owner: 'WarLordYong',
  admin: ['WarLordYong'],
  id: location.pathname,      // 请确保你的 location 连接小于 50 个字符，否则，插件会生成失败
  distractionFreeMode: false  // 专注模式
})

gitalk.render('gitalk-container')
