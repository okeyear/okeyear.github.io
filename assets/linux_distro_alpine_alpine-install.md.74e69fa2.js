import{_ as n,c as s,o as a,a as t}from"./app.3a9754ab.js";const h='{"title":"1","description":"","frontmatter":{},"headers":[],"relativePath":"linux/distro/alpine/alpine-install.md"}',p={},o=t(`<h1 id="_1" tabindex="-1">1 <a class="header-anchor" href="#_1" aria-hidden="true">#</a></h1><div class="language-shell"><pre><code>localhost login: root     <span class="token comment"># need input root , no need password</span>
<span class="token punctuation">..</span>.
localhost:~<span class="token comment"># setup-alpine   # begin install on local disk</span>
Select keyborard layout <span class="token punctuation">[</span>none<span class="token punctuation">]</span>: cn   <span class="token comment"># china</span>
Select variant <span class="token punctuation">[</span><span class="token punctuation">]</span>: cn    <span class="token comment"># cn</span>
<span class="token punctuation">..</span>.
Enter system <span class="token function">hostname</span> <span class="token punctuation">(</span>short form ,e.g. <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>localhost<span class="token punctuation">]</span>: alpine <span class="token comment">#  hostname , short form</span>
Which one <span class="token keyword">do</span> you want to initialize ? <span class="token punctuation">(</span>or <span class="token string">&#39;?&#39;</span> or <span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>eth0<span class="token punctuation">]</span>  eth0 <span class="token comment"># press Enter</span>
Ip address <span class="token keyword">for</span> eth0 ? <span class="token punctuation">(</span>or <span class="token string">&#39;dhcp&#39;</span>, <span class="token string">&#39;none&#39;</span> , <span class="token string">&#39;?&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">[</span>dhcp<span class="token punctuation">]</span> none <span class="token comment">#  config ip</span>
Do you want to <span class="token keyword">do</span> any manual network configuration? <span class="token punctuation">[</span>no<span class="token punctuation">]</span> <span class="token function">yes</span> <span class="token comment"># or no , if yes , add &quot;address= ... netmask= ... gateway= ...&quot;</span>
DNS domain name? <span class="token punctuation">(</span>e.g. <span class="token string">&#39;bar.com&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> example.com <span class="token comment"># domain name</span>
DNS nameserver<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token number">127.0</span>.0.1 <span class="token comment"># </span>
Change password <span class="token keyword">for</span> root
New password <span class="token builtin class-name">:</span>    ChangeMe  <span class="token comment"># root&#39;s password</span>
Retype password: ChangeMe  <span class="token comment"># input again</span>
Which timezone are your <span class="token keyword">in</span> ? <span class="token punctuation">(</span><span class="token string">&#39;?&#39;</span> <span class="token keyword">for</span> list<span class="token punctuation">)</span> <span class="token punctuation">[</span>UTC<span class="token punctuation">]</span> Asia/Shanghai <span class="token comment"># timezone</span>
<span class="token comment">#What sub-timezone of &#39;Asia&#39; are you in ? ( &#39;?&#39; for list)  Shanghai # </span>
<span class="token punctuation">..</span>.
HTTP/FTP proxy URL? <span class="token punctuation">(</span>e.g. <span class="token string">&#39;http://proxy:8080&#39;</span>, or <span class="token string">&#39;none&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>none<span class="token punctuation">]</span> <span class="token comment"># http://xxx:8080</span>
Which NTP client to run? <span class="token punctuation">(</span><span class="token string">&#39;busybox&#39;</span>, <span class="token string">&#39;openntpd&#39;</span>, <span class="token string">&#39;chrony&#39;</span> or <span class="token string">&#39;none&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>chrony<span class="token punctuation">]</span> chrony <span class="token comment">#or press Enter</span>
<span class="token punctuation">..</span>.
Enter mirror number <span class="token punctuation">(</span><span class="token number">1</span>-0<span class="token punctuation">)</span> or URL to <span class="token function">add</span> <span class="token punctuation">(</span>or r/f/e/done<span class="token punctuation">)</span> <span class="token punctuation">[</span>f<span class="token punctuation">]</span>: f <span class="token comment">#or press Enter</span>
Which SSH server? <span class="token punctuation">(</span><span class="token string">&#39;openssh&#39;</span>, <span class="token string">&#39;dropbear&#39;</span>, <span class="token string">&#39;none&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>openssh<span class="token punctuation">]</span> openssh <span class="token comment">#or press Enter</span>
<span class="token punctuation">..</span>.
Which disk<span class="token punctuation">(</span>s<span class="token punctuation">)</span> would you like to use ? <span class="token punctuation">(</span> or <span class="token string">&#39;?&#39;</span> <span class="token keyword">for</span> <span class="token builtin class-name">help</span> or <span class="token string">&#39;none&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span>none<span class="token punctuation">]</span> sda <span class="token comment"># disk</span>
How would you like to use it ? <span class="token punctuation">(</span><span class="token string">&#39;sys&#39;</span>, <span class="token string">&#39;data&#39;</span>, <span class="token string">&#39;lvm&#39;</span>, or <span class="token string">&#39;?&#39;</span> <span class="token keyword">for</span> <span class="token builtin class-name">help</span> <span class="token punctuation">)</span> <span class="token punctuation">[</span>?<span class="token punctuation">]</span> lvm <span class="token comment"># lvm </span>
How would you like to use it ? <span class="token punctuation">(</span><span class="token string">&#39;sys&#39;</span>, <span class="token string">&#39;data&#39;</span> or <span class="token string">&#39;?&#39;</span> <span class="token keyword">for</span> <span class="token builtin class-name">help</span> <span class="token punctuation">)</span> <span class="token punctuation">[</span>?<span class="token punctuation">]</span> sys <span class="token comment"># for os</span>
<span class="token punctuation">..</span>.
WARNING: Erase the above disk<span class="token punctuation">(</span>s<span class="token punctuation">)</span> and <span class="token builtin class-name">continue</span> ? <span class="token punctuation">[</span>y/N<span class="token punctuation">]</span> y <span class="token comment"># format disk</span>
<span class="token punctuation">..</span>.
<span class="token comment"># reboot</span>
</code></pre></div>`,2),e=[o];function c(l,u,i,k,r,m){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
