// ref: https://echarts.apache.org/en/api.html#events
export const MOUSE_EVENT_NAMES = [
    'click',
    'dblclick',
    'mousedown',
    'mousemove',
    'mouseover',
    'mouseout',
    'globalout',
    'contextmenu',
];
export const INTERACTION_EVENT_NAMES = [
    'highlight',
    'downplay',
    'selectchanged',
    'legendselectchanged',
    'legendselected',
    'legendunselected',
    'legendinverseselect',
    'legendscroll',
    'datazoom',
    'datarangeselected',
    'timelinechanged',
    'timelineplaychanged',
    'restore',
    'dataviewchanged',
    'magictypechanged',
    'geoselectchanged',
    'geoselected',
    'geounselected',
    'axisareaselected',
    'brush',
    'brushend',
    'brushselected',
    'globalcursortaken',
    'rendered',
    'finished',
];
export const EVENT_NAMES = [...MOUSE_EVENT_NAMES, ...INTERACTION_EVENT_NAMES];
