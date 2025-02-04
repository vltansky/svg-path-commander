export { default as CSSMatrix } from "@thednp/dommatrix";
// export type { PathArray, PointTuple, TransformObjectValues } from "./types";
// export type { Options, TransformEntries, TransformObject } from "./interface";
// export * from "./types";
// export * from "./interface";

import * as arcTools from "./math/arcTools";
import * as bezierTools from "./math/bezier";
import * as cubicTools from "./math/cubicTools";
import * as lineTools from "./math/lineTools";
import * as quadTools from "./math/quadTools";
import * as polygonTools from "./math/polygonTools";
export {
  arcTools,
  bezierTools,
  cubicTools,
  lineTools,
  polygonTools,
  quadTools,
};

// export * from "./math/arcTools";
// export * from "./math/bezier";
// export * from "./math/cubicTools";
// export * from "./math/lineTools";
// export * from "./math/quadTools";
// export * from "./math/polygonTools";

export { default as pathToAbsolute } from "./convert/pathToAbsolute";
export { default as pathToRelative } from "./convert/pathToRelative";
export { default as pathToCurve } from "./convert/pathToCurve";
export { default as pathToString } from "./convert/pathToString";

export { default as distanceSquareRoot } from "./math/distanceSquareRoot";
export { default as midPoint } from "./math/midPoint";
export { default as rotateVector } from "./math/rotateVector";
export { default as roundTo } from "./math/roundTo";

export { default as parsePathString } from "./parser/parsePathString";
export { default as finalizeSegment } from "./parser/finalizeSegment";
export { default as invalidPathValue } from "./parser/invalidPathValue";
export { default as isArcCommand } from "./parser/isArcCommand";
export { default as isDigit } from "./parser/isDigit";
export { default as isDigitStart } from "./parser/isDigitStart";
export { default as isMoveCommand } from "./parser/isMoveCommand";
export { default as isPathCommand } from "./parser/isPathCommand";
export { default as isSpace } from "./parser/isSpace";
export { default as paramsCount } from "./parser/paramsCount";
export { default as paramsParser } from "./parser/paramsParser";
export { default as pathParser } from "./parser/pathParser";
export { default as scanFlag } from "./parser/scanFlag";
export { default as scanParam } from "./parser/scanParam";
export { default as scanSegment } from "./parser/scanSegment";
export { default as skipSpaces } from "./parser/skipSpaces";

export { default as distanceEpsilon } from "./util/distanceEpsilon";
export { default as getClosestPoint } from "./util/getClosestPoint";
export { default as getDrawDirection } from "./util/getDrawDirection";
export { default as getPathArea } from "./util/getPathArea";
export { default as getPathBBox } from "./util/getPathBBox";
export { default as getPointAtLength } from "./util/getPointAtLength";
export { default as getPropertiesAtLength } from "./util/getPropertiesAtLength";
export { default as getPropertiesAtPoint } from "./util/getPropertiesAtPoint";
export { default as getSegmentAtLength } from "./util/getSegmentAtLength";
export { default as getSegmentOfPoint } from "./util/getSegmentOfPoint";
export { default as getTotalLength } from "./util/getTotalLength";

export { default as isAbsoluteArray } from "./util/isAbsoluteArray";
export { default as isCurveArray } from "./util/isCurveArray";
export { default as isNormalizedArray } from "./util/isNormalizedArray";
export { default as isPathArray } from "./util/isPathArray";
export { default as isPointInStroke } from "./util/isPointInStroke";
export { default as isRelativeArray } from "./util/isRelativeArray";
export { default as isValidPath } from "./util/isValidPath";
export { default as shapeParams } from "./util/shapeParams";
export { default as shapeToPath } from "./util/shapeToPath";
export { default as shapeToPathArray } from "./util/shapeToPathArray";

export { default as absolutizeSegment } from "./process/absolutizeSegment";
export { default as arcToCubic } from "./process/arcToCubic";
export { default as getSVGMatrix } from "./process/getSVGMatrix";
export { default as iterate } from "./process/iterate";
export { default as lineToCubic } from "./process/lineToCubic";
export { default as normalizePath } from "./process/normalizePath";
export { default as normalizeSegment } from "./process/normalizeSegment";
export { default as optimizePath } from "./process/optimizePath";
export { default as projection2d } from "./process/projection2d";
export { default as quadToCubic } from "./process/quadToCubic";
export { default as relativizeSegment } from "./process/relativizeSegment";
export { default as reverseCurve } from "./process/reverseCurve";
export { default as reversePath } from "./process/reversePath";
export { default as roundPath } from "./process/roundPath";
export { default as roundSegment } from "./process/roundSegment";
export { default as segmentToCubic } from "./process/segmentToCubic";
export { default as shortenSegment } from "./process/shortenSegment";
export { default as splitCubic } from "./process/splitCubic";
export { default as splitPath } from "./process/splitPath";
export { default as transformPath } from "./process/transformPath";
