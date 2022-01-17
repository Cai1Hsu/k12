#### modified files:
- 148-es2015.6349ec12b86abb7a473d.js
- index.html
- cordova runtime

#### change to 148-es2015.6349ec12b86abb7a473d.js:
- line with `if(*mobileNo*` -> `if(false&&*mobileNo*`
- line with `if(*isNeedResetPwd*` -> `if(false&&*isNeedResetPwd*`
- line with `if(*\"UNIQUE_IDENTIFIER\"*,*)`(first right pair) -> `if(*\"UNIQUE_IDENTIFIER\"*,false&&*)`
- `this.the_agreenment=*` -> `this.the_agreenment=1`

#### Why dont use a jsdelivr as cdn?
在[0bd03ec](https://github.com/Cai1Hsu/k12/commit/0bd03ec5c4ea9542980b09ee1e90260522beb9ac)提交中我添加了 jsdelivr 作为 cdn 加速js。但在本地加载main-es2015.3383dbbb3f42ae288140.js(2.77M)的10次测试中，jsdelivr平均用时2.1s，thes.eu.org平均用时1.9s，差距不大。如果把一部分文件分流到cdn异步加载，应该会有部分提升，但jsdelivr不稳定。有一次测试中jsdelivr的速度在100kb/s以下，可能会严重阻碍用户体验。所以我在[ad27d41](https://github.com/Cai1Hsu/k12/commit/ad27d41a20eb61af2c0775f0353ffb2530015839)中删除了它。
