define(["libs/util/Rand","config/BaseConfig",],function(b,a){function c(e){var d=this;var f={bartURI:a.baseURI+"/bart/",};this.request=function(g){g.url=f.bartURI+g.url;$.ajax(g)};$.extend(f,e);return d}return c});