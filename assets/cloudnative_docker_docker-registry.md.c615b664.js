import{_ as n,c as s,o as a,a as e}from"./app.3a9754ab.js";const g='{"title":"docker005 registry \u4ED3\u5E93","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u642D\u5EFA\u79C1\u6709\u4ED3\u5E93","slug":"\u642D\u5EFA\u79C1\u6709\u4ED3\u5E93"},{"level":2,"title":"\u4E0A\u4F20\u955C\u50CF\u5230\u79C1\u6709\u4ED3\u5E93","slug":"\u4E0A\u4F20\u955C\u50CF\u5230\u79C1\u6709\u4ED3\u5E93"},{"level":2,"title":"\u4ECE\u79C1\u6709\u4ED3\u5E93\u4E0B\u8F7D\u955C\u50CF","slug":"\u4ECE\u79C1\u6709\u4ED3\u5E93\u4E0B\u8F7D\u955C\u50CF"}],"relativePath":"cloudnative/docker/docker-registry.md"}',t={},o=e(`<h1 id="docker005-registry-\u4ED3\u5E93" tabindex="-1">docker005 registry \u4ED3\u5E93 <a class="header-anchor" href="#docker005-registry-\u4ED3\u5E93" aria-hidden="true">#</a></h1><p>\u5B98\u65B9\u6587\u6863: <a href="https://docs.docker.com/registry/configuration/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/registry/configuration/</a></p><h2 id="\u642D\u5EFA\u79C1\u6709\u4ED3\u5E93" tabindex="-1">\u642D\u5EFA\u79C1\u6709\u4ED3\u5E93 <a class="header-anchor" href="#\u642D\u5EFA\u79C1\u6709\u4ED3\u5E93" aria-hidden="true">#</a></h2><p>\u4ECE\u5B98\u65B9\u63D0\u4F9B\u7684registry\u955C\u50CF\u7B80\u5355\u642D\u5EFA\u4E00\u5957\u672C\u5730\u79C1\u6709\u4ED3\u5E93.</p><div class="language-bash"><pre><code><span class="token comment"># Step 1: \u642D\u5EFA\u4ED3\u5E93</span>
<span class="token comment"># mkdir -pv /opt/data/registry # \u6CA1\u6709\u7684\u76EE\u5F55, docker\u4F1A\u521B\u5EFA</span>
<span class="token function">docker</span> run -d -p <span class="token number">5000</span>:5000 <span class="token punctuation">\\</span>
    --restart<span class="token operator">=</span>always <span class="token punctuation">\\</span>
    --privileged<span class="token operator">=</span>true <span class="token punctuation">\\</span>
    -v /opt/data/registry:/tmp/registry <span class="token punctuation">\\</span>
    --name<span class="token operator">=</span><span class="token string">&#39;registry&#39;</span> <span class="token punctuation">\\</span>
    registry:2

<span class="token comment"># \u53C2\u6570\u8BF4\u660E:</span>
<span class="token comment"># -v /opt/data/registry:/tmp/registry </span>
<span class="token comment">#     \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u5C06\u4ED3\u5E93\u5B58\u653E\u4E8E\u5BB9\u5668\u5185\u7684/tmp/registry\u76EE\u5F55\u4E0B\uFF0C\u6307\u5B9A\u672C\u5730\u76EE\u5F55\u6302\u8F7D\u5230\u5BB9\u5668</span>
<span class="token comment"># --privileged=true</span>
<span class="token comment">#     CentOS7\u4E2D\u7684\u5B89\u5168\u6A21\u5757selinux\u628A\u6743\u9650\u7981\u6389\u4E86\uFF0C\u53C2\u6570\u7ED9\u5BB9\u5668\u52A0\u7279\u6743\uFF0C</span>
<span class="token comment">#     \u4E0D\u52A0\u4E0A\u4F20\u955C\u50CF\u4F1A\u62A5\u6743\u9650\u9519\u8BEF(OSError: [Errno 13] Permission denied: \u2018/tmp/registry/repositories/liibrary\u2019)</span>
<span class="token comment">#     \u6216\u8005\uFF08Received unexpected HTTP status: 500 Internal Server Error\uFF09\u9519\u8BEF</span>
</code></pre></div><h2 id="\u4E0A\u4F20\u955C\u50CF\u5230\u79C1\u6709\u4ED3\u5E93" tabindex="-1">\u4E0A\u4F20\u955C\u50CF\u5230\u79C1\u6709\u4ED3\u5E93 <a class="header-anchor" href="#\u4E0A\u4F20\u955C\u50CF\u5230\u79C1\u6709\u4ED3\u5E93" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token assign-left variable">registry_ip</span><span class="token operator">=</span><span class="token string">&#39;10.10.10.101&#39;</span>
<span class="token comment"># Step 2:</span>
<span class="token comment"># \u5BF9\u955C\u50CF\u505A\u4E00\u4E9B\u4FEE\u6539</span>
<span class="token function">docker</span> run -it ubuntu <span class="token function">bash</span>
<span class="token comment"># \u4FEE\u6539\u56FD\u5185\u6E90,\u88C5vim net-tools\u7B49</span>

<span class="token comment"># Step 3: </span>
<span class="token comment"># docker commit \u955C\u50CF</span>
<span class="token function">docker</span> commit -m<span class="token operator">=</span><span class="token string">&quot;add mirrors, install vim net-tools&quot;</span> -a<span class="token operator">=</span><span class="token string">&#39;okeyear@163.com&#39;</span> 2263bed44655 myubuntu:1.0
<span class="token function">docker</span> images

<span class="token comment"># Step 4: </span>
<span class="token comment"># tag\u6807\u8BB0, \u4FEE\u6539\u6210\u7B26\u5408\u79C1\u670D\u89C4\u8303\u7684tag;   </span>
<span class="token comment"># \u5982\u679C\u5DF2\u7ECF\u6253\u4E86tag, \u53EF\u7701\u7565</span>
<span class="token comment"># docker tag IMAGE[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG]</span>
<span class="token function">docker</span> tag myubuntu:1.0 <span class="token variable">\${registry_ip}</span>:5000/myubuntu:1.0

<span class="token comment"># Step 5: </span>
<span class="token comment"># \u4FEE\u6539docker\u914D\u7F6E\u6587\u4EF6/etc/docker/daemon.json, \u5141\u8BB8http\u65B9\u5F0F\u4F20\u8F93</span>
<span class="token comment"># \u56E0\u4E3A\u662Fjson\u683C\u5F0F, \u8FD9\u4E2A\u7C98\u8D34\u8FDB\u53BB\u4E4B\u540E,\u6CE8\u610F\u524D\u540E\u662F\u5426\u8981\u52A0\u9017\u53F7</span>
<span class="token comment"># &quot;insecure-registries&quot;: [&quot;\${registry_ip}:5000&quot;] ,</span>
<span class="token function">service</span> <span class="token function">docker</span> restart

<span class="token comment"># Step 6: </span>
<span class="token comment"># \u4E0A\u4F20\u524D\u67E5\u770B</span>
<span class="token function">curl</span> -XGET http://<span class="token variable">\${registry_ip}</span>:5000/v2/_catalog
<span class="token comment"># push\u4E0A\u4F20</span>
<span class="token function">docker</span> push <span class="token variable">\${registry_ip}</span>:5000/myubuntu:1.0
<span class="token comment"># \u4E0A\u4F20\u540E\u67E5\u770B</span>
<span class="token function">curl</span> -XGET http://<span class="token variable">\${registry_ip}</span>:5000/v2/_catalog

</code></pre></div><h2 id="\u4ECE\u79C1\u6709\u4ED3\u5E93\u4E0B\u8F7D\u955C\u50CF" tabindex="-1">\u4ECE\u79C1\u6709\u4ED3\u5E93\u4E0B\u8F7D\u955C\u50CF <a class="header-anchor" href="#\u4ECE\u79C1\u6709\u4ED3\u5E93\u4E0B\u8F7D\u955C\u50CF" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code>
<span class="token comment"># Step 7: </span>
<span class="token comment"># pull\u4E0B\u8F7D, \u5728\u5176\u4ED6\u5730\u65B9\u4F7F\u7528</span>
<span class="token comment"># \u9700\u8981\u5728/etc/docker/daemon.json\u4E2Dregistry-mirrors\u914D\u7F6E\u79C1\u6709\u4ED3\u5E93\u5730\u5740</span>
<span class="token comment"># \u5148\u5220\u9664\u672C\u5730\u7684images</span>
<span class="token function">docker</span> rmi <span class="token variable">\${registry_ip}</span>:5000/myubuntu:1.0 myubuntu:1.0
<span class="token comment"># \u4ECE\u4ED3\u5E93pull\u4E00\u4E2A</span>
<span class="token function">docker</span> pull <span class="token variable">\${registry_ip}</span>:5000/myubuntu:1.0
<span class="token function">docker</span> images
</code></pre></div>`,9),p=[o];function c(r,i,l,m,k,u){return a(),s("div",null,p)}var h=n(t,[["render",c]]);export{g as __pageData,h as default};
