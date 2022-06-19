import{_ as n,c as a,o as s,a as e}from"./app.1b5e2894.js";const m='{"title":"linux join\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u793A\u4F8B","slug":"\u57FA\u672C\u793A\u4F8B"},{"level":3,"title":"\u601D\u8003\u95EE\u9898","slug":"\u601D\u8003\u95EE\u9898"}],"relativePath":"linux/command/jjj/join.md"}',t={},p=e(`<h1 id="linux-join\u547D\u4EE4" tabindex="-1">linux join\u547D\u4EE4 <a class="header-anchor" href="#linux-join\u547D\u4EE4" aria-hidden="true">#</a></h1><p>\u7C7B\u4F3C\u6570\u636E\u5E93\u4E2D\u7684\u8868join, \u5DE6\u8FDE\u63A5, \u53F3\u94FE\u63A5, \u5DE6\u53F3\u90FD\u663E\u793A\u7684\u8FDE\u63A5</p><ul><li>\u53EA\u80FDjoin\u4E24\u4E2A\u6587\u4EF6</li><li>\u4E3B\u952E\u5217\u5FC5\u987B\u662F\u6392\u5E8F\u597D\u7684</li></ul><p>\u683C\u5F0F:</p><div class="language-bash"><pre><code>Usage: <span class="token function">join</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. FILE1 FILE2
<span class="token comment"># The default join field is the first, delimited by blanks.</span>
<span class="token comment"># \u9ED8\u8BA4\u4EE5\u7B2C\u4E00\u5217\u4F5C\u4E3AJoin\u5B57\u6BB5, \u4EE5\u7A7A\u683C\u5206\u5272\u5B57\u6BB5</span>
-t \u6307\u5B9A\u5206\u9694\u7B26
-a \u540E\u9762\u8DDF\u4E0A\u6587\u4EF6\u7F16\u53F7, \u6BD4\u5982-a1 -a2
-i \u5FFD\u7565\u5927\u5C0F\u5199
-o \u540E\u9762\u8DDF\u4E0A\u8F93\u51FA\u7684\u5B57\u6BB5, \u6BD4\u59821.1\u7B2C\u4E00\u4E2A\u6587\u4EF6\u7684\u7B2C\u4E00\u5217, <span class="token number">2.3</span> \u8868\u793A\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u7684\u7B2C\u4E09\u5217
-e \u628A\u8F93\u51FA\u5B57\u6BB5\u4E2D\u6CA1\u6709\u7684\u7A7A\u767D, \u66FF\u6362\u6210\u6307\u5B9A\u7684\u5B57\u7B26
-j \u6307\u5B9A\u67D0\u4E00\u5217\u4F5C\u4E3Ajoin\u7684\u4E3B\u952E\u5217, \u6BD4\u5982 -jx \u7B49\u4E8E -1x -2x, \u4E5F\u5C31\u662F\u6307\u5B9A\u4E24\u4E2A\u6587\u4EF6\u7684x\u5217\u4F5C\u4E3A\u4E3B\u5217
-v \u5176\u4E2D-v1\u662F \u5DE6\u8FB9\u6709\u4F46\u53F3\u8FB9\u6CA1\u6709\u7684, -v2\u662F\u53F3\u8FB9\u6709\u4F46\u662F\u5DE6\u8FB9\u6CA1\u6709\u7684
</code></pre></div><h3 id="\u57FA\u672C\u793A\u4F8B" tabindex="-1">\u57FA\u672C\u793A\u4F8B <a class="header-anchor" href="#\u57FA\u672C\u793A\u4F8B" aria-hidden="true">#</a></h3><p><strong>\u51C6\u5907\u6570\u636E</strong>:</p><div class="language-bash"><pre><code><span class="token function">tee</span> <span class="token number">1</span>.txt <span class="token operator">&lt;&lt;</span><span class="token string">EOF
1 January
2 February
3 March
13 Unknown
EOF</span>

<span class="token function">tee</span> <span class="token number">2</span>.txt <span class="token operator">&lt;&lt;</span><span class="token string">EOF
1       \u4E00\u6708
2       \u4E8C\u6708
3       \u4E09\u6708
14 \u6545\u610F\u4E0D\u5BF9\u9F50\u7684\u5341\u56DB\u6708
EOF</span>
</code></pre></div><h4 id="\u4EA4\u96C6" tabindex="-1">\u4EA4\u96C6 <a class="header-anchor" href="#\u4EA4\u96C6" aria-hidden="true">#</a></h4><div class="language-bash"><pre><code><span class="token function">join</span> <span class="token number">1</span>.txt <span class="token number">2</span>.txt
<span class="token comment"># \u793A\u4F8B\u8F93\u51FA</span>
<span class="token number">1</span> January \u4E00\u6708
<span class="token number">2</span> February \u4E8C\u6708
<span class="token number">3</span> March \u4E09\u6708
</code></pre></div><h4 id="left-join" tabindex="-1">left join <a class="header-anchor" href="#left-join" aria-hidden="true">#</a></h4><div class="language-bash"><pre><code><span class="token function">join</span> -a1 <span class="token number">1</span>.txt <span class="token number">2</span>.txt
<span class="token comment"># \u793A\u4F8B\u8F93\u51FA</span>
<span class="token number">1</span> January \u4E00\u6708
<span class="token number">2</span> February \u4E8C\u6708
<span class="token number">3</span> March \u4E09\u6708
<span class="token number">13</span> Unknown

</code></pre></div><h4 id="right-join" tabindex="-1">right join <a class="header-anchor" href="#right-join" aria-hidden="true">#</a></h4><div class="language-bash"><pre><code><span class="token function">join</span> -a2 <span class="token number">1</span>.txt <span class="token number">2</span>.txt
<span class="token comment"># \u793A\u4F8B\u8F93\u51FA</span>
<span class="token number">1</span> January \u4E00\u6708
<span class="token number">2</span> February \u4E8C\u6708
<span class="token number">3</span> March \u4E09\u6708
<span class="token number">14</span> \u6545\u610F\u4E0D\u5BF9\u9F50\u7684\u5341\u56DB\u6708
</code></pre></div><h4 id="\u5DE6\u53F3\u5168\u90FD\u8981\u7684join" tabindex="-1">\u5DE6\u53F3\u5168\u90FD\u8981\u7684join <a class="header-anchor" href="#\u5DE6\u53F3\u5168\u90FD\u8981\u7684join" aria-hidden="true">#</a></h4><div class="language-bash"><pre><code><span class="token function">join</span> -a1 -a2 <span class="token number">1</span>.txt <span class="token number">2</span>.txt
<span class="token comment"># \u793A\u4F8B\u8F93\u51FA</span>
<span class="token number">1</span> January \u4E00\u6708
<span class="token number">2</span> February \u4E8C\u6708
<span class="token number">3</span> March \u4E09\u6708
<span class="token number">13</span> Unknown
<span class="token number">14</span> \u6545\u610F\u4E0D\u5BF9\u9F50\u7684\u5341\u56DB\u6708

</code></pre></div><p>\u4EE5\u4E0A\u8F93\u51FA\u4E0D\u77E5\u9053\u6765\u81EA\u6587\u4EF61\u8FD8\u662F\u6587\u4EF62, \u56E0\u6B64\u5982\u4E0B</p><div class="language-bash"><pre><code><span class="token function">join</span> -a1 -a2 -e <span class="token string">&#39;-&#39;</span> -o <span class="token string">&#39;1.1 1.2 2.1 2.2&#39;</span> <span class="token number">1</span>.txt <span class="token number">2</span>.txt
<span class="token comment"># \u793A\u4F8B\u8F93\u51FA</span>
<span class="token number">1</span> January <span class="token number">1</span> \u4E00\u6708
<span class="token number">2</span> February <span class="token number">2</span> \u4E8C\u6708
<span class="token number">3</span> March <span class="token number">3</span> \u4E09\u6708
<span class="token number">13</span> Unknown - -
- - <span class="token number">14</span> \u6545\u610F\u4E0D\u5BF9\u9F50\u7684\u5341\u56DB\u6708

</code></pre></div><h4 id="\u4E00\u8FB9\u6709-\u53E6\u4E00\u8FB9\u6CA1\u6709\u7684" tabindex="-1">\u4E00\u8FB9\u6709,\u53E6\u4E00\u8FB9\u6CA1\u6709\u7684 <a class="header-anchor" href="#\u4E00\u8FB9\u6709-\u53E6\u4E00\u8FB9\u6CA1\u6709\u7684" aria-hidden="true">#</a></h4><p><code>-v</code> \u53C2\u6570</p><div class="language-bash"><pre><code><span class="token function">join</span> -v1 <span class="token number">1</span>.txt <span class="token number">2</span>.txt
<span class="token comment"># \u793A\u4F8B\u8F93\u51FA</span>
<span class="token number">13</span> Unknown

<span class="token function">join</span> -v2 <span class="token number">1</span>.txt <span class="token number">2</span>.txt
<span class="token comment"># \u793A\u4F8B\u8F93\u51FA</span>
<span class="token number">14</span> \u6545\u610F\u4E0D\u5BF9\u9F50\u7684\u5341\u56DB\u6708
</code></pre></div><h3 id="\u601D\u8003\u95EE\u9898" tabindex="-1">\u601D\u8003\u95EE\u9898 <a class="header-anchor" href="#\u601D\u8003\u95EE\u9898" aria-hidden="true">#</a></h3><p>sed\u548Cawk\u5982\u4F55\u5B9E\u73B0join\u529F\u80FD?</p>`,23),o=[p];function c(r,l,i,u,d,k){return s(),a("div",null,o)}var b=n(t,[["render",c]]);export{m as __pageData,b as default};
