module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'plugin:prettier/recommended'
  ],                              //使用推荐的React代码检测规范
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
  },
  settings: {             //自动发现React的版本，从而进行规范react代码
    'react': {
      'pragma': 'React',
      'version': 'detect'
    }
  },
  parserOptions: {        //指定ESLint可以解析JSX语法
    'ecmaVersion': 2019,
    'sourceType': 'module',
    'ecmaFeatures': {
      jsx: true
    }
  },
  rules: {
    "no-console": 2,//禁止使用console
    "no-const-assign": 2,//禁止修改const声明的变量
    "no-debugger": 2,//禁止使用debugger
    "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句

  }
}

