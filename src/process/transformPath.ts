import getSVGMatrix from "./getSVGMatrix";
import projection2d from "./projection2d";
import defaultOptions from "../options/options";
import type {
  AbsoluteArray,
  AbsoluteSegment,
  CSegment,
  LSegment,
  PathArray,
  TransformObjectValues,
} from "../types";
import type { TransformObject } from "../interface";
import iterate from "./iterate";
import parsePathString from "../parser/parsePathString";
import absolutizeSegment from "./absolutizeSegment";
import arcToCubic from "./arcToCubic";

/**
 * Apply a 2D / 3D transformation to a `pathArray` instance.
 *
 * Since *SVGElement* doesn't support 3D transformation, this function
 * creates a 2D projection of the <path> element.
 *
 * @param path the `pathArray` to apply transformation
 * @param transform the transform functions `Object`
 * @returns the resulted `pathArray`
 */
const transformPath = (
  pathInput: PathArray | string,
  transform?: Partial<TransformObject>,
) => {
  // last x and y transformed values
  let x = 0;
  let y = 0;
  // new x and y transformed
  let lx = 0;
  let ly = 0;
  // segment params iteration index and length
  let j = 0;
  let jj = 0;
  let pathCommand = "M";
  // transform uses it's own set of params
  const path = parsePathString(pathInput);
  const transformProps = transform && Object.keys(transform);

  // when used as a static method, invalidate somehow
  if (!transform || (transformProps && !transformProps.length)) {
    return path.slice(0) as typeof path;
  }

  // transform origin is extremely important
  if (!transform.origin) {
    Object.assign(transform, { origin: defaultOptions.origin });
  }
  const origin = transform.origin as [number, number, number];
  const matrixInstance = getSVGMatrix(transform as TransformObjectValues);

  if (matrixInstance.isIdentity) return path.slice(0) as typeof path;

  return iterate<AbsoluteArray>(path, (seg, index, lastX, lastY) => {
    [pathCommand] = seg;
    const absCommand = pathCommand.toUpperCase();
    const isRelative = absCommand !== pathCommand;
    const absoluteSegment = isRelative
      ? absolutizeSegment(seg, index, lastX, lastY)
      : (seg.slice(0) as AbsoluteSegment);

    let result = absCommand === "A"
      // ? segmentToCubic(absoluteSegment, transformParams)
      ? (["C" as string | number].concat(
        arcToCubic(
          lastX,
          lastY,
          absoluteSegment[1] as number,
          absoluteSegment[2] as number,
          absoluteSegment[3] as number,
          absoluteSegment[4] as number,
          absoluteSegment[5] as number,
          absoluteSegment[6] as number,
          absoluteSegment[7] as number,
        ),
      ) as CSegment)
      : absCommand === "V"
      ? (["L", lastX, absoluteSegment[1]] as LSegment)
      : absCommand === "H"
      ? (["L", absoluteSegment[1], lastY] as LSegment)
      : absoluteSegment;

    // update pathCommand
    pathCommand = result[0];
    const isLongArc = pathCommand === "C" && result.length > 7;
    const tempSegment =
      (isLongArc ? result.slice(0, 7) : result.slice(0)) as AbsoluteSegment;

    if (isLongArc) {
      path.splice(
        index + 1,
        0,
        ["C" as typeof pathCommand | number].concat(
          result.slice(7),
        ) as CSegment,
      );
      result = tempSegment as CSegment;
    }

    if (pathCommand === "L") {
      [lx, ly] = projection2d(matrixInstance, [
        (result as LSegment)[1],
        (result as LSegment)[2],
      ], origin);

      /* istanbul ignore else @preserve */
      if (x !== lx && y !== ly) {
        result = ["L", lx, ly];
      } else if (y === ly) {
        result = ["H", lx];
      } else if (x === lx) {
        result = ["V", ly];
      }
    } else {
      for (j = 1, jj = result.length; j < jj; j += 2) {
        [lx, ly] = projection2d(
          matrixInstance,
          [+result[j], +result[j + 1]],
          origin,
        );
        result[j] = lx;
        result[j + 1] = ly;
      }
    }
    // now update x and y
    x = lx;
    y = ly;

    return result;
  });
};

export default transformPath;
