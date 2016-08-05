export const translate = (x,y) => {
    const t=`translate3d(${x}${typeof x == 'number' ? 'px' : '' },${y}${typeof y == 'number' ? 'px' : '' },0px)`
    return {
        MozTransform        : t,
        WebkitTransform     : t,
        transform           : t,
    }
}
