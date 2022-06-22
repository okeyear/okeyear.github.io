import{_ as n,c as s,o as e,a}from"./app.3a9754ab.js";const h='{"title":"docker002 install \u5B89\u88C5\u548C\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5docker","slug":"\u5B89\u88C5docker"},{"level":3,"title":"docker\u5B98\u65B9\u811A\u672C\u5B89\u88C5","slug":"docker\u5B98\u65B9\u811A\u672C\u5B89\u88C5"},{"level":3,"title":"ubuntu\u5B89\u88C5","slug":"ubuntu\u5B89\u88C5"},{"level":3,"title":"centos\u5B89\u88C5","slug":"centos\u5B89\u88C5"},{"level":3,"title":"\u5F00\u673A\u81EA\u542F\u52A8","slug":"\u5F00\u673A\u81EA\u542F\u52A8"},{"level":3,"title":"\u5B89\u88C5docker-compose","slug":"\u5B89\u88C5docker-compose"},{"level":2,"title":"\u914D\u7F6Edocker\u670D\u52A1","slug":"\u914D\u7F6Edocker\u670D\u52A1"},{"level":3,"title":"\u975E\u7279\u6743\u8FD0\u884C","slug":"\u975E\u7279\u6743\u8FD0\u884C"},{"level":3,"title":"\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6","slug":"\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6"},{"level":3,"title":"\u4FEE\u6539DOCKER_OPTS","slug":"\u4FEE\u6539docker-opts"},{"level":3,"title":"\u955C\u50CF\u52A0\u901F\u5668","slug":"\u955C\u50CF\u52A0\u901F\u5668"},{"level":3,"title":"\u914D\u7F6Edocker cgroup\u9A71\u52A8systemd","slug":"\u914D\u7F6Edocker-cgroup\u9A71\u52A8systemd"},{"level":3,"title":"\u914D\u7F6Edocker\u4EE3\u7406","slug":"\u914D\u7F6Edocker\u4EE3\u7406"},{"level":2,"title":"\u7B2C\u4E00\u4E2A\u955C\u50CF","slug":"\u7B2C\u4E00\u4E2A\u955C\u50CF"}],"relativePath":"cloudnative/docker/docker-install.md"}',o={},t=a(`<h1 id="docker002-install-\u5B89\u88C5\u548C\u914D\u7F6E" tabindex="-1">docker002 install \u5B89\u88C5\u548C\u914D\u7F6E <a class="header-anchor" href="#docker002-install-\u5B89\u88C5\u548C\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u5B98\u65B9\u6587\u6863: <a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/install/</a></p><h2 id="\u5B89\u88C5docker" tabindex="-1">\u5B89\u88C5docker <a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a></h2><h3 id="docker\u5B98\u65B9\u811A\u672C\u5B89\u88C5" tabindex="-1">docker\u5B98\u65B9\u811A\u672C\u5B89\u88C5 <a class="header-anchor" href="#docker\u5B98\u65B9\u811A\u672C\u5B89\u88C5" aria-hidden="true">#</a></h3><p><a href="https://github.com/okeyear/scripts/blob/main/shell/install_docker.sh" target="_blank" rel="noopener noreferrer">https://github.com/okeyear/scripts/blob/main/shell/install_docker.sh</a></p><div class="language-bash"><pre><code><span class="token function">curl</span> -fsSL get.docker.com <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">sh</span> -

<span class="token function">curl</span> -fsSL get.docker.com -o get-docker.sh
<span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh --mirror Aliyun
<span class="token comment"># sudo sh get-docker.sh --mirror AzureChinaCloud</span>
</code></pre></div><h3 id="ubuntu\u5B89\u88C5" tabindex="-1">ubuntu\u5B89\u88C5 <a class="header-anchor" href="#ubuntu\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token comment"># step 1: \u5B89\u88C5\u5FC5\u8981\u7684\u4E00\u4E9B\u7CFB\u7EDF\u5DE5\u5177</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> software-properties-common
<span class="token comment"># step 2: \u5B89\u88C5GPG\u8BC1\u4E66</span>
<span class="token function">curl</span> -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token comment"># Step 3: \u5199\u5165\u8F6F\u4EF6\u6E90\u4FE1\u606F</span>
<span class="token function">sudo</span> add-apt-repository <span class="token string">&quot;deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu <span class="token variable"><span class="token variable">$(</span>lsb_release -cs<span class="token variable">)</span></span> stable&quot;</span>
<span class="token comment"># Step 4: \u66F4\u65B0\u5E76\u5B89\u88C5Docker-CE</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y update
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y <span class="token function">install</span> docker-ce

</code></pre></div><h3 id="centos\u5B89\u88C5" tabindex="-1">centos\u5B89\u88C5 <a class="header-anchor" href="#centos\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token comment"># https://download.docker.com/linux/centos/docker-ce.repo</span>
<span class="token comment"># step 1: \u5B89\u88C5\u5FC5\u8981\u7684\u4E00\u4E9B\u7CFB\u7EDF\u5DE5\u5177</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> -y yum-utils device-mapper-persistent-data lvm2
<span class="token comment"># Step 2: \u6DFB\u52A0\u8F6F\u4EF6\u6E90\u4FE1\u606F</span>
<span class="token function">sudo</span> yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token comment"># Step 3: \u66F4\u65B0\u5E76\u5B89\u88C5Docker-CE</span>
<span class="token function">sudo</span> yum makecache
<span class="token function">sudo</span> yum -y <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin
<span class="token comment"># Step 4: \u5F00\u542FDocker\u670D\u52A1</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> --now <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl status <span class="token function">docker</span>

<span class="token comment"># container-selinux</span>
<span class="token comment"># yum install -y http://mirror.centos.org/altarch/7/extras/aarch64/Packages/container-selinux-2.119.2-1.911c772.el7_8.noarch.rpm</span>
<span class="token comment"># yum install -y http://mirror.centos.org/centos/7/extras/x86_64/Packages/slirp4netns-0.4.3-4.el7_8.x86_64.rpm</span>
<span class="token comment"># yum install -y http://mirror.centos.org/centos/7/extras/x86_64/Packages/fuse-overlayfs-0.7.2-6.el7_8.x86_64.rpm</span>


<span class="token comment"># \u65B0\u7248\u672C\u4F1A\u81EA\u52A8\u89E3\u51B3\u4F9D\u8D56, \u4E0D\u9700\u8981\u4EE5\u4E0B\u90E8\u5206\u4E86</span>
<span class="token comment"># centos8\u9700\u8981\u989D\u5916\u7684\u4F9D\u8D56containerd.io</span>
<span class="token comment"># firefox https://download.docker.com/linux/fedora/35/x86_64/stable/Packages</span>
<span class="token comment"># fedora/35/\u4E0A\u7684\u6709\u95EE\u9898\uFF0C \u7EE7\u7EED\u4F7F\u7528fedora/31\u4E0A\u9762\u7684\u6700\u65B0\u7248\u672C</span>
<span class="token comment"># yum install https://download.docker.com/linux/fedora/35/x86_64/stable/Packages/containerd.io-1.4.12-3.1.fc35.x86_64.rpm</span>
<span class="token comment"># sudo yum install -y https://download.docker.com/linux/fedora/31/x86_64/stable/Packages/containerd.io-1.4.3-3.1.fc31.x86_64.rpm</span>

</code></pre></div><h3 id="\u5F00\u673A\u81EA\u542F\u52A8" tabindex="-1">\u5F00\u673A\u81EA\u542F\u52A8 <a class="header-anchor" href="#\u5F00\u673A\u81EA\u542F\u52A8" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code>systemctl start <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
systemctl is-enabled <span class="token function">docker</span>
<span class="token function">docker</span> version
</code></pre></div><h3 id="\u5B89\u88C5docker-compose" tabindex="-1">\u5B89\u88C5docker-compose <a class="header-anchor" href="#\u5B89\u88C5docker-compose" aria-hidden="true">#</a></h3><p><a href="https://docs.docker.com/compose/install/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/compose/install/</a></p><div class="language-bash"><pre><code><span class="token function">curl</span> https://raw.githubusercontent.com/okeyear/scripts/main/shell/install_docker_compose.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">sh</span> -
<span class="token comment"># https://github.com/okeyear/scripts/blob/main/shell/install_docker_compose.sh</span>

<span class="token comment"># or</span>
pip3 <span class="token function">install</span> <span class="token function">docker-compose</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=/usr/local/bin:$PATH&#39;</span> <span class="token operator">|</span> 
    <span class="token function">tee</span> /etc/profile.d/localbin.sh
<span class="token builtin class-name">source</span> /etc/profile.d/localbin.sh
<span class="token comment"># /usr/local/bin/docker-compose --version</span>

</code></pre></div><h2 id="\u914D\u7F6Edocker\u670D\u52A1" tabindex="-1">\u914D\u7F6Edocker\u670D\u52A1 <a class="header-anchor" href="#\u914D\u7F6Edocker\u670D\u52A1" aria-hidden="true">#</a></h2><h3 id="\u975E\u7279\u6743\u8FD0\u884C" tabindex="-1">\u975E\u7279\u6743\u8FD0\u884C <a class="header-anchor" href="#\u975E\u7279\u6743\u8FD0\u884C" aria-hidden="true">#</a></h3><p>\u628A\u5F53\u524D\u7528\u6237\u52A0\u5165docker\u7EC4</p><div class="language-bash"><pre><code><span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">docker</span> <span class="token environment constant">$USER</span>
<span class="token comment"># \u5982\u679C\u5DF2\u7ECFsudo\u5230root,\u8BF7\u6267\u884C\u5982\u4E0B</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">docker</span> <span class="token variable">$SUDO_USER</span>
</code></pre></div><h3 id="\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>Centos\u7CFB\u7EDF\u7684\u914D\u7F6E /etc/sysconfig/docker Ubuntu\u7CFB\u7EDF\u7684\u914D\u7F6E /etc/default/docker</p><h3 id="\u4FEE\u6539docker-opts" tabindex="-1">\u4FEE\u6539DOCKER_OPTS <a class="header-anchor" href="#\u4FEE\u6539docker-opts" aria-hidden="true">#</a></h3><ul><li>\u76D1\u542C\u5730\u5740,\u5141\u8BB8\u672C\u57302375\u7AEF\u53E3\u63A5\u6536\u8FDC\u7A0B\u8FDE\u63A5 <a href="https://docs.docker.com/engine/reference/commandline/dockerd/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/engine/reference/commandline/dockerd/</a> \u4E00\u822C\u9700\u8981\u914D\u5408CA\u8BC1\u4E66\u6216\u8005ssh\u96A7\u9053\u52A0\u5BC6\u4F7F\u7528, \u522B\u76F4\u63A5\u66B4\u6F0F2375\u7AEF\u53E3</li></ul><div class="language-Plain Text"><pre><code>DOCKER_OPTS=&quot;$DOCKER_OPTS -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock&quot;
</code></pre></div><ul><li>\u914D\u7F6E\u6587\u4EF6json\u5219\u662F:</li></ul><div class="language-Plain Text"><pre><code>&quot;hosts&quot;: [&quot;unix:///var/run/docker.sock&quot;,&quot;tcp://0.0.0.0:2375&quot;]
</code></pre></div><ul><li>\u975E\u5B98\u65B9\u4ED3\u5E93\u7684\u4FE1\u4EFB \u7F16\u8F91docker\u914D\u7F6E\u6587\u4EF6\uFF0C\u52A0\u5165</li></ul><div class="language-Plain Text"><pre><code>DOCKER_OPTS=&#39;--insecure-registry dl.dockerpool.com:5000&#39;
</code></pre></div><h3 id="\u955C\u50CF\u52A0\u901F\u5668" tabindex="-1">\u955C\u50CF\u52A0\u901F\u5668 <a class="header-anchor" href="#\u955C\u50CF\u52A0\u901F\u5668" aria-hidden="true">#</a></h3><p>docker\u5B98\u65B9\u4E2D\u56FD\u533A <a href="https://registry.docker-cn.com/" target="_blank" rel="noopener noreferrer">https://registry.docker-cn.com</a>\u7F51\u6613 <a href="http://hub-mirror.c.163.com/" target="_blank" rel="noopener noreferrer">http://hub-mirror.c.163.com</a>ustc <a href="http://docker.mirrors.ustc.edu.cn/" target="_blank" rel="noopener noreferrer">http://docker.mirrors.ustc.edu.cn</a>\u963F\u91CC\u4E91 http://&lt;\u4F60\u7684ID&gt;.mirror.aliyuncs.com</p><ul><li>\u5B98\u65B9 &quot;<a href="https://registry.docker-cn.com%26quot%3B/" target="_blank" rel="noopener noreferrer">https://registry.docker-cn.com&quot;</a></li><li>\u963F\u91CC\u4E91 \u5BB9\u5668\u955C\u50CF\u670D\u52A1--\u955C\u50CF\u4E2D\u5FC3--\u955C\u50CF\u52A0\u901F\u5668 <a href="https://xc8hlpxv.mirror.aliyuncs.com/" target="_blank" rel="noopener noreferrer">https://xc8hlpxv.mirror.aliyuncs.com</a>\u60A8\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539daemon\u914D\u7F6E\u6587\u4EF6/etc/docker/daemon.json\u6765\u4F7F\u7528\u52A0\u901F\u5668</li></ul><div class="language-bash"><pre><code><span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">docker</span> <span class="token environment constant">$USER</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">docker</span> <span class="token environment constant">$USER</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [
    &quot;http://hub-mirror.c.163.com&quot;,
    &quot;https://registry.docker-cn.com&quot;,
    &quot;https://xc8hlpxv.mirror.aliyuncs.com&quot;,
    &quot;http://f1361db2.m.daocloud.io&quot;
  ],
  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],
  &quot;log-driver&quot;: &quot;json-file&quot;,
  &quot;log-opts&quot;: {
    &quot;max-size&quot;: &quot;100m&quot;
  }
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> --now <span class="token function">docker</span>
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>

<span class="token comment"># \u67E5\u770B\u914D\u7F6E\u7684\u52A0\u901F\u5668\u751F\u6548</span>
<span class="token function">docker</span> info
</code></pre></div><ul><li>daocloud <a href="https://www.daocloud.io/mirror" target="_blank" rel="noopener noreferrer">https://www.daocloud.io/mirror</a></li></ul><div class="language-bash"><pre><code><span class="token function">curl</span> -sSL https://get.daocloud.io/daotools/set_mirror.sh <span class="token operator">|</span> <span class="token function">sh</span> -s http://f1361db2.m.daocloud.io
</code></pre></div><p>\u8BE5\u811A\u672C\u53EF\u4EE5\u5C06 --registry-mirror \u52A0\u5165\u5230\u4F60\u7684 Docker \u914D\u7F6E\u6587\u4EF6 /etc/docker/daemon.json \u4E2D\u3002\u9002\u7528\u4E8E Ubuntu14.04\u3001Debian\u3001CentOS6 \u3001CentOS7\u3001Fedora\u3001Arch Linux\u3001openSUSE Leap 42.1</p><h3 id="\u914D\u7F6Edocker-cgroup\u9A71\u52A8systemd" tabindex="-1">\u914D\u7F6Edocker cgroup\u9A71\u52A8systemd <a class="header-anchor" href="#\u914D\u7F6Edocker-cgroup\u9A71\u52A8systemd" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token comment"># \u67E5\u770B</span>
<span class="token function">docker</span> info <span class="token operator">|</span><span class="token function">grep</span> Cgroup

<span class="token comment"># 1. /etc/docker/daemon.json</span>
<span class="token string">&quot;exec-opts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;native.cgroupdriver=systemd&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># 2.</span>
/usr/lib/systemd/system/docker.service
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/dockerd -H fd:// --containerd<span class="token operator">=</span>/run/containerd/containerd.sock --exec-opt native.cgroupdriver<span class="token operator">=</span>systemd
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre></div><h3 id="\u914D\u7F6Edocker\u4EE3\u7406" tabindex="-1">\u914D\u7F6Edocker\u4EE3\u7406 <a class="header-anchor" href="#\u914D\u7F6Edocker\u4EE3\u7406" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token assign-left variable">HTTP_PROXY</span><span class="token operator">=</span>http://1.1.1.1:3128
<span class="token comment"># HTTP_PROXY=http://172.17.1.250:3128</span>
<span class="token function">mkdir</span> /etc/systemd/system/docker.service.d
<span class="token function">tee</span> /etc/systemd/system/docker.service.d/http-proxy.conf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
[Service]
Environment=&quot;HTTP_PROXY=<span class="token variable">$HTTP_PROXY</span>&quot;
Environment=&quot;HTTPS_PROXY=<span class="token variable">$HTTP_PROXY</span>&quot;
EOF</span>

systemctl daemon-reload
<span class="token comment"># \u9A8C\u8BC1\u914D\u7F6E</span>
systemctl show --property Environment <span class="token function">docker</span>
<span class="token comment"># \u91CD\u542Fdocker</span>
systemctl restart <span class="token function">docker</span>

</code></pre></div><h2 id="\u7B2C\u4E00\u4E2A\u955C\u50CF" tabindex="-1">\u7B2C\u4E00\u4E2A\u955C\u50CF <a class="header-anchor" href="#\u7B2C\u4E00\u4E2A\u955C\u50CF" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">docker</span> run hello-world

</code></pre></div>`,41),c=[t];function r(p,l,i,d,u,k){return e(),s("div",null,c)}var f=n(o,[["render",r]]);export{h as __pageData,f as default};
