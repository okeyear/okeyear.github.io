import{_ as s,c as n,o as a,a as e}from"./app.1b5e2894.js";const v='{"title":"docker\u5E38\u7528\u955C\u50CF mysql","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6D4B\u8BD5\u7248","slug":"\u6D4B\u8BD5\u7248"},{"level":2,"title":"\u5B9E\u6218\u7248\u672C(\u5355\u673A\u7248\u672C)","slug":"\u5B9E\u6218\u7248\u672C-\u5355\u673A\u7248\u672C"},{"level":2,"title":"\u5B9E\u6218\u7248\u672C(\u4E3B\u4ECE\u7248\u672C)","slug":"\u5B9E\u6218\u7248\u672C-\u4E3B\u4ECE\u7248\u672C"}],"relativePath":"cloudnative/docker/docker-image-mysql.md"}',t={},o=e(`<h1 id="docker\u5E38\u7528\u955C\u50CF-mysql" tabindex="-1">docker\u5E38\u7528\u955C\u50CF mysql <a class="header-anchor" href="#docker\u5E38\u7528\u955C\u50CF-mysql" aria-hidden="true">#</a></h1><p>\u7F51\u5740: <a href="https://hub.docker.com/_/mysql" target="_blank" rel="noopener noreferrer">https://hub.docker.com/_/mysql</a></p><h2 id="\u6D4B\u8BD5\u7248" tabindex="-1">\u6D4B\u8BD5\u7248 <a class="header-anchor" href="#\u6D4B\u8BD5\u7248" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">docker</span> run --name some-mysql <span class="token punctuation">\\</span>
    -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>ChangeMe@123 <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql root\u7528\u6237\u5BC6\u7801</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    -d mysql:5.7
</code></pre></div><p>\u6D4B\u8BD5\u7248\u672C\u95EE\u9898</p><p><a href="https://dev.mysql.com/doc/refman/5.7/en/charset-unicode-sets.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/refman/5.7/en/charset-unicode-sets.html</a></p><div class="language-bash"><pre><code><span class="token number">1</span>. \u5B57\u7B26\u96C6 SHOW VARIABLES LIKE <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>  
<span class="token number">2</span>. \u6570\u636E\u6301\u4E45\u5316 -- \u6570\u636E\u5377


</code></pre></div><h2 id="\u5B9E\u6218\u7248\u672C-\u5355\u673A\u7248\u672C" tabindex="-1">\u5B9E\u6218\u7248\u672C(\u5355\u673A\u7248\u672C) <a class="header-anchor" href="#\u5B9E\u6218\u7248\u672C-\u5355\u673A\u7248\u672C" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># Step 1</span>
<span class="token comment"># \u65B0\u5EFAmy.cnf, \u901A\u8FC7\u6570\u636E\u5377\u540C\u6B65\u7ED9mysql\u5BB9\u5668\u5B9E\u4F8B</span>
<span class="token function">mkdir</span> -pv /data/mysql/conf.d
<span class="token function">tee</span> /data/mysql/conf.d/my.cnf <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
[client]
default-character-set=utf8
[mysqld]
# init_connect=&#39;SET collation_connection = utf8_unicode_ci&#39;
# init_connect=&#39;SET NAMES utf8&#39;
character-set-server=utf8
collation-server=utf8_unicode_ci
EOF</span>

<span class="token comment"># Step 2</span>
<span class="token comment"># \u542F\u52A8mysql\u5B9E\u4F8B, \u67E5\u770B\u5B57\u7B26\u7F16\u7801</span>
<span class="token function">docker</span> run -d --name some-mysql <span class="token punctuation">\\</span>
    -p <span class="token number">3306</span>:3306 <span class="token variable"><span class="token variable">\`</span><span class="token comment"># \u4E3B\u673A\u7AEF\u53E3\u4E0D\u8981\u51B2\u7A81</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    --restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
    --privileged<span class="token operator">=</span>true <span class="token punctuation">\\</span>
    -v /data/mysql/log:/var/log/mysql <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql log \u76EE\u5F55</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    -v /data/mysql/data:/var/lib/mysql <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql \u6570\u636E \u76EE\u5F55</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    -v /data/mysql/conf.d:/etc/mysql/conf.d <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql \u914D\u7F6E \u76EE\u5F55</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>ChangeMe@123 <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql root\u7528\u6237\u5BC6\u7801</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    mysql:5.7


<span class="token comment"># \u5982\u679C\u65B0\u5EFA\u4E00\u4E2A\u6570\u636E\u5E93\u5E76\u6388\u6743,\u53EF\u9009\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F</span>
-e <span class="token assign-left variable">MYSQL_DATABASE</span><span class="token operator">=</span>zabbix <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_USER</span><span class="token operator">=</span>zabbix <span class="token punctuation">\\</span>
-e <span class="token assign-left variable">MYSQL_PASSWORD</span><span class="token operator">=</span>zabbix <span class="token punctuation">\\</span>

<span class="token comment"># Step 3</span>
<span class="token comment"># \u8FDB\u5165\u5BB9\u5668, \u67E5\u770B\u5B57\u7B26\u96C6</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it some-mysql <span class="token function">bash</span>
mysql -uroot -pChangeMe@123
SHOW VARIABLES LIKE <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>  
<span class="token comment"># \u5EFA\u5E93,\u5EFA\u8868,\u6D4B\u8BD5\u4E2D\u6587utf8\u63D2\u5165</span>
</code></pre></div><h2 id="\u5B9E\u6218\u7248\u672C-\u4E3B\u4ECE\u7248\u672C" tabindex="-1">\u5B9E\u6218\u7248\u672C(\u4E3B\u4ECE\u7248\u672C) <a class="header-anchor" href="#\u5B9E\u6218\u7248\u672C-\u4E3B\u4ECE\u7248\u672C" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment">## Master 3307</span>
<span class="token comment"># Step 1 \u65B0\u5EFAMaster\u5B9E\u4F8B</span>
<span class="token function">docker</span> run -d --name mysql-master01 <span class="token punctuation">\\</span>
    -p <span class="token number">3307</span>:3306 <span class="token variable"><span class="token variable">\`</span><span class="token comment"># \u4E3B\u673A\u7AEF\u53E3\u4E0D\u8981\u51B2\u7A81</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    --restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
    --privileged<span class="token operator">=</span>true <span class="token punctuation">\\</span>
    -v /data/mysql-master/log:/var/log/mysql <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql log \u76EE\u5F55</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    -v /data/mysql-master/data:/var/lib/mysql <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql \u6570\u636E \u76EE\u5F55</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    -v /data/mysql-master/conf.d:/etc/mysql/conf.d <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql \u914D\u7F6E \u76EE\u5F55</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>ChangeMe@123 <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql root\u7528\u6237\u5BC6\u7801</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    mysql:5.7

<span class="token comment"># check</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># Step 2 Master\u5B9E\u4F8B\u7684\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">tee</span> /data/mysql-master/conf.d/my.cnf <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
[client]
default-character-set=utf8 # \u5B57\u7B26\u96C6
[mysqld]
server_id=01 # \u540C\u4E00\u5C40\u57DF\u7F51\u5185ID\u9700\u8981\u552F\u4E00
binlog-ignore-db=mysql # \u6307\u5B9A\u4E0D\u9700\u8981\u540C\u6B65\u7684\u6570\u636E\u5E93
log-bin=mall-mysql-bin # \u5F00\u542F\u4E8C\u8FDB\u5236\u65E5\u5FD7\u529F\u80FD
binlog_cache_size=10M # \u4E8C\u8FDB\u5236\u65E5\u5FD7\u4F7F\u7528\u5185\u5B58\u5927\u5C0F(\u4E8B\u52A1)
binlog_format=mixed # \u8BBE\u7F6E\u4F7F\u7528\u7684\u4E8C\u8FDB\u5236\u65E5\u5FD7\u683C\u5F0F mixed statement row
expire_logs_days=14 # \u4E8C\u8FDB\u5236\u65E5\u5FD7\u8FC7\u671F\u6E05\u7406\u65F6\u95F4, \u9ED8\u8BA4\u503C0,\u8868\u793A\u4E0D\u81EA\u52A8\u6E05\u7406
# \u8DF3\u8FC7\u4E3B\u4ECE\u590D\u5236\u4E2D\u9047\u5230\u7684\u9519\u8BEF\u6216\u6307\u5B9A\u7C7B\u578B\u9519\u8BEF, \u907F\u514Dslave\u7AEF\u590D\u5236\u4E2D\u65AD 
# 1062\u9519\u8BEF\u662F\u6307\u4E00\u4E9B\u4E3B\u952E\u91CD\u590D 1032\u9519\u8BEF\u662F\u56E0\u4E3A\u4E3B\u4ECE\u6570\u636E\u5E93\u6570\u636E\u4E0D\u4E00\u81F4
slave_skip_errors=1062 
character-set-server=utf8 # \u5B57\u7B26\u96C6
collation-server=utf8_unicode_ci # \u5B57\u7B26\u96C6
EOF</span>

<span class="token comment"># Step 3 \u4FEE\u6539\u5B8C\u91CD\u542Fmaster\u5B9E\u4F8B</span>
<span class="token function">docker</span> restart mysql-master01
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># Step 4 \u8FDB\u5165master\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it mysql-master01 <span class="token function">bash</span>
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;show master status&quot;</span><span class="token punctuation">;</span> 

<span class="token comment"># Step 5 master\u6570\u636E\u5E93\u521B\u5EFA\u540C\u6B65\u7528\u7684\u7528\u6237</span>
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;CREATE USER &#39;slave&#39;@&#39;%&#39; IDENTIFIED BY &#39;abcd_123&#39;;&quot;</span><span class="token punctuation">;</span> 
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO &#39;slave&#39;@&#39;%&#39;;&quot;</span><span class="token punctuation">;</span> 
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;SELECT Host,User FROM mysql.user;&quot;</span>

<span class="token comment">## Slave 3308</span>
<span class="token comment"># Step 6 \u65B0\u5EFASlave\u5B9E\u4F8B</span>
<span class="token function">docker</span> run -d --name mysql-slave01 <span class="token punctuation">\\</span>
    -p <span class="token number">3308</span>:3306 <span class="token variable"><span class="token variable">\`</span><span class="token comment"># \u4E3B\u673A\u7AEF\u53E3\u4E0D\u8981\u51B2\u7A81</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    --restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
    --privileged<span class="token operator">=</span>true <span class="token punctuation">\\</span>
    -v /data/mysql-slave/log:/var/log/mysql <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql log \u76EE\u5F55</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    -v /data/mysql-slave/data:/var/lib/mysql <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql \u6570\u636E \u76EE\u5F55</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    -v /data/mysql-slave/conf.d:/etc/mysql/conf.d <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql \u914D\u7F6E \u76EE\u5F55</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>ChangeMe@123 <span class="token variable"><span class="token variable">\`</span><span class="token comment"># mysql root\u7528\u6237\u5BC6\u7801</span><span class="token variable">\`</span></span> <span class="token punctuation">\\</span>
    mysql:5.7

<span class="token comment"># check</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># Step 7 slave\u5B9E\u4F8B\u7684\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">tee</span> /data/mysql-slave/conf.d/my.cnf <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
[client]
default-character-set=utf8 # \u5B57\u7B26\u96C6
[mysqld]
server_id=101 # \u540C\u4E00\u5C40\u57DF\u7F51\u5185ID\u9700\u8981\u552F\u4E00
binlog-ignore-db=mysql # \u6307\u5B9A\u4E0D\u9700\u8981\u540C\u6B65\u7684\u6570\u636E\u5E93
log-bin=mall-mysql-slave01-bin # \u5F00\u542F\u4E8C\u8FDB\u5236\u65E5\u5FD7\u529F\u80FD, \u4EE5\u5907slave\u4F5C\u4E3A\u5176\u4ED6\u6570\u636E\u5E93\u5B9E\u4F8B\u7684master\u65F6\u5019\u4F7F\u7528
binlog_cache_size=10M # \u4E8C\u8FDB\u5236\u65E5\u5FD7\u4F7F\u7528\u5185\u5B58\u5927\u5C0F(\u4E8B\u52A1)
binlog_format=mixed # \u8BBE\u7F6E\u4F7F\u7528\u7684\u4E8C\u8FDB\u5236\u65E5\u5FD7\u683C\u5F0F mixed statement row
expire_logs_days=14 # \u4E8C\u8FDB\u5236\u65E5\u5FD7\u8FC7\u671F\u6E05\u7406\u65F6\u95F4, \u9ED8\u8BA4\u503C0,\u8868\u793A\u4E0D\u81EA\u52A8\u6E05\u7406
# \u8DF3\u8FC7\u4E3B\u4ECE\u590D\u5236\u4E2D\u9047\u5230\u7684\u9519\u8BEF\u6216\u6307\u5B9A\u7C7B\u578B\u9519\u8BEF, \u907F\u514Dslave\u7AEF\u590D\u5236\u4E2D\u65AD 
# 1062\u9519\u8BEF\u662F\u6307\u4E00\u4E9B\u4E3B\u952E\u91CD\u590D 1032\u9519\u8BEF\u662F\u56E0\u4E3A\u4E3B\u4ECE\u6570\u636E\u5E93\u6570\u636E\u4E0D\u4E00\u81F4
slave_skip_errors=1062 
relay_log=mall-mysql-relay-bin # relay_log\u914D\u7F6E\u4E2D\u7EE7\u65E5\u5FD7
log_slave_updates=1 # slave\u5C06\u590D\u5236\u4E8B\u4EF6\u65E5\u5199\u8FDB\u81EA\u5DF1\u7684\u4E8C\u8FDB\u5236\u65E5\u5FD7
read_only=1 # slave\u8BBE\u7F6E\u4E3A\u53EA\u8BFB,\u5177\u6709super\u6743\u9650\u7684\u7528\u6237\u9664\u5916
character-set-server=utf8 # \u5B57\u7B26\u96C6
collation-server=utf8_unicode_ci # \u5B57\u7B26\u96C6
EOF</span>


<span class="token comment"># Step 8 \u4FEE\u6539\u5B8C\u91CD\u542Fslave\u5B9E\u4F8B</span>
<span class="token function">docker</span> restart mysql-slave01
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment"># Step 9 \u8FDB\u5165slave\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it mysql-slave01 <span class="token function">bash</span>
<span class="token comment"># \u6267\u884C\u540C\u6B65\u8BED\u53E5</span>
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;change master to master_host=&#39;10.10.10.101&#39;,master_port=3307,master_user=&#39;slave&#39;,master_password=&#39;abcd_123&#39;,master_log_file=&#39;mall-mysql-bin.000001&#39; ,master_log_pos=154, master_connect_retry=30;&quot;</span>   
<span class="token comment"># \u6267\u884C\u524D\u72B6\u6001\u4E3ANo</span>
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;show slave status \\G;&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;Slave_.*_Running&#39;</span> 
<span class="token comment"># \u6267\u884C</span>
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;start slave;&quot;</span>
<span class="token comment"># \u6267\u884C\u540E\u72B6\u6001\u4E3AYes</span>
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;show slave status \\G;&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;Slave_.*_Running&#39;</span> 

<span class="token comment"># Step 10 \u8FDB\u5165master\u5BB9\u5668\u67E5\u770B\u540C\u6B65\u72B6\u6001</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it mysql-master01 <span class="token function">bash</span>
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;show master status \\G;&quot;</span>  
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;show databases;&quot;</span> 

<span class="token comment"># Step 11 master\u6570\u636E\u5E93\u5199\u5165\u6D4B\u8BD5</span>
<span class="token comment"># \u5EFA\u5E93-\u4F7F\u7528\u5E93-\u5EFA\u8868-\u63D2\u5165\u6570\u636E</span>
<span class="token comment"># \u5B98\u65B9\u6D4B\u8BD5\u6570\u636E\u5E93github\u7F51\u5740\uFF1Ahttps://github.com/datacharmer/test_db</span>
<span class="token function">wget</span> https://github.com/datacharmer/test_db/releases/download/v1.0.7/test_db-1.0.7.tar.gz
<span class="token function">docker</span> <span class="token function">cp</span> test_db-1.0.7.tar.gz mysql-master01:/tmp/

<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it mysql-master01 <span class="token function">bash</span>
mysql uroot -pChangeMe@123 <span class="token operator">&lt;</span> employees.sql
mysql uroot -pChangeMe@123 <span class="token operator">&lt;</span> employees_partitioned.sql
<span class="token builtin class-name">cd</span> /tmp
<span class="token function">tar</span> -xf test_db-1.0.7.tar.gz
<span class="token builtin class-name">cd</span> test_db
mysql -uroot -pChangeMe@123 <span class="token operator">&lt;</span> employees.sql
mysql -uroot -pChangeMe@123 <span class="token operator">&lt;</span> employees_partitioned.sql
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;show databases;&quot;</span> 

<span class="token comment"># Step 12 slave\u6570\u636E\u5E93\u8BFB\u53D6\u6D4B\u8BD5</span>
<span class="token comment"># \u4ECE\u673A\u67E5\u770B\u5E93,\u67E5\u770B\u8868,\u67E5\u8BE2\u8868\u8BB0\u5F55</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it mysql-slave01 <span class="token function">bash</span>
mysql -uroot -pChangeMe@123 -e <span class="token string">&quot;show databases;&quot;</span> 

</code></pre></div>`,11),p=[o];function l(c,r,i,m,k,u){return a(),n("div",null,p)}var b=s(t,[["render",l]]);export{v as __pageData,b as default};
