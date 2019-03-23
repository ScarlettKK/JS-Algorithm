# JS-Algorithm
Some algorithms writing by JavaScript

## How to start this program
1. 安装

  ```
  npm install --save-dev jest
  npm install babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime babel-preset-env
  ```
  编辑package.json

  ```
  {
    "scripts": {
      "test": "jest"
    }
  }
  ```

  编辑.babelrc
  ```
  {
    "presets": ["env", "react"]
  }
  ```

2. 创建js文件

  ```js
  function sum(a, b) {
    return a + b;
  }
  export default sum;
  ```

  ```js
  import sum from './index'

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  ```

3. 启动测试

  ```
  npm test
  ```

4. 工具安装

  - IDE：Atom
  - 插件：[platformio-ide-terminal](https://github.com/platformio/platformio-atom-ide-terminal)
  

`参考资料: `[JS常用数组、字符串操作](https://www.cnblogs.com/luffa/p/10584585.html)


## Documents
### String
#### 题目一

[reverse-words-in-a-string-iii](reverse-words-in-a-string-iii)

<img src="https://img2018.cnblogs.com/blog/1147701/201902/1147701-20190222230828980-443269724.png">

#### 解题思路

<img src="https://img2018.cnblogs.com/blog/1147701/201902/1147701-20190222230819147-2020521009.png">

要点：

1.要对JS数组、字符串操作十分熟悉

2.要善用已有的方法，不要临时造轮子

3.面试官问别的解法，可能是让你换一种函数（或参数类型）来实现同样的效果，但解题思路不变，而不一定是推倒整个思路另辟蹊径

#### 题目二

[count-binary-substrings](https://leetcode-cn.com/problems/count-binary-substrings/)

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190306092238314-234536046.png">

#### 解题思路

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190306092113952-2051295437.png">

<img src="https://img2018.cnblogs.com/blog/1147701/201903/1147701-20190306092249828-1385578834.png">

要点：

1. 枚举输出，找规律（最外层的最明显的规律）

2. 找符合条件的子串，然后对子串进行一系列操作（最外层的目的是找子串，内层才是对子串进行的一系列操作）
