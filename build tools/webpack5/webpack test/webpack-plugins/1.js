config.plugins.push(
  {
    apply: (compiler) => {
      // 获取 HtmlWebpackPlugin 插件实例
      const plugin = compiler.options.plugins.find(
        (plugin) => plugin.constructor.name ==  'HtmlWebpackPlugin'
      )
      console.log('>>>plugin', plugin)

      // 修改 title 选项的值
      plugin.options.title = 'My Modified App'
    }
  }
)