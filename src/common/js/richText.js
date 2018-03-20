class Fn {
    constructor( obj ){
        this.param = Object.assign( obj );
        this.init();
    }
    init(){
        let _this = this;
        _this.el = document.querySelector( _this.param.el );
        this.el.contentEditable = true;
    }
}
function richText( obj ) {
    let fn =  new Fn( obj );
    return fn;
}
export default richText;