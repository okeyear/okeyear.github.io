import{_ as a,c as e,o as n,a as s}from"./app.1b5e2894.js";const m='{"title":"docker004 container \u5BB9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u67E5\u770B","slug":"\u67E5\u770B"},{"level":2,"title":"\u521B\u5EFA","slug":"\u521B\u5EFA"},{"level":2,"title":"\u9000\u51FA\u5BB9\u5668","slug":"\u9000\u51FA\u5BB9\u5668"},{"level":3,"title":"\u4E0E\u5BB9\u5668\u8FD0\u884C\u6A21\u5F0F\u76F8\u5173\u53C2\u6570","slug":"\u4E0E\u5BB9\u5668\u8FD0\u884C\u6A21\u5F0F\u76F8\u5173\u53C2\u6570"},{"level":3,"title":"\u4E0E\u5BB9\u5668\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u53C2\u6570","slug":"\u4E0E\u5BB9\u5668\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u53C2\u6570"},{"level":3,"title":"\u4E0E\u5BB9\u5668\u8D44\u6E90\u9650\u5236\u548C\u5B89\u5168\u4FDD\u62A4\u76F8\u5173\u53C2\u6570","slug":"\u4E0E\u5BB9\u5668\u8D44\u6E90\u9650\u5236\u548C\u5B89\u5168\u4FDD\u62A4\u76F8\u5173\u53C2\u6570"},{"level":2,"title":"\u7EC8\u6B62\u5BB9\u5668 docker stop","slug":"\u7EC8\u6B62\u5BB9\u5668-docker-stop"},{"level":3,"title":"\u6682\u505C\u5BB9\u5668 pause/unpause","slug":"\u6682\u505C\u5BB9\u5668-pause-unpause"},{"level":2,"title":"\u8FDB\u5165\u5BB9\u5668","slug":"\u8FDB\u5165\u5BB9\u5668"},{"level":2,"title":"\u5220\u9664\u5BB9\u5668 docker rm","slug":"\u5220\u9664\u5BB9\u5668-docker-rm"},{"level":2,"title":"\u5BFC\u5165/\u5BFC\u51FA\u5BB9\u5668","slug":"\u5BFC\u5165-\u5BFC\u51FA\u5BB9\u5668"},{"level":2,"title":"\u5BB9\u5668\u9650\u989D","slug":"\u5BB9\u5668\u9650\u989D"},{"level":2,"title":"\u9650\u989D\u5185\u5B58(run)","slug":"\u9650\u989D\u5185\u5B58-run"},{"level":2,"title":"\u9650\u989DCPU(run)","slug":"\u9650\u989Dcpu-run"},{"level":2,"title":"\u9650\u989DBlock IO(run)","slug":"\u9650\u989Dblock-io-run"},{"level":2,"title":"cp\u590D\u5236\u547D\u4EE4","slug":"cp\u590D\u5236\u547D\u4EE4"},{"level":2,"title":"logs\u67E5\u770B\u65E5\u5FD7","slug":"logs\u67E5\u770B\u65E5\u5FD7"}],"relativePath":"cloudnative/docker/docker-container.md"}',p={},t=s(`<h1 id="docker004-container-\u5BB9\u5668" tabindex="-1">docker004 container \u5BB9\u5668 <a class="header-anchor" href="#docker004-container-\u5BB9\u5668" aria-hidden="true">#</a></h1><p>\u5BB9\u5668\u662F\u955C\u50CF\u7684\u4E00\u4E2A\u8FD0\u884C\u5B9E\u4F8B.</p><h2 id="\u67E5\u770B" tabindex="-1">\u67E5\u770B <a class="header-anchor" href="#\u67E5\u770B" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># docker ps</span>
<span class="token comment"># ps\u9009\u9879\u5E38\u7528\u7684\u662Fa\u548Cq</span>
  -a, --all             Show all containers <span class="token punctuation">(</span>default shows just running<span class="token punctuation">)</span>
  -q, --quiet           Only display container IDs
<span class="token function">docker</span> <span class="token function">ps</span> -a

<span class="token function">docker</span> container <span class="token function">ls</span>
<span class="token function">docker</span> container <span class="token function">ls</span> -a

<span class="token comment"># \u67E5\u770B\u5BB9\u5668\u5185\u90E8\u4FE1\u606F</span>
<span class="token function">docker</span> <span class="token function">top</span> <span class="token function">id</span>
</code></pre></div><h2 id="\u521B\u5EFA" tabindex="-1">\u521B\u5EFA <a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a></h2><p><strong>docker run = docker create + docker start</strong></p><div class="language-bash"><pre><code><span class="token function">docker</span> run --help
<span class="token comment"># Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]</span>

<span class="token comment"># examples</span>
<span class="token comment"># 1. \u4EA4\u4E92\u5F0F</span>
<span class="token function">docker</span> run -it ubuntu /bin/bash
<span class="token comment"># 2. daemon\u65B9\u5F0F</span>
</code></pre></div><p>\u5E38\u7528options\u5982\u4E0B:</p><ul><li>\u521B\u5EFA\u5BB9\u5668 docker create</li></ul><p>stdin: \u6307\u5B9A\u6807\u51C6\u8F93\u5165\u8F93\u51FA\u5185\u5BB9\u7C7B\u578B\uFF0C\u53EF\u9009 STDIN/STDOUT/STDERR \u4E09\u9879\uFF1B</p><p>-d: \u540E\u53F0\u8FD0\u884C\u5BB9\u5668\uFF0C\u5E76\u8FD4\u56DE\u5BB9\u5668ID\uFF1B</p><p>-i: \u4EE5\u4EA4\u4E92\u6A21\u5F0F\u8FD0\u884C\u5BB9\u5668\uFF0C\u901A\u5E38\u4E0E -t \u540C\u65F6\u4F7F\u7528\uFF1B</p><p>--rm: \u5BB9\u5668\u6267\u884C\u5B8C\u547D\u4EE4\u6216\u7A0B\u5E8F\u540E\u5C31\u9500\u6BC1</p><p>-P: \u968F\u673A\u7AEF\u53E3\u6620\u5C04\uFF0C\u5BB9\u5668\u5185\u90E8\u7AEF\u53E3\u968F\u673A\u6620\u5C04\u5230\u4E3B\u673A\u7684\u9AD8\u7AEF\u53E3</p><p>-p: \u6307\u5B9A\u7AEF\u53E3\u6620\u5C04\uFF0C\u683C\u5F0F\u4E3A\uFF1A\u4E3B\u673A(\u5BBF\u4E3B)\u7AEF\u53E3:\u5BB9\u5668\u7AEF\u53E3</p><p>-t: \u4E3A\u5BB9\u5668\u91CD\u65B0\u5206\u914D\u4E00\u4E2A\u4F2A\u8F93\u5165\u7EC8\u7AEF\uFF0C\u901A\u5E38\u4E0E -i \u540C\u65F6\u4F7F\u7528\uFF1B</p><p>--name=&quot;nginx-lb&quot;: \u4E3A\u5BB9\u5668\u6307\u5B9A\u4E00\u4E2A\u540D\u79F0\uFF1B</p><p>--dns 8.8.8.8: \u6307\u5B9A\u5BB9\u5668\u4F7F\u7528\u7684DNS\u670D\u52A1\u5668\uFF0C\u9ED8\u8BA4\u548C\u5BBF\u4E3B\u4E00\u81F4\uFF1B</p><p>--dns-search <a href="http://example.com" target="_blank" rel="noopener noreferrer">example.com</a>: \u6307\u5B9A\u5BB9\u5668DNS\u641C\u7D22\u57DF\u540D\uFF0C\u9ED8\u8BA4\u548C\u5BBF\u4E3B\u4E00\u81F4\uFF1B</p><p>-h &quot;mars&quot;: \u6307\u5B9A\u5BB9\u5668\u7684hostname\uFF1B</p><p>-e username=&quot;ritchie&quot;: \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1B</p><p>--env-file=[]: \u4ECE\u6307\u5B9A\u6587\u4EF6\u8BFB\u5165\u73AF\u5883\u53D8\u91CF\uFF1B</p><p>--cpuset=&quot;0-2&quot; or --cpuset=&quot;0,1,2&quot;: \u7ED1\u5B9A\u5BB9\u5668\u5230\u6307\u5B9ACPU\u8FD0\u884C\uFF1B</p><p>-m :\u8BBE\u7F6E\u5BB9\u5668\u4F7F\u7528\u5185\u5B58\u6700\u5927\u503C\uFF1B</p><p>--net=&quot;bridge&quot;: \u6307\u5B9A\u5BB9\u5668\u7684\u7F51\u7EDC\u8FDE\u63A5\u7C7B\u578B\uFF0C\u652F\u6301 bridge/host/none/container: \u56DB\u79CD\u7C7B\u578B\uFF1B</p><p>--link=[]: \u6DFB\u52A0\u94FE\u63A5\u5230\u53E6\u4E00\u4E2A\u5BB9\u5668\uFF1B</p><p>--expose=[]: \u5F00\u653E\u4E00\u4E2A\u7AEF\u53E3\u6216\u4E00\u7EC4\u7AEF\u53E3\uFF1B</p><p>--volume , -v: \u7ED1\u5B9A\u4E00\u4E2A\u5377</p><ul><li>\u542F\u52A8\u5BB9\u5668 docker start</li></ul><p>--restart=always \u610F\u5473\u7740\u65E0\u8BBA\u5BB9\u5668\u56E0\u4F55\u79CD\u539F\u56E0\u9000\u51FA\uFF08\u5305\u62EC\u6B63\u5E38\u9000\u51FA\uFF09\uFF0C\u5C31\u7ACB\u5373\u91CD\u542F\u3002\u8BE5\u53C2\u6570\u7684\u5F62\u5F0F\u8FD8\u53EF\u4EE5\u662F --restart=on-failure:3\uFF0C\u610F\u601D\u662F\u5982\u679C\u542F\u52A8\u8FDB\u7A0B\u9000\u51FA\u4EE3\u7801\u975E0\uFF0C\u5219\u91CD\u542F\u5BB9\u5668\uFF0C\u6700\u591A\u91CD\u542F3\u6B21\u3002</p><h2 id="\u9000\u51FA\u5BB9\u5668" tabindex="-1">\u9000\u51FA\u5BB9\u5668 <a class="header-anchor" href="#\u9000\u51FA\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># 1. run\u8FDB\u53BB, exit\u65B9\u5F0F\u9000\u51FA, \u5BB9\u5668\u505C\u6B62</span>
<span class="token comment"># 2. run\u8FDB\u53BB, ctrl+p+q\u9000\u51FA, \u5BB9\u5668\u4E0D\u505C\u6B62</span>

</code></pre></div><h3 id="\u4E0E\u5BB9\u5668\u8FD0\u884C\u6A21\u5F0F\u76F8\u5173\u53C2\u6570" tabindex="-1">\u4E0E\u5BB9\u5668\u8FD0\u884C\u6A21\u5F0F\u76F8\u5173\u53C2\u6570 <a class="header-anchor" href="#\u4E0E\u5BB9\u5668\u8FD0\u884C\u6A21\u5F0F\u76F8\u5173\u53C2\u6570" aria-hidden="true">#</a></h3><h3 id="\u4E0E\u5BB9\u5668\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u53C2\u6570" tabindex="-1">\u4E0E\u5BB9\u5668\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u53C2\u6570 <a class="header-anchor" href="#\u4E0E\u5BB9\u5668\u548C\u73AF\u5883\u914D\u7F6E\u76F8\u5173\u53C2\u6570" aria-hidden="true">#</a></h3><h3 id="\u4E0E\u5BB9\u5668\u8D44\u6E90\u9650\u5236\u548C\u5B89\u5168\u4FDD\u62A4\u76F8\u5173\u53C2\u6570" tabindex="-1">\u4E0E\u5BB9\u5668\u8D44\u6E90\u9650\u5236\u548C\u5B89\u5168\u4FDD\u62A4\u76F8\u5173\u53C2\u6570 <a class="header-anchor" href="#\u4E0E\u5BB9\u5668\u8D44\u6E90\u9650\u5236\u548C\u5B89\u5168\u4FDD\u62A4\u76F8\u5173\u53C2\u6570" aria-hidden="true">#</a></h3><h2 id="\u7EC8\u6B62\u5BB9\u5668-docker-stop" tabindex="-1">\u7EC8\u6B62\u5BB9\u5668 docker stop <a class="header-anchor" href="#\u7EC8\u6B62\u5BB9\u5668-docker-stop" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code>
<span class="token function">docker</span> stop \u5BB9\u5668ID\u6216\u540D\u79F0\uFF08ID\u53EF\u4EE5\u7B80\u5199\uFF0C\u552F\u4E00\u5373\u53EF\uFF09
<span class="token function">docker</span> container stop

<span class="token comment"># \u505C\u6B62\u6240\u6709\u5BB9\u5668</span>
<span class="token function">docker</span> stop <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -a -q<span class="token variable">)</span></span> 
</code></pre></div><h3 id="\u6682\u505C\u5BB9\u5668-pause-unpause" tabindex="-1">\u6682\u505C\u5BB9\u5668 pause/unpause <a class="header-anchor" href="#\u6682\u505C\u5BB9\u5668-pause-unpause" aria-hidden="true">#</a></h3><p>\u6709\u65F6\u6211\u4EEC\u53EA\u662F\u5E0C\u671B\u6682\u65F6\u8BA9\u5BB9\u5668\u6682\u505C\u5DE5\u4F5C\u4E00\u6BB5\u65F6\u95F4\uFF0C\u6BD4\u5982\u8981\u5BF9\u5BB9\u5668\u7684\u6587\u4EF6\u7CFB\u7EDF\u6253\u4E2A\u5FEB\u7167\uFF0C\u6216\u8005 dcoker host \u9700\u8981\u4F7F\u7528 CPU\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u6267\u884C docker pause\u3002</p><p>\u5904\u4E8E\u6682\u505C\u72B6\u6001\u7684\u5BB9\u5668\u4E0D\u4F1A\u5360\u7528 CPU \u8D44\u6E90\uFF0C\u76F4\u5230\u901A\u8FC7 docker unpause \u6062\u590D\u8FD0\u884C\u3002</p><h2 id="\u8FDB\u5165\u5BB9\u5668" tabindex="-1">\u8FDB\u5165\u5BB9\u5668 <a class="header-anchor" href="#\u8FDB\u5165\u5BB9\u5668" aria-hidden="true">#</a></h2><h4 id="attach" tabindex="-1">attach <a class="header-anchor" href="#attach" aria-hidden="true">#</a></h4><p>\u7F3A\u70B9: \u6240\u6709attach\u7684\u7EC8\u7AEF\u4F1A\u540C\u6B65\u663E\u793A,\u963B\u585E</p><h4 id="exec" tabindex="-1">exec <a class="header-anchor" href="#exec" aria-hidden="true">#</a></h4><p>\u9000\u51FA\u4E0D\u4F1A\u5BFC\u81F4\u5BB9\u5668\u505C\u6B62</p><p><code>docker exec -it xxxxxxxx /bin/bash</code></p><h4 id="nsenter\u5DE5\u5177" tabindex="-1">nsenter\u5DE5\u5177 <a class="header-anchor" href="#nsenter\u5DE5\u5177" aria-hidden="true">#</a></h4><h2 id="\u5220\u9664\u5BB9\u5668-docker-rm" tabindex="-1">\u5220\u9664\u5BB9\u5668 docker rm <a class="header-anchor" href="#\u5220\u9664\u5BB9\u5668-docker-rm" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># docker rm \u4E00\u6B21\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u5BB9\u5668\uFF0C\u5982\u679C\u5E0C\u671B\u6279\u91CF\u5220\u9664\u6240\u6709\u5DF2\u7ECF\u9000\u51FA\u7684\u5BB9\u5668\uFF0C\u53EF\u4EE5\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</span>
<span class="token function">docker</span> <span class="token function">rm</span> -v <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -aq -f <span class="token assign-left variable">status</span><span class="token operator">=</span>exited<span class="token variable">)</span></span>

<span class="token comment"># \u56E0\u4E3A\u6CA1\u6709\u4F7F\u7528 -v\uFF0Cvolume \u9057\u7559\u4E86\u4E0B\u6765\u3002\u5BF9\u4E8E\u8FD9\u6837\u7684\u5B64\u513F volume\uFF0C\u53EF\u4EE5\u7528 docker volume rm \u5220\u9664\uFF1A</span>
<span class="token comment"># \u5982\u679C\u60F3\u6279\u91CF\u5220\u9664\u5B64\u513F volume\uFF0C\u53EF\u4EE5\u6267\u884C\uFF1A</span>
<span class="token function">docker</span> volume <span class="token function">ls</span>
<span class="token function">docker</span> volume <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> volume <span class="token function">ls</span> -q<span class="token variable">)</span></span>
</code></pre></div><h2 id="\u5BFC\u5165-\u5BFC\u51FA\u5BB9\u5668" tabindex="-1">\u5BFC\u5165/\u5BFC\u51FA\u5BB9\u5668 <a class="header-anchor" href="#\u5BFC\u5165-\u5BFC\u51FA\u5BB9\u5668" aria-hidden="true">#</a></h2><p>docker export x.tar xxx docker import x.tar - test/ubuntu:v1.0</p><h2 id="\u5BB9\u5668\u9650\u989D" tabindex="-1">\u5BB9\u5668\u9650\u989D <a class="header-anchor" href="#\u5BB9\u5668\u9650\u989D" aria-hidden="true">#</a></h2><h2 id="\u9650\u989D\u5185\u5B58-run" tabindex="-1">\u9650\u989D\u5185\u5B58(run) <a class="header-anchor" href="#\u9650\u989D\u5185\u5B58-run" aria-hidden="true">#</a></h2><p>docker run --help</p><p>\u5BB9\u5668\u53EF\u4F7F\u7528\u7684\u5185\u5B58\u5305\u62EC\u4E24\u90E8\u5206\uFF1A\u7269\u7406\u5185\u5B58\u548C swap</p><p>-m \u6216 --memory\uFF1A\u8BBE\u7F6E\u5185\u5B58\u7684\u4F7F\u7528\u9650\u989D\uFF0C\u4F8B\u5982 100M, 2G\u3002 --memory-swap\uFF1A\u8BBE\u7F6E \u5185\u5B58+swap \u7684\u4F7F\u7528\u9650\u989D\u3002</p><p>docker run -m 200M --memory-swap=300M ubuntu</p><p>\u5176\u542B\u4E49\u662F\u5141\u8BB8\u8BE5\u5BB9\u5668\u6700\u591A\u4F7F\u7528 200M \u7684\u5185\u5B58\u548C 100M \u7684 swap\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0A\u9762\u4E24\u7EC4\u53C2\u6570\u4E3A -1\uFF0C\u5373\u5BF9\u5BB9\u5668\u5185\u5B58\u548C swap \u7684\u4F7F\u7528\u6CA1\u6709\u9650\u5236\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u5C06\u4F7F\u7528 progrium/stress \u955C\u50CF\u6765\u5B66\u4E60\u5982\u4F55\u4E3A\u5BB9\u5668\u5206\u914D\u5185\u5B58\u3002\u8BE5\u955C\u50CF\u53EF\u7528\u4E8E\u5BF9\u5BB9\u5668\u6267\u884C\u538B\u529B\u6D4B\u8BD5\u3002\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</p><p>docker run -it -m 200M --memory-swap=300M progrium/stress --vm 1 --vm-bytes 280M</p><p>--vm 1\uFF1A\u542F\u52A8 1 \u4E2A\u5185\u5B58\u5DE5\u4F5C\u7EBF\u7A0B\u3002</p><p>--vm-bytes 280M\uFF1A\u6BCF\u4E2A\u7EBF\u7A0B\u5206\u914D 280M \u5185\u5B58\u3002</p><p>docker run -it -m 200M --memory-swap=300M progrium/stress --vm 1 --vm-bytes 310M</p><p>\u5982\u679C\u5728\u542F\u52A8\u5BB9\u5668\u65F6\u53EA\u6307\u5B9A -m \u800C\u4E0D\u6307\u5B9A --memory-swap\uFF0C\u90A3\u4E48 --memory-swap \u9ED8\u8BA4\u4E3A -m \u7684\u4E24\u500D\uFF0C\u6BD4\u5982\uFF1A</p><p>docker run -it -m 200M ubuntu</p><p>\u5BB9\u5668\u6700\u591A\u4F7F\u7528 200M \u7269\u7406\u5185\u5B58\u548C 200M swap\u3002</p><h2 id="\u9650\u989Dcpu-run" tabindex="-1">\u9650\u989DCPU(run) <a class="header-anchor" href="#\u9650\u989Dcpu-run" aria-hidden="true">#</a></h2><p>docker run --help</p><p>\u9ED8\u8BA4\u8BBE\u7F6E\u4E0B\uFF0C\u6240\u6709\u5BB9\u5668\u53EF\u4EE5\u5E73\u7B49\u5730\u4F7F\u7528 host CPU \u8D44\u6E90\u5E76\u4E14\u6CA1\u6709\u9650\u5236\u3002</p><p>Docker \u53EF\u4EE5\u901A\u8FC7 -c \u6216 --cpu-shares \u8BBE\u7F6E\u5BB9\u5668\u4F7F\u7528 CPU \u7684\u6743\u91CD\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1024\u3002</p><p>\u4E0E\u5185\u5B58\u9650\u989D\u4E0D\u540C\uFF0C\u901A\u8FC7 -c \u8BBE\u7F6E\u7684 cpu share \u5E76\u4E0D\u662F CPU \u8D44\u6E90\u7684\u7EDD\u5BF9\u6570\u91CF\uFF0C\u800C\u662F\u4E00\u4E2A\u76F8\u5BF9\u7684\u6743\u91CD\u503C\u3002\u67D0\u4E2A\u5BB9\u5668\u6700\u7EC8\u80FD\u5206\u914D\u5230\u7684 CPU \u8D44\u6E90\u53D6\u51B3\u4E8E\u5B83\u7684 cpu share \u5360\u6240\u6709\u5BB9\u5668 cpu share \u603B\u548C\u7684\u6BD4\u4F8B\u3002</p><p>\u6362\u53E5\u8BDD\u8BF4\uFF1A\u901A\u8FC7 cpu share \u53EF\u4EE5\u8BBE\u7F6E\u5BB9\u5668\u4F7F\u7528 CPU \u7684\u4F18\u5148\u7EA7\u3002</p><h2 id="\u9650\u989Dblock-io-run" tabindex="-1">\u9650\u989DBlock IO(run) <a class="header-anchor" href="#\u9650\u989Dblock-io-run" aria-hidden="true">#</a></h2><p>Block IO \u662F\u53E6\u4E00\u79CD\u53EF\u4EE5\u9650\u5236\u5BB9\u5668\u4F7F\u7528\u7684\u8D44\u6E90\u3002Block IO \u6307\u7684\u662F\u78C1\u76D8\u7684\u8BFB\u5199\uFF0Cdocker \u53EF\u901A\u8FC7\u8BBE\u7F6E\u6743\u91CD\u3001\u9650\u5236 bps \u548C iops \u7684\u65B9\u5F0F\u63A7\u5236\u5BB9\u5668\u8BFB\u5199\u78C1\u76D8\u7684\u5E26\u5BBD\uFF0C\u4E0B\u9762\u5206\u522B\u8BA8\u8BBA\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u5BB9\u5668\u80FD\u5E73\u7B49\u5730\u8BFB\u5199\u78C1\u76D8\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E --blkio-weight \u53C2\u6570\u6765\u6539\u53D8\u5BB9\u5668 block IO \u7684\u4F18\u5148\u7EA7\u3002</p><p>--blkio-weight \u4E0E --cpu-shares \u7C7B\u4F3C\uFF0C\u8BBE\u7F6E\u7684\u662F\u76F8\u5BF9\u6743\u91CD\u503C\uFF0C\u9ED8\u8BA4\u4E3A 500\u3002</p><p>\u76EE\u524D Block IO \u9650\u989D\u53EA\u5BF9 direct IO\uFF08\u4E0D\u4F7F\u7528\u6587\u4EF6\u7F13\u5B58\uFF09\u6709\u6548\u3002</p><p>\u9650\u5236 bps \u548C iops</p><ul><li>bps \u662F byte per second\uFF0C\u6BCF\u79D2\u8BFB\u5199\u7684\u6570\u636E\u91CF\u3002</li><li>iops \u662F io per second\uFF0C\u6BCF\u79D2 IO \u7684\u6B21\u6570\u3002</li></ul><p>\u53EF\u901A\u8FC7\u4EE5\u4E0B\u53C2\u6570\u63A7\u5236\u5BB9\u5668\u7684 bps \u548C iops\uFF1A</p><p>--device-read-bps\uFF0C\u9650\u5236\u8BFB\u67D0\u4E2A\u8BBE\u5907\u7684 bps\u3002</p><p>--device-write-bps\uFF0C\u9650\u5236\u5199\u67D0\u4E2A\u8BBE\u5907\u7684 bps\u3002</p><p>--device-read-iops\uFF0C\u9650\u5236\u8BFB\u67D0\u4E2A\u8BBE\u5907\u7684 iops\u3002</p><p>--device-write-iops\uFF0C\u9650\u5236\u5199\u67D0\u4E2A\u8BBE\u5907\u7684 iops\u3002</p><p>\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\u9650\u5236\u5BB9\u5668\u5199 /dev/sda \u7684\u901F\u7387\u4E3A 30 MB/s</p><p>docker run -it --device-write-bps /dev/sda:30MB ubuntu</p><h2 id="cp\u590D\u5236\u547D\u4EE4" tabindex="-1">cp\u590D\u5236\u547D\u4EE4 <a class="header-anchor" href="#cp\u590D\u5236\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># \u4ECEcontainer\u590D\u5236\u5230\u5BBF\u4E3B\u673A</span>
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> container:path localPath 
<span class="token comment"># \u4ECE\u5BBF\u4E3B\u673A\u590D\u5236\u5230container</span>
<span class="token function">docker</span> <span class="token function">cp</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> localPath container:path 
</code></pre></div><h2 id="logs\u67E5\u770B\u65E5\u5FD7" tabindex="-1">logs\u67E5\u770B\u65E5\u5FD7 <a class="header-anchor" href="#logs\u67E5\u770B\u65E5\u5FD7" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code>
<span class="token function">docker</span> logs -f  --tail <span class="token number">20</span> container
<span class="token function">docker</span> logs --tail <span class="token number">20</span> -t 00since  container 
</code></pre></div>`,90),o=[t];function c(r,i,l,d,u,h){return n(),e("div",null,o)}var b=a(p,[["render",c]]);export{m as __pageData,b as default};
