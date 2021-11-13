declare namespace _default {
    export { CSS3Matrix as CSSMatrix };
    export { parsePathString };
    export { isPathArray };
    export { isCurveArray };
    export { isAbsoluteArray };
    export { isRelativeArray };
    export { isNormalizedArray };
    export { pathToAbsolute };
    export { pathToRelative };
    export { pathToCurve };
    export { pathToString };
    export { getDrawDirection };
    export { getPathArea };
    export { getPathBBox };
    export { getPathLength };
    export { getPointAtLength };
    export { clonePath };
    export { splitPath };
    export { roundPath };
    export { optimizePath };
    export { reverseCurve };
    export { reversePath };
    export { normalizePath };
    export { transformPath };
    export { getSVGMatrix };
    export { SVGPCO as options };
}
export default _default;
import CSS3Matrix from "./DOMMatrix.js";
import parsePathString from "../process/parsePathString.js";
import isPathArray from "./isPathArray.js";
import isCurveArray from "./isCurveArray.js";
import isAbsoluteArray from "./isAbsoluteArray.js";
import isRelativeArray from "./isRelativeArray.js";
import isNormalizedArray from "./isNormalizedArray.js";
import pathToAbsolute from "../convert/pathToAbsolute.js";
import pathToRelative from "../convert/pathToRelative.js";
import pathToCurve from "../convert/pathToCurve.js";
import pathToString from "../convert/pathToString.js";
import getDrawDirection from "./getDrawDirection.js";
import getPathArea from "./getPathArea.js";
import getPathBBox from "./getPathBBox.js";
import getPathLength from "./getPathLength.js";
import getPointAtLength from "./getPointAtLength.js";
import clonePath from "../process/clonePath.js";
import splitPath from "../process/splitPath.js";
import roundPath from "../process/roundPath.js";
import optimizePath from "../process/optimizePath.js";
import reverseCurve from "../process/reverseCurve.js";
import reversePath from "../process/reversePath.js";
import normalizePath from "../process/normalizePath.js";
import transformPath from "../process/transformPath.js";
import getSVGMatrix from "./getSVGMatrix.js";
import SVGPCO from "../options/options.js";
