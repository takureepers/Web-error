# 説明
404, 500, 403などのエラーの画面を簡単に実装！
インストール方法は一番下にあります。
# 設定方法
以下の文をhtacsessに貼り付けてください。
```
ErrorDocument 404 error/404.html
ErrorDocument 418 error/418.html
ErrorDocument 400 error/400.html
ErrorDocument 401 error/401.html
ErrorDocument 402 error/402.html
ErrorDocument 403 error/403.html
ErrorDocument 405 error/405.html
ErrorDocument 407 error/407.html
ErrorDocument 408 error/408.html
ErrorDocument 409 error/409.html
ErrorDocument 410 error/410.html
ErrorDocument 414 error/413.html
ErrorDocument 423 error/423.html
ErrorDocument 426 error/426.html
ErrorDocument 429 error/429.html
ErrorDocument 431 error/431.html
ErrorDocument 451 error/451.html
ErrorDocument 500 error/500.html
```
または、apacheのconfigファイル(apache2.conf または httpd.conf)に貼り付けてください。
# apacheのconfigファイルに貼り付ける場合
apacheのconfigファイルが有る場所にWeb-errorをインストールしてください。
