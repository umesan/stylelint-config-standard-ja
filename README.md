# stylelint-config-standard-ja
[stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) into Japanese for me.


## Installation

```
npm install @umesan/stylelint-config-standard-ja --save-dev
```

## Usage
Create `.stylelintrc` and describe your settings.

**simple**
```
{
  "extends": "@umesan/stylelint-config-standard-ja",
  "rules": {

    Please overwrite with the rules of your project.

  }
}
```

**overwrite stylelint-config-standard**
```
{
  "extends": [
    "stylelint-config-standard",
    ""@umesan/stylelint-config-standard-ja"
  ],
  "rules": {

    Please overwrite with the rules of your project.

  }
}
```

## Reference URL
http://stylelint.io/user-guide/rules/  
https://github.com/stylelint/stylelint-config-standard  
http://qiita.com/makotot/items/c266ed11ada1423cb96e
