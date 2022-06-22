import{_ as n,c as s,o as a,a as e}from"./app.3a9754ab.js";const h='{"title":"docker009 Compose\u8BE6\u89E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u547D\u4EE4","slug":"\u547D\u4EE4"},{"level":2,"title":"\u6307\u4EE4","slug":"\u6307\u4EE4"},{"level":3,"title":"\u73AF\u5883\u53D8\u91CF","slug":"\u73AF\u5883\u53D8\u91CF"},{"level":3,"title":"\u6A21\u677F\u6587\u4EF6","slug":"\u6A21\u677F\u6587\u4EF6"},{"level":3,"title":"compose\u4F7F\u7528","slug":"compose\u4F7F\u7528"}],"relativePath":"cloudnative/docker/docker-compose.md"}',t={},o=e(`<h1 id="docker009-compose\u8BE6\u89E3" tabindex="-1">docker009 Compose\u8BE6\u89E3 <a class="header-anchor" href="#docker009-compose\u8BE6\u89E3" aria-hidden="true">#</a></h1><p>\u5B98\u65B9\u6587\u6863\uFF1A <a href="https://docs.docker.com/compose/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/compose/</a></p><p>Github\u5730\u5740\uFF1A <a href="https://github.com/docker/compose" target="_blank" rel="noopener noreferrer">https://github.com/docker/compose</a></p><p>docker p255</p><p><a href="https://blog.51cto.com/9291927/2310444" target="_blank" rel="noopener noreferrer">https://blog.51cto.com/9291927/2310444</a></p><p>\u901A\u8FC7\u4E00\u4E2A\u5355\u72EC\u7684docker-compose.yml\u6A21\u677F\u6587\u4EF6(YAML\u683C\u5F0F)\u6765\u5B9A\u4E49\u4E00\u7EC4\u76F8\u5173\u8054\u7684\u5E94\u7528\u5BB9\u5668\u4E3A\u4E00\u4E2A\u9879\u76EE(project) <strong>Compose \u4E2D\u6709\u4E24\u4E2A\u91CD\u8981\u7684\u6982\u5FF5</strong>\uFF1A</p><ul><li>\u670D\u52A1(service):\u4E00\u4E2A\u5E94\u7528\u7684\u5BB9\u5668\uFF0C\u5B9E\u9645\u4E0A\u53EF\u4EE5\u5305\u62EC\u82E5\u5E72\u8FD0\u884C\u76F8\u540C\u955C\u50CF\u7684\u5BB9\u5668\u5B9E\u4F8B</li><li>\u9879\u76EE(project):\u7531\u4E00\u7EC4\u5173\u8054\u7684\u5E94\u7528\u5BB9\u5668\u7EC4\u6210\u7684\u4E00\u4E2A\u5B8C\u6574\u4E1A\u52A1\u5355\u5143\uFF0C\u5728docker-compose.yml\u4E2D\u5B9A\u4E49 Compose \u9879\u76EE\u662F\u7531Python\u7F16\u5199\u7684\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u8C03\u7528\u4E86Docker\u670D\u52A1\u63D0\u4F9B\u7684API\u6765\u5BF9\u5BB9\u5668\u8FDB\u884C\u7BA1\u7406\uFF0C\u56E0\u6B64\uFF0C\u53EA\u8981\u6240\u5728\u7684\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5E73\u53F0\u652F\u6301Docker API\uFF0C\u5C31\u53EF\u4EE5\u5728\u5176\u4E0A\u5229\u7528Compose\u6765\u8FDB\u884C\u7F16\u6392\u7BA1\u7406.</li></ul><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p><a href="https://docs.docker.com/compose/install/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/compose/install/</a></p><div class="language-bash"><pre><code><span class="token comment"># \u65B9\u5F0F1 github\u4E8C\u8FDB\u5236\u65B9\u5F0F\u5B89\u88C5</span>
<span class="token comment"># https://github.com/okeyear/scripts/blob/main/shell/install_docker_compose.sh</span>
<span class="token function">curl</span> https://raw.githubusercontent.com/okeyear/scripts/main/shell/install_docker_compose.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">sh</span> -

<span class="token comment"># \u65B9\u5F0F2 pip\u5B89\u88C5</span>
pip3 <span class="token function">install</span> <span class="token function">docker-compose</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;export PATH=/usr/local/bin:$PATH&#39;</span> <span class="token operator">|</span> 
    <span class="token function">tee</span> /etc/profile.d/localbin.sh
<span class="token builtin class-name">source</span> /etc/profile.d/localbin.sh
<span class="token comment"># /usr/local/bin/docker-compose --version</span>
</code></pre></div><h2 id="\u547D\u4EE4" tabindex="-1">\u547D\u4EE4 <a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a></h2><p><a href="https://docs.docker.com/compose/reference/build/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/compose/reference/build/</a></p><div class="language-bash"><pre><code>Compose \u5927\u90E8\u5206\u547D\u4EE4\u7684\u5BF9\u8C61\u5373\u53EF\u4EE5\u662F\u9879\u76EE\u7684\u672C\u8EAB\uFF0C\u4E5F\u53EF\u4EE5\u662F\u6307\u5B9A\u4E3A\u9879\u76EE\u4E2D\u7684\u670D\u52A1\u6216\u8005\u5BB9\u5668
\u6267\u884Cdocker-compose <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> --help \u6216\u8005docker-compose <span class="token builtin class-name">help</span> <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span>\u53EF\u4EE5\u67E5\u770B\u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F
\u5177\u4F53\u7684\u4F7F\u7528\u683C\u5F0F
<span class="token function">docker-compose</span> <span class="token punctuation">[</span>-f<span class="token operator">=</span><span class="token operator">&lt;</span>arg<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARGS<span class="token punctuation">]</span>
\u53C2\u6570\u9009\u9879
-f,--file file\u6307\u5B9A\u6A21\u677F\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u662Fdocker-compose.yml\u6A21\u677F\u6587\u4EF6,\u53EF\u4EE5\u591A\u6B21\u6307\u5B9A
-p,--project-name name\u6307\u5B9A\u9879\u76EE\u540D\u79F0\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u6240\u5728\u76EE\u5F55\u540D\u79F0\u4F5C\u4E3A\u9879\u76EE\u540D\u79F0
--x-networking \u4F7F\u7528Docker\u7684\u540E\u7AEF\u53EF\u63D2\u62D4\u7F51\u7EDC\u7279\u6027
--x-networking-driver driver\u6307\u5B9A\u7F51\u7EDC\u7684\u540E\u7AEF\u9A71\u52A8\uFF0C\u9ED8\u8BA4\u4F7F\u7528bridge
--verbose \u8F93\u5165\u66F4\u591A\u7684\u8C03\u8BD5\u4FE1\u606F
-v,--version \u8F93\u51FA\u7248\u672C\u4FE1\u606F


Compose\u6240\u652F\u6301\u7684\u547D\u4EE4
build              Build or rebuild services <span class="token punctuation">(</span>\u6784\u5EFA\u9879\u76EE\u4E2D\u7684\u670D\u52A1\u5BB9\u5668<span class="token punctuation">)</span>
bundle             Generate a Docker bundle from the Compose <span class="token function">file</span> <span class="token punctuation">(</span>\u4ECECompose\u6587\u4EF6\u751F\u6210\u5206\u5E03\u5F0F\u5E94\u7528\u7A0B\u5E8F\u5305<span class="token punctuation">)</span>
config             Validate and view the Compose <span class="token function">file</span> <span class="token punctuation">(</span>\u9A8C\u8BC1\u5E76\u67E5\u770BCompose\u6587\u4EF6<span class="token punctuation">)</span>
create             Create services <span class="token punctuation">(</span>\u4E3A\u670D\u52A1\u521B\u5EFA\u5BB9\u5668<span class="token punctuation">)</span>
down               Stop and remove containers, networks, images, and volumes <span class="token punctuation">(</span>\u505C\u6B62\u5BB9\u5668\u5E76\u5220\u9664\u7531\u5176\u521B\u5EFA\u7684\u5BB9\u5668\uFF0C\u7F51\u7EDC\uFF0C\u5377\u548C\u56FE\u50CFup<span class="token punctuation">)</span>
events             Receive real <span class="token function">time</span> events from containers <span class="token punctuation">(</span>\u4E3A\u9879\u76EE\u4E2D\u7684\u6BCF\u4E2A\u5BB9\u5668\u6D41\u5F0F\u4F20\u8F93\u5BB9\u5668\u4E8B\u4EF6<span class="token punctuation">)</span>
<span class="token builtin class-name">exec</span>               Execute a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> a running container <span class="token punctuation">(</span>\u8FD9\u76F8\u5F53\u4E8Edocker exec\u3002\u4F7F\u7528\u6B64\u5B50\u547D\u4EE4\uFF0C\u60A8\u53EF\u4EE5\u5728\u670D\u52A1\u4E2D\u8FD0\u884C\u4EFB\u610F\u547D\u4EE4\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u547D\u4EE4\u5206\u914DTTY\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4docker-compose <span class="token builtin class-name">exec</span> web sh\u6765\u83B7\u53D6\u4EA4\u4E92\u5F0F\u63D0\u793A\u3002<span class="token punctuation">)</span>
<span class="token builtin class-name">help</span>               Get <span class="token builtin class-name">help</span> on a <span class="token builtin class-name">command</span> <span class="token punctuation">(</span>\u83B7\u5F97\u4E00\u4E2A\u547D\u4EE4\u7684\u5E2E\u52A9<span class="token punctuation">)</span>
images             List images <span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">kill</span>               Kill containers <span class="token punctuation">(</span>\u901A\u8FC7\u53D1\u9001SIGKILL\u4FE1\u53F7\u6765\u5F3A\u5236\u505C\u6B62\u670D\u52A1\u5BB9\u5668<span class="token punctuation">)</span>
logs               View output from containers <span class="token punctuation">(</span>\u67E5\u770B\u670D\u52A1\u5BB9\u5668\u7684\u8F93\u51FA<span class="token punctuation">)</span>
pause              Pause services <span class="token punctuation">(</span>\u6682\u505C\u4E00\u4E2A\u5BB9\u5668<span class="token punctuation">)</span>
port               Print the public port <span class="token keyword">for</span> a port binding <span class="token punctuation">(</span>\u6253\u5370\u67D0\u4E2A\u5BB9\u5668\u7AEF\u53E3\u6240\u6620\u5C04\u7684\u516C\u5171\u7AEF\u53E3<span class="token punctuation">)</span>
<span class="token function">ps</span>                 List containers <span class="token punctuation">(</span>\u5217\u51FA\u9879\u76EE\u4E2D\u76EE\u524D\u6240\u6709\u7684\u5BB9\u5668<span class="token punctuation">)</span>
pull               Pull <span class="token function">service</span> images <span class="token punctuation">(</span>\u62C9\u53D6\u670D\u52A1\u4F9D\u8D56\u955C\u50CF<span class="token punctuation">)</span>
push               Push <span class="token function">service</span> images <span class="token punctuation">(</span>\u63A8\u9001\u670D\u52A1\u955C\u50CF<span class="token punctuation">)</span>
restart            Restart services <span class="token punctuation">(</span>\u91CD\u542F\u9879\u76EE\u4E2D\u7684\u670D\u52A1<span class="token punctuation">)</span>
<span class="token function">rm</span>                 Remove stopped containers <span class="token punctuation">(</span>\u5220\u9664\u6240\u6709\u505C\u6B62\u72B6\u6001\u7684\u670D\u52A1\u5BB9\u5668<span class="token punctuation">)</span>
run                Run a one-off <span class="token builtin class-name">command</span> <span class="token punctuation">(</span>\u5728\u6307\u5B9A\u670D\u52A1\u4E0A\u6267\u884C\u4E00\u4E2A\u547D\u4EE4<span class="token punctuation">)</span>
scale              Set number of containers <span class="token keyword">for</span> a <span class="token function">service</span> <span class="token punctuation">(</span>\u8BBE\u7F6E\u6307\u5B9A\u670D\u52A1\u6267\u884C\u7684\u5BB9\u5668\u4E2A\u6570<span class="token punctuation">)</span>
start              Start services <span class="token punctuation">(</span>\u542F\u52A8\u5DF2\u5B58\u5728\u7684\u670D\u52A1\u5BB9\u5668<span class="token punctuation">)</span>
stop               Stop services <span class="token punctuation">(</span>\u505C\u6B62\u5DF2\u5B58\u5728\u7684\u670D\u52A1\u5BB9\u5668<span class="token punctuation">)</span>
<span class="token function">top</span>                Display the running processes <span class="token punctuation">(</span>\u663E\u793A\u5BB9\u5668\u6B63\u5728\u8FD0\u884C\u7684\u8FDB\u7A0B<span class="token punctuation">)</span>
unpause            Unpause services <span class="token punctuation">(</span>\u6062\u590D\u5904\u4E8E\u6682\u505C\u72B6\u6001\u7684\u5BB9\u5668<span class="token punctuation">)</span>
up                 Create and start containers <span class="token punctuation">(</span>\u81EA\u52A8\u5B8C\u6210\u5305\u62EC\u6784\u5EFA\u955C\u50CF\u3001\u521B\u5EFA\u670D\u52A1\u3001\u542F\u52A8\u670D\u52A1\u5E76\u5173\u8054\u670D\u52A1\u76F8\u5173\u5BB9\u5668\u7684\u4E00\u7CFB\u5217\u64CD\u4F5C<span class="token punctuation">)</span>
version            Show the Docker-Compose version information <span class="token punctuation">(</span>\u8F93\u51FA\u7248\u672C<span class="token punctuation">)</span>

</code></pre></div><h4 id="_1-build" tabindex="-1">1. build <a class="header-anchor" href="#_1-build" aria-hidden="true">#</a></h4><h4 id="_2-help" tabindex="-1">2. help <a class="header-anchor" href="#_2-help" aria-hidden="true">#</a></h4><h4 id="_3-kill" tabindex="-1">3. kill <a class="header-anchor" href="#_3-kill" aria-hidden="true">#</a></h4><h4 id="_4-logs" tabindex="-1">4. logs <a class="header-anchor" href="#_4-logs" aria-hidden="true">#</a></h4><h4 id="_5-pause" tabindex="-1">5. pause <a class="header-anchor" href="#_5-pause" aria-hidden="true">#</a></h4><h4 id="_6-port" tabindex="-1">6. port <a class="header-anchor" href="#_6-port" aria-hidden="true">#</a></h4><h4 id="_7-ps" tabindex="-1">7. ps <a class="header-anchor" href="#_7-ps" aria-hidden="true">#</a></h4><h4 id="_8-pull" tabindex="-1">8. pull <a class="header-anchor" href="#_8-pull" aria-hidden="true">#</a></h4><h4 id="_9-restart" tabindex="-1">9. restart <a class="header-anchor" href="#_9-restart" aria-hidden="true">#</a></h4><h4 id="_10-rm" tabindex="-1">10. rm <a class="header-anchor" href="#_10-rm" aria-hidden="true">#</a></h4><h4 id="_11-run" tabindex="-1">11. run <a class="header-anchor" href="#_11-run" aria-hidden="true">#</a></h4><h4 id="_12-scale" tabindex="-1">12. scale <a class="header-anchor" href="#_12-scale" aria-hidden="true">#</a></h4><h4 id="_13-start" tabindex="-1">13. start <a class="header-anchor" href="#_13-start" aria-hidden="true">#</a></h4><h4 id="_14-stop" tabindex="-1">14. stop <a class="header-anchor" href="#_14-stop" aria-hidden="true">#</a></h4><h4 id="_15-unpause" tabindex="-1">15. unpause <a class="header-anchor" href="#_15-unpause" aria-hidden="true">#</a></h4><h4 id="_16-up" tabindex="-1">16. up <a class="header-anchor" href="#_16-up" aria-hidden="true">#</a></h4><h4 id="_17-migrate-to-labels" tabindex="-1">17. migrate-to-labels <a class="header-anchor" href="#_17-migrate-to-labels" aria-hidden="true">#</a></h4><h2 id="\u6307\u4EE4" tabindex="-1">\u6307\u4EE4 <a class="header-anchor" href="#\u6307\u4EE4" aria-hidden="true">#</a></h2><h4 id="_1-build-1" tabindex="-1">1. build <a class="header-anchor" href="#_1-build-1" aria-hidden="true">#</a></h4><h4 id="_2-cap-add-cap-drop" tabindex="-1">2. cap_add,cap_drop <a class="header-anchor" href="#_2-cap-add-cap-drop" aria-hidden="true">#</a></h4><h4 id="_3-cp-amd" tabindex="-1">3. cp,,amd <a class="header-anchor" href="#_3-cp-amd" aria-hidden="true">#</a></h4><h4 id="_4-cgroup-parent" tabindex="-1">4. cgroup_parent <a class="header-anchor" href="#_4-cgroup-parent" aria-hidden="true">#</a></h4><h4 id="_5-container-name" tabindex="-1">5. container_name <a class="header-anchor" href="#_5-container-name" aria-hidden="true">#</a></h4><h4 id="_6-devices" tabindex="-1">6. devices <a class="header-anchor" href="#_6-devices" aria-hidden="true">#</a></h4><h4 id="_7-dns" tabindex="-1">7. dns <a class="header-anchor" href="#_7-dns" aria-hidden="true">#</a></h4><h4 id="_8-dns-search" tabindex="-1">8. dns_search <a class="header-anchor" href="#_8-dns-search" aria-hidden="true">#</a></h4><h4 id="_9-dockerfile" tabindex="-1">9. dockerfile <a class="header-anchor" href="#_9-dockerfile" aria-hidden="true">#</a></h4><h4 id="_10-env-file" tabindex="-1">10. env_file <a class="header-anchor" href="#_10-env-file" aria-hidden="true">#</a></h4><h4 id="_11-environment" tabindex="-1">11. environment <a class="header-anchor" href="#_11-environment" aria-hidden="true">#</a></h4><h4 id="_12-expose" tabindex="-1">12. expose <a class="header-anchor" href="#_12-expose" aria-hidden="true">#</a></h4><h4 id="_13-extends" tabindex="-1">13. extends <a class="header-anchor" href="#_13-extends" aria-hidden="true">#</a></h4><h4 id="_14-external-links" tabindex="-1">14. external_links <a class="header-anchor" href="#_14-external-links" aria-hidden="true">#</a></h4><h4 id="_15-extra-hosts" tabindex="-1">15. extra_hosts <a class="header-anchor" href="#_15-extra-hosts" aria-hidden="true">#</a></h4><h4 id="_16-image" tabindex="-1">16. image <a class="header-anchor" href="#_16-image" aria-hidden="true">#</a></h4><h4 id="_17-labels" tabindex="-1">17. labels <a class="header-anchor" href="#_17-labels" aria-hidden="true">#</a></h4><h4 id="_18-links" tabindex="-1">18. links <a class="header-anchor" href="#_18-links" aria-hidden="true">#</a></h4><h4 id="_19-log-driver" tabindex="-1">19. log_driver <a class="header-anchor" href="#_19-log-driver" aria-hidden="true">#</a></h4><p>json-flie none syslog</p><h4 id="_20-log-opt" tabindex="-1">20. log_opt <a class="header-anchor" href="#_20-log-opt" aria-hidden="true">#</a></h4><h4 id="_21-net" tabindex="-1">21. net <a class="header-anchor" href="#_21-net" aria-hidden="true">#</a></h4><h4 id="_22-pid" tabindex="-1">22. pid <a class="header-anchor" href="#_22-pid" aria-hidden="true">#</a></h4><h4 id="_23-ports" tabindex="-1">23. ports <a class="header-anchor" href="#_23-ports" aria-hidden="true">#</a></h4><h4 id="_24-security-opt" tabindex="-1">24. security_opt <a class="header-anchor" href="#_24-security-opt" aria-hidden="true">#</a></h4><h4 id="_25-ulimits" tabindex="-1">25. ulimits <a class="header-anchor" href="#_25-ulimits" aria-hidden="true">#</a></h4><h4 id="_26-volumes" tabindex="-1">26. volumes <a class="header-anchor" href="#_26-volumes" aria-hidden="true">#</a></h4><h4 id="_27-volumes-driver" tabindex="-1">27. volumes_driver <a class="header-anchor" href="#_27-volumes-driver" aria-hidden="true">#</a></h4><h4 id="_28-volumes-from" tabindex="-1">28. volumes_from <a class="header-anchor" href="#_28-volumes-from" aria-hidden="true">#</a></h4><h4 id="_29-\u5176\u4ED6\u6307\u4EE4" tabindex="-1">29. \u5176\u4ED6\u6307\u4EE4 <a class="header-anchor" href="#_29-\u5176\u4ED6\u6307\u4EE4" aria-hidden="true">#</a></h4><ul><li>cpushares</li><li>cpuset</li><li>domianname</li><li>entrypoint</li><li>hostname</li><li>ipc</li><li>mac_address</li><li>mem_limit</li><li>memswap_limit</li><li>privileged</li><li>readonly</li><li>restart</li><li>stdin_open</li><li>tty</li><li>user</li><li>working_dir</li></ul><h4 id="_30-\u52A8\u6001\u8BFB\u53D6\u4E3B\u673A\u73AF\u5883\u53D8\u91CF" tabindex="-1">30. \u52A8\u6001\u8BFB\u53D6\u4E3B\u673A\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#_30-\u52A8\u6001\u8BFB\u53D6\u4E3B\u673A\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h4><h3 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h3><p><a href="https://docs.docker.com/compose/reference/envvars/#compose_project_name" target="_blank" rel="noopener noreferrer">https://docs.docker.com/compose/reference/envvars/#compose_project_name</a>\u73AF\u5883\u53D8\u91CF\u53EF\u4EE5\u7528\u6765\u914D\u7F6E Compose \u7684\u884C\u4E3A,\u4EE5DOCKER_\u5F00\u5934\u7684\u53D8\u91CF\u548C\u7528\u6765\u914D\u7F6E Docker \u547D\u4EE4\u884C\u5BA2\u6237\u7AEF\u7684\u4F7F\u7528\u4E00\u6837\u3002\u5982\u679C\u4F7F\u7528 boot2docker , $(boot2docker shellinit) \u5C06\u4F1A\u8BBE\u7F6E\u5B83\u4EEC\u4E3A\u6B63\u786E\u7684\u503C</p><p>COMPOSE_PROJECT_NAME \u8BBE\u7F6E\u901A\u8FC7 Compose \u542F\u52A8\u7684\u6BCF\u4E00\u4E2A\u5BB9\u5668\u524D\u6DFB\u52A0\u7684\u9879\u76EE\u540D\u79F0\uFF0C\u9ED8\u8BA4\u662F\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u7684\u540D\u5B57\u3002</p><p>COMPOSE_FILE \u8BBE\u7F6E\u8981\u4F7F\u7528\u7684 docker-compose.yml \u7684\u8DEF\u5F84\u3002\u9ED8\u8BA4\u8DEF\u5F84\u662F\u5F53\u524D\u5DE5\u4F5C\u76EE\u5F55\u3002</p><p>DOCKER_HOST \u8BBE\u7F6E Docker daemon \u7684\u5730\u5740\u3002\u9ED8\u8BA4\u4F7F\u7528 unix:///var/run/docker.sock\uFF0C\u4E0E Docker \u5BA2\u6237\u7AEF\u91C7\u7528\u7684\u9ED8\u8BA4\u503C\u4E00\u81F4\u3002</p><p>DOCKER_TLS_VERIFY \u5982\u679C\u8BBE\u7F6E\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u4E0E Docker daemon \u4EA4\u4E92\u901A\u8FC7 TLS \u8FDB\u884C\u3002</p><p>DOCKER_CERT_PATH \u914D\u7F6E TLS \u901A\u4FE1\u6240\u9700\u8981\u7684\u9A8C\u8BC1\uFF08ca.pem\u3001cert.pem \u548C key.pem\uFF09\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u662F ~/.docker</p><h3 id="\u6A21\u677F\u6587\u4EF6" tabindex="-1">\u6A21\u677F\u6587\u4EF6 <a class="header-anchor" href="#\u6A21\u677F\u6587\u4EF6" aria-hidden="true">#</a></h3><p><a href="https://docs.docker.com/compose/compose-file/#compose-file-structure-and-examples" target="_blank" rel="noopener noreferrer">https://docs.docker.com/compose/compose-file/#compose-file-structure-and-examples</a></p><div class="language-yaml"><pre><code>Compose\u548CDocker\u517C\u5BB9\u6027\uFF1A
    \u65B0\u7248\u672C https<span class="token punctuation">:</span>//github.com/compose<span class="token punctuation">-</span>spec/compose<span class="token punctuation">-</span>spec/blob/master/spec.md
    Compose \u6587\u4EF6\u683C\u5F0F\u67093\u4E2A\u7248\u672C<span class="token punctuation">,</span>\u5206\u522B\u4E3A1<span class="token punctuation">,</span> 2.x \u548C 3.x
    \u76EE\u524D\u4E3B\u6D41\u7684\u4E3A 3.x \u5176\u652F\u6301 docker 1.13.0 \u53CA\u5176\u4EE5\u4E0A\u7684\u7248\u672C


\u5E38\u7528\u53C2\u6570\uFF1A
    version           <span class="token comment"># \u6307\u5B9A compose \u6587\u4EF6\u7684\u7248\u672C</span>
    services          <span class="token comment"># \u5B9A\u4E49\u6240\u6709\u7684 service \u4FE1\u606F, services \u4E0B\u9762\u7684\u7B2C\u4E00\u7EA7\u522B\u7684 key \u65E2\u662F\u4E00\u4E2A service \u7684\u540D\u79F0</span>

        build                 <span class="token comment"># \u6307\u5B9A\u5305\u542B\u6784\u5EFA\u4E0A\u4E0B\u6587\u7684\u8DEF\u5F84, \u6216\u4F5C\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5177\u6709 context \u548C\u6307\u5B9A\u7684 dockerfile \u6587\u4EF6\u4EE5\u53CA args \u53C2\u6570\u503C</span>
            context               <span class="token comment"># context: \u6307\u5B9A Dockerfile \u6587\u4EF6\u6240\u5728\u7684\u8DEF\u5F84</span>
            dockerfile            <span class="token comment"># dockerfile: \u6307\u5B9A context \u6307\u5B9A\u7684\u76EE\u5F55\u4E0B\u9762\u7684 Dockerfile \u7684\u540D\u79F0(\u9ED8\u8BA4\u4E3A Dockerfile)</span>
            args                  <span class="token comment"># args: Dockerfile \u5728 build \u8FC7\u7A0B\u4E2D\u9700\u8981\u7684\u53C2\u6570 (\u7B49\u540C\u4E8E docker container build --build-arg \u7684\u4F5C\u7528)</span>
            cache_from            <span class="token comment"># v3.2\u4E2D\u65B0\u589E\u7684\u53C2\u6570, \u6307\u5B9A\u7F13\u5B58\u7684\u955C\u50CF\u5217\u8868 (\u7B49\u540C\u4E8E docker container build --cache_from \u7684\u4F5C\u7528)</span>
            labels                <span class="token comment"># v3.3\u4E2D\u65B0\u589E\u7684\u53C2\u6570, \u8BBE\u7F6E\u955C\u50CF\u7684\u5143\u6570\u636E (\u7B49\u540C\u4E8E docker container build --labels \u7684\u4F5C\u7528)</span>
            shm_size              <span class="token comment"># v3.5\u4E2D\u65B0\u589E\u7684\u53C2\u6570, \u8BBE\u7F6E\u5BB9\u5668 /dev/shm \u5206\u533A\u7684\u5927\u5C0F (\u7B49\u540C\u4E8E docker container build --shm-size \u7684\u4F5C\u7528)</span>

        command               <span class="token comment"># \u8986\u76D6\u5BB9\u5668\u542F\u52A8\u540E\u9ED8\u8BA4\u6267\u884C\u7684\u547D\u4EE4, \u652F\u6301 shell \u683C\u5F0F\u548C [] \u683C\u5F0F</span>

        configs               <span class="token comment"># \u4E0D\u77E5\u9053\u600E\u4E48\u7528</span>

        cgroup_parent         <span class="token comment"># \u4E0D\u77E5\u9053\u600E\u4E48\u7528</span>

        container_name        <span class="token comment"># \u6307\u5B9A\u5BB9\u5668\u7684\u540D\u79F0 (\u7B49\u540C\u4E8E docker run --name \u7684\u4F5C\u7528)</span>

        credential_spec       <span class="token comment"># \u4E0D\u77E5\u9053\u600E\u4E48\u7528</span>

        deploy                <span class="token comment"># v3 \u7248\u672C\u4EE5\u4E0A, \u6307\u5B9A\u4E0E\u90E8\u7F72\u548C\u8FD0\u884C\u670D\u52A1\u76F8\u5173\u7684\u914D\u7F6E, deploy \u90E8\u5206\u662F docker stack \u4F7F\u7528\u7684, docker stack \u4F9D\u8D56 docker swarm</span>
            endpoint_mode         <span class="token comment"># v3.3 \u7248\u672C\u4E2D\u65B0\u589E\u7684\u529F\u80FD, \u6307\u5B9A\u670D\u52A1\u66B4\u9732\u7684\u65B9\u5F0F</span>
                vip                   <span class="token comment"># Docker \u4E3A\u8BE5\u670D\u52A1\u5206\u914D\u4E86\u4E00\u4E2A\u865A\u62DF IP(VIP), \u4F5C\u4E3A\u5BA2\u6237\u7AEF\u7684\u8BBF\u95EE\u670D\u52A1\u7684\u5730\u5740</span>
                dnsrr                 <span class="token comment"># DNS\u8F6E\u8BE2, Docker \u4E3A\u8BE5\u670D\u52A1\u8BBE\u7F6E DNS \u6761\u76EE, \u4F7F\u5F97\u670D\u52A1\u540D\u79F0\u7684 DNS \u67E5\u8BE2\u8FD4\u56DE\u4E00\u4E2A IP \u5730\u5740\u5217\u8868, \u5BA2\u6237\u7AEF\u76F4\u63A5\u8BBF\u95EE\u5176\u4E2D\u7684\u4E00\u4E2A\u5730\u5740</span>
            labels                <span class="token comment"># \u6307\u5B9A\u670D\u52A1\u7684\u6807\u7B7E\uFF0C\u8FD9\u4E9B\u6807\u7B7E\u4EC5\u5728\u670D\u52A1\u4E0A\u8BBE\u7F6E</span>
            mode                  <span class="token comment"># \u6307\u5B9A deploy \u7684\u6A21\u5F0F</span>
                global                <span class="token comment"># \u6BCF\u4E2A\u96C6\u7FA4\u8282\u70B9\u90FD\u53EA\u6709\u4E00\u4E2A\u5BB9\u5668</span>
                replicated            <span class="token comment"># \u7528\u6237\u53EF\u4EE5\u6307\u5B9A\u96C6\u7FA4\u4E2D\u5BB9\u5668\u7684\u6570\u91CF(\u9ED8\u8BA4)</span>
            placement             <span class="token comment"># \u4E0D\u77E5\u9053\u600E\u4E48\u7528</span>
            replicas              <span class="token comment"># deploy \u7684 mode \u4E3A replicated \u65F6, \u6307\u5B9A\u5BB9\u5668\u526F\u672C\u7684\u6570\u91CF</span>
            resources             <span class="token comment"># \u8D44\u6E90\u9650\u5236</span>
                limits                <span class="token comment"># \u8BBE\u7F6E\u5BB9\u5668\u7684\u8D44\u6E90\u9650\u5236</span>
                    <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.5&quot;</span>           <span class="token comment"># \u8BBE\u7F6E\u8BE5\u5BB9\u5668\u6700\u591A\u53EA\u80FD\u4F7F\u7528 50% \u7684 CPU</span>
                    <span class="token key atrule">memory</span><span class="token punctuation">:</span> 50M           <span class="token comment"># \u8BBE\u7F6E\u8BE5\u5BB9\u5668\u6700\u591A\u53EA\u80FD\u4F7F\u7528 50M \u7684\u5185\u5B58\u7A7A\u95F4</span>
                reservations          <span class="token comment"># \u8BBE\u7F6E\u4E3A\u5BB9\u5668\u9884\u7559\u7684\u7CFB\u7EDF\u8D44\u6E90(\u968F\u65F6\u53EF\u7528)</span>
                    <span class="token key atrule">cpus</span><span class="token punctuation">:</span> <span class="token string">&quot;0.2&quot;</span>           <span class="token comment"># \u4E3A\u8BE5\u5BB9\u5668\u4FDD\u7559 20% \u7684 CPU</span>
                    <span class="token key atrule">memory</span><span class="token punctuation">:</span> 20M           <span class="token comment"># \u4E3A\u8BE5\u5BB9\u5668\u4FDD\u7559 20M \u7684\u5185\u5B58\u7A7A\u95F4</span>
            restart_policy        <span class="token comment"># \u5B9A\u4E49\u5BB9\u5668\u91CD\u542F\u7B56\u7565, \u7528\u4E8E\u4EE3\u66FF restart \u53C2\u6570</span>
                condition             <span class="token comment"># \u5B9A\u4E49\u5BB9\u5668\u91CD\u542F\u7B56\u7565(\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570)</span>
                    none                  <span class="token comment"># \u4E0D\u5C1D\u8BD5\u91CD\u542F</span>
                    on<span class="token punctuation">-</span>failure            <span class="token comment"># \u53EA\u6709\u5F53\u5BB9\u5668\u5185\u90E8\u5E94\u7528\u7A0B\u5E8F\u51FA\u73B0\u95EE\u9898\u624D\u4F1A\u91CD\u542F</span>
                    any                   <span class="token comment"># \u65E0\u8BBA\u5982\u4F55\u90FD\u4F1A\u5C1D\u8BD5\u91CD\u542F(\u9ED8\u8BA4)</span>
                delay                 <span class="token comment"># \u5C1D\u8BD5\u91CD\u542F\u7684\u95F4\u9694\u65F6\u95F4(\u9ED8\u8BA4\u4E3A 0s)</span>
                max_attempts          <span class="token comment"># \u5C1D\u8BD5\u91CD\u542F\u6B21\u6570(\u9ED8\u8BA4\u4E00\u76F4\u5C1D\u8BD5\u91CD\u542F)</span>
                window                <span class="token comment"># \u68C0\u67E5\u91CD\u542F\u662F\u5426\u6210\u529F\u4E4B\u524D\u7684\u7B49\u5F85\u65F6\u95F4(\u5373\u5982\u679C\u5BB9\u5668\u542F\u52A8\u4E86, \u9694\u591A\u5C11\u79D2\u4E4B\u540E\u53BB\u68C0\u6D4B\u5BB9\u5668\u662F\u5426\u6B63\u5E38, \u9ED8\u8BA4 0s)</span>
            update_config         <span class="token comment"># \u7528\u4E8E\u914D\u7F6E\u6EDA\u52A8\u66F4\u65B0\u914D\u7F6E</span>
                parallelism           <span class="token comment"># \u4E00\u6B21\u6027\u66F4\u65B0\u7684\u5BB9\u5668\u6570\u91CF</span>
                delay                 <span class="token comment"># \u66F4\u65B0\u4E00\u7EC4\u5BB9\u5668\u4E4B\u95F4\u7684\u95F4\u9694\u65F6\u95F4</span>
                failure_action        <span class="token comment"># \u5B9A\u4E49\u66F4\u65B0\u5931\u8D25\u7684\u7B56\u7565</span>
                    continue              <span class="token comment"># \u7EE7\u7EED\u66F4\u65B0</span>
                    rollback              <span class="token comment"># \u56DE\u6EDA\u66F4\u65B0</span>
                    pause                 <span class="token comment"># \u6682\u505C\u66F4\u65B0(\u9ED8\u8BA4)</span>
                monitor               <span class="token comment"># \u6BCF\u6B21\u66F4\u65B0\u540E\u7684\u6301\u7EED\u65F6\u95F4\u4EE5\u76D1\u89C6\u66F4\u65B0\u662F\u5426\u5931\u8D25(\u5355\u4F4D: ns|us|ms|s|m|h) (\u9ED8\u8BA4\u4E3A0)</span>
                max_failure_ratio     <span class="token comment"># \u56DE\u6EDA\u671F\u95F4\u5BB9\u5FCD\u7684\u5931\u8D25\u7387(\u9ED8\u8BA4\u503C\u4E3A0)</span>
                order                 <span class="token comment"># v3.4 \u7248\u672C\u4E2D\u65B0\u589E\u7684\u53C2\u6570, \u56DE\u6EDA\u671F\u95F4\u7684\u64CD\u4F5C\u987A\u5E8F</span>
                    stop<span class="token punctuation">-</span>first            <span class="token comment">#\u65E7\u4EFB\u52A1\u5728\u542F\u52A8\u65B0\u4EFB\u52A1\u4E4B\u524D\u505C\u6B62(\u9ED8\u8BA4)</span>
                    start<span class="token punctuation">-</span>first           <span class="token comment">#\u9996\u5148\u542F\u52A8\u65B0\u4EFB\u52A1, \u5E76\u4E14\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1\u6682\u65F6\u91CD\u53E0</span>
            rollback_config       <span class="token comment"># v3.7 \u7248\u672C\u4E2D\u65B0\u589E\u7684\u53C2\u6570, \u7528\u4E8E\u5B9A\u4E49\u5728 update_config \u66F4\u65B0\u5931\u8D25\u7684\u56DE\u6EDA\u7B56\u7565</span>
                parallelism           <span class="token comment"># \u4E00\u6B21\u56DE\u6EDA\u7684\u5BB9\u5668\u6570, \u5982\u679C\u8BBE\u7F6E\u4E3A0, \u5219\u6240\u6709\u5BB9\u5668\u540C\u65F6\u56DE\u6EDA</span>
                delay                 <span class="token comment"># \u6BCF\u4E2A\u7EC4\u56DE\u6EDA\u4E4B\u95F4\u7684\u65F6\u95F4\u95F4\u9694(\u9ED8\u8BA4\u4E3A0)</span>
                failure_action        <span class="token comment"># \u5B9A\u4E49\u56DE\u6EDA\u5931\u8D25\u7684\u7B56\u7565</span>
                    continue              <span class="token comment"># \u7EE7\u7EED\u56DE\u6EDA</span>
                    pause                 <span class="token comment"># \u6682\u505C\u56DE\u6EDA</span>
                monitor               <span class="token comment"># \u6BCF\u6B21\u56DE\u6EDA\u4EFB\u52A1\u540E\u7684\u6301\u7EED\u65F6\u95F4\u4EE5\u76D1\u89C6\u5931\u8D25(\u5355\u4F4D: ns|us|ms|s|m|h) (\u9ED8\u8BA4\u4E3A0)</span>
                max_failure_ratio     <span class="token comment"># \u56DE\u6EDA\u671F\u95F4\u5BB9\u5FCD\u7684\u5931\u8D25\u7387(\u9ED8\u8BA4\u503C0)</span>
                order                 <span class="token comment"># \u56DE\u6EDA\u671F\u95F4\u7684\u64CD\u4F5C\u987A\u5E8F</span>
                    stop<span class="token punctuation">-</span>first            <span class="token comment"># \u65E7\u4EFB\u52A1\u5728\u542F\u52A8\u65B0\u4EFB\u52A1\u4E4B\u524D\u505C\u6B62(\u9ED8\u8BA4)</span>
                    start<span class="token punctuation">-</span>first           <span class="token comment"># \u9996\u5148\u542F\u52A8\u65B0\u4EFB\u52A1, \u5E76\u4E14\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1\u6682\u65F6\u91CD\u53E0</span>

            \u6CE8\u610F\uFF1A
                \u652F\u6301 docker<span class="token punctuation">-</span>compose up \u548C docker<span class="token punctuation">-</span>compose run \u4F46\u4E0D\u652F\u6301 docker stack deploy \u7684\u5B50\u9009\u9879
                security_opt  container_name  devices  tmpfs  stop_signal  links    cgroup_parent
                network_mode  external_links  restart  build  userns_mode  sysctls

        devices               <span class="token comment"># \u6307\u5B9A\u8BBE\u5907\u6620\u5C04\u5217\u8868 (\u7B49\u540C\u4E8E docker run --device \u7684\u4F5C\u7528)</span>

        depends_on            <span class="token comment"># \u5B9A\u4E49\u5BB9\u5668\u542F\u52A8\u987A\u5E8F (\u6B64\u9009\u9879\u89E3\u51B3\u4E86\u5BB9\u5668\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C \u6B64\u9009\u9879\u5728 v3 \u7248\u672C\u4E2D \u4F7F\u7528 swarm \u90E8\u7F72\u65F6\u5C06\u5FFD\u7565\u8BE5\u9009\u9879)</span>
            \u793A\u4F8B\uFF1A
                docker<span class="token punctuation">-</span>compose up \u4EE5\u4F9D\u8D56\u987A\u5E8F\u542F\u52A8\u670D\u52A1\uFF0C\u4E0B\u9762\u4F8B\u5B50\u4E2D redis \u548C db \u670D\u52A1\u5728 web \u542F\u52A8\u524D\u542F\u52A8
                \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528 docker<span class="token punctuation">-</span>compose up web \u8FD9\u6837\u7684\u65B9\u5F0F\u542F\u52A8 web \u670D\u52A1\u65F6\uFF0C\u4E5F\u4F1A\u542F\u52A8 redis \u548C db \u4E24\u4E2A\u670D\u52A1\uFF0C\u56E0\u4E3A\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E86\u4F9D\u8D56\u5173\u7CFB

                <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
                <span class="token key atrule">services</span><span class="token punctuation">:</span>
                    <span class="token key atrule">web</span><span class="token punctuation">:</span>
                        <span class="token key atrule">build</span><span class="token punctuation">:</span> .
                        <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
                            <span class="token punctuation">-</span> db     
                            <span class="token punctuation">-</span> redis 
                    <span class="token key atrule">redis</span><span class="token punctuation">:</span>
                        <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
                    <span class="token key atrule">db</span><span class="token punctuation">:</span>
                        <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres                            

        dns                   <span class="token comment"># \u8BBE\u7F6E DNS \u5730\u5740(\u7B49\u540C\u4E8E docker run --dns \u7684\u4F5C\u7528)</span>

        dns_search            <span class="token comment"># \u8BBE\u7F6E DNS \u641C\u7D22\u57DF(\u7B49\u540C\u4E8E docker run --dns-search \u7684\u4F5C\u7528)</span>

        tmpfs                 <span class="token comment"># v2 \u7248\u672C\u4EE5\u4E0A, \u6302\u8F7D\u76EE\u5F55\u5230\u5BB9\u5668\u4E2D, \u4F5C\u4E3A\u5BB9\u5668\u7684\u4E34\u65F6\u6587\u4EF6\u7CFB\u7EDF(\u7B49\u540C\u4E8E docker run --tmpfs \u7684\u4F5C\u7528, \u5728\u4F7F\u7528 swarm \u90E8\u7F72\u65F6\u5C06\u5FFD\u7565\u8BE5\u9009\u9879)</span>

        entrypoint            <span class="token comment"># \u8986\u76D6\u5BB9\u5668\u7684\u9ED8\u8BA4 entrypoint \u6307\u4EE4 (\u7B49\u540C\u4E8E docker run --entrypoint \u7684\u4F5C\u7528)</span>

        env_file              <span class="token comment"># \u4ECE\u6307\u5B9A\u6587\u4EF6\u4E2D\u8BFB\u53D6\u53D8\u91CF\u8BBE\u7F6E\u4E3A\u5BB9\u5668\u4E2D\u7684\u73AF\u5883\u53D8\u91CF, \u53EF\u4EE5\u662F\u5355\u4E2A\u503C\u6216\u8005\u4E00\u4E2A\u6587\u4EF6\u5217\u8868, \u5982\u679C\u591A\u4E2A\u6587\u4EF6\u4E2D\u7684\u53D8\u91CF\u91CD\u540D\u5219\u540E\u9762\u7684\u53D8\u91CF\u8986\u76D6\u524D\u9762\u7684\u53D8\u91CF, environment \u7684\u503C\u8986\u76D6 env_file \u7684\u503C</span>
            \u6587\u4EF6\u683C\u5F0F\uFF1A
                RACK_ENV=development

        environment           <span class="token comment"># \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C environment \u7684\u503C\u53EF\u4EE5\u8986\u76D6 env_file \u7684\u503C (\u7B49\u540C\u4E8E docker run --env \u7684\u4F5C\u7528)</span>

        expose                <span class="token comment"># \u66B4\u9732\u7AEF\u53E3, \u4F46\u662F\u4E0D\u80FD\u548C\u5BBF\u4E3B\u673A\u5EFA\u7ACB\u6620\u5C04\u5173\u7CFB, \u7C7B\u4F3C\u4E8E Dockerfile \u7684 EXPOSE \u6307\u4EE4</span>

        external_links        <span class="token comment"># \u8FDE\u63A5\u4E0D\u5728 docker-compose.yml \u4E2D\u5B9A\u4E49\u7684\u5BB9\u5668\u6216\u8005\u4E0D\u5728 compose \u7BA1\u7406\u7684\u5BB9\u5668(docker run \u542F\u52A8\u7684\u5BB9\u5668, \u5728 v3 \u7248\u672C\u4E2D\u4F7F\u7528 swarm \u90E8\u7F72\u65F6\u5C06\u5FFD\u7565\u8BE5\u9009\u9879)</span>

        extra_hosts           <span class="token comment"># \u6DFB\u52A0 host \u8BB0\u5F55\u5230\u5BB9\u5668\u4E2D\u7684 /etc/hosts \u4E2D (\u7B49\u540C\u4E8E docker run --add-host \u7684\u4F5C\u7528)</span>

        healthcheck           <span class="token comment"># v2.1 \u4EE5\u4E0A\u7248\u672C, \u5B9A\u4E49\u5BB9\u5668\u5065\u5EB7\u72B6\u6001\u68C0\u67E5, \u7C7B\u4F3C\u4E8E Dockerfile \u7684 HEALTHCHECK \u6307\u4EE4</span>
            test                  <span class="token comment"># \u68C0\u67E5\u5BB9\u5668\u68C0\u67E5\u72B6\u6001\u7684\u547D\u4EE4, \u8BE5\u9009\u9879\u5FC5\u987B\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6216\u8005\u5217\u8868, \u7B2C\u4E00\u9879\u5FC5\u987B\u662F NONE, CMD \u6216 CMD-SHELL, \u5982\u679C\u5176\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u5219\u76F8\u5F53\u4E8E CMD-SHELL \u52A0\u8BE5\u5B57\u7B26\u4E32</span>
                NONE                  <span class="token comment"># \u7981\u7528\u5BB9\u5668\u7684\u5065\u5EB7\u72B6\u6001\u68C0\u6D4B</span>
                CMD                   <span class="token comment"># test: [&quot;CMD&quot;, &quot;curl&quot;, &quot;-f&quot;, &quot;http://localhost&quot;]</span>
                CMD<span class="token punctuation">-</span>SHELL             <span class="token comment"># test: [&quot;CMD-SHELL&quot;, &quot;curl -f http://localhost || exit 1&quot;] \u6216\u8005\u3000test: curl -f https://localhost || exit 1</span>
            <span class="token key atrule">interval</span><span class="token punctuation">:</span> 1m30s       <span class="token comment"># \u6BCF\u6B21\u68C0\u67E5\u4E4B\u95F4\u7684\u95F4\u9694\u65F6\u95F4</span>
            <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s          <span class="token comment"># \u8FD0\u884C\u547D\u4EE4\u7684\u8D85\u65F6\u65F6\u95F4</span>
            <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">3</span>            <span class="token comment"># \u91CD\u8BD5\u6B21\u6570</span>
            <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 40s     <span class="token comment"># v3.4 \u4EE5\u4E0A\u65B0\u589E\u7684\u9009\u9879, \u5B9A\u4E49\u5BB9\u5668\u542F\u52A8\u65F6\u95F4\u95F4\u9694</span>
            <span class="token key atrule">disable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>         <span class="token comment"># true \u6216 false, \u8868\u793A\u662F\u5426\u7981\u7528\u5065\u5EB7\u72B6\u6001\u68C0\u6D4B\u548C\u3000test: NONE \u76F8\u540C</span>

        image                 <span class="token comment"># \u6307\u5B9A docker \u955C\u50CF, \u53EF\u4EE5\u662F\u8FDC\u7A0B\u4ED3\u5E93\u955C\u50CF\u3001\u672C\u5730\u955C\u50CF</span>

        init                  <span class="token comment"># v3.7 \u4E2D\u65B0\u589E\u7684\u53C2\u6570, true \u6216 false \u8868\u793A\u662F\u5426\u5728\u5BB9\u5668\u4E2D\u8FD0\u884C\u4E00\u4E2A init, \u5B83\u63A5\u6536\u4FE1\u53F7\u5E76\u4F20\u9012\u7ED9\u8FDB\u7A0B</span>

        isolation             <span class="token comment"># \u9694\u79BB\u5BB9\u5668\u6280\u672F, \u5728 Linux \u4E2D\u4EC5\u652F\u6301 default \u503C</span>

        labels                <span class="token comment"># \u4F7F\u7528 Docker \u6807\u7B7E\u5C06\u5143\u6570\u636E\u6DFB\u52A0\u5230\u5BB9\u5668, \u4E0E Dockerfile \u4E2D\u7684 LABELS \u7C7B\u4F3C</span>

        links                 <span class="token comment"># \u94FE\u63A5\u5230\u5176\u5B83\u670D\u52A1\u4E2D\u7684\u5BB9\u5668, \u8BE5\u9009\u9879\u662F docker \u5386\u53F2\u9057\u7559\u7684\u9009\u9879, \u76EE\u524D\u5DF2\u88AB\u7528\u6237\u81EA\u5B9A\u4E49\u7F51\u7EDC\u540D\u79F0\u7A7A\u95F4\u53D6\u4EE3, \u6700\u7EC8\u6709\u53EF\u80FD\u88AB\u5E9F\u5F03 (\u5728\u4F7F\u7528 swarm \u90E8\u7F72\u65F6\u5C06\u5FFD\u7565\u8BE5\u9009\u9879)</span>

        logging               <span class="token comment"># \u8BBE\u7F6E\u5BB9\u5668\u65E5\u5FD7\u670D\u52A1</span>
            driver                <span class="token comment"># \u6307\u5B9A\u65E5\u5FD7\u8BB0\u5F55\u9A71\u52A8\u7A0B\u5E8F, \u9ED8\u8BA4 json-file (\u7B49\u540C\u4E8E docker run --log-driver \u7684\u4F5C\u7528)</span>
            options               <span class="token comment"># \u6307\u5B9A\u65E5\u5FD7\u7684\u76F8\u5173\u53C2\u6570 (\u7B49\u540C\u4E8E docker run --log-opt \u7684\u4F5C\u7528)</span>
                max<span class="token punctuation">-</span>size              <span class="token comment"># \u8BBE\u7F6E\u5355\u4E2A\u65E5\u5FD7\u6587\u4EF6\u7684\u5927\u5C0F, \u5F53\u5230\u8FBE\u8FD9\u4E2A\u503C\u540E\u4F1A\u8FDB\u884C\u65E5\u5FD7\u6EDA\u52A8\u64CD\u4F5C</span>
                max<span class="token punctuation">-</span>file              <span class="token comment"># \u65E5\u5FD7\u6587\u4EF6\u4FDD\u7559\u7684\u6570\u91CF</span>

        network_mode          <span class="token comment"># \u6307\u5B9A\u7F51\u7EDC\u6A21\u5F0F (\u7B49\u540C\u4E8E docker run --net \u7684\u4F5C\u7528, \u5728\u4F7F\u7528 swarm \u90E8\u7F72\u65F6\u5C06\u5FFD\u7565\u8BE5\u9009\u9879)        </span>

        networks              <span class="token comment"># \u5C06\u5BB9\u5668\u52A0\u5165\u6307\u5B9A\u7F51\u7EDC (\u7B49\u540C\u4E8E docker network connect \u7684\u4F5C\u7528), networks \u53EF\u4EE5\u4F4D\u4E8E compose \u6587\u4EF6\u9876\u7EA7\u952E\u548C services \u952E\u7684\u4E8C\u7EA7\u952E</span>
            aliases               <span class="token comment"># \u540C\u4E00\u7F51\u7EDC\u4E0A\u7684\u5BB9\u5668\u53EF\u4EE5\u4F7F\u7528\u670D\u52A1\u540D\u79F0\u6216\u522B\u540D\u8FDE\u63A5\u5230\u5176\u4E2D\u4E00\u4E2A\u670D\u52A1\u7684\u5BB9\u5668</span>
            ipv4_address      <span class="token comment"># IP V4 \u683C\u5F0F</span>
            ipv6_address      <span class="token comment"># IP V6 \u683C\u5F0F</span>

            <span class="token key atrule">\u793A\u4F8B</span><span class="token punctuation">:</span>
                <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>
                <span class="token key atrule">services</span><span class="token punctuation">:</span>
                    <span class="token key atrule">test</span><span class="token punctuation">:</span>
                        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.14<span class="token punctuation">-</span>alpine
                        <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mynginx
                        <span class="token key atrule">command</span><span class="token punctuation">:</span> ifconfig
                        <span class="token key atrule">networks</span><span class="token punctuation">:</span>
                            <span class="token key atrule">app_net</span><span class="token punctuation">:</span>                                <span class="token comment"># \u8C03\u7528\u4E0B\u9762 networks \u5B9A\u4E49\u7684 app_net \u7F51\u7EDC</span>
                            <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.16.238.10
                <span class="token key atrule">networks</span><span class="token punctuation">:</span>
                    <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
                        <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
                        <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
                            <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
                            <span class="token key atrule">config</span><span class="token punctuation">:</span>
                                <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 172.16.238.0/24

        <span class="token key atrule">pid</span><span class="token punctuation">:</span> <span class="token string">&#39;host&#39;</span>           <span class="token comment"># \u5171\u4EAB\u5BBF\u4E3B\u673A\u7684 \u8FDB\u7A0B\u7A7A\u95F4(PID)</span>

        ports                 <span class="token comment"># \u5EFA\u7ACB\u5BBF\u4E3B\u673A\u548C\u5BB9\u5668\u4E4B\u95F4\u7684\u7AEF\u53E3\u6620\u5C04\u5173\u7CFB, ports \u652F\u6301\u4E24\u79CD\u8BED\u6CD5\u683C\u5F0F</span>
            <span class="token key atrule">SHORT \u8BED\u6CD5\u683C\u5F0F\u793A\u4F8B</span><span class="token punctuation">:</span>
                <span class="token punctuation">-</span> <span class="token string">&quot;3000&quot;</span>                            <span class="token comment"># \u66B4\u9732\u5BB9\u5668\u7684 3000 \u7AEF\u53E3, \u5BBF\u4E3B\u673A\u7684\u7AEF\u53E3\u7531 docker \u968F\u673A\u6620\u5C04\u4E00\u4E2A\u6CA1\u6709\u88AB\u5360\u7528\u7684\u7AEF\u53E3</span>
                <span class="token punctuation">-</span> <span class="token string">&quot;3000-3005&quot;</span>                       <span class="token comment"># \u66B4\u9732\u5BB9\u5668\u7684 3000 \u5230 3005 \u7AEF\u53E3, \u5BBF\u4E3B\u673A\u7684\u7AEF\u53E3\u7531 docker \u968F\u673A\u6620\u5C04\u6CA1\u6709\u88AB\u5360\u7528\u7684\u7AEF\u53E3</span>
                <span class="token punctuation">-</span> <span class="token string">&quot;8000:8000&quot;</span>                       <span class="token comment"># \u5BB9\u5668\u7684 8000 \u7AEF\u53E3\u548C\u5BBF\u4E3B\u673A\u7684 8000 \u7AEF\u53E3\u5EFA\u7ACB\u6620\u5C04\u5173\u7CFB</span>
                <span class="token punctuation">-</span> <span class="token string">&quot;9090-9091:8080-8081&quot;</span>
                <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:8001:8001&quot;</span>             <span class="token comment"># \u6307\u5B9A\u6620\u5C04\u5BBF\u4E3B\u673A\u7684\u6307\u5B9A\u5730\u5740\u7684</span>
                <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:5000-5010:5000-5010&quot;</span>  
                <span class="token punctuation">-</span> <span class="token string">&quot;6060:6060/udp&quot;</span>                   <span class="token comment"># \u6307\u5B9A\u534F\u8BAE</span>

            LONG \u8BED\u6CD5\u683C\u5F0F\u793A\u4F8B<span class="token punctuation">:</span>(v3.2 \u65B0\u589E\u7684\u8BED\u6CD5\u683C\u5F0F)
                <span class="token key atrule">ports</span><span class="token punctuation">:</span>
                    <span class="token punctuation">-</span> <span class="token key atrule">target</span><span class="token punctuation">:</span> <span class="token number">80</span>                    <span class="token comment"># \u5BB9\u5668\u7AEF\u53E3</span>
                      <span class="token key atrule">published</span><span class="token punctuation">:</span> <span class="token number">8080</span>               <span class="token comment"># \u5BBF\u4E3B\u673A\u7AEF\u53E3</span>
                      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> tcp                 <span class="token comment"># \u534F\u8BAE\u7C7B\u578B</span>
                      <span class="token key atrule">mode</span><span class="token punctuation">:</span> host                    <span class="token comment"># host \u5728\u6BCF\u4E2A\u8282\u70B9\u4E0A\u53D1\u5E03\u4E3B\u673A\u7AEF\u53E3,  ingress \u5BF9\u4E8E\u7FA4\u6A21\u5F0F\u7AEF\u53E3\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861</span>

        secrets               <span class="token comment"># \u4E0D\u77E5\u9053\u600E\u4E48\u7528</span>

        security_opt          <span class="token comment"># \u4E3A\u6BCF\u4E2A\u5BB9\u5668\u8986\u76D6\u9ED8\u8BA4\u7684\u6807\u7B7E (\u5728\u4F7F\u7528 swarm \u90E8\u7F72\u65F6\u5C06\u5FFD\u7565\u8BE5\u9009\u9879)</span>

        stop_grace_period     <span class="token comment"># \u6307\u5B9A\u5728\u53D1\u9001\u4E86 SIGTERM \u4FE1\u53F7\u4E4B\u540E, \u5BB9\u5668\u7B49\u5F85\u591A\u5C11\u79D2\u4E4B\u540E\u9000\u51FA(\u9ED8\u8BA4 10s)</span>

        stop_signal           <span class="token comment"># \u6307\u5B9A\u505C\u6B62\u5BB9\u5668\u53D1\u9001\u7684\u4FE1\u53F7 (\u9ED8\u8BA4\u4E3A SIGTERM \u76F8\u5F53\u4E8E kill PID; SIGKILL \u76F8\u5F53\u4E8E kill -9 PID; \u5728\u4F7F\u7528 swarm \u90E8\u7F72\u65F6\u5C06\u5FFD\u7565\u8BE5\u9009\u9879)</span>

        sysctls               <span class="token comment"># \u8BBE\u7F6E\u5BB9\u5668\u4E2D\u7684\u5185\u6838\u53C2\u6570 (\u5728\u4F7F\u7528 swarm \u90E8\u7F72\u65F6\u5C06\u5FFD\u7565\u8BE5\u9009\u9879)</span>

        ulimits               <span class="token comment"># \u8BBE\u7F6E\u5BB9\u5668\u7684 limit</span>

        userns_mode           <span class="token comment"># \u5982\u679CDocker\u5B88\u62A4\u7A0B\u5E8F\u914D\u7F6E\u4E86\u7528\u6237\u540D\u79F0\u7A7A\u95F4, \u5219\u7981\u7528\u6B64\u670D\u52A1\u7684\u7528\u6237\u540D\u79F0\u7A7A\u95F4 (\u5728\u4F7F\u7528 swarm \u90E8\u7F72\u65F6\u5C06\u5FFD\u7565\u8BE5\u9009\u9879)</span>

        volumes               <span class="token comment"># \u5B9A\u4E49\u5BB9\u5668\u548C\u5BBF\u4E3B\u673A\u7684\u5377\u6620\u5C04\u5173\u7CFB, \u5176\u548C networks \u4E00\u6837\u53EF\u4EE5\u4F4D\u4E8E services \u952E\u7684\u4E8C\u7EA7\u952E\u548C compose \u9876\u7EA7\u952E, \u5982\u679C\u9700\u8981\u8DE8\u670D\u52A1\u95F4\u4F7F\u7528\u5219\u5728\u9876\u7EA7\u952E\u5B9A\u4E49, \u5728 services \u4E2D\u5F15\u7528</span>
            <span class="token key atrule">SHORT \u8BED\u6CD5\u683C\u5F0F\u793A\u4F8B</span><span class="token punctuation">:</span>
                <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
                    <span class="token punctuation">-</span> /var/lib/mysql                <span class="token comment"># \u6620\u5C04\u5BB9\u5668\u5185\u7684 /var/lib/mysql \u5230\u5BBF\u4E3B\u673A\u7684\u4E00\u4E2A\u968F\u673A\u76EE\u5F55\u4E2D</span>
                    <span class="token punctuation">-</span> /opt/data<span class="token punctuation">:</span>/var/lib/mysql      <span class="token comment"># \u6620\u5C04\u5BB9\u5668\u5185\u7684 /var/lib/mysql \u5230\u5BBF\u4E3B\u673A\u7684 /opt/data</span>
                    <span class="token punctuation">-</span> ./cache<span class="token punctuation">:</span>/tmp/cache            <span class="token comment"># \u6620\u5C04\u5BB9\u5668\u5185\u7684 /var/lib/mysql \u5230\u5BBF\u4E3B\u673A compose \u6587\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E</span>
                    <span class="token punctuation">-</span> ~/configs<span class="token punctuation">:</span>/etc/configs/<span class="token punctuation">:</span>ro    <span class="token comment"># \u6620\u5C04\u5BB9\u5668\u5BBF\u4E3B\u673A\u7684\u76EE\u5F55\u5230\u5BB9\u5668\u4E2D\u53BB, \u6743\u9650\u53EA\u8BFB</span>
                    <span class="token punctuation">-</span> datavolume<span class="token punctuation">:</span>/var/lib/mysql     <span class="token comment"># datavolume \u4E3A volumes \u9876\u7EA7\u952E\u5B9A\u4E49\u7684\u76EE\u5F55, \u5728\u6B64\u5904\u76F4\u63A5\u8C03\u7528</span>

            LONG \u8BED\u6CD5\u683C\u5F0F\u793A\u4F8B<span class="token punctuation">:</span>(v3.2 \u65B0\u589E\u7684\u8BED\u6CD5\u683C\u5F0F)
                <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.2&quot;</span>
                <span class="token key atrule">services</span><span class="token punctuation">:</span>
                    <span class="token key atrule">web</span><span class="token punctuation">:</span>
                        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>alpine
                        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
                            <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
                        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
                            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> volume                  <span class="token comment"># mount \u7684\u7C7B\u578B, \u5FC5\u987B\u662F bind\u3001volume \u6216 tmpfs</span>
                                <span class="token key atrule">source</span><span class="token punctuation">:</span> mydata              <span class="token comment"># \u5BBF\u4E3B\u673A\u76EE\u5F55</span>
                                <span class="token key atrule">target</span><span class="token punctuation">:</span> /data               <span class="token comment"># \u5BB9\u5668\u76EE\u5F55</span>
                                <span class="token key atrule">volume</span><span class="token punctuation">:</span>                     <span class="token comment"># \u914D\u7F6E\u989D\u5916\u7684\u9009\u9879, \u5176 key \u5FC5\u987B\u548C type \u7684\u503C\u76F8\u540C</span>
                                    <span class="token key atrule">nocopy</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>                <span class="token comment"># volume \u989D\u5916\u7684\u9009\u9879, \u5728\u521B\u5EFA\u5377\u65F6\u7981\u7528\u4ECE\u5BB9\u5668\u590D\u5236\u6570\u636E</span>
                            <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind                    <span class="token comment"># volume \u6A21\u5F0F\u53EA\u6307\u5B9A\u5BB9\u5668\u8DEF\u5F84\u5373\u53EF, \u5BBF\u4E3B\u673A\u8DEF\u5F84\u968F\u673A\u751F\u6210; bind \u9700\u8981\u6307\u5B9A\u5BB9\u5668\u548C\u6570\u636E\u673A\u7684\u6620\u5C04\u8DEF\u5F84</span>
                                <span class="token key atrule">source</span><span class="token punctuation">:</span> ./static
                                <span class="token key atrule">target</span><span class="token punctuation">:</span> /opt/app/static
                                <span class="token key atrule">read_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>             <span class="token comment"># \u8BBE\u7F6E\u6587\u4EF6\u7CFB\u7EDF\u4E3A\u53EA\u8BFB\u6587\u4EF6\u7CFB\u7EDF</span>
                <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
                    <span class="token key atrule">mydata</span><span class="token punctuation">:</span>                                 <span class="token comment"># \u5B9A\u4E49\u5728 volume, \u53EF\u5728\u6240\u6709\u670D\u52A1\u4E2D\u8C03\u7528</span>

        restart               <span class="token comment"># \u5B9A\u4E49\u5BB9\u5668\u91CD\u542F\u7B56\u7565(\u5728\u4F7F\u7528 swarm \u90E8\u7F72\u65F6\u5C06\u5FFD\u7565\u8BE5\u9009\u9879, \u5728 swarm \u4F7F\u7528 restart_policy \u4EE3\u66FF restart)</span>
            no                    <span class="token comment"># \u7981\u6B62\u81EA\u52A8\u91CD\u542F\u5BB9\u5668(\u9ED8\u8BA4)</span>
            always                <span class="token comment"># \u65E0\u8BBA\u5982\u4F55\u5BB9\u5668\u90FD\u4F1A\u91CD\u542F</span>
            on<span class="token punctuation">-</span>failure            <span class="token comment"># \u5F53\u51FA\u73B0 on-failure \u62A5\u9519\u65F6, \u5BB9\u5668\u91CD\u65B0\u542F\u52A8</span>

        \u5176\u4ED6\u9009\u9879\uFF1A
            domainname<span class="token punctuation">,</span> hostname<span class="token punctuation">,</span> ipc<span class="token punctuation">,</span> mac_address<span class="token punctuation">,</span> privileged<span class="token punctuation">,</span> read_only<span class="token punctuation">,</span> shm_size<span class="token punctuation">,</span> stdin_open<span class="token punctuation">,</span> tty<span class="token punctuation">,</span> user<span class="token punctuation">,</span> working_dir
            \u4E0A\u9762\u8FD9\u4E9B\u9009\u9879\u90FD\u53EA\u63A5\u53D7\u5355\u4E2A\u503C\u548C docker run \u7684\u5BF9\u5E94\u53C2\u6570\u7C7B\u4F3C

        \u5BF9\u4E8E\u503C\u4E3A\u65F6\u95F4\u7684\u53EF\u63A5\u53D7\u7684\u503C\uFF1A
            2.5s
            10s
            1m30s
            2h32m
            5h34m56s

            <span class="token key atrule">\u65F6\u95F4\u5355\u4F4D</span><span class="token punctuation">:</span> us<span class="token punctuation">,</span> ms<span class="token punctuation">,</span> s<span class="token punctuation">,</span> m\uFF0C h

        \u5BF9\u4E8E\u503C\u4E3A\u5927\u5C0F\u7684\u53EF\u63A5\u53D7\u7684\u503C\uFF1A
            2b
            1024kb
            2048k
            300m
            1gb

            <span class="token key atrule">\u5355\u4F4D</span><span class="token punctuation">:</span> b<span class="token punctuation">,</span> k<span class="token punctuation">,</span> m<span class="token punctuation">,</span> g \u6216\u8005 kb<span class="token punctuation">,</span> mb<span class="token punctuation">,</span> gb





    networks          <span class="token comment"># \u5B9A\u4E49 networks \u4FE1\u606F</span>
        driver                <span class="token comment"># \u6307\u5B9A\u7F51\u7EDC\u6A21\u5F0F, \u5927\u591A\u6570\u60C5\u51B5\u4E0B, \u5B83 bridge \u4E8E\u5355\u4E2A\u4E3B\u673A\u548C overlay Swarm \u4E0A</span>
            bridge                <span class="token comment"># Docker \u9ED8\u8BA4\u4F7F\u7528 bridge \u8FDE\u63A5\u5355\u4E2A\u4E3B\u673A\u4E0A\u7684\u7F51\u7EDC</span>
            overlay               <span class="token comment"># overlay \u9A71\u52A8\u7A0B\u5E8F\u521B\u5EFA\u4E00\u4E2A\u8DE8\u591A\u4E2A\u8282\u70B9\u547D\u540D\u7684\u7F51\u7EDC</span>
            host                  <span class="token comment"># \u5171\u4EAB\u4E3B\u673A\u7F51\u7EDC\u540D\u79F0\u7A7A\u95F4(\u7B49\u540C\u4E8E docker run --net=host)</span>
            none                  <span class="token comment"># \u7B49\u540C\u4E8E docker run --net=none</span>

        driver_opts           <span class="token comment"># v3.2\u4EE5\u4E0A\u7248\u672C, \u4F20\u9012\u7ED9\u9A71\u52A8\u7A0B\u5E8F\u7684\u53C2\u6570, \u8FD9\u4E9B\u53C2\u6570\u53D6\u51B3\u4E8E\u9A71\u52A8\u7A0B\u5E8F</span>

        attachable            <span class="token comment"># driver \u4E3A overlay \u65F6\u4F7F\u7528, \u5982\u679C\u8BBE\u7F6E\u4E3A true \u5219\u9664\u4E86\u670D\u52A1\u4E4B\u5916\uFF0C\u72EC\u7ACB\u5BB9\u5668\u4E5F\u53EF\u4EE5\u9644\u52A0\u5230\u8BE5\u7F51\u7EDC; \u5982\u679C\u72EC\u7ACB\u5BB9\u5668\u8FDE\u63A5\u5230\u8BE5\u7F51\u7EDC\uFF0C\u5219\u5B83\u53EF\u4EE5\u4E0E\u5176\u4ED6 Docker \u5B88\u62A4\u8FDB\u7A0B\u8FDE\u63A5\u5230\u7684\u8BE5\u7F51\u7EDC\u7684\u670D\u52A1\u548C\u72EC\u7ACB\u5BB9\u5668\u8FDB\u884C\u901A\u4FE1</span>

        ipam                  <span class="token comment"># \u81EA\u5B9A\u4E49 IPAM \u914D\u7F6E. \u8FD9\u662F\u4E00\u4E2A\u5177\u6709\u591A\u4E2A\u5C5E\u6027\u7684\u5BF9\u8C61, \u6BCF\u4E2A\u5C5E\u6027\u90FD\u662F\u53EF\u9009\u7684</span>
            driver                <span class="token comment"># IPAM \u9A71\u52A8\u7A0B\u5E8F, bridge \u6216\u8005 default</span>
            config                <span class="token comment"># \u914D\u7F6E\u9879</span>
                subnet                <span class="token comment"># CIDR\u683C\u5F0F\u7684\u5B50\u7F51\uFF0C\u8868\u793A\u8BE5\u7F51\u7EDC\u7684\u7F51\u6BB5</span>

        external              <span class="token comment"># \u5916\u90E8\u7F51\u7EDC, \u5982\u679C\u8BBE\u7F6E\u4E3A true \u5219 docker-compose up \u4E0D\u4F1A\u5C1D\u8BD5\u521B\u5EFA\u5B83, \u5982\u679C\u5B83\u4E0D\u5B58\u5728\u5219\u5F15\u53D1\u9519\u8BEF</span>

        name                  <span class="token comment"># v3.5 \u4EE5\u4E0A\u7248\u672C, \u4E3A\u6B64\u7F51\u7EDC\u8BBE\u7F6E\u540D\u79F0</span>



\u6587\u4EF6\u683C\u5F0F\u793A\u4F8B\uFF1A
    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
    <span class="token key atrule">services</span><span class="token punctuation">:</span>

      <span class="token key atrule">redis</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>alpine
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token string">&quot;6379&quot;</span>
        <span class="token key atrule">networks</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> frontend
        <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
          <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
          <span class="token key atrule">update_config</span><span class="token punctuation">:</span>
            <span class="token key atrule">parallelism</span><span class="token punctuation">:</span> <span class="token number">2</span>
            <span class="token key atrule">delay</span><span class="token punctuation">:</span> 10s
          <span class="token key atrule">restart_policy</span><span class="token punctuation">:</span>
            <span class="token key atrule">condition</span><span class="token punctuation">:</span> on<span class="token punctuation">-</span>failure

      <span class="token key atrule">db</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres<span class="token punctuation">:</span><span class="token number">9.4</span>
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> db<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/var/lib/postgresql/data
        <span class="token key atrule">networks</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> backend
        <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
          <span class="token key atrule">placement</span><span class="token punctuation">:</span>
            <span class="token key atrule">constraints</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>node.role == manager<span class="token punctuation">]</span>
</code></pre></div><h3 id="compose\u4F7F\u7528" tabindex="-1">compose\u4F7F\u7528 <a class="header-anchor" href="#compose\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-Plain Text"><pre><code># \u521B\u5EFA\u76EE\u5F55
[root@operation ~]# mkdir composetest
[root@operation ~]# cd composetest/

# \u521B\u5EFA\u4E00\u4E2APython\u5E94\u7528\uFF0C \u4F7F\u7528Flask\uFF0C\u5C06\u6570\u503C\u8BB0\u5165Redis
[root@operation composetest]# cat app.py
import time

import redis
from flask import Flask


app = Flask(__name__)
cache = redis.Redis(host=&#39;redis&#39;, port=6379)


def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr(&#39;hits&#39;)
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)


@app.route(&#39;/&#39;)
def hello():
    count = get_hit_count()
    return &#39;Hello World! I have been seen {} times.\\n&#39;.format(count)

if __name__ == &quot;__main__&quot;:
    app.run(host=&quot;0.0.0.0&quot;, debug=True)


# \u521B\u5EFArequirements.txt\u6587\u4EF6\uFF0C\u91CC\u9762\u662F\u9700\u8981\u5B89\u88C5\u7684Python\u5305
[root@operation composetest]# cat requirements.txt
flask
redis

# \u521B\u5EFADockerfile\u6587\u4EF6
# \u5728\u6B64\u6B65\u9AA4\u4E2D\uFF0C\u60A8\u5C06\u7F16\u5199\u4E00\u4E2A\u6784\u5EFADocker\u955C\u50CF\u7684Dockerfile\u3002\u8BE5\u56FE\u50CF\u5305\u542BPython\u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u6240\u6709\u4F9D\u8D56\u9879\uFF0C\u5305\u62ECPython\u672C\u8EAB\u3002
[root@operation composetest]# cat Dockerfile
FROM python:3.6-alpine
ADD . /code
WORKDIR /code
RUN pip install -r requirements.txt
CMD [&quot;python&quot;, &quot;app.py&quot;]

# \u8FD9\u544A\u8BC9Docker\uFF1A
    \u4ECEPython 3.6\u6620\u50CF\u5F00\u59CB\u6784\u5EFA\u6620\u50CF\u3002
    \u5C06\u5F53\u524D\u76EE\u5F55\u6DFB\u52A0.\u5230/code\u6620\u50CF\u4E2D\u7684\u8DEF\u5F84\u4E2D\u3002
    \u5C06\u5DE5\u4F5C\u76EE\u5F55\u8BBE\u7F6E\u4E3A/code\u3002
    \u5B89\u88C5Python\u4F9D\u8D56\u9879\u3002
    \u5C06\u5BB9\u5668\u7684\u9ED8\u8BA4\u547D\u4EE4\u8BBE\u7F6E\u4E3Apython app.py\u3002

# \u521B\u5EFAdocker-compose.yml\u6587\u4EF6
[root@operation composetest]# cat docker-compose.yml
version: &#39;3&#39;
services:
  web:
    build: .
    ports:
     - &quot;5000:5000&quot;
    volumes:
     - .:/code
  redis:
    image: &quot;redis:alpine&quot;

\u6B64Compose\u6587\u4EF6\u5B9A\u4E49\u4E86\u4E24\u4E2A\u670D\u52A1\uFF0Cweb\u548Credis\u3002\u8BE5web\u670D\u52A1\uFF1A
\u4F7F\u7528\u4ECEDockerfile\u5F53\u524D\u76EE\u5F55\u4E2D\u6784\u5EFA\u7684\u56FE\u50CF\u3002
\u5C06\u5BB9\u5668\u4E0A\u7684\u516C\u5F00\u7AEF\u53E35000\u8F6C\u53D1\u5230\u4E3B\u673A\u4E0A\u7684\u7AEF\u53E35000\u3002\u6211\u4EEC\u4F7F\u7528Flask Web\u670D\u52A1\u5668\u7684\u9ED8\u8BA4\u7AEF\u53E35000\u3002
\u8BE5redis\u670D\u52A1\u4F7F\u7528\u4ECEDocker Hub\u6CE8\u518C\u8868\u4E2D\u63D0\u53D6\u7684\u516C\u5171 Redis\u6620\u50CF\u3002
</code></pre></div><h4 id="\u6784\u5EFA\u5E76\u8FD0\u884C" tabindex="-1">\u6784\u5EFA\u5E76\u8FD0\u884C <a class="header-anchor" href="#\u6784\u5EFA\u5E76\u8FD0\u884C" aria-hidden="true">#</a></h4><div class="language-Plain Text"><pre><code>docker-compose up
</code></pre></div><h4 id="\u6D4B\u8BD5" tabindex="-1">\u6D4B\u8BD5 <a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a></h4><div class="language-Plain Text"><pre><code>\u5728\u6D4F\u89C8\u5668\u8BBF\u95EEIP:5000 
</code></pre></div>`,79),p=[o];function c(l,r,i,u,k,m){return a(),s("div",null,p)}var _=n(t,[["render",c]]);export{h as __pageData,_ as default};
