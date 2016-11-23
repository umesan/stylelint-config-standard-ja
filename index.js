module.exports = {
  "rules": {
    "at-rule-empty-line-before": [
      "always",
      {
        except: [
          "blockless-after-same-name-blockless",
          "first-nested",
        ],
        ignore: ["after-comment"],
        message: "@ルールの前に1行空けることを必須にするか否か (at-rule-empty-line-before: always)"
      }
    ],
    "at-rule-name-case": [
      "lower",
      {
        message: "@ルール名は小文字で指定してください (at-rule-name-case: lower)"
      }
    ],
    "at-rule-name-space-after": [
      "always-single-line",
      {
        message: "@ルール名の後に単一のスペースを必要とします (at-rule-name-space-after: always-single-line)"
      }
    ],
    "at-rule-semicolon-newline-after": [
      "always",
      {
        message: "@ルールのセミコロンのあとに改行を必須にするか否か (at-rule-semicolon-newline-after: always)"
      }
    ],
    "block-closing-brace-empty-line-before": [
      "never",
      {
        message: "ブロックの閉じ括弧の前に空行を必要とするかどうかを指定します (block-closing-brace-empty-line-before: never)"
      }
    ],
    "block-closing-brace-newline-after": [
      "always",
      {
        message: "ブロックの閉じ括弧の直後に改行を必須にするかスペースを許可しないか (block-closing-brace-newline-after: always)"
      }
    ],
    "block-closing-brace-newline-before": [
      "always-multi-line",
      {
        message: "ブロックの閉じ括弧の直前に改行を必須にするかスペースを許可しないか (block-closing-brace-newline-before: always-multi-line)"
      }
    ],
    "block-closing-brace-space-before": [
      "always-single-line",
      {
        message: "ブロックの閉じ括弧の直前にスペースを許可するか否か (block-closing-brace-space-before: always-single-line)"
      }
    ],
    "block-no-empty": [
      true,
      {
        message: "空のブロックは許可されていません (block-no-empty: true)"
      }
    ],
    "block-opening-brace-newline-after": [
      "always-multi-line",
      {
        message: "ブロックの開き括弧の直後に改行を必須にするか (block-opening-brace-newline-after: always-multi-line)"
      }
    ],
    "block-opening-brace-space-after": [
      "always-single-line",
      {
        message: "ブロックの開き括弧の直後に改行を必須にするかスペースを許可しないか (block-opening-brace-space-after: always-single-line)"
      }
    ],
    "block-opening-brace-space-before": [
      "always",
      {
        message: "ブロックの開き括弧の直前にスペースを許可するか否か (block-opening-brace-space-before: always)"
      }
    ],
    "color-hex-case": [
      "lower",
      {
        message: "カラーコードは小文字で指定してください (color-hex-case: lower)"
      }
    ],
    "color-hex-length": [
      "short",
      {
        message: "省略可能なカラーコード(#000000)は省略表記(#000)してください (color-hex-length: short)"
      }
    ],
    "color-no-invalid-hex": [
      true,
      {
        message: "無効なカラーコードは禁止されています (color-no-invalid-hex: true)"
      }
    ],
    "comment-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["stylelint-commands"],
        message: "コメントの前に1行空けることを必須にするか否か (comment-empty-line-before: always)"
      }
    ],
    "comment-no-empty": [
      true,
      {
        message: "空のコメントは許可されていません (comment-no-empty: true)"
      }
    ],
    "comment-whitespace-inside": [
      "always",
      {
        message: "コメントマークの内側にスペースを必須にするか許可しないか (comment-whitespace-inside: always)"
      }
    ],
    "custom-property-empty-line-before": [
      "always",
      {
        except: [
          "after-custom-property",
          "first-nested",
        ],
        ignore: [
          "after-comment",
          "inside-single-line-block",
        ],
        message: "カスタムプロパティの前に空の行が必要かどうか (custom-property-empty-line-before: always)"
      }
    ],
    "declaration-bang-space-after": [
      "never",
      {
        message: "!マークの直後にスペースを入れることを許可するか否か (declaration-bang-space-after: never)"
      }
    ],
    "declaration-bang-space-before": [
      "always",
      {
        message: "!マークの直前にスペースを入れることを許可するか否か (declaration-bang-space-before: always)"
      }
    ],
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"],
        message: "プロパティの重複は許可されていません (declaration-block-no-duplicate-properties: true)"
      }
    ],
    "declaration-block-no-ignored-properties": [
      true,
      {
        message: "同ルール内のプロパティで無視されるプロパティは許可されていません (declaration-block-no-ignored-properties: true)"
      }
    ],
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        message: "1つの省略表現のプロパティに結合できる長さのプロパティは許可されていません (declaration-block-no-redundant-longhand-properties: true)"
      }
    ],
    "declaration-block-no-shorthand-property-overrides": [
      true,
      {
        message: "ショートハンドプロパティによる上書きは許可されていません (declaration-block-no-shorthand-property-overrides: true)"
      }
    ],
    "declaration-block-semicolon-newline-after": [
      "always-multi-line",
      {
        message: "セミコロンの直後にスペースを許可しないか改行を必須にするか (declaration-block-semicolon-newline-after: always-multi-line)"
      }
    ],
    "declaration-block-semicolon-space-after": [
      "always-single-line",
      {
        message: "セミコロンの直後のスペースを許可するか否か (declaration-block-semicolon-space-after: always-single-line)"
      }
    ],
    "declaration-block-semicolon-space-before": [
      "never",
      {
        message: "セミコロンの直前のスペースを許可するか否か (declaration-block-semicolon-space-before: never)"
      }
    ],
    "declaration-block-single-line-max-declarations": [
      1,
      {
        message: "一行ブロック内でのプロパティの数を制限 (declaration-block-single-line-max-declarations: 1)"
      }
    ],
    "declaration-block-trailing-semicolon": [
      "always",
      {
        message: "ブロック内の最後のセミコロンを禁止 (declaration-block-trailing-semicolon: always)"
      }
    ],
    "declaration-colon-newline-after": [
      "always-multi-line",
      {
        message: "コロンの直後に改行を必須にするか否か (declaration-colon-newline-after: always-multi-line)"
      }
    ],
    "declaration-colon-space-after": [
      "always-single-line",
      {
        message: "コロンの直後には半角スペースを入れましょう (declaration-colon-space-after: always-single-line)"
      }
    ],
    "declaration-colon-space-before": [
      "never",
      {
        message: "コロンの直前にスペースを入れることを許可するか否か (declaration-colon-space-before: never)"
      }
    ],
    "declaration-empty-line-before": [
      "always",
      {
        except: [
          "after-declaration",
          "first-nested",
        ],
        ignore: [
          "after-comment",
          "inside-single-line-block",
        ],
        message: "宣言の前に空の行を必要とするか、または許可しない (declaration-empty-line-before: always)"
      }
    ],
    "function-calc-no-unspaced-operator": [
      true,
      {
        message: "calc()内の演算子前後のスペースを強制 (function-calc-no-unspaced-operator: true)"
      }
    ],
    "function-comma-newline-after": [
      "always-multi-line",
      {
        message: "関数内のカンマの後に改行を許可するか否か (function-comma-newline-after: always-multi-line)"
      }
    ],
    "function-comma-space-after": [
      "always-single-line",
      {
        message: "関数内のカンマの後にスペースを許可するか否か (function-comma-space-after: always-single-line)"
      }
    ],
    "function-comma-space-before": [
      "never",
      {
        message: "関数内のカンマの前にスペースを許可するか否か (function-comma-space-before: never)"
      }
    ],
    "function-linear-gradient-no-nonstandard-direction": [
      true,
      {
        message: "linear-gradientの非標準の方向の値は禁止されています (function-linear-gradient-no-nonstandard-direction: true)"
      }
    ],
    "function-max-empty-lines": [
      0,
      {
        message: "関数内の空行の数を制限 (function-max-empty-lines: 0)"
      }
    ],
    "function-name-case": [
      "lower",
      {
        message: "関数名は小文字を指定してください (function-name-case: lower)"
      }
    ],
    "function-parentheses-newline-inside": [
      "always-multi-line",
      {
        message: "関数の()の内側に改行を許可するか否か (function-parentheses-newline-inside: always-multi-line)"
      }
    ],
    "function-parentheses-space-inside": [
      "never-single-line",
      {
        message: "関数の()の内側にスペースを許可するか否か (function-parentheses-space-inside: never-single-line)"
      }
    ],
    "function-whitespace-after": [
      "always",
      {
        message: "関数の後ろのスペースを許可するか否か (function-whitespace-after: always)"
      }
    ],
    "indentation": [
      2,
      {
        message: "インデントは半角スペース2つで指定してください (indentation: 2)"
      }
    ],
    "keyframe-declaration-no-important": [
      true,
      {
        message: "キーフレーム宣言内で!importantは禁止されています (keyframe-declaration-no-important: true)"
      }
    ],
    "length-zero-no-unit": [
      true,
      {
        message: "「0」の場合は単位を指定しないでください (length-zero-no-unit: true)"
      }
    ],
    "max-empty-lines": [
      10,
      {
        message: "ファイル内の連続した空行の数は10行以内に制限してください (max-empty-lines: 10)"
      }
    ],
    "media-feature-colon-space-after": [
      "always",
      {
        message: "@mediaルール指定内のコロンの直後にはスペースを挿入してください (media-feature-colon-space-after: always)"
      }
    ],
    "media-feature-colon-space-before": [
      "never",
      {
        message: "@mediaルール指定内のコロンの直前にはスペースを挿入しないでください (media-feature-colon-space-before: never)"
      }
    ],
    "media-feature-name-case": [
      "lower",
      {
        message: "@media内のルールは、小文字で指定してください (media-feature-name-case: lower)"
      }
    ],
    "media-feature-name-no-unknown": [
      true,
      {
        message: "不明な@mediaは許可されていません (media-feature-name-no-unknown: true)"
      }
    ],
    "media-feature-no-missing-punctuation": [
      true,
      {
        message: "@mediaルール指定内のコロンや範囲演算子などの区切りは必須です (media-feature-no-missing-punctuation: true)"
      }
    ],
    "media-feature-parentheses-space-inside": [
      "never",
      {
        message: "単一のスペースを必要とするか、または@media内の括弧の内側では空白は使用禁止です (media-feature-parentheses-space-inside: never)"
      }
    ],
    "media-feature-range-operator-space-after": [
      "always",
      {
        message: "@mediaルール指定内の範囲演算子の直後にスペースを挿入してください (media-feature-range-operator-space-after: always)"
      }
    ],
    "media-feature-range-operator-space-before": [
      "always",
      {
        message: "@mediaルール指定内の範囲演算子の直前にはスペースを挿入してください (media-feature-range-operator-space-before: always)"
      }
    ],
    "media-query-list-comma-newline-after": [
      "always-multi-line",
      {
        message: "メディアクエリのリストでカンマの直後に改行を必須にするかスペースを許可しないか (media-query-list-comma-newline-after: always-multi-line)"
      }
    ],
    "media-query-list-comma-space-after": [
      "always-single-line",
      {
        message: "メディアクエリのリストで、カンマの直後にスペースを必須にするか否か (media-query-list-comma-space-after: always-single-line)"
      }
    ],
    "media-query-list-comma-space-before": [
      "never",
      {
        message: "メディアクエリのリストでは、カンマの直前にスペースを挿入ないでください (media-query-list-comma-space-before: never)"
      }
    ],
    "no-empty-source": [
      true,
      {
        message: "空のソースは許可されていません (no-empty-source: true)"
      }
    ],
    "no-eol-whitespace": [
      true,
      {
        message: "行末の空白は禁止です (no-eol-whitespace: true)"
      }
    ],
    "no-extra-semicolons": [
      true,
      {
        message: "余分なセミコロンは許可されていません (no-extra-semicolons: true)"
      }
    ],
    "no-invalid-double-slash-comments": [
      true,
      {
        message: "2重スラッシュによるコメントは禁止です (no-invalid-double-slash-comments: true)"
      }
    ],
    "no-missing-end-of-source-newline": [
      true,
      {
        message: "ソースの最終行には改行をいれてください (no-missing-end-of-source-newline: true)"
      }
    ],
    "number-leading-zero": [
      "always",
      {
        message: "1未満の少数の先頭の0を許可するか否か (number-leading-zero: always)"
      }
    ],
    "number-no-trailing-zeros": [
      true,
      {
        message: " 不要な0は禁止です (number-no-trailing-zeros: true)"
      }
    ],
    "property-case": [
      "lower",
      {
        message: "プロパティは小文字で指定してください (property-case: lower)"
      }
    ],
    "property-no-unknown": [
      true,
      {
        message: "不明なプロパティは許可されていません (property-no-unknown: true)"
      }
    ],
    "rule-nested-empty-line-before": [
       "always-multi-line",
       {
        except: ["first-nested"],
        ignore: ["after-comment"],
        message: "ネストしたルールの直前には空白行をいれてください (rule-nested-empty-line-before: always-multi-line)"
      }
    ],
    "rule-non-nested-empty-line-before": [
      "always-multi-line",
      {
        ignore: ["after-comment"],
        message: "ネストしてないルールの直前には空白行を挿入してください (rule-non-nested-empty-line-before: always-multi-line)"
      }
    ],
    "selector-attribute-brackets-space-inside": [
      "never",
      {
        message: "単一のスペースを必要とするか、属性セレクタ内の角括弧の内側の空白を許可しない (selector-attribute-brackets-space-inside: never)"
      }
    ],
    "selector-attribute-operator-space-after": [
      "never",
      {
        message: "単一のスペースを必要とするか、属性セレクタ内の演算子の後に空白を使用できないようにします (selector-attribute-operator-space-after: never)"
      }
    ],
    "selector-attribute-operator-space-before": [
      "never",
      {
        message: "単一のスペースを必要とするか、属性セレクタ内の演算子の前に空白を許可しない (selector-attribute-operator-space-before: never)"
      }
    ],
    "selector-combinator-space-after": [
      "always",
      {
        message: "セレクタの組み合わせの直後にスペースを許可するか否か (selector-combinator-space-after: always)"
      }
    ],
    "selector-combinator-space-before": [
      "always",
      {
        message: "セレクタの組み合わせの直前にスペースを許可するか否か (selector-combinator-space-before: always)"
      }
    ],
    "selector-descendant-combinator-no-non-space": [
      true,
      {
        message: "セレクタの下位コンビネータの空白以外の文字は許可されていません (selector-descendant-combinator-no-non-space: true)"
      }
    ],
    "selector-list-comma-newline-after": [
      "always",
      {
        message: "セレクタのリストでカンマの直後に改行を必須にするかスペースを許可しないか (selector-list-comma-newline-after: always)"
      }
    ],
    "selector-list-comma-space-before": [
      "never",
      {
        message: "セレクタのリストでカンマの直前にスペースを許可するか否か (selector-list-comma-space-before: never)"
      }
    ],
    "selector-max-empty-lines": [
      0,
      {
        message: "セレクタ内の隣接する空行の数を制限します (selector-max-empty-lines: 0)"
      }
    ],
    "selector-no-empty": [
      true,
      {
        message: "空のセレクタは許可されていません (selector-no-empty: true)"
      }
    ],
    "selector-pseudo-class-case": [
      "lower",
      {
        message: "擬似クラスセレクタは、小文字で指定してください (selector-pseudo-class-case: lower)"
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        message: "未知の擬似クラスセレクタは許可されていません (selector-pseudo-class-no-unknown: true)"
      }
    ],
    "selector-pseudo-class-parentheses-space-inside": [
      "never",
      {
        message: "単一のスペースを必要とするか、擬似クラスセレクタ内のカッコ内の空白を禁止する (selector-pseudo-class-parentheses-space-inside: never)"
      }
    ],
    "selector-pseudo-element-case": [
      "lower",
      {
        message: "擬似要素セレクタは、小文字で指定してください (selector-pseudo-element-case: lower)"
      }
    ],
    "selector-pseudo-element-colon-notation": [
      "double",
      {
        message: "疑似要素のコロンを1つにするか2つにするか (selector-pseudo-element-colon-notation: double)"
      }
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        message: "不明な擬似要素セレクタは許可されていません (selector-pseudo-element-no-unknown: true)"
      }
    ],
    "selector-type-case": [
      "lower",
      {
        message: "要素セレクタは小文字で指定してください (selector-type-case: lower)"
      }
    ],
    "selector-type-no-unknown": [
      true,
      {
        message: "不明な型セレクタは許可されていません (selector-type-no-unknown: true)"
      }
    ],
    "shorthand-property-no-redundant-values": [
      true,
      {
        message: "省略形のプロパティで冗長な値は許可されていません (shorthand-property-no-redundant-values: true)"
      }
    ],
    "string-no-newline": [
      true,
      {
        message: "文字列内の改行は許可されていません (string-no-newline: true)"
      }
    ],
    "unit-case": [
      "lower",
      {
        message: "単位は小文字で指定してください (unit-case: lower)"
      }
    ],
    "unit-no-unknown": [
      true,
      {
        message: "未知の単位の使用は禁止されています (unit-no-unknown: true)"
      }
    ],
    "value-list-comma-newline-after": [
      "always-multi-line",
      {
        message: "リストの値でカンマの直後に改行を許可するか否か (value-list-comma-newline-after: always-multi-line)"
      }
    ],
    "value-list-comma-space-after": [
      "always-single-line",
      {
        message: "リストの値でカンマの直後にスペースを許可するか否か (value-list-comma-space-after: always-single-line)"
      }
    ],
    "value-list-comma-space-before": [
      "never",
      {
        message: "リストの値でカンマの直前にスペースを許可するか否か (value-list-comma-space-before: never)"
      }
    ],
    "value-list-max-empty-lines": [
      0,
      {
        message: "値リスト内の隣接する空行の数は0以内にしてください (value-list-max-empty-lines: 0)"
      }
    ]
  },
}
