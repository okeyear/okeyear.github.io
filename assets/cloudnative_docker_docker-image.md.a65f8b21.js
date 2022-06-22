import{_ as n,c as a,o as e,a as s}from"./app.3a9754ab.js";const h='{"title":"docker003 image \u955C\u50CF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5220","slug":"\u5220"},{"level":2,"title":"\u67E5","slug":"\u67E5"},{"level":2,"title":"\u5BFC\u5165/\u5BFC\u51FA\u955C\u50CF","slug":"\u5BFC\u5165-\u5BFC\u51FA\u955C\u50CF"},{"level":2,"title":"\u83B7\u53D6\u955C\u50CFpull","slug":"\u83B7\u53D6\u955C\u50CFpull"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"},{"level":3,"title":"\u5E38\u7528\u57FA\u7840\u955C\u50CF","slug":"\u5E38\u7528\u57FA\u7840\u955C\u50CF"},{"level":3,"title":"ss\u955C\u50CF","slug":"ss\u955C\u50CF"},{"level":3,"title":"\u5E38\u7528\u955C\u50CF\u76F8\u5173\u547D\u4EE4","slug":"\u5E38\u7528\u955C\u50CF\u76F8\u5173\u547D\u4EE4"}],"relativePath":"cloudnative/docker/docker-image.md"}',o={},t=s(`<h1 id="docker003-image-\u955C\u50CF" tabindex="-1">docker003 image \u955C\u50CF <a class="header-anchor" href="#docker003-image-\u955C\u50CF" aria-hidden="true">#</a></h1><p>\u6BCF\u4E00\u5C42\u7684\u552F\u4E00id\u5305\u62EC156\u6BD4\u7279, \u753164\u4E2A\u5341\u516D\u8FDB\u5236\u5B57\u7B26\u7EC4\u6210</p><h2 id="\u5220" tabindex="-1">\u5220 <a class="header-anchor" href="#\u5220" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">docker</span> rmi <span class="token operator">&lt;</span>image id<span class="token operator">&gt;</span>
</code></pre></div><h2 id="\u67E5" tabindex="-1">\u67E5 <a class="header-anchor" href="#\u67E5" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># \u67E5\u770B</span>
<span class="token function">docker</span> images
<span class="token function">docker</span> imagess tomcat
<span class="token function">docker</span> images <span class="token function">ls</span>
<span class="token comment"># \u67E5image id</span>
<span class="token function">docker</span> images -q
<span class="token comment"># \u67E5\u770B\u955C\u50CF\u5236\u4F5C\u5386\u7A0B</span>
<span class="token function">docker</span> <span class="token function">history</span> <span class="token operator">&lt;</span>image_name<span class="token operator">&gt;</span>

<span class="token comment"># \u641C\u7D22 search </span>
<span class="token comment"># -f stars=N \u66FF\u4EE3 --stars</span>
<span class="token comment"># --limit N  \u53EA\u5217\u51FAN\u4E2A\u955C\u50CF, \u9ED8\u8BA425\u4E2A</span>
<span class="token function">docker</span> search --help 
dockert info

<span class="token comment"># \u67E5\u770B\u6240\u6709 \u955C\u50CF \u5BB9\u5668 \u6570\u636E\u5377 \u6240\u5360\u7528\u7684\u7A7A\u95F4</span>
<span class="token function">docker</span> system <span class="token function">df</span> -v

</code></pre></div><h2 id="\u5BFC\u5165-\u5BFC\u51FA\u955C\u50CF" tabindex="-1">\u5BFC\u5165/\u5BFC\u51FA\u955C\u50CF <a class="header-anchor" href="#\u5BFC\u5165-\u5BFC\u51FA\u955C\u50CF" aria-hidden="true">#</a></h2><ul><li>\u5BFC\u51FA\u955C\u50CF</li></ul><div class="language-bash"><pre><code><span class="token function">sudo</span> <span class="token function">docker</span> save -o ubuntu_14.04.tar ubuntu:14.04
</code></pre></div><ul><li>\u5BFC\u5165\u955C\u50CF</li></ul><div class="language-bash"><pre><code><span class="token function">docker</span> load --input ubuntu_14.04.tar
<span class="token function">sudo</span> <span class="token function">docker</span> load <span class="token operator">&lt;</span> ubuntu_14.04.tar
</code></pre></div><h2 id="\u83B7\u53D6\u955C\u50CFpull" tabindex="-1">\u83B7\u53D6\u955C\u50CFpull <a class="header-anchor" href="#\u83B7\u53D6\u955C\u50CFpull" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># \u8BED\u6CD5</span>
<span class="token function">docker</span> pull <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token punctuation">[</span>registry.hub.docker.com<span class="token punctuation">[</span>:port<span class="token punctuation">]</span>/<span class="token punctuation">]</span>NAME<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span>
<span class="token comment"># \u5982\u679CTAG\u4E0D\u6307\u5B9A,\u9ED8\u8BA4\u662Flatest</span>
</code></pre></div><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><h3 id="\u5E38\u7528\u57FA\u7840\u955C\u50CF" tabindex="-1">\u5E38\u7528\u57FA\u7840\u955C\u50CF <a class="header-anchor" href="#\u5E38\u7528\u57FA\u7840\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span>centos:7,almalinux<span class="token punctuation">{</span>,:minimal<span class="token punctuation">}</span>,alpine<span class="token punctuation">}</span> <span class="token comment"># debian:{9,10,11},ubuntu:{20,22}.04,oraclelinux,</span>
<span class="token keyword">do</span>
    <span class="token function">docker</span> pull <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre></div><h3 id="ss\u955C\u50CF" tabindex="-1">ss\u955C\u50CF <a class="header-anchor" href="#ss\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-Plain Text"><pre><code>docker run -dt --name ss -p 8989:8989 mritd/shadowsocks -s &quot;-s 0.0.0.0 -p 8989 -m aes-256-gcm -k yourpassword  --fast-open&quot;
</code></pre></div><h3 id="\u5E38\u7528\u955C\u50CF\u76F8\u5173\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u955C\u50CF\u76F8\u5173\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u955C\u50CF\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a></h3><ul><li>\u5BF9\u955C\u50CF\u6DFB\u52A0\u6807\u7B7E</li></ul><div class="language-Plain Text"><pre><code>docker tag ubuntu:latest mybuntu:latest
</code></pre></div><ul><li>\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F</li></ul><div class="language-Plain Text"><pre><code>docker inspect ubuntu:18.04
</code></pre></div><ul><li>\u67E5\u770B\u5386\u53F2\u5404\u5C42\u4FE1\u606F</li></ul><div class="language-Plain Text"><pre><code>docker history ubuntu:18.04
</code></pre></div><ul><li>\u641C\u7D22\u955C\u50CF <a href="https://docs.docker.com/engine/reference/commandline/search/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/reference/commandline/search/</a></li></ul><div class="language-Plain Text"><pre><code>docker search --filter stars=3 busybox
# \u661F\u6570\u4E0D\u5C11\u4E8E3\u7684\u955C\u50CF
</code></pre></div><ul><li>\u5220\u9664\u955C\u50CF</li></ul><div class="language-bash"><pre><code><span class="token function">docker</span> rmi image_id
<span class="token function">docker</span> rmi myubuntu:latest
<span class="token comment"># \u5982\u679C\u6709\u591A\u4E2A\u6807\u7B7E,\u53EA\u662F\u5220\u9664\u4E86\u4E00\u4E2A\u6807\u7B7E</span>
<span class="token comment"># \u53EA\u6709\u4E00\u4E2A\u6807\u7B7E\u65F6\u5019,\u5C31\u5F7B\u5E95\u5220\u9664\u4E86\u955C\u50CF</span>
*\u6CE8\u610F\uFF1A\u5728\u5220\u9664\u955C\u50CF\u4E4B\u524D\u8981\u5148\u7528 <span class="token function">docker</span> <span class="token function">rm</span> \u5220\u6389\u4F9D\u8D56\u4E8E\u8FD9\u4E2A\u955C\u50CF\u7684\u6240\u6709\u5BB9\u5668
</code></pre></div><ul><li>(\u4ECE\u5BB9\u5668)\u521B\u5EFA\u955C\u50CF <a href="https://docs.docker.com/engine/reference/commandline/commit/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/reference/commandline/commit/</a></li></ul><div class="language-bash"><pre><code><span class="token function">docker</span> commit -a <span class="token string">&quot;runoob.com&quot;</span> -m <span class="token string">&quot;my apache&quot;</span> a404c6c174a2  mymysql:v1 
<span class="token function">docker</span> commit <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER <span class="token punctuation">[</span>REPOSITORY<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span><span class="token punctuation">]</span>
OPTIONS\u8BF4\u660E\uFF1A
    -a :\u63D0\u4EA4\u7684\u955C\u50CF\u4F5C\u8005\uFF1B
    -c :\u63D0\u4EA4\u65F6\u5019\u6267\u884C\u7684Dockerfile\u6307\u4EE4\uFF1B
    -m :\u63D0\u4EA4\u65F6\u7684\u8BF4\u660E\u6587\u5B57\uFF1B
    -p :\u5728commit\u65F6\uFF0C\u5C06\u5BB9\u5668\u6682\u505C\u3002
</code></pre></div><ul><li>(\u4ECE\u672C\u5730\u6A21\u677F/openvz\u6A21\u677F\u5BFC\u5165)\u521B\u5EFA\u955C\u50CF <a href="https://wiki.openvz.org/Download/template/precreated" target="_blank" rel="noopener noreferrer">https://wiki.openvz.org/Download/template/precreated</a></li></ul><div class="language-Plain Text"><pre><code>sudo cat ubuntu-14.04-x86_64-minimal.tar.gz  |docker import - ubuntu:14.04
cat centos7.tar | docker import  - centos:7
cat centos-6-x86_64-minimal.tar.gz  | docker import - centos:6
</code></pre></div><ul><li>(\u4ECEDockerfile)\u521B\u5EFA\u955C\u50CF</li></ul><p>\u4E0A\u4F20\u955C\u50CF</p><div class="language-Plain Text"><pre><code>docker push [OPTIONS] NAME[:TAG]
</code></pre></div><ul><li>\u6E05\u7406\u6240\u6709\u672A\u6253\u8FC7\u6807\u7B7E\u7684\u672C\u5730\u955C\u50CF</li></ul><div class="language-Plain Text"><pre><code>sudo docker rmi $(docker images -q -f &quot;dangling=true&quot;)
# \u5176\u4E2D -q \u548C -f \u662F\u7F29\u5199, \u5B8C\u6574\u7684\u547D\u4EE4\u5176\u5B9E\u53EF\u4EE5\u5199\u7740\u4E0B\u9762\u8FD9\u6837\uFF0C\u662F\u4E0D\u662F\u66F4\u5BB9\u6613\u7406\u89E3\u4E00\u70B9\uFF1F
sudo docker rmi $(docker images --quiet --filter &quot;dangling=true&quot;)
</code></pre></div><ul><li>\u5982\u4F55\u67E5\u770B\u955C\u50CF\u652F\u6301\u7684\u73AF\u5883\u53D8\u91CF</li></ul><div class="language-Plain Text"><pre><code>docker run IMAGE env
</code></pre></div>`,40),c=[t];function l(i,p,r,d,u,k){return e(),a("div",null,c)}var g=n(o,[["render",l]]);export{h as __pageData,g as default};
