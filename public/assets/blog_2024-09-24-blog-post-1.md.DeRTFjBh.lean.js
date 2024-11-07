import{_ as i,c as a,a0 as t,o as n}from"./chunks/framework.Dul-M7sa.js";const F=JSON.parse('{"title":"Git同步问题","description":"","frontmatter":{"title":"Git同步问题","date":"2024-09-14T00:00:00.000Z","permalink":"/posts/2024/09-14/blog-post-0/","tags":["MVIG","Git","Solved"]},"headers":[],"relativePath":"blog/2024-09-24-blog-post-1.md","filePath":"blog/2024-09-24-blog-post-1.md"}'),e={name:"blog/2024-09-24-blog-post-1.md"};function l(p,s,h,k,d,o){return n(),a("div",null,s[0]||(s[0]=[t(`<p>记录标注系统git到github上出现的问题：本地仓库与远程仓库不同步，希望在本地保留文件A，但并不通过<code>git push</code>上传到github.</p><h1 id="solved" tabindex="-1">Solved <a class="header-anchor" href="#solved" aria-label="Permalink to &quot;Solved&quot;">​</a></h1><p>发现问题出现在</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">longfei@ubun:/data2/longfei/partnet_anno_system_concept1$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cached</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md.bak</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;README.md.bak&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">longfei@ubun:/data2/longfei/partnet_anno_system_concept1$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Stop tracking README.md.bak&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[master 17f9e34] Stop tracking README.md.bak</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changed,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 31</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deletions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> delete</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> README.md.bak</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">longfei@ubun:/data2/longfei/partnet_anno_system_concept1$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div>`,4)]))}const g=i(e,[["render",l]]);export{F as __pageData,g as default};
