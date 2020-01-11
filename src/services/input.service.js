const getArrowKeyPressed = (event) => {
    switch (event.keyCode) {
        case 37: return 'left';
        case 39: return 'right';
        case 38: return 'top';
        case 40: return 'bottom';
        default: return event.keyCode;
    }
};

const activatePrevItemOnList = (list) => {
    const indexActive = list.findIndex(item => item.active);
    const newIndexActive = indexActive - 1 >= 0 ? indexActive - 1 : 0;
    return list.map((item, index) => ({
        ...item,
        active: index === newIndexActive
    }));
};

const activateNextItemOnList = (list) => {
    const indexActive = list.findIndex(item => item.active);
    const listLenght = list.length - 1;
    const newIndexActive = indexActive + 1 >= listLenght ? listLenght : indexActive + 1;
    return list.map((item, index) => ({
        ...item,
        active: index === newIndexActive
    }));
};

// const goLeft = () => {
//     const col = active[1];
//     const updated = col - 1 >= 0 ? col - 1 : 0;
//     return [active[0], updated];
// };
//
// const goRight = () => {
//     const row = active[0];
//     const col = active[1];
//     const colLength = matrix[row].length - 1;
//     const updatedCol = col + 1 > colLength ? colLength : col + 1;
//     return [active[0], updatedCol];
// };
//
// const goTop = () => {
//     const updated = active[0] - 1 >= 0 ? active[0] - 1 : 0;
//     return[updated, active[1]];
// };
//
// const goBottom = () => {
//     const row = active[0];
//     const col = active[1];
//     const rowLength = matrix[row].length - 1;
//     const updated = active[0] + 1 > rowLength ? rowLength : active[0] + 1;
//     return[updated, col];
// };

export {
    getArrowKeyPressed,
    activatePrevItemOnList,
    activateNextItemOnList
};
