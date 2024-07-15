export type InterpolateData = Record<string, string | number>;

export function interpolate(text: string, data: InterpolateData) {
  if (!text) {
    return text;
  }

  return text.replace(
    /(.?)\[([^\]\[]+)\](.?)/g,
    (_source, before, name, after) => {
      // escape name: [[name]] -> [name]
      if (before === "[" && after === "]") {
        return `[${name}]`;
      }

      // substitution: [name] -> value
      return `${before || ""}${data?.[name]?.toString() || ""}${after || ""}`;
    }
  );
}
