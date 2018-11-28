# eslint-plugin-elrond-childapp-bound

elrond-childapp-bound 是一个ESLint插件，对代码中如下写法作出警告：  
- 添加全局变量/方法
- 写cookie

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-elrond-childapp-bound`:

```
$ npm install eslint-plugin-elrond-childapp-bound --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-elrond-childapp-bound` globally.

## Usage

Add `elrond-childapp-bound` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "elrond-childapp-bound"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "elrond-childapp-bound/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





