class Fn {
    constructor( obj ){
        this.param = {};
        Object.assign( this.param,obj);
        this.param.num = this.param.num || 4;
        this.init();
    }
    *ye( arr ){
        let _this = this;
        for ( let i=0; i< arr.length; i++ ){
            yield arr[i](_this);
        }
    }
    init (  ) {
        this.el = document.querySelector( this.param.el );
        this.width = this.el.width;
        this.height = this.el.height;
        this.font = this.getChinese( this.param.num );
        this.ctx = this.el.getContext('2d');
        this.clearnFont();
        this.ctxFont();
    }
    randomPosition( _this ) { // 随机坐标
        let width = _this.width-30;
        let height = _this.height-30;
        let w = width - 30;
        let h = height - 30;
        let x = parseInt( Math.random() * w + 30 );
        let y = parseInt( Math.random() * h + 30 );
        if ( 'p' in _this && _this.p.length ) {
            for ( key of _this.p ) {
                if ( _this.p[key].x == x ) {
                    x = parseInt( Math.random() * w + 30 );
                }
                if ( _this.p[key].y == y ) {
                    y = parseInt( Math.random() * w + 30 );
                }
            }
        }
        return {x,y};
    }
    getPosition() { // 得到坐标
        let _this = this;
        let ch = [];
        let arr = [];
        for ( let i=0; i< _this.param.num; i++ ) {
            arr.push( _this.randomPosition );
        }
        for ( let x of _this.ye(arr) ) {
            ch.push( x );
        }
        return ch;
    }
    clearnFont() { // 清楚画布
        let _this = this;
        _this.ctx.fillRect(0,0,_this.width,_this.height );
    }
    ctxFont() { // 画字
        let _this = this;
        let p = _this.getPosition();
        _this.p = p;
        let ctx = _this.ctx;
        ctx.fillRect(0,0,_this.width,_this.height );
        var gradient=ctx.createLinearGradient(0,0,_this.width,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","red");
        ctx.strokeStyle=gradient;
        ctx.font="30px Verdana";
        for( let i = 0;i < _this.param.num ; i++ ){
            ctx.strokeText( _this.font[i], p[i].x, p[i].y )
        }
    }
    encodeUnicode(str) {  
        var res = [];  
        for ( var i=0; i<str.length; i++ ) {  
        res[i] = ( "00" + str.charCodeAt(i).toString(16) ).slice(-4);  
        }  
        return "\\u" + res.join("\\u");  
    }  
    decodeUnicode(str) {  
        str = str.replace(/\\/g, "%");  
        return unescape(str);  
    } 
    getChinese( num ){ // 随机得到n个字的汉字
        let _this = this;
        let ch = [];
        let arr = [];
        for ( let i=0;i<num; i++ ) {
            arr.push( _this.randomChi);
        }
        for ( let x of _this.ye(arr) ) {
            ch.push( _this.decodeUnicode(x) );
        }
        return ch;
    }
    randomChi(){ // 随机生成汉字
        return `\\u${Math.round(Math.random() * 20901 + 19968 ).toString(16)}`; 
    }
    getFonts() {
        return this.font;
    }
    getPositions() {
        return this.p;
    }
}
function getCode( obj ) {
    let fn =  new Fn( obj );
    return fn;
    // fn.getFonts().getPositions()
}
export default getCode;