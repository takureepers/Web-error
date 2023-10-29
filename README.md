# 説明
404, 500, 403などのエラーの画面を簡単に実装！
インストール方法は一番下にあります。
# ダウンロード
```
su
git clone https://github.com/takureepers/Web-error.git
cd Web-error/error
ls
```
ここでファイルが存在することを確認してください。
できたら、下の文を打ってください。
```
rm -rd .git
rm -rf README.md
```
そうしたら好きなエディタで.htaccessを編集してください(Apache![apache](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://httpd.apache.org&size=16)のconfigでも可だが末尾を参照)
```
nano .htaccess
```
できたらカタカタしてｯﾀｰｰﾝ!!!
```
ErrorDocument 404 Web-error/error/404.html
ErrorDocument 400 Web-error/error/400.html
ErrorDocument 401 Web-error/error/401.html
ErrorDocument 402 Web-error/error/402.html
ErrorDocument 403 Web-error/error/403.html
ErrorDocument 405 Web-error/error/405.html
ErrorDocument 407 Web-error/error/407.html
ErrorDocument 408 Web-error/error/408.html
ErrorDocument 409 Web-error/error/409.html
ErrorDocument 410 Web-error/error/410.html
ErrorDocument 414 Web-error/error/413.html
ErrorDocument 423 Web-error/error/423.html
ErrorDocument 426 Web-error/error/426.html
ErrorDocument 429 Web-error/error/429.html
ErrorDocument 431 Web-error/error/431.html
ErrorDocument 451 Web-error/error/451.html
ErrorDocument 500 Web-error/error/500.html
```
これで保存すればOKです。お疲れさまでした
# 番外編 - ![apache](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://httpd.apache.org&size=16)のconfigをいじいじする -
また会いましたね。では紹介します。
![apache](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://httpd.apache.org&size=16)のconfigをいじいじする場合、apacheのコンフィグの配置場所にこれをインストールして、上のErrorDocumentsから始まるコードを末尾にペーストすれば大丈夫です。
それでは、今度こそさようなら。
# 番番外外編編 - ボツのページ
ま、また？僕仕事あるんですけど・・・まあいいや。
実はこのプロジェクトボツのページがあります。<small>しかも開けますし入ってます。</small>
その名も「418.html」～～！
え？そのステータスコードはあるって？


...
君のような勘のいいガキは嫌いだよ

まあ、apache2ctl configtestするとエラーが出るから無効化しただけです(htaccessのコピペ欄にないでしょ？)。
