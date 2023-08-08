import{_ as s,o as a,c as n,R as l}from"./chunks/framework.0a8b4614.js";const F=JSON.parse('{"title":"linux join命令","description":"","frontmatter":{},"headers":[],"relativePath":"linux/command/jjj/join.md","filePath":"linux/command/jjj/join.md","lastUpdated":1655473036000}'),p={name:"linux/command/jjj/join.md"},o=l(`<h1 id="linux-join命令" tabindex="-1">linux join命令 <a class="header-anchor" href="#linux-join命令" aria-label="Permalink to &quot;linux join命令&quot;">​</a></h1><p>类似数据库中的表join, 左连接, 右链接, 左右都显示的连接</p><ul><li>只能join两个文件</li><li>主键列必须是排序好的</li></ul><p>格式:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Usage:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">join</span><span style="color:#A6ACCD;"> [OPTION]... FILE1 FILE2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># The default join field is the first, delimited by blanks.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 默认以第一列作为Join字段, 以空格分割字段</span></span>
<span class="line"><span style="color:#FFCB6B;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">指定分隔符</span></span>
<span class="line"><span style="color:#FFCB6B;">-a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">后面跟上文件编号,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">比如-a1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a2</span></span>
<span class="line"><span style="color:#FFCB6B;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">忽略大小写</span></span>
<span class="line"><span style="color:#FFCB6B;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">后面跟上输出的字段,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">比如1.1第一个文件的第一列,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">表示第二个文件的第三列</span></span>
<span class="line"><span style="color:#FFCB6B;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">把输出字段中没有的空白,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">替换成指定的字符</span></span>
<span class="line"><span style="color:#FFCB6B;">-j</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">指定某一列作为join的主键列,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">比如</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-jx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">等于</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-1x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-2x,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">也就是指定两个文件的x列作为主列</span></span>
<span class="line"><span style="color:#FFCB6B;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">其中-v1是</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">左边有但右边没有的,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v2是右边有但是左边没有的</span></span></code></pre></div><h3 id="基本示例" tabindex="-1">基本示例 <a class="header-anchor" href="#基本示例" aria-label="Permalink to &quot;基本示例&quot;">​</a></h3><p><strong>准备数据</strong>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tee</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#89DDFF;">EOF</span></span>
<span class="line"><span style="color:#C3E88D;">1 January</span></span>
<span class="line"><span style="color:#C3E88D;">2 February</span></span>
<span class="line"><span style="color:#C3E88D;">3 March</span></span>
<span class="line"><span style="color:#C3E88D;">13 Unknown</span></span>
<span class="line"><span style="color:#89DDFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">tee</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#89DDFF;">EOF</span></span>
<span class="line"><span style="color:#C3E88D;">1       一月</span></span>
<span class="line"><span style="color:#C3E88D;">2       二月</span></span>
<span class="line"><span style="color:#C3E88D;">3       三月</span></span>
<span class="line"><span style="color:#C3E88D;">14 故意不对齐的十四月</span></span>
<span class="line"><span style="color:#89DDFF;">EOF</span></span></code></pre></div><h4 id="交集" tabindex="-1">交集 <a class="header-anchor" href="#交集" aria-label="Permalink to &quot;交集&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">join</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例输出</span></span>
<span class="line"><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">January</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">一月</span></span>
<span class="line"><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">February</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">二月</span></span>
<span class="line"><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">March</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">三月</span></span></code></pre></div><h4 id="left-join" tabindex="-1">left join <a class="header-anchor" href="#left-join" aria-label="Permalink to &quot;left join&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">join</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例输出</span></span>
<span class="line"><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">January</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">一月</span></span>
<span class="line"><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">February</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">二月</span></span>
<span class="line"><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">March</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">三月</span></span>
<span class="line"><span style="color:#FFCB6B;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Unknown</span></span></code></pre></div><h4 id="right-join" tabindex="-1">right join <a class="header-anchor" href="#right-join" aria-label="Permalink to &quot;right join&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">join</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例输出</span></span>
<span class="line"><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">January</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">一月</span></span>
<span class="line"><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">February</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">二月</span></span>
<span class="line"><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">March</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">三月</span></span>
<span class="line"><span style="color:#FFCB6B;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">故意不对齐的十四月</span></span></code></pre></div><h4 id="左右全都要的join" tabindex="-1">左右全都要的join <a class="header-anchor" href="#左右全都要的join" aria-label="Permalink to &quot;左右全都要的join&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">join</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例输出</span></span>
<span class="line"><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">January</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">一月</span></span>
<span class="line"><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">February</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">二月</span></span>
<span class="line"><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">March</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">三月</span></span>
<span class="line"><span style="color:#FFCB6B;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Unknown</span></span>
<span class="line"><span style="color:#FFCB6B;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">故意不对齐的十四月</span></span></code></pre></div><p>以上输出不知道来自文件1还是文件2, 因此如下</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">join</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.1 1.2 2.1 2.2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例输出</span></span>
<span class="line"><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">January</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">一月</span></span>
<span class="line"><span style="color:#FFCB6B;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">February</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">二月</span></span>
<span class="line"><span style="color:#FFCB6B;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">March</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">三月</span></span>
<span class="line"><span style="color:#FFCB6B;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Unknown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span>
<span class="line"><span style="color:#FFCB6B;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">故意不对齐的十四月</span></span></code></pre></div><h4 id="一边有-另一边没有的" tabindex="-1">一边有,另一边没有的 <a class="header-anchor" href="#一边有-另一边没有的" aria-label="Permalink to &quot;一边有,另一边没有的&quot;">​</a></h4><p><code>-v</code> 参数</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">join</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例输出</span></span>
<span class="line"><span style="color:#FFCB6B;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Unknown</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">join</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#C3E88D;">.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#C3E88D;">.txt</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 示例输出</span></span>
<span class="line"><span style="color:#FFCB6B;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">故意不对齐的十四月</span></span></code></pre></div><h3 id="思考问题" tabindex="-1">思考问题 <a class="header-anchor" href="#思考问题" aria-label="Permalink to &quot;思考问题&quot;">​</a></h3><p>sed和awk如何实现join功能?</p>`,23),e=[o];function t(c,C,r,y,i,D){return a(),n("div",null,e)}const E=s(p,[["render",t]]);export{F as __pageData,E as default};
