modified files:
- 148-es2015.6349ec12b86abb7a473d.js
- index.html
- cordova runtime

change to 148-es2015.6349ec12b86abb7a473d.js:
line with `if(*mobileNo*` -> `if(false&&*mobileNo*`
line with `if(*isNeedResetPwd*` -> `if(false&&*isNeedResetPwd*`
line with `if(*\"UNIQUE_IDENTIFIER\"*,*)`(first right pair) -> `if(*\"UNIQUE_IDENTIFIER\"*,false&&*)`
`this.the_agreenment=*` -> `this.the_agreenment=1`