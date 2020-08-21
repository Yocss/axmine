/**
 * @axmine/helper v1.0.3
 * (c) 2019-2020 yocss https://github.com/yocss/axmine.git
 * License: MIT
 * Released on: Aug 21, 2020
 */

'use strict';

// format date
function formatDate(sec, format) {
    if (format === void 0) { format = 'y-m-d h:i'; }
    var d = new Date(sec * 1000);
    function expando(n) { return n < 10 ? '0' + n : n.toString(); }
    return format.replace(/\w/g, function (word) {
        var w = word.toLowerCase();
        return {
            y: d.getFullYear(),
            m: expando(d.getMonth() + 1),
            d: expando(d.getDate()),
            h: expando(d.getHours()),
            i: expando(d.getMinutes()),
            s: expando(d.getSeconds()),
            w: ['天', '一', '二', '三', '四', '五', '六'][d.getDay()]
        }[w] || '';
    });
}

// import { version } from '../package.json';
function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLocaleLowerCase();
}

var Type;
(function (Type) {
    Type["localStorage"] = "localStorage";
    Type["sessionStorage"] = "sessionStorage";
    Type["cookie"] = "cookie";
})(Type || (Type = {}));
/**
 * store data
 */
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.prototype.set = function (key, value, options) {
        if (options === void 0) { options = {}; }
        var option = Object.assign({ expireDays: 7, type: Type.localStorage }, options);
        var type = option.type;
        var expireDays = option.expireDays;
        return type === 'cookie' ? this.setCookie(key, value, expireDays) : this.setStorage(key, value, expireDays, type);
    };
    Store.prototype.get = function (key, type) {
        if (type === void 0) { type = Type.localStorage; }
        return type === 'cookie' ? this.getCookie(key) : this.getStorage(key, type);
    };
    Store.prototype.remove = function (key, type) {
        if (type === void 0) { type = Type.localStorage; }
        return type === 'cookie' ? this.removeCookie(key) : this.removeStorage(key, type);
    };
    Store.prototype.setStorage = function (key, value, expireDays, type) {
        if (expireDays === void 0) { expireDays = 7; }
        if (type === void 0) { type = Type.localStorage; }
        var bool = window && window[type] ? true : false;
        if (bool) {
            var t = expireDays > 0 ? (new Date().getTime()) * 1 + (expireDays * 86400000) : 0;
            var val = JSON.stringify({ v: value, t: t });
            window[type].setItem(key, val);
            bool = this.getStorage(key) === value;
        }
        return bool;
    };
    Store.prototype.getStorage = function (key, type) {
        if (type === void 0) { type = Type.localStorage; }
        var res = '';
        if (window && window[type]) {
            var v = window[type].getItem(key) || "{\"v\":'',\"t\":0}";
            var obj = JSON.parse(v);
            var now = new Date().getTime();
            res = obj.v;
            if (type === 'localStorage' && obj.t > 0 && now > obj.t) {
                res = '';
                this.removeStorage(key);
            }
        }
        return res;
    };
    Store.prototype.removeStorage = function (key, type) {
        if (type === void 0) { type = Type.localStorage; }
        var bool = window && window[type] ? true : false;
        if (bool) {
            window[type].removeItem(key);
            bool = this.getStorage(key) === '';
        }
        return bool;
    };
    Store.prototype.setCookie = function (key, value, expireDays) {
        if (expireDays === void 0) { expireDays = 7; }
        var bool = window && window.navigator.cookieEnabled;
        // if (!bool) { throw new Error('当前环境不支持 cookie 或 cookie 未启用') }
        if (bool) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expireDays);
            var expires = expireDays ? ";expires=" + exdate.toUTCString() : '';
            document.cookie = key + "=" + escape(value) + expires;
            bool = this.getCookie(key) === value;
        }
        return bool;
    };
    Store.prototype.getCookie = function (key) {
        var bool = window && window.navigator.cookieEnabled;
        // if (!bool) { throw new Error('当前环境不支持 cookie 或 cookie 未启用') }
        var res = '';
        if (bool) {
            if (document.cookie.length > 0) {
                var start = document.cookie.indexOf(key + '=');
                if (start >= 0) {
                    start = start + key.length + 1;
                    var end = document.cookie.indexOf(';', start);
                    if (end === -1)
                        end = document.cookie.length;
                    res = unescape(document.cookie.substring(start, end));
                }
            }
        }
        return res;
    };
    Store.prototype.removeCookie = function (key) {
        var bool = window && window.navigator.cookieEnabled;
        // if (!bool) { throw new Error('当前环境不支持 cookie 或 cookie 未启用') }
        if (bool) {
            bool = this.getCookie(key) ? true : false;
            if (bool) {
                this.setCookie(key, '', -1);
            }
        }
        return bool;
    };
    return Store;
}());

// time format
var index = { formatDate: formatDate, getType: getType, store: new Store() };

module.exports = index;
